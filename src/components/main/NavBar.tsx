"use client";

import Image from "next/image";
import { FaLinkedin } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

interface NavBarProps {
  currentPage?: string;
}

export default function NavBar({ currentPage = "Home" }: NavBarProps) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-5 px-4 pointer-events-none">
      <motion.div
        initial={{ opacity: 0, y: -28, scale: 0.94 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        className="pointer-events-auto w-full max-w-[660px] p-[1px] rounded-[18px]"
        style={{
          background:
            "linear-gradient(135deg, rgba(180,160,255,0.28) 0%, rgba(120,100,220,0.10) 40%, rgba(100,220,255,0.15) 100%)",
          boxShadow:
            "0 8px 48px rgba(0,0,0,0.65), 0 0 80px rgba(112,66,248,0.10)",
        }}
      >
        {/* Inner glass panel */}
        <nav
          className="relative w-full h-[58px] flex items-center justify-between px-5 rounded-[17px] overflow-hidden"
          style={{
            background:
              "linear-gradient(160deg, rgba(20,12,50,0.82) 0%, rgba(8,5,28,0.78) 100%)",
            backdropFilter: "blur(36px) saturate(180%)",
            WebkitBackdropFilter: "blur(36px) saturate(180%)",
          }}
        >
          {/* Top-left light catch */}
          <div
            className="absolute top-0 left-0 right-0 h-px pointer-events-none"
            style={{
              background:
                "linear-gradient(90deg, transparent 0%, rgba(200,180,255,0.45) 25%, rgba(255,255,255,0.55) 50%, rgba(180,230,255,0.35) 75%, transparent 100%)",
            }}
          />

          {/* Surface sheen */}
          <div
            className="absolute top-0 left-0 w-1/2 h-full pointer-events-none"
            style={{
              background:
                "linear-gradient(110deg, rgba(255,255,255,0.04) 0%, transparent 60%)",
            }}
          />

          {/* ── LEFT : Logo ── */}
          <a href="#" className="relative z-10 shrink-0 group flex items-center gap-3">
            <div className="relative">
              {/* Ambient glow ring */}
              <div
                className="absolute inset-[-4px] rounded-full opacity-40 group-hover:opacity-80 transition-opacity duration-500"
                style={{
                  background:
                    "conic-gradient(from 0deg, #7042f8, #a78bfa, #67e8f9, #7042f8)",
                  filter: "blur(5px)",
                }}
              />
              <div
                className="relative rounded-full overflow-hidden"
                style={{ width: 36, height: 36 }}
              >
                <Image
                  src="/Logo_.png"
                  alt="YattuX"
                  width={36}
                  height={36}
                  className="transition-all duration-700 ease-out group-hover:rotate-[360deg] group-hover:scale-105"
                />
              </div>
            </div>
            <span
              className="hidden sm:block text-[13px] font-semibold tracking-widest"
              style={{ color: "rgba(230,222,255,0.92)" }}
            >
              YattuX
            </span>
          </a>

          {/* ── CENTER : Page title ── */}
          <div className="absolute left-1/2 -translate-x-1/2 z-10">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentPage}
                initial={{ opacity: 0, y: 6, filter: "blur(8px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -6, filter: "blur(8px)" }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col items-center gap-[3px]"
              >
                {/* Thin accent line above */}
                <div
                  className="w-8 h-[1.5px] rounded-full"
                  style={{
                    background:
                      "linear-gradient(90deg, transparent, rgba(167,139,250,0.8), rgba(103,232,249,0.8), transparent)",
                  }}
                />
                <span
                  className="text-[10.5px] font-bold tracking-[0.38em] uppercase"
                  style={{
                    color: "rgba(235,225,255,0.90)",
                    textShadow:
                      "0 0 30px rgba(167,139,250,0.6), 0 0 8px rgba(103,232,249,0.3)",
                  }}
                >
                  {currentPage}
                </span>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* ── RIGHT : LinkedIn ── */}
          <a
            href="https://www.linkedin.com/in/aboubacar-tidiane-yattara-5608b6232/"
            target="_blank"
            rel="noopener noreferrer"
            className="relative z-10 shrink-0 group flex items-center gap-2"
          >
            <div
              className="flex items-center justify-center w-9 h-9 rounded-xl transition-all duration-300 group-hover:scale-105"
              style={{
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.08)",
                boxShadow: "inset 0 1px 0 rgba(255,255,255,0.06)",
                transition: "background 0.3s, box-shadow 0.3s, transform 0.3s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.background =
                  "rgba(10,102,194,0.18)";
                (e.currentTarget as HTMLDivElement).style.boxShadow =
                  "inset 0 1px 0 rgba(255,255,255,0.08), 0 0 16px rgba(10,102,194,0.4)";
                (e.currentTarget as HTMLDivElement).style.borderColor =
                  "rgba(10,102,194,0.45)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.background =
                  "rgba(255,255,255,0.05)";
                (e.currentTarget as HTMLDivElement).style.boxShadow =
                  "inset 0 1px 0 rgba(255,255,255,0.06)";
                (e.currentTarget as HTMLDivElement).style.borderColor =
                  "rgba(255,255,255,0.08)";
              }}
            >
              <FaLinkedin
                size={17}
                className="transition-colors duration-300 group-hover:text-[#0A66C2]"
                style={{ color: "rgba(205,195,245,0.85)" }}
              />
            </div>
          </a>
        </nav>
      </motion.div>
    </header>
  );
}
