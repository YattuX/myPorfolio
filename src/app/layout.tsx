import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import StarsCanvas from "@/components/main/StartBackGround";
import NavBar from "@/components/main/NavBar";
import Footer from "@/components/main/Footer";


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
      <body className={` bg-[#030014] overflow-y-scroll overflow-x-hidden`}>
        <StarsCanvas/>
        <NavBar/>
        {children}
        <Footer/>
        </body>
    </html>
  );
}
