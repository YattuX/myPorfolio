import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import StarsCanvas from "@/components/main/StartBackGround";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700"] });

export const metadata: Metadata = {
  title: "YattuX",
  description: "This is my portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${spaceGrotesk.className} bg-[#030014] overflow-hidden h-screen w-screen`}>
        {/* 3D star background — fixed across all pages */}
        <StarsCanvas />
        {children}
      </body>
    </html>
  );
}
