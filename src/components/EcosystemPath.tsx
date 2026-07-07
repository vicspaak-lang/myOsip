"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

const cards = [
  {
    id: "innov",
    title: "Innovators",
    description: "Bring your idea, find your team, and get it done.",
    cta: "Apply Now",
    href: "#",
    theme: "bg-primary-btn hover:bg-primary-btn/80 ",
    mobileOffsetY: 0,
    desktopOffsetY: -32,
  },
  {
    id: "tech",
    title: "Tech Talents",
    description:
      "Level up your skills, collaborate on real products, and build a resume.",
    cta: "Join the Cohort",
    href: "#",
    theme: "bg-secondary hover:bg-secondary/80",
    mobileOffsetY: 0,
    desktopOffsetY: 32,
  },
];

export const EcosystemPath = () => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.section
      id="ecosystem"
      initial={prefersReducedMotion ? false : { opacity: 0, y: 30 }}
      whileInView={prefersReducedMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="px-6 sm:px-8 md:px-12 lg:px-16 py-16 md:py-20 mx-auto flex flex-col items-center justify-center relative overflow-hidden"
    >
      <motion.div
        initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
        whileInView={
          prefersReducedMotion ? { opacity: 1 } : { opacity: 1, y: 0 }
        }
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.55, ease: "easeOut", delay: 0.08 }}
        className="text-center mb-16 space-y-6"
      >
        <h2 className="header-lg">Find your place in the ecosystem</h2>
        <p className="main-text mx-auto">
          Choose your path below and join the One-Shot Innovation Program.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 justify-center items-stretch max-w-229.5 mx-auto">
        {cards.map((card) => (
          <motion.div
            key={card.id}
            initial={prefersReducedMotion ? false : { opacity: 0, y: 24 }}
            whileInView={
              prefersReducedMotion
                ? { opacity: 1 }
                : {
                    opacity: 1,
                    y: [card.mobileOffsetY, card.desktopOffsetY],
                  }
            }
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.85,
              ease: "easeOut",
              delay: 0.95,
            }}
            className="bg-white rounded-2xl border border-[#CDCDCD]/50 px-6 py-17 flex flex-col justify-between items-start shadow-elevation"
          >
            <div className="space-y-12 mb-12">
              <div
                className={`w-15 h-15 ${card.theme} rounded-sm flex items-center justify-center`}
              >
                <Image
                  src="/icons/light-bulb.svg"
                  alt=""
                  width={32}
                  height={32}
                />
              </div>
              <div>
                <h3 className="text-[32px] mb-6">{card.title}</h3>
                <p className="text-lg md:text-xl text-foreground/60 leading-[1.4]">
                  {card.description}
                </p>
              </div>
            </div>
            <motion.a
              href={card.href}
              className={`w-full ${card.theme} text-background active:scale-95 py-2.5 rounded-md text-lg font-semibold tracking-[-3%] transition-all flex items-center justify-center gap-2.5 cursor-pointer`}
            >
              {card.cta}
              <Image
                src="/icons/right-arrow.svg"
                alt=""
                width={24}
                height={24}
              />
            </motion.a>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};
