export const WhyExist = () => {
  return (
    <section className="px-6 sm:px-10 md:px-20 lg:px-28 xl:px-44 py-20 md:py-24 text-center">
      <div className="flex flex-col items-center">
        <div className="flex items-center bg-white rounded-3xl px-4 py-1.5 gap-2 mb-6">
          <span className="w-3 h-3 rounded-full bg-primary-fb"></span>
          <span className="text-base font-medium tracking-[-0.04em]">
            The Problem
          </span>
        </div>

        <h2 className="header-lg mb-12 md:mb-16">Why exist?</h2>

        <div className="text-left regular-text max-w-272.5 w-full">
          <p className="mb-8 md:mb-10">
            Every day, people come up with great ideas that could solve problems
            and make life better. But many of these ideas never become a
            reality. <span className="font-bold">WHY?</span>
          </p>

          <div className="bg-bg-secondary regular-text rounded-3xl px-6 sm:px-10 md:px-14 py-8 md:py-11 shadow-elevation mb-10 border border-primary/10 relative overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-linear-to-b from-transparent via-primary to-transparent rounded-r-full" />
            <p className="pl-2">
              People with ideas often don&apos;t have the technical skills or
              team needed to build them. At the same time, many talented tech
              professionals have the skills but struggle to find real projects
              where they can gain experience. Investors are usually interested
              in products they can see and test, not just ideas on paper.
            </p>
          </div>

          <p className="mb-16 md:mb-20">
            Resulting in good ideas remaining unfinished, talented people
            missing opportunities to grow, and valuable solutions never reaching
            the people who need them.
          </p>

          <p className="text-xl sm:text-2xl md:text-[1.625rem] font-bold leading-9">
            This is the gap that the One-Shot Innovation Program (OSIP) was
            created to bridge.
          </p>
        </div>
      </div>
    </section>
  );
};
