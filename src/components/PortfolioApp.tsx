"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import NavBar from "@/components/main/NavBar";
import TabNav from "@/components/main/TabNav";
import Hero from "@/components/main/Hero";
import Skills from "@/components/main/Skills";
import Projects from "@/components/main/Projects";

const PAGES = [
  { id: "home",     label: "Home"     },
  { id: "skills",   label: "Skills"   },
  { id: "projects", label: "Projects" },
] as const;

type PageId = (typeof PAGES)[number]["id"];

/* ─── Vertical separator between TabNav and content ─────────────────── */
function Separator() {
  return (
    <motion.div
      initial={{ opacity: 0, scaleY: 0 }}
      animate={{ opacity: 1, scaleY: 1 }}
      transition={{ duration: 1.0, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
      style={{ originY: "50%" }}
      className="fixed left-[234px] top-[14vh] h-[72vh] z-40 hidden lg:flex flex-col items-center pointer-events-none"
    >
      {/* Glow bloom behind the line */}
      <div
        className="absolute inset-x-[-5px] inset-y-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(180deg, transparent, rgba(112,66,248,0.13) 20%, rgba(167,139,250,0.18) 50%, rgba(103,232,249,0.11) 80%, transparent)",
          filter: "blur(7px)",
        }}
      />

      {/* Top glowing node */}
      <div
        className="w-[6px] h-[6px] rounded-full shrink-0 relative z-10"
        style={{
          background: "rgba(167,139,250,0.85)",
          boxShadow:
            "0 0 12px rgba(167,139,250,0.90), 0 0 4px rgba(167,139,250,1)",
        }}
      />

      {/* Gradient line */}
      <div
        className="flex-1 w-px relative z-10"
        style={{
          background:
            "linear-gradient(180deg, rgba(167,139,250,0.55) 0%, rgba(112,66,248,0.45) 35%, rgba(103,232,249,0.50) 65%, rgba(103,232,249,0.40) 100%)",
        }}
      />

      {/* Bottom glowing node */}
      <div
        className="w-[6px] h-[6px] rounded-full shrink-0 relative z-10"
        style={{
          background: "rgba(103,232,249,0.85)",
          boxShadow:
            "0 0 12px rgba(103,232,249,0.90), 0 0 4px rgba(103,232,249,1)",
        }}
      />
    </motion.div>
  );
}

/* ─── Main app ───────────────────────────────────────────────────────── */
export default function PortfolioApp() {
  const [currentPage, setCurrentPage] = useState<PageId>("home");
  const [direction, setDirection] = useState(0);

  const navigate = (pageId: string) => {
    const from = PAGES.findIndex((p) => p.id === currentPage);
    const to   = PAGES.findIndex((p) => p.id === pageId);
    if (from === to) return;
    setDirection(to > from ? 1 : -1);
    setCurrentPage(pageId as PageId);
  };

  const label = PAGES.find((p) => p.id === currentPage)?.label ?? "Home";

  return (
    <>
      <NavBar currentPage={label} />
      <TabNav currentPage={currentPage} onNavigate={navigate} />
      <Separator />

      {/* Full-screen page container */}
      <div className="fixed inset-0 overflow-hidden">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={currentPage}
            custom={direction}
            variants={{
              hidden: (dir: number) => ({
                opacity: 0,
                y: dir > 0 ? 48 : -48,
                scale: 0.97,
              }),
              visible: {
                opacity: 1,
                y: 0,
                scale: 1,
              },
              exit: (dir: number) => ({
                opacity: 0,
                y: dir > 0 ? -48 : 48,
                scale: 0.97,
              }),
            }}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{ duration: 0.50, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-0 overflow-y-auto scrollbar-hidden"
          >
            {/*
              Padding:
              - top:    90px   → clears floating NavBar
              - left:   256px  → clears left TabNav + separator (lg+)
              - bottom: 100px  → clears mobile bottom TabNav
            */}
            <div className="min-h-full w-full pt-[100px] pb-[120px] lg:pb-8 lg:pt-[90px] lg:pl-[256px]">
              <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-8 xl:px-12">
                {currentPage === "home"     && <Hero onNavigate={navigate} />}
                {currentPage === "skills"   && <Skills />}
                {currentPage === "projects" && <Projects />}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </>
  );
}
