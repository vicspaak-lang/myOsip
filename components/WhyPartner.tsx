import Image from "next/image";

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
  return (
    <section className="bg-bg-secondary px-6 md:px-12 lg:px-16 py-16 text-center">
      <div className="flex flex-col items-center">
        <div className="mb-16 space-y-6">
          <h2 className="header-lg">Why partner with OSIP</h2>
          <p className="text-foreground/70 main-text mx-auto max-w-[75ch]">
            As a tech training institution, you train the talents. OSIP gives
            them a launchpad to apply what they&apos;ve learned in real-world,
            impact-driven projects.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-13 gap-12 items-stretch w-full">
          <div className="lg:col-span-5 relative w-full rounded-2xl overflow-hidden">
            <Image
              src="/partner.jpg"
              alt="Team putting hands together in collaboration"
              fill
              className="object-cover"
            />
          </div>

          <div className="lg:col-span-8 bg-white rounded-3xl p-8 md:p-12 lg:p-16 shadow-elevation flex flex-col justify-center">
            <p className="main-text mb-2.5">Benefits to your institution</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 md:gap-x-16 lg:gap-x-19 gap-y-12">
              {benefits.map((benefit) => (
                <div key={benefit.id} className="flex flex-col space-y-2">
                  <div className="flex items-center rounded-xl">
                    <Image src={benefit.icon} alt="" width={50} height={50} />
                  </div>

                  <p className="main-text font-semibold text-left mb-2">
                    {benefit.title} <br />
                    <span className="text-base md:text-[22px] text-foreground/70 leading-[1.4]">
                      {benefit.description}
                    </span>
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
