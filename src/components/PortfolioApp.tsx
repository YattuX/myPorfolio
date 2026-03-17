"use client";

import { useState, useEffect, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import NavBar from "@/components/main/NavBar";
import TabNav from "@/components/main/TabNav";
import Hero from "@/components/main/Hero";
import Skills from "@/components/main/Skills";
import Projects from "@/components/main/Projects";
import { HiLightBulb, HiBriefcase, HiPhone, HiMail } from "react-icons/hi";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const PAGES = [
  { id: "home",     label: "Home"     },
  { id: "skills",   label: "Skills"   },
  { id: "projects", label: "Projects" },
] as const;

type PageId = (typeof PAGES)[number]["id"];

const EASE = [0.16, 1, 0.3, 1] as [number, number, number, number];

/* ─── Desktop vertical separator ────────────────────────────────────── */
function Separator() {
  return (
    <motion.div
      initial={{ opacity: 0, scaleY: 0 }}
      animate={{ opacity: 1, scaleY: 1 }}
      transition={{ duration: 1.0, delay: 0.5, ease: EASE }}
      style={{ originY: "50%" }}
      className="fixed left-[234px] top-[14vh] h-[72vh] z-40 hidden lg:flex flex-col items-center pointer-events-none"
    >
      <div
        className="absolute inset-x-[-5px] inset-y-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(180deg, transparent, rgba(112,66,248,0.13) 20%, rgba(167,139,250,0.18) 50%, rgba(103,232,249,0.11) 80%, transparent)",
          filter: "blur(7px)",
        }}
      />
      <div className="w-[6px] h-[6px] rounded-full shrink-0 relative z-10"
        style={{ background: "rgba(167,139,250,0.85)", boxShadow: "0 0 12px rgba(167,139,250,0.90), 0 0 4px rgba(167,139,250,1)" }}
      />
      <div className="flex-1 w-px relative z-10"
        style={{ background: "linear-gradient(180deg, rgba(167,139,250,0.55) 0%, rgba(112,66,248,0.45) 35%, rgba(103,232,249,0.50) 65%, rgba(103,232,249,0.40) 100%)" }}
      />
      <div className="w-[6px] h-[6px] rounded-full shrink-0 relative z-10"
        style={{ background: "rgba(103,232,249,0.85)", boxShadow: "0 0 12px rgba(103,232,249,0.90), 0 0 4px rgba(103,232,249,1)" }}
      />
    </motion.div>
  );
}

