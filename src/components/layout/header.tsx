"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { assets } from "@/data/site";
import { pages } from "@/data/pages";
const links = [
  { href: "/", label: "Home" },
  ...pages.map((p) => ({
    href: `/${p.k}`,
    label: p.k === "serve" ? "Serve" : p.k === "partner" ? "Partner" : p.t,
  })),
];
export function Header() {
  const path = usePathname();
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b border-gold/25 bg-navy text-[#f2eee6]">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:block focus:p-3"
      >
        Skip to content
      </a>
      <div className="mx-auto flex min-h-16 max-w-[1440px] flex-wrap items-center justify-between gap-x-4 px-4 sm:px-6">
        <Link
          href="/"
          className="flex items-center gap-2 py-3 text-xl font-bold tracking-wide"
          onClick={() => setOpen(false)}
        >
          <Image
            src={assets.logo}
            alt="TYPA logo"
            width={40}
            height={40}
            className="rounded-full bg-white p-0.5"
          />
          TYPA
        </Link>
        <button
          type="button"
          className="rounded-lg border border-gold/40 p-2 xl:hidden"
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-expanded={open}
          aria-controls="main-navigation"
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
        <nav
          id="main-navigation"
          aria-label="Main navigation"
          onKeyDown={(e) => {
            if (e.key === "Escape") {
              setOpen(false);
              document
                .querySelector<HTMLButtonElement>(
                  '[aria-controls="main-navigation"]',
                )
                ?.focus();
            }
          }}
          className={`${open ? "grid" : "hidden"} max-h-[calc(100dvh-5rem)] overflow-y-auto w-full grid-cols-1 gap-1 border-t border-gold/20 pb-4 sm:grid-cols-2 xl:flex xl:w-auto xl:border-0 xl:pb-0`}
        >
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              aria-current={path === l.href ? "page" : undefined}
              onClick={() => setOpen(false)}
              className={`rounded-lg px-3 py-3 text-sm transition-colors hover:bg-white/10 ${path === l.href ? "bg-gold/15 font-semibold text-gold" : "text-[#cdbf9a]"}`}
            >
              {l.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
