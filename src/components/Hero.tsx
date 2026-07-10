"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

const heroLines = ["Bring Your", "Tech", "Ideas to Life"];

export const Hero = () => {
  const prefersReducedMotion = useReducedMotion();
  const [typedLines, setTypedLines] = useState<string[]>(() =>
    prefersReducedMotion ? heroLines : heroLines.map(() => ""),
  );

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    let active = true;
    let lineIndex = 0;
    let charIndex = 0;
    const nextLines = heroLines.map(() => "");
    const timeoutIds: number[] = [];

    const schedule = (callback: () => void, delay: number) => {
      const id = window.setTimeout(() => {
        if (active) {
          callback();
        }
      }, delay);
      timeoutIds.push(id);
      return id;
    };

    const tick = () => {
      const currentLine = heroLines[lineIndex];

      if (charIndex < currentLine.length) {
        nextLines[lineIndex] += currentLine[charIndex];
        setTypedLines([...nextLines]);
        charIndex += 1;
        schedule(tick, 70);
        return;
      }

      lineIndex += 1;
      charIndex = 0;

      if (lineIndex < heroLines.length) {
        schedule(tick, 20);
      }
    };

    schedule(tick, 120);

    return () => {
      active = false;
      timeoutIds.forEach((id) => window.clearTimeout(id));
    };
  }, [prefersReducedMotion]);

  return (
    <section
      id="hero"
      className="relative min-h-screen px-6 md:px-12 lg:px-16 py-24 flex flex-col justify-between"
    >
      <div className="absolute inset-0 bg-bg-secondary -z-10" />
      <Image
        src="/bg-img.jpg"
        alt=""
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className="object-cover -z-5 opacity-10"
        priority
      />
      <motion.div
        initial={prefersReducedMotion ? false : { opacity: 0, y: 28 }}
        animate={prefersReducedMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full grid grid-cols-1 lg:grid-cols-2 gap-y-12 md:gap-x-24 lg:gap-x-32 items-center my-auto"
      >
        <div>
          <h1 className="text-hero leading-none tracking-[-0.03em] font-bold mb-4 whitespace-pre-wrap min-h-36 lg:min-h-48">
            {typedLines.map((line, index) => (
              <span key={`${line}-${index}`}>
                {line}
                {index < typedLines.length - 1 ? <br /> : null}
              </span>
            ))}
          </h1>
          <motion.p
            initial={prefersReducedMotion ? false : { opacity: 0, x: -24 }}
            animate={
              prefersReducedMotion ? { opacity: 1 } : { opacity: 1, x: 0 }
            }
            transition={{ duration: 1.0, ease: "easeOut", delay: 2.65 }}
            className="text-body-xlg leading-[1.4] max-w-[50ch] lg:max-w-[38ch] mb-6"
          >
            The One-Shot Innovation Program (OSIP) is an 8-week intensive
            program designed to help innovators and early-stage founders move
            from ideas to structured, buildable, and investable solutions.
          </motion.p>
          <motion.a
            href="#"
            initial={prefersReducedMotion ? false : { opacity: 0 }}
            animate={prefersReducedMotion ? { opacity: 1 } : { opacity: 1 }}
            transition={{ duration: 0.65, ease: "easeOut", delay: 3.85 }}
            className="bg-primary-btn text-background active:scale-95 font-semibold px-8 py-4 rounded-4xl text-body-md leading-[1.4] tracking-[-3%] transition-all cursor-pointer inline-flex items-center justify-center relative overflow-hidden group"
          >
            {!prefersReducedMotion && (
              <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-900 ease-out pointer-events-none bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.0)_20%,rgba(255,255,255,0.4)_50%,rgba(255,255,255,0.0)_80%,transparent)]" />
            )}

            <span className="relative z-10">Join us today</span>
          </motion.a>
        </div>

        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, x: 24 }}
          animate={prefersReducedMotion ? { opacity: 1 } : { opacity: 1, x: 0 }}
          transition={{ duration: 1.0, ease: "easeOut", delay: 2.65 }}
          className="relative flex justify-center items-center w-full"
        >
          <div className="w-full max-w-md aspect-535/379 rounded-2xl overflow-hidden">
            <Image
              src="/hero.jpg"
              alt="Hand holding a glowing lightbulb"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover"
              priority
            />
          </div>

          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, y: 24 }}
            animate={
              prefersReducedMotion ? { opacity: 1 } : { opacity: 1, y: 0 }
            }
            transition={{ duration: 0.6, ease: "easeOut", delay: 3.65 }}
            className="absolute -bottom-12 -left-2 lg:-left-40 bg-card rounded-2xl p-4 shadow-elevation flex items-center gap-4"
          >
            <div>
              <Image
                src="/target.svg"
                alt="Target symbol"
                width={60}
                height={60}
                className="object-cover w-14 md:w-15 aspect-square"
                priority
              />
            </div>
            <div>
              <p className="text-body-lg leading-[1.4] font-semibold mb-px md:mb-2">
                Co - develop Products
              </p>
              <p className="text-body-md leading-[1.4] text-foreground/70">
                From scratch to reality
              </p>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};
