"use client";

import { useState, useEffect, useRef } from "react";
import Script from "next/script";

// Basic email validation
function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Phone validation - accepts various formats, requires at least 10 digits
function isValidPhone(phone: string): boolean {
  const digitsOnly = phone.replace(/\D/g, "");
  return digitsOnly.length >= 10;
}

declare global {
  interface Window {
    turnstile: {
      render: (container: string | HTMLElement, options: {
        sitekey: string;
        callback: (token: string) => void;
        "expired-callback"?: () => void;
        "error-callback"?: () => void;
        theme?: "light" | "dark" | "auto";
        appearance?: "always" | "execute" | "interaction-only";
        size?: "normal" | "compact" | "invisible";
      }) => string;
      reset: (widgetId: string) => void;
    };
  }
}

export function WaitlistForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [turnstileToken, setTurnstileToken] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [turnstileLoaded, setTurnstileLoaded] = useState(false);
  const turnstileRef = useRef<HTMLDivElement>(null);
  const widgetIdRef = useRef<string | null>(null);

  const hasValidEmail = email.trim() !== "" && isValidEmail(email);
  const hasValidPhone = phone.trim() !== "" && isValidPhone(phone);
  const hasValidContact = hasValidEmail || hasValidPhone;
  const hasRequiredFields = firstName.trim() !== "" && lastName.trim() !== "" && hasValidContact && turnstileToken !== "";

  // Check if email is attempted but invalid
  const emailAttempted = email.trim() !== "" && !isValidEmail(email);
  // Check if phone is attempted but invalid
  const phoneAttempted = phone.trim() !== "" && !isValidPhone(phone);

  useEffect(() => {
    if (turnstileLoaded && turnstileRef.current && !widgetIdRef.current) {
      widgetIdRef.current = window.turnstile.render(turnstileRef.current, {
        sitekey: process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY!,
        callback: (token: string) => setTurnstileToken(token),
        "expired-callback": () => setTurnstileToken(""),
        theme: "dark",
        appearance: "interaction-only",
      });
    }
  }, [turnstileLoaded]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!hasRequiredFields) return;

    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName: firstName.trim(),
          lastName: lastName.trim(),
          email: hasValidEmail ? email.trim() : null,
          phone: hasValidPhone ? phone.trim() : null,
          turnstileToken,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus("success");
        setFirstName("");
        setLastName("");
        setEmail("");
        setPhone("");
        setTurnstileToken("");
      } else {
        setStatus("error");
        setErrorMessage(data.message || "Something went wrong. Please try again.");
        // Reset turnstile on error
        if (widgetIdRef.current) {
          window.turnstile.reset(widgetIdRef.current);
          setTurnstileToken("");
        }
      }
    } catch {
      setStatus("error");
      setErrorMessage("Something went wrong. Please try again.");
      // Reset turnstile on error
      if (widgetIdRef.current) {
        window.turnstile.reset(widgetIdRef.current);
        setTurnstileToken("");
      }
    }
  };

  if (status === "success") {
    return (
      <div className="text-center py-8">
        <p className="text-white text-xl mb-2">You're on the list!</p>
        <p className="text-white/70">We look forward to talking soon.</p>
      </div>
    );
  }

  return (
    <>
      <Script
        src="https://challenges.cloudflare.com/turnstile/v0/api.js"
        onLoad={() => setTurnstileLoaded(true)}
      />
      <h2 className="text-xl font-medium text-white mb-5">Join the Waitlist</h2>
      <form onSubmit={handleSubmit} className="space-y-3">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="firstName" className="sr-only">First name</label>
            <input
              type="text"
              id="firstName"
              placeholder="First name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-white/40 focus:bg-white/15 transition-colors"
            />
          </div>
          <div>
            <label htmlFor="lastName" className="sr-only">Last name</label>
            <input
              type="text"
              id="lastName"
              placeholder="Last name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-white/40 focus:bg-white/15 transition-colors"
            />
          </div>
        </div>

        <div>
          <label htmlFor="email" className="sr-only">Email</label>
          <input
            type="email"
            id="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={`w-full px-4 py-3 rounded-lg bg-white/10 border text-white placeholder-white/50 focus:outline-none focus:bg-white/15 transition-colors ${
              emailAttempted ? "border-red-300/50 focus:border-red-300/70" : "border-white/20 focus:border-white/40"
            }`}
          />
          <p className={`text-red-300/80 text-xs mt-0.5 h-0 overflow-visible ${emailAttempted ? "opacity-100" : "opacity-0"}`}>
            Please enter a valid email
          </p>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex-1 h-px bg-white/20"></div>
          <span className="text-white/50 text-sm">and/or</span>
          <div className="flex-1 h-px bg-white/20"></div>
        </div>

        <div>
          <label htmlFor="phone" className="sr-only">Phone number</label>
          <input
            type="tel"
            id="phone"
            placeholder="Phone number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className={`w-full px-4 py-3 rounded-lg bg-white/10 border text-white placeholder-white/50 focus:outline-none focus:bg-white/15 transition-colors ${
              phoneAttempted ? "border-red-300/50 focus:border-red-300/70" : "border-white/20 focus:border-white/40"
            }`}
          />
          <p className={`text-red-300/80 text-xs mt-1 h-4 ${phoneAttempted ? "opacity-100" : "opacity-0"}`}>
            Please enter a valid phone number
          </p>
        </div>

        <div>
          {status === "error" && (
            <p className="text-red-300 text-sm">{errorMessage}</p>
          )}

          {/* Turnstile - invisible unless interaction needed */}
          <div ref={turnstileRef} className="flex justify-center"></div>

          <button
            type="submit"
            disabled={status === "loading" || !hasRequiredFields}
            className="w-full py-3 px-6 rounded-full bg-white/20 hover:bg-white/30 border border-white/30 text-white font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-white/20"
          >
            {status === "loading" ? "Joining..." : "Join waitlist"}
          </button>
        </div>
      </form>
    </>
  );
}
