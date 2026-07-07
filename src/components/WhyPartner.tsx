"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

const benefits = [
  {
    id: "real-world-experience",
    title: "Real-world experience",
    description: "for your students/alumni",
    icon: "/icons/briefcase.svg",
  },
  {
    id: "portfolio-worthy",
    title: "Portfolio-worthy",
    description: "project participation",
    icon: "/icons/award.svg",
  },
  {
    id: "mentorship",
    title: "Exposure to mentorship",
    description: "and collaborative teamwork",
    icon: "/icons/users.svg",
  },
  {
    id: "demo-day",
    title: "Access to Demo Day",
    description: "and potential hiring opportunities",
    icon: "/icons/grad-cap.svg",
  },
  {
    id: "branding-recognition",
    title: "Branding & recognition",
    description: "as an OSIP Partner Institution",
    icon: "/icons/institution.svg",
  },
];

export const WhyPartner = () => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.section
      id="why-partner"
      initial={prefersReducedMotion ? false : { opacity: 0, y: 30 }}
      whileInView={prefersReducedMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="bg-bg-secondary px-6 md:px-12 lg:px-16 py-16 text-center"
    >
      <div className="flex flex-col items-center max-w-360 mx-auto w-full">
        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
          whileInView={
            prefersReducedMotion ? { opacity: 1 } : { opacity: 1, y: 0 }
          }
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55, ease: "easeOut", delay: 0.08 }}
          className="mb-12 md:mb-16 space-y-4 md:space-y-6"
        >
          <h2 className="header-lg">Why partner with OSIP</h2>
          <p className="text-foreground/70 main-text mx-auto max-w-[75ch] max-sm:text-left">
            As a tech training institution, you train the talents. OSIP gives
            them a launchpad to apply what they&apos;ve learned in real-world,
            impact-driven projects.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-[5fr_8fr] gap-8 md:gap-12 items-stretch w-full">
          <motion.div
            initial={
              prefersReducedMotion ? false : { opacity: 0, x: -20, scale: 0.97 }
            }
            whileInView={
              prefersReducedMotion
                ? { opacity: 1 }
                : { opacity: 1, x: 0, scale: 1 }
            }
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.65, ease: "easeOut", delay: 0.12 }}
            whileHover={
              prefersReducedMotion ? undefined : { scale: 1.02, y: -4 }
            }
            className="relative w-full min-h-70 sm:min-h-85 lg:min-h-0 lg:h-full rounded-2xl overflow-hidden"
          >
            <Image
              src="/partner.jpg"
              alt="Team putting hands together in collaboration"
              fill
              className="object-cover"
            />
          </motion.div>

          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, x: 20, y: 8 }}
            whileInView={
              prefersReducedMotion ? { opacity: 1 } : { opacity: 1, x: 0, y: 0 }
            }
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.65, ease: "easeOut", delay: 0.16 }}
            className="text-left h-full bg-white rounded-3xl p-6 sm:p-8 md:p-12 lg:p-16 shadow-elevation flex flex-col justify-center"
          >
            <p className="main-text font-semibold text-center mb-6">
              Benefits to your institution
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 md:gap-x-16 lg:gap-x-19 gap-y-8 md:gap-y-12">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.id}
                  initial={
                    prefersReducedMotion
                      ? false
                      : { opacity: 0, y: 14, scale: 0.97 }
                  }
                  whileInView={
                    prefersReducedMotion
                      ? { opacity: 1 }
                      : { opacity: 1, y: 0, scale: 1 }
                  }
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.45,
                    ease: "easeOut",
                    delay: 0.04 * index + 0.2,
                  }}
                  whileHover={
                    prefersReducedMotion ? undefined : { y: -4, scale: 1.02 }
                  }
                  className="flex flex-col space-y-2"
                >
                  <div className="flex items-center rounded-xl">
                    <Image src={benefit.icon} alt="" width={50} height={50} />
                  </div>

                  <p className="main-text font-semibold text-left mb-2">
                    {benefit.title} <br />
                    <span className="text-base md:text-[22px] text-foreground/70 leading-[1.4]">
                      {benefit.description}
                    </span>
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};
