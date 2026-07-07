import Image from "next/image";

export const Header = () => {
  return (
    <header className="w-full flex items-center justify-between border-b-[0.5px] border-b-foreground/15 px-2 sm:px-8 md:px-12 lg:px-16 py-4">
      <div className="flex items-center gap-3">
        <div className="flex justify-center items-center">
          <Image
            src="/osip-logo.svg"
            alt="OSIP — One-Shot Innovation Program"
            width={250}
            height={60}
            className="w-45 md:w-55 lg:w-62.5"
            preload
          />
        </div>
      </div>
    </header>
  );
};

