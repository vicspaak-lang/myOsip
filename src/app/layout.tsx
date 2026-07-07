import type { Metadata } from "next";
import { Caprasimo, Poppins } from "next/font/google";
import "./globals.css";

const caprasimo = Caprasimo({
  variable: "--font-caprasimo",
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "OSIP — One-Shot Innovation Program",
  description:
    "An 8-week intensive program designed to help innovators and early-stage founders move from ideas to structured, buildable, and investable solutions.",
  keywords: ["innovation", "startup", "tech", "accelerator", "OSIP", "DecisionSpaak"],
  openGraph: {
    title: "OSIP — One-Shot Innovation Program",
    description:
      "Bring your tech ideas to life. Join an 8-week intensive program connecting innovators with top tech talent.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${caprasimo.variable} ${poppins.variable} h-full antialiased`}
    >
      <body suppressHydrationWarning className="min-h-screen flex flex-col overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
