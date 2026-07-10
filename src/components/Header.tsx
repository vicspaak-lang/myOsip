"use client";

import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useState } from "react";

const navItems = [
  { label: "Home", href: "#hero" },
  { label: "Why We Exist", href: "#why-exist" },
  { label: "The Solution", href: "#solution" },
  { label: "Partner With Us", href: "#why-partner" },
  { label: "Join OSIP", href: "#ecosystem" },
];

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  return (
    <header className="fixed top-0 z-50 w-full bg-background/40 backdrop-blur-md border-b-[0.5px] border-b-foreground/15 px-2 sm:px-8 md:px-12 lg:px-16 py-4">
      <div className="mx-auto flex max-w-360 items-center justify-between">
        <a
          href="#hero"
          className="flex items-center gap-3"
          onClick={() => setIsOpen(false)}
        >
          <div className="flex justify-center items-center">
            <Image
              src="/osip-logo.svg"
              alt="OSIP — One-Shot Innovation Program"
              width={250}
              height={60}
              className="w-45 md:w-55 lg:w-62.5"
              preload
            />
          </div>
        </a>

        <nav className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-body-sm font-medium tracking-[-0.02em] text-foreground/80 transition-colors hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          aria-label="Toggle navigation"
          aria-expanded={isOpen}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-foreground/10 bg-white/80 p-2 shadow-sm transition-colors hover:bg-white md:hidden"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <div className="flex flex-col items-end gap-1.5">
            <motion.span
              animate={
                isOpen
                  ? { width: "1.75rem", rotate: 45, y: 7 }
                  : { width: "1.75rem", rotate: 0, y: 0 }
              }
              transition={{ duration: 0.2 }}
              className="h-0.5 rounded-full bg-foreground"
            />
            <motion.span
              animate={
                isOpen
                  ? { width: 0, opacity: 0 }
                  : { width: "1rem", opacity: 1 }
              }
              transition={{ duration: 0.2 }}
              className="h-0.5 rounded-full bg-foreground"
            />
            <motion.span
              animate={
                isOpen
                  ? { width: "1.75rem", rotate: -45, y: -7 }
                  : { width: "1.25rem", rotate: 0, y: 0 }
              }
              transition={{ duration: 0.2 }}
              className="h-0.5 rounded-full bg-foreground"
            />
          </div>
        </button>
      </div>

      <AnimatePresence>
        {isOpen ? (
          <motion.nav
            initial={prefersReducedMotion ? false : { opacity: 0, y: -8 }}
            animate={
              prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }
            }
            exit={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="mt-3 space-y-2 rounded-2xl border border-foreground/10 bg-white/95 p-3 shadow-elevation md:hidden"
          >
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block rounded-xl px-3 py-2 text-sm font-medium text-foreground/80 transition-colors hover:bg-bg-secondary hover:text-foreground"
              >
                {item.label}
              </a>
            ))}
          </motion.nav>
        ) : null}
      </AnimatePresence>
    </header>
  );
};