/* ─── Mobile section divider ─────────────────────────────────────────── */
function SectionDivider({
  label,
  Icon,
  accentFrom,
  accentTo,
}: {
  label: string;
  Icon: React.ComponentType<{ size?: number; style?: React.CSSProperties }>;
  accentFrom: string;
  accentTo: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, ease: EASE }}
      className="relative flex flex-col items-center py-2 px-4 overflow-hidden"
    >
      {/* Ambient glow */}
      <div
        className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-16 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse 60% 100% at 50% 50%, ${accentFrom}18 0%, transparent 70%)`,
          filter: "blur(12px)",
        }}
      />

      {/* Main row: line ◆ pill ◆ line */}
      <div className="relative flex items-center w-full gap-3">
        {/* Left line */}
        <div className="flex-1 flex items-center">
          <div
            className="h-px flex-1"
            style={{ background: `linear-gradient(90deg, transparent, ${accentFrom}50)` }}
          />
          {/* Left node */}
          <motion.div
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-[5px] h-[5px] rounded-full shrink-0 ml-2"
            style={{
              background: accentFrom,
              boxShadow: `0 0 8px ${accentFrom}`,
            }}
          />
        </div>

        {/* Center pill */}
        <div
          className="relative flex items-center gap-2 px-4 py-[7px] rounded-full shrink-0"
          style={{
            background: `linear-gradient(135deg, ${accentFrom}18 0%, ${accentTo}0e 100%)`,
            border: `1px solid ${accentFrom}35`,
            boxShadow: `0 0 20px ${accentFrom}14, inset 0 1px 0 rgba(255,255,255,0.06)`,
          }}
        >
          {/* Top shimmer */}
          <div
            className="absolute top-0 left-[10%] right-[10%] h-px rounded-full"
            style={{ background: `linear-gradient(90deg, transparent, ${accentFrom}60, transparent)` }}
          />
          <Icon
            size={13}
            style={{ color: accentFrom, filter: `drop-shadow(0 0 5px ${accentFrom})` }}
          />
          <span
            className="text-[10px] font-bold tracking-[0.25em] uppercase"
            style={{ color: `${accentFrom}cc` }}
          >
            {label}
          </span>
        </div>

        {/* Right line */}
        <div className="flex-1 flex items-center">
          {/* Right node */}
          <motion.div
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 1.25 }}
            className="w-[5px] h-[5px] rounded-full shrink-0 mr-2"
            style={{
              background: accentTo,
              boxShadow: `0 0 8px ${accentTo}`,
            }}
          />
          <div
            className="h-px flex-1"
            style={{ background: `linear-gradient(90deg, ${accentTo}50, transparent)` }}
          />
        </div>
      </div>
    </motion.div>
  );
}

/* ─── Mobile footer ───────────────────────────────────────────────────── */
function MobileFooter() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.8, ease: EASE }}
      className="relative w-full mt-6 overflow-hidden"
    >
      {/* ── Top closing border with glow ── */}
      <div className="relative h-px w-full">
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, transparent 0%, #a78bfa 30%, #67e8f9 70%, transparent 100%)",
          }}
        />
        <div
          className="absolute inset-x-[15%] top-0 h-[1px]"
          style={{
            background: "rgba(167,139,250,0.6)",
            filter: "blur(6px)",
          }}
        />
      </div>

      {/* ── Background: gradient fade to very dark ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(180deg, rgba(8,4,28,0) 0%, rgba(5,3,18,0.75) 25%, rgba(3,1,12,0.95) 60%, rgba(2,1,8,1) 100%)",
        }}
      />

      {/* ── Content ── */}
      <div className="relative z-10 px-6 pt-10 pb-0">

        {/* Identity */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.05, ease: EASE }}
          className="flex flex-col items-center gap-2 mb-8"
        >
          <span
            className="text-[10px] font-bold tracking-[0.32em] uppercase"
            style={{ color: "rgba(167,139,250,0.50)" }}
          >
            me contacter
          </span>
          <h3
            className="text-lg font-extrabold text-center"
            style={{
              background: "linear-gradient(100deg, #e879f9 0%, #a78bfa 45%, #67e8f9 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Yattara Aboubacar Tidiane
          </h3>
          <p className="text-[12px]" style={{ color: "rgba(170,160,215,0.55)" }}>
            Analyste Développeur
          </p>
        </motion.div>

        {/* Contact rows */}
        <div className="flex flex-col gap-3 mb-8">
          {[
            { href: "tel:+224622596505",        Icon: HiPhone, label: "+224 622 596 505",    accent: "#a78bfa" },
            { href: "mailto:yattara.pro@gmail.com", Icon: HiMail,  label: "yattara.pro@gmail.com", accent: "#67e8f9" },
          ].map((c, i) => (
            <motion.a
              key={c.href}
              href={c.href}
              initial={{ opacity: 0, x: -14 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: 0.12 + i * 0.08, ease: EASE }}
              className="flex items-center gap-3.5 px-4 py-3 rounded-2xl"
              style={{
                background: `linear-gradient(135deg, ${c.accent}0d 0%, rgba(255,255,255,0.02) 100%)`,
                border: `1px solid ${c.accent}22`,
              }}
            >
              <div
                className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0"
                style={{
                  background: `${c.accent}15`,
                  border: `1px solid ${c.accent}30`,
                  boxShadow: `0 0 12px ${c.accent}18`,
                }}
              >
                <c.Icon size={16} style={{ color: c.accent, filter: `drop-shadow(0 0 5px ${c.accent}88)` }} />
              </div>
              <span className="text-[13px] font-medium" style={{ color: "rgba(215,205,255,0.88)" }}>
                {c.label}
              </span>
            </motion.a>
          ))}
        </div>

        {/* Social buttons */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: 0.28, ease: EASE }}
          className="flex gap-3 justify-center mb-10"
        >
          {[
            {
              href: "https://www.linkedin.com/in/aboubacar-tidiane-yattara-5608b6232/",
              Icon: FaLinkedin, label: "LinkedIn",
              accent: "#0A66C2", glow: "rgba(10,102,194,0.35)",
              bg: "rgba(10,102,194,0.10)", border: "rgba(10,102,194,0.30)",
            },
            {
              href: "https://github.com/YattuX-Pro",
              Icon: FaGithub, label: "GitHub",
              accent: "#c4b5fd", glow: "rgba(167,139,250,0.30)",
              bg: "rgba(167,139,250,0.10)", border: "rgba(167,139,250,0.28)",
            },
          ].map((s) => (
            <a
              key={s.href}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 px-5 py-2.5 rounded-2xl transition-all duration-300"
              style={{ background: s.bg, border: `1px solid ${s.border}`, boxShadow: `0 4px 20px ${s.glow}` }}
            >
              <s.Icon size={17} style={{ color: s.accent }} />
              <span className="text-[13px] font-semibold" style={{ color: "rgba(210,200,255,0.85)" }}>
                {s.label}
              </span>
            </a>
          ))}
        </motion.div>
      </div>

      {/* ── Copyright bar — very last element, closes the page ── */}
      <div
        className="relative z-10 flex flex-col items-center gap-1.5 px-6 py-5"
        style={{ borderTop: "1px solid rgba(167,139,250,0.08)", background: "rgba(2,1,8,0.60)" }}
      >
        {/* Tiny logo row */}
        <div className="flex items-center gap-2 mb-0.5">
          <div
            className="w-1.5 h-1.5 rounded-full"
            style={{ background: "linear-gradient(135deg, #a78bfa, #67e8f9)", boxShadow: "0 0 6px rgba(167,139,250,0.7)" }}
          />
          <span
            className="text-[11px] font-bold tracking-[0.20em] uppercase"
            style={{ color: "rgba(167,139,250,0.45)" }}
          >
            Yattara
          </span>
          <div
            className="w-1.5 h-1.5 rounded-full"
            style={{ background: "linear-gradient(135deg, #67e8f9, #a78bfa)", boxShadow: "0 0 6px rgba(103,232,249,0.7)" }}
          />
        </div>
        <p
          className="text-[10px] text-center"
          style={{ color: "rgba(130,120,180,0.35)" }}
        >
          © {new Date().getFullYear()} · Tous droits réservés
        </p>
      </div>
    </motion.footer>
  );
}

/* ─── Main app ───────────────────────────────────────────────────────── */
export default function PortfolioApp() {
  const [currentPage, setCurrentPage] = useState<PageId>("home");
  const [direction, setDirection] = useState(0);
  const [mobileSection, setMobileSection] = useState<PageId>("home");

  const navigate = (pageId: string) => {
    const from = PAGES.findIndex((p) => p.id === currentPage);
    const to   = PAGES.findIndex((p) => p.id === pageId);
    if (from === to) return;
    setDirection(to > from ? 1 : -1);
    setCurrentPage(pageId as PageId);
  };

  const scrollToSection = useCallback((id: string) => {
    const el = document.getElementById(`section-${id}`);
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY - 70;
    window.scrollTo({ top, behavior: "smooth" });
  }, []);

  useEffect(() => {
    const SECTION_IDS: PageId[] = ["home", "skills", "projects"];
    const handleScroll = () => {
      const trigger = window.innerHeight * 0.4;
      for (let i = SECTION_IDS.length - 1; i >= 0; i--) {
        const el = document.getElementById(`section-${SECTION_IDS[i]}`);
        if (el && el.getBoundingClientRect().top <= trigger) {
          setMobileSection(SECTION_IDS[i]);
          return;
        }
      }
      setMobileSection("home");
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const label = PAGES.find((p) => p.id === currentPage)?.label ?? "Home";

  return (
    <>
      <NavBar
        currentPage={label}
        mobileActive={mobileSection}
        onMobileNavigate={scrollToSection}
      />
      <TabNav currentPage={currentPage} onNavigate={navigate} />
      <Separator />

      {/* ════════════════════════════════════════════════════════════════
          DESKTOP — fixed, page-based navigation
          ════════════════════════════════════════════════════════════════ */}
      <div className="hidden lg:block fixed inset-0 overflow-hidden">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={currentPage}
            custom={direction}
            variants={{
              hidden:  (dir: number) => ({ opacity: 0, y: dir > 0 ? 48 : -48, scale: 0.97 }),
              visible: { opacity: 1, y: 0, scale: 1 },
              exit:    (dir: number) => ({ opacity: 0, y: dir > 0 ? -48 : 48, scale: 0.97 }),
            }}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{ duration: 0.50, ease: EASE }}
            className={`absolute inset-0 scrollbar-hidden ${
              currentPage === "projects" ? "overflow-y-auto" : "overflow-hidden"
            }`}
          >
            <div className={`w-full pt-[90px] pb-8 pl-[256px] pr-0 ${currentPage === "projects" ? "min-h-full" : "h-full"}`}>
              <div className={`max-w-7xl mx-auto px-8 xl:px-12 ${currentPage !== "projects" ? "h-full" : ""}`}>
                {currentPage === "home"     && <Hero onNavigate={navigate} />}
                {currentPage === "skills"   && <Skills />}
                {currentPage === "projects" && <Projects />}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* ════════════════════════════════════════════════════════════════
          MOBILE — single-page scrolling landing
          ════════════════════════════════════════════════════════════════ */}
      <div className="lg:hidden">
        {/* Hero */}
        <section
          id="section-home"
          className="min-h-[100dvh] pt-[70px] px-4 sm:px-6 flex flex-col justify-center"
        >
          <Hero onNavigate={scrollToSection} />
        </section>

        {/* Divider → Skills */}
        <SectionDivider
          label="Stack technique"
          Icon={HiLightBulb}
          accentFrom="#a78bfa"
          accentTo="#67e8f9"
        />

        {/* Skills */}
        <section id="section-skills" className="px-4 sm:px-6 py-10">
          <Skills />
        </section>

        {/* Divider → Projects */}
        <SectionDivider
          label="Projets"
          Icon={HiBriefcase}
          accentFrom="#67e8f9"
          accentTo="#f0abfc"
        />

        {/* Projects */}
        <section id="section-projects" className="px-4 sm:px-6 py-10">
          <Projects />
        </section>

        {/* Footer */}
        <MobileFooter />
      </div>
    </>
  );
}
