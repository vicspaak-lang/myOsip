import Image from "next/image";

export const Hero = () => {
  return (
    <section className="bg-bg-secondary min-h-screen px-6 md:px-12 lg:px-16 flex flex-col justify-between">
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-y-12 md:gap-x-24 lg:gap-x-32 items-center my-auto">
        <div className="flex flex-col items-start">
          <h1 className="text-5xl md:text-6xl tracking-[-0.03em] font-bold mb-4">
            Bring Your <br />
            Tech <br />
            Ideas to Life
          </h1>
          <p className="main-text max-w-[50ch] lg:max-w-[38ch] mb-6">
            The One-Shot Innovation Program (OSIP) is an 8-week intensive
            program designed to help innovators and early-stage founders move
            from ideas to structured, buildable, and investable solutions.
          </p>
          <button className="bg-primary-btn text-background hover:bg-secondary font-semibold px-8 py-2 rounded-4xl text-lg leading-[1.4] tracking-[-3%] transition-all cursor-pointer">
            Join us today
          </button>
        </div>

        <div className="relative flex justify-center items-center w-full">
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

          <div className="absolute -bottom-12 -left-2 lg:-left-40 bg-card rounded-2xl p-4 shadow-elevation flex items-center gap-4">
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
              <p className="text-lg md:text-[20px] leading-1.4 font-semibold mb-px md:mb-2">
                Co - develop Products
              </p>
              <p className="text-base md:text-lg leading-1.4 text-foreground/70">
                From scratch to reality
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
