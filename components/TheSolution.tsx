import Image from "next/image";

export const TheSolution = () => {
  return (
    <section className="bg-foreground text-background/50 px-6 md:px-12 lg:px-16 py-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-33 items-center">
        <div className="flex flex-col items-start space-y-6">
          <div className="px-4 py-1.5 rounded-3xl border-[0.5px] border-background/50">
            <span className="text-base font-medium tracking-[-4%]">
              What is OSIP?
            </span>
          </div>

          <h2 className="header-lg text-background mb-16">The Solution</h2>

          <p className="regular-text">
            The One-Shot Innovation Program (OSIP) is a{" "}
            <span className="border-b-[1.5px] border-primary">
              6-8 week accelerator-style initiative
            </span>{" "}
            designed to bring innovators and tech talents together to co-develop
            real products from scratch.
          </p>

          <div className="bg-[#1E110E]/30 regular-text rounded-3xl border-[0.5px] border-[#A9A9A9]/50 px-14 py-11.25 mb-10">
            <p>
              Each OSIP cycle selects{" "}
              <span className="text-primary font-bold">10</span> promising
              innovators and pairs them with skilled tech talents, developers,
              designers, analysts, and product managers to bring their ideas to
              life.
            </p>
          </div>
        </div>

        <div className="relative w-full flex justify-center lg:justify-end">
          <div className="relative w-full aspect-535/379 rounded-2xl overflow-hidden">
            <Image
              src="/solution.jpg"
              alt="Team collaborating on whiteboard ideas"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              loading="eager"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
