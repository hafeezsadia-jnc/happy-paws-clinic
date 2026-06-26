"use client";

import { WhatsAppOutlined } from "@ant-design/icons";

const PHONE = "97140000000"; // clinic WhatsApp number (no +, no spaces)
const MESSAGE = "Hi Happy Paws! I'd like to ask about an appointment for my pet.";

export default function WhatsAppButton() {
  const href = `https://wa.me/${PHONE}?text=${encodeURIComponent(MESSAGE)}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="group fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-3 text-white shadow-lg ring-1 ring-black/5 transition-transform hover:scale-105"
    >
      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#25D366] opacity-30" />
      <WhatsAppOutlined className="relative text-2xl" />
      <span className="relative hidden text-sm font-semibold sm:inline">
        Chat with us
      </span>
    </a>
  );
}
