import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { BackgroundBeams } from "@/components/ui/background-beams";
import RecoilLayout from "./(RecoilLayout)/layout";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TEXT TO PDF",
  description: "Generates Pdf from Text",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <RecoilLayout>
        {children}
        <BackgroundBeams />
        </RecoilLayout>
      </body>
    </html>
  );
}
