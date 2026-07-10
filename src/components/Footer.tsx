"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";

export const Footer = () => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.footer
      initial={prefersReducedMotion ? false : { opacity: 0, y: 24 }}
      whileInView={prefersReducedMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="w-full px-0 sm:px-8 md:px-12 lg:px-16 mt-24 md:mt-36 lg:mt-48 mb-0 sm:mb-16 md:mb-20 lg:mb-25"
    >
      <div className="bg-foreground text-background rounded-t-2xl sm:rounded-[56px] lg:rounded-[64px] flex flex-col sm:flex-row sm:items-center justify-between gap-12 md:gap-4 relative overflow-hidden px-8 pt-8 pb-20 md:py-6">
        <motion.div
          aria-hidden
          initial={prefersReducedMotion ? false : { opacity: 0, x: -30 }}
          whileInView={
            prefersReducedMotion ? { opacity: 1 } : { opacity: 1, x: 0 }
          }
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="absolute inset-0 bg-linear-to-r from-transparent via-primary/5 to-transparent pointer-events-none"
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
          <Link href="/https://decisionspaak.com/">
            <Image
              src="/dst-logo-light.png"
              alt="DecisionSpaak Group logo"
              width={527}
              height={115}
              className="w-36 md:w-44"
            />
          </Link>
        </motion.div>
        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 12 }}
          whileInView={
            prefersReducedMotion ? { opacity: 1 } : { opacity: 1, y: 0 }
          }
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55, ease: "easeOut", delay: 0.12 }}
          className="relative z-10 sm:text-right text-background/70 text-body-xlg md:leading-9"
        >
          <p className="flex flex-col sm:flex-row gap-x-2">
            <span>Questions?</span>
            <span>Reach out anytime:</span>
            <a href="mailto:osip@decisionspaak.com" className="underline">
              osip@decisionspaak.com
            </a>
          </p>
        </motion.div>
      </div>
    </motion.footer>
  );
};
