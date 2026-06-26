"use client";

import Link from "next/link";
import { HeartFilled } from "@ant-design/icons";

const quickLinks = [
  { href: "/services", label: "Services" },
  { href: "/doctors", label: "Doctors" },
  { href: "/appointment", label: "Appointment" },
  { href: "/pet-care-tips", label: "Pet Care Tips" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="mx-auto max-w-6xl px-4 py-12 grid gap-8 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-2 font-display text-lg font-extrabold text-white mb-3">
            <HeartFilled className="text-[#ff7a66]" /> Happy Paws
          </div>
          <p className="text-slate-400 text-sm">
            Compassionate veterinary care for every paw, every day.
          </p>
        </div>

        <div>
          <p className="text-white font-semibold mb-3">Quick links</p>
          <ul className="space-y-2 text-sm">
            {quickLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="text-slate-400 hover:text-white">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-white font-semibold mb-3">Hours</p>
          <p className="text-slate-400 text-sm">Mon–Fri: 8am – 9pm</p>
          <p className="text-slate-400 text-sm">Sat–Sun: 9am – 6pm</p>
        </div>

        <div>
          <p className="text-white font-semibold mb-3">Contact</p>
          <a href="tel:+97140000000" className="text-slate-400 text-sm block hover:text-white">
            +971 4 000 0000
          </a>
          <a href="mailto:hello@happypaws.vet" className="text-slate-400 text-sm block hover:text-white">
            hello@happypaws.vet
          </a>
          <p className="text-slate-400 text-sm">Sheikh Zayed Road, Dubai</p>
        </div>
      </div>
      <div className="border-t border-slate-800 py-5 text-center text-sm text-slate-500">
        © 2026 Happy Paws Veterinary Clinic. All rights reserved.
      </div>
    </footer>
  );
}
