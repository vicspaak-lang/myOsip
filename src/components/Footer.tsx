import Image from "next/image";

export const Footer = () => {
  return (
    <footer className="w-full px-6 sm:px-8 md:px-12 lg:px-16 mt-24 md:mt-36 lg:mt-48 mb-10 sm:mb-16 md:mb-20 lg:mb-25">
      <div className="bg-foreground text-background rounded-[40px] sm:rounded-[56px] lg:rounded-[64px] flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6 relative overflow-hidden p-4 md:p-6">
        <div
          aria-hidden
          className="absolute inset-0 bg-linear-to-r from-transparent via-primary/5 to-transparent animate-shimmer pointer-events-none"
        />
        <div className="relative z-10 shrink-0">
          <Image
            src="dst-logo.svg"
            alt="DecisionSpaak Group logo"
            width={250}
            height={60}
          />
        </div>
        <div className="relative z-10 text-center sm:text-right text-background/70 regular-text flex flex-wrap">
          <p>
            Questions? Reach out anytime:{" "}
            <a href="mailto:osip@decisionspaak.com" className="underline">
              osip@decisionspark.com
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

