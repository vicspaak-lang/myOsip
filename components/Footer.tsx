import Image from "next/image";

export const Footer = () => {
  return (
    <footer className="w-full px-6 md:px-12 lg:px-16 mt-48 mb-25">
      <div className="bg-foreground text-background rounded-[64px] p-4 md:p-6 flex flex-col sm:flex-row items-center justify-between gap-2">
        <div>
          <Image src="dst-logo.svg" alt="" width={250} height={60} />
        </div>
        <div className="regular-text flex flex-wrap">
          <p>Questions? Reach out anytime: <a href="mailto:osip@decisionspaak.com" className="underline">osip@decisionspark.com</a></p>
        </div>
      </div>
    </footer>
  );
};
