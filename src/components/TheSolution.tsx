"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

export const TheSolution = () => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.section
      id="solution"
      initial={prefersReducedMotion ? false : { opacity: 0, y: 30 }}
      whileInView={prefersReducedMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="bg-foreground text-background/90 px-6 sm:px-8 md:px-12 lg:px-16 py-20 md:py-24 relative overflow-hidden"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 lg:gap-28 xl:gap-33 items-center max-w-360 mx-auto">
        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, x: -24 }}
          whileInView={
            prefersReducedMotion ? { opacity: 1 } : { opacity: 1, x: 0 }
          }
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.65, ease: "easeOut", delay: 0.08 }}
          className="flex flex-col items-start space-y-4 md:space-y-6"
        >
          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, scale: 0.95 }}
            whileInView={
              prefersReducedMotion ? { opacity: 1 } : { opacity: 1, scale: 1 }
            }
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, ease: "easeOut", delay: 0.12 }}
            className="px-4 py-1.5 rounded-3xl border-[0.5px] border-background/90"
          >
            <span className="text-body-sm font-medium tracking-[-4%]">
              What is OSIP?
            </span>
          </motion.div>

          <motion.h2
            initial={prefersReducedMotion ? false : { opacity: 0, y: 10 }}
            whileInView={
              prefersReducedMotion ? { opacity: 1 } : { opacity: 1, y: 0 }
            }
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.16 }}
            className="text-heading text-background mb-8 md:mb-14 lg:mb-16"
          >
            The Solution
          </motion.h2>

          <motion.p
            initial={prefersReducedMotion ? false : { opacity: 0, y: 10 }}
            whileInView={
              prefersReducedMotion ? { opacity: 1 } : { opacity: 1, y: 0 }
            }
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.18 }}
            className="text-body-xlg leading-7 md:leading-9"
          >
            The One-Shot Innovation Program (OSIP) is a{" "}
            <span className="border-b-[1.5px] border-primary">
              6-8 week accelerator-style initiative
            </span>{" "}
            designed to bring innovators and tech talents together to co-develop
            real products from scratch.
          </motion.p>

          <motion.div
            initial={
              prefersReducedMotion ? false : { opacity: 0, x: -10, scale: 0.98 }
            }
            whileInView={
              prefersReducedMotion
                ? { opacity: 1 }
                : { opacity: 1, x: 0, scale: 1 }
            }
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55, ease: "easeOut", delay: 0.22 }}
            className="bg-[#1E110E]/30 text-body-xlg leading-7 md:leading-9 rounded-3xl border-[0.5px] border-[#A9A9A9]/50 px-6 sm:px-10 md:px-14 py-8 md:py-11 w-full relative overflow-hidden mb-10"
          >
            <div className="absolute top-0 left-8 right-8 h-px bg-linear-to-r from-transparent via-primary to-transparent" />
            <p>
              Each OSIP cycle selects{" "}
              <span className="text-primary font-bold">10</span> promising
              innovators and pairs them with skilled tech talents, developers,
              designers, analysts, and product managers to bring their ideas to
              life.
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, x: 24 }}
          whileInView={
            prefersReducedMotion ? { opacity: 1 } : { opacity: 1, x: 0 }
          }
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.65, ease: "easeOut", delay: 0.12 }}
          className="relative w-full flex justify-center lg:justify-end"
        >
          <motion.div
            whileHover={
              prefersReducedMotion ? undefined : { scale: 1.03, y: -4 }
            }
            initial={prefersReducedMotion ? false : { opacity: 0, scale: 0.96 }}
            whileInView={
              prefersReducedMotion ? { opacity: 1 } : { opacity: 1, scale: 1 }
            }
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.65, ease: "easeOut", delay: 0.16 }}
            className="relative w-full aspect-535/379 rounded-2xl overflow-hidden"
          >
            <Image
              src="/solution.png"
              alt="Team collaborating on whiteboard ideas"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              loading="eager"
              className="object-cover"
            />
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};
