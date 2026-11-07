"use client";

import Image from "next/image";
import { useEffect, useId, useState } from "react";
import { firm } from "@/data/content";

const navLinks = [
  ["Portfolio", "#portfolio"],
  ["About", "#about"],
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const menuId = useId();

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header className="strata-surface relative z-50">
      <div className="content-column flex items-center justify-between py-3 sm:py-4">
        <a
          href="#top"
          className="inline-flex items-center no-underline"
          onClick={close}
        >
          <Image
            src="/logo.png"
            alt={firm.name}
            width={202}
            height={101}
            priority
            className="h-12 w-auto sm:h-14"
          />
        </a>

        <nav className="hidden items-center gap-7 sm:flex" aria-label="Primary">
          {navLinks.map(([label, href]) => (
            <a key={href} href={href} className="mono-label link-rust">
              {label}
            </a>
          ))}
          <a
            href={`mailto:${firm.email}`}
            className="rounded-full border border-clay/70 bg-surface px-4 py-2 text-body-sm text-ink no-underline transition-colors hover:border-rust/60 hover:text-rust"
          >
            Contact
          </a>
        </nav>

        <button
          type="button"
          className="inline-flex size-11 items-center justify-center rounded-full border border-clay/70 bg-surface text-ink transition-colors hover:border-rust/60 hover:text-rust sm:hidden"
          aria-expanded={open}
          aria-controls={menuId}
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((value) => !value)}
        >
          <span className="relative block size-4" aria-hidden>
            <span
              className={`absolute left-0 block h-[1.5px] w-4 bg-current transition-transform duration-200 ${
                open ? "top-[7px] rotate-45" : "top-1"
              }`}
            />
            <span
              className={`absolute left-0 top-[7px] block h-[1.5px] w-4 bg-current transition-opacity duration-200 ${
                open ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute left-0 block h-[1.5px] w-4 bg-current transition-transform duration-200 ${
                open ? "top-[7px] -rotate-45" : "top-[13px]"
              }`}
            />
          </span>
        </button>
      </div>

      <div
        id={menuId}
        className={`sm:hidden ${open ? "block" : "hidden"}`}
      >
        <button
          type="button"
          className="fixed inset-0 z-40 bg-ore/25 backdrop-blur-[2px]"
          aria-label="Close menu"
          onClick={close}
        />
        <nav
          aria-label="Mobile"
          className="relative z-50 border-t border-clay/40 bg-surface"
        >
          <div className="content-column flex flex-col gap-1 py-4">
            {navLinks.map(([label, href]) => (
              <a
                key={href}
                href={href}
                className="rounded-lg px-3 py-3 text-body text-ink no-underline transition-colors hover:bg-topsoil hover:text-rust"
                onClick={close}
              >
                {label}
              </a>
            ))}
            <a
              href={`mailto:${firm.email}`}
              className="btn-primary mt-2 w-fit"
              onClick={close}
            >
              Contact
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
