"use client";

export default function ContactLink() {
  return (
    <a
      href="#"
      onClick={(e) => {
        e.preventDefault();
        window.location.href = "mai" + "lto:con" + "tact@ev" + "ryn.ai";
      }}
      className="hover:text-white transition-colors"
    >
      Contact
    </a>
  );
}
