"use client";

import { useEffect } from "react";
import Script from "next/script";

export function HubSpotForm() {
  useEffect(() => {
    const checkAndLoadForm = () => {
      const formFrame = document.querySelector('.hs-form-frame');
      if (formFrame && (window as any).hbspt) {
        // HubSpot will automatically initialize forms when it finds the data attributes
      }
    };

    const timer = setTimeout(checkAndLoadForm, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Script
        src="https://js-na2.hsforms.net/forms/embed/244165694.js"
        strategy="afterInteractive"
      />
      <div
        className="hs-form-frame"
        data-region="na2"
        data-form-id="56c0426b-ea41-404d-a12c-18c83ec296df"
        data-portal-id="244165694"
      />
      <style jsx global>{`
        /* Hide HubSpot branding */
        #hs-form-virality-container {
          display: none !important;
        }

        /* Mobile styles for HubSpot form */
        @media (max-width: 640px) {
          .hsfc-Step__Content {
            --hsf-background__padding: 20px !important;
            --hsf-default-background__padding: 20px !important;
            padding: 20px !important;
          }

          .hs-form-iframe,
          .hs-form-frame iframe,
          .hs-form-frame > * {
            width: 100% !important;
            min-width: 100% !important;
            max-width: 100% !important;
          }

          .hs-form-field input,
          .hs-form-field select,
          .hs-form-field textarea,
          .hsfc-TextInput,
          .hsfc-TextareaInput,
          .hs-button,
          .hsfc-Button {
            width: 100% !important;
            min-width: 100% !important;
            box-sizing: border-box !important;
          }

          .hsfc-Row {
            --hsf-row__horizontal-spacing: 15px !important;
            --hsf-default-row__horizontal-spacing: 15px !important;
          }
        }
      `}</style>
    </>
  );
}
