"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

export const Footer = () => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.footer
      initial={prefersReducedMotion ? false : { opacity: 0, y: 24 }}
      whileInView={prefersReducedMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="w-full px-6 sm:px-8 md:px-12 lg:px-16 mt-24 md:mt-36 lg:mt-48 mb-10 sm:mb-16 md:mb-20 lg:mb-25"
    >
      <div className="bg-foreground text-background rounded-[40px] sm:rounded-[56px] lg:rounded-[64px] flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6 relative overflow-hidden p-4 md:p-6">
        <motion.div
          aria-hidden
          initial={prefersReducedMotion ? false : { opacity: 0, x: -30 }}
          whileInView={
            prefersReducedMotion ? { opacity: 1 } : { opacity: 1, x: 0 }
          }
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="absolute inset-0 bg-linear-to-r from-transparent via-primary/5 to-transparent animate-shimmer pointer-events-none"
        />
        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 12 }}
          whileInView={
            prefersReducedMotion ? { opacity: 1 } : { opacity: 1, y: 0 }
          }
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55, ease: "easeOut", delay: 0.08 }}
          className="relative z-10 shrink-0"
        >
          <Image
            src="dst-logo.svg"
            alt="DecisionSpaak Group logo"
            width={250}
            height={60}
          />
        </motion.div>
        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 12 }}
          whileInView={
            prefersReducedMotion ? { opacity: 1 } : { opacity: 1, y: 0 }
          }
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55, ease: "easeOut", delay: 0.12 }}
          className="relative z-10 text-center sm:text-right text-background/70 regular-text flex flex-wrap"
        >
          <p>
            Questions? Reach out anytime:{" "}
            <a href="mailto:osip@decisionspaak.com" className="underline">
              osip@decisionspaak.com
            </a>
          </p>
        </motion.div>
      </div>
    </motion.footer>
  );
};
