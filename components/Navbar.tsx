"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button, Drawer } from "antd";
import {
  CalendarOutlined,
  HeartFilled,
  MenuOutlined,
  PhoneOutlined,
} from "@ant-design/icons";

const links = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/doctors", label: "Doctors" },
  { href: "/appointment", label: "Appointment" },
  { href: "/pet-care-tips", label: "Pet Care Tips" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <>
      {/* Emergency strip */}
      <div className="bg-[#276749] text-white text-sm">
        <div className="mx-auto max-w-6xl px-4 py-2 flex items-center justify-between gap-3">
          <span className="hidden sm:flex items-center gap-2">
            <HeartFilled className="text-[#ff7a66]" />
            Open 7 days a week · Walk-ins welcome
          </span>
          <a
            href="tel:+97140000000"
            className="flex items-center gap-2 font-semibold hover:opacity-90"
          >
            <PhoneOutlined /> 24/7 Emergency: +971 4 000 0000
          </a>
        </div>
      </div>

      {/* Navbar */}
      <header className="sticky top-0 z-30 bg-white/90 backdrop-blur border-b border-slate-100">
        <nav className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-2 font-display text-xl font-extrabold text-[#276749]"
          >
            <span className="grid h-9 w-9 place-items-center rounded-full bg-[#2f855a] text-white">
              <HeartFilled />
            </span>
            Happy Paws
          </Link>

          {/* Desktop links */}
          <div className="hidden lg:flex items-center gap-6 text-slate-600 font-medium">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className={
                  isActive(l.href)
                    ? "text-[#2f855a] font-semibold"
                    : "hover:text-[#2f855a]"
                }
              >
                {l.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <Link href="/appointment" className="hidden sm:block">
              <Button type="primary" size="large" icon={<CalendarOutlined />}>
                Book Appointment
              </Button>
            </Link>
            {/* Mobile hamburger */}
            <button
              onClick={() => setOpen(true)}
              className="lg:hidden grid h-10 w-10 place-items-center rounded-lg text-slate-700 hover:bg-slate-100"
              aria-label="Open menu"
            >
              <MenuOutlined className="text-xl" />
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile drawer */}
      <Drawer
        title={
          <span className="flex items-center gap-2 font-display font-extrabold text-[#276749]">
            <HeartFilled className="text-[#2f855a]" /> Happy Paws
          </span>
        }
        placement="right"
        open={open}
        onClose={() => setOpen(false)}
        width={280}
      >
        <div className="flex flex-col gap-1">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className={`rounded-lg px-3 py-2 font-medium ${
                isActive(l.href)
                  ? "bg-[#f0f7f2] text-[#2f855a]"
                  : "text-slate-700 hover:bg-slate-50"
              }`}
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/appointment"
            onClick={() => setOpen(false)}
            className="mt-3"
          >
            <Button type="primary" block size="large" icon={<CalendarOutlined />}>
              Book Appointment
            </Button>
          </Link>
        </div>
      </Drawer>
    </>
  );
}
