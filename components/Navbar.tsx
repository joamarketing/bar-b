"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";

const navLinks = [
  { href: "#evenementen", label: "Evenementen" },
  { href: "#zaalmateriaal", label: "Zaalmateriaal" },
  { href: "#over-ons", label: "Over Bar-B" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled || menuOpen
          ? "border-b border-champagne-500/10 bg-charcoal-950/90 backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <nav
        aria-label="Hoofdnavigatie"
        className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:h-20 sm:px-8"
      >
        <Link
          href="/"
          className="font-serif text-2xl tracking-wide text-cream-50"
          aria-label="Bar-B — terug naar boven"
        >
          Bar<span className="text-champagne-500">-</span>B
        </Link>

        {/* Desktop navigatie */}
        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm tracking-wide text-cream-200 transition-colors duration-300 hover:text-champagne-400"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#aanvraag"
              className="rounded-full border border-champagne-500/60 px-5 py-2 text-sm tracking-wide text-champagne-400 transition-all duration-300 hover:bg-champagne-500 hover:text-charcoal-950"
            >
              Vraag uw datum aan
            </a>
          </li>
        </ul>

        {/* Mobiele menu-knop */}
        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          aria-expanded={menuOpen}
          aria-controls="mobiel-menu"
          aria-label={menuOpen ? "Menu sluiten" : "Menu openen"}
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
        >
          <span
            className={`h-px w-6 bg-cream-100 transition-transform duration-300 ${
              menuOpen ? "translate-y-[3.5px] rotate-45" : ""
            }`}
          />
          <span
            className={`h-px w-6 bg-cream-100 transition-transform duration-300 ${
              menuOpen ? "-translate-y-[3.5px] -rotate-45" : ""
            }`}
          />
        </button>
      </nav>

      {/* Mobiel menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobiel-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-champagne-500/10 bg-charcoal-950/95 backdrop-blur-md md:hidden"
          >
            <ul className="flex flex-col gap-1 px-5 py-6">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="block py-3 font-serif text-xl text-cream-100 transition-colors hover:text-champagne-400"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="pt-4">
                <a
                  href="#aanvraag"
                  onClick={() => setMenuOpen(false)}
                  className="block rounded-full bg-champagne-500 px-6 py-3 text-center font-medium text-charcoal-950 transition-colors hover:bg-champagne-400"
                >
                  Vraag uw datum aan
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
