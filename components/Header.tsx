import Image from "next/image";

export const Header = () => {
  return (
    <header className="w-full flex items-center justify-between border-b-[0.5px] border-b-foreground/15 px-8 md:px-12 lg:px-16 py-4">
      <div className="flex items-center gap-3">
        <div className="flex justify-center items-center">
          <Image src="osip-logo.svg" alt="" width={250} height={60} />
        </div>
      </div>
    </header>
  );
};
