import type { Metadata } from "next";
import "./globals.css";
import StarsCanvas from "@/components/main/StartBackGround";

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
      <body
        className="bg-[#080420]"
        style={{ fontFamily: "'Space Grotesk', sans-serif" }}
      >
        {/* 3D star background — fixed across all pages */}
        <StarsCanvas />
        {children}
      </body>
    </html>
  );
}
