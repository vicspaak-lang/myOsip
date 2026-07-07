"use client";

import { motion, useReducedMotion } from "framer-motion";

export const WhyExist = () => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.section
      id="why-exist"
      initial={prefersReducedMotion ? false : { opacity: 0, y: 30 }}
      whileInView={prefersReducedMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="px-6 sm:px-10 md:px-20 lg:px-28 xl:px-44 py-20 md:py-24 text-center"
    >
      <div className="flex flex-col items-center">
        <motion.div
          initial={
            prefersReducedMotion ? false : { opacity: 0, scale: 0.96, y: 10 }
          }
          whileInView={
            prefersReducedMotion
              ? { opacity: 1 }
              : { opacity: 1, scale: 1, y: 0 }
          }
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.48, ease: "easeOut", delay: 0.08 }}
          className="flex items-center bg-white rounded-3xl px-4 py-1.5 gap-2 mb-6"
        >
          <span className="w-3 h-3 rounded-full bg-primary-fb"></span>
          <span className="text-base font-medium tracking-[-0.04em]">
            The Problem
          </span>
        </motion.div>

        <motion.h2
          initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
          whileInView={
            prefersReducedMotion ? { opacity: 1 } : { opacity: 1, y: 0 }
          }
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55, ease: "easeOut", delay: 0.14 }}
          className="header-lg mb-12 md:mb-16"
        >
          Why exist?
        </motion.h2>

        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 24 }}
          whileInView={
            prefersReducedMotion ? { opacity: 1 } : { opacity: 1, y: 0 }
          }
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.65, ease: "easeOut", delay: 0.18 }}
          className="text-left regular-text max-w-272.5 w-full"
        >
          <motion.p
            initial={prefersReducedMotion ? false : { opacity: 0, y: 10 }}
            whileInView={
              prefersReducedMotion ? { opacity: 1 } : { opacity: 1, y: 0 }
            }
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
            className="mb-8 md:mb-10"
          >
            Every day, people come up with great ideas that could solve problems
            and make life better. But many of these ideas never become a
            reality. <span className="font-bold">WHY?</span>
          </motion.p>

          <motion.div
            initial={
              prefersReducedMotion ? false : { opacity: 0, x: -12, scale: 0.98 }
            }
            whileInView={
              prefersReducedMotion
                ? { opacity: 1 }
                : { opacity: 1, x: 0, scale: 1 }
            }
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55, ease: "easeOut", delay: 0.24 }}
            className="bg-bg-secondary regular-text rounded-3xl px-6 sm:px-10 md:px-14 py-8 md:py-11 shadow-elevation mb-10 border border-primary/10 relative overflow-hidden"
          >
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-linear-to-b from-transparent via-primary to-transparent rounded-r-full" />
            <p className="pl-2">
              People with ideas often don&apos;t have the technical skills or
              team needed to build them. At the same time, many talented tech
              professionals have the skills but struggle to find real projects
              where they can gain experience. Investors are usually interested
              in products they can see and test, not just ideas on paper.
            </p>
          </motion.div>

          <motion.p
            initial={prefersReducedMotion ? false : { opacity: 0, y: 10 }}
            whileInView={
              prefersReducedMotion ? { opacity: 1 } : { opacity: 1, y: 0 }
            }
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.28 }}
            className="mb-16 md:mb-20"
          >
            Resulting in good ideas remaining unfinished, talented people
            missing opportunities to grow, and valuable solutions never reaching
            the people who need them.
          </motion.p>

          <motion.p
            initial={prefersReducedMotion ? false : { opacity: 0, y: 10 }}
            whileInView={
              prefersReducedMotion ? { opacity: 1 } : { opacity: 1, y: 0 }
            }
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.32 }}
            className="text-xl sm:text-2xl md:text-[1.625rem] font-bold leading-9"
          >
            This is the gap that the One-Shot Innovation Program (OSIP) was
            created to bridge.
          </motion.p>
        </motion.div>
      </div>
    </motion.section>
  );
};
