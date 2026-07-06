import Image from "next/image";

const cards = [
  {
    id: "innov",
    title: "Innovators",
    description: "Bring your idea, find your team, and get it done.",
    cta: "Apply Now",
    theme: "bg-primary-btn",
  },
  {
    id: "tech",
    title: "Tech Talents",
    description:
      "Level up your skills, collaborate on real products, and build a resume.",
    cta: "Join the Cohort",
    theme: "bg-secondary",
    offset: "translate-y-[33px]",
  },
];

export const EcosystemPath = () => {
  return (
    <section className="py-20 px-6 mx-auto flex flex-col items-center justify-center">
      <div className="text-center mb-16 space-y-6">
        <h2 className="header-lg">Find your place in the ecosystem</h2>
        <p className="main-text mx-auto">
          Choose your path below and join the One-Shot Innovation Program.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-20 justify-center items-stretch md:px-45 lg:px-65">
        {cards.map((card) => (
          <div
            key={card.id}
            className={`bg-white rounded-2xl border border-[#CDCDCD]/50 px-6 py-17 flex flex-col justify-between items-start shadow-elevation ${card.offset}`}
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
            <button
              className={`w-full ${card.theme} text-background py-2.5 rounded-md text-lg font-semibold tracking-[-3%] transition-all flex items-center justify-center gap-2.5 cursor-pointer`}
            >
              {card.cta}{" "}
              <Image
                src="/icons/right-arrow.svg"
                alt=""
                width={24}
                height={24}
              />
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
