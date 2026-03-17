"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiArrowRight, HiDownload } from "react-icons/hi";

/* ─── Animation variants ────────────────────────────────────────────── */
// framer-motion v12: ease must be typed as a 4-tuple (BezierDefinition)
const EASE = [0.16, 1, 0.3, 1] as [number, number, number, number];

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.10, delayChildren: 0.08 } },
};
const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1, y: 0,
    transition: { duration: 0.60, ease: EASE },
  },
};
const fadeRight = {
  hidden: { opacity: 0, x: 70, scale: 0.94 },
  visible: {
    opacity: 1, x: 0, scale: 1,
    transition: { duration: 0.85, ease: EASE, delay: 0.2 },
  },
};

const STATS = [
  { value: "5+", label: "Projets"  },
  { value: "3+", label: "Années"   },
  { value: "2",  label: "Domaines" },
];

/* Badges floating around the desktop visual */
const BADGES = [
  { src: "/next.png",      label: "Next.js",    pos: "top-[-22px] left-1/2 -translate-x-1/2",    floatDelay: 0    },
  { src: "/angular.png",   label: "Angular",    pos: "top-[16%] right-[-60px]",                  floatDelay: 0.8  },
  { src: "/dotnet.png",    label: ".NET",       pos: "bottom-[-22px] left-1/2 -translate-x-1/2", floatDelay: 1.6  },
  { src: "/C-Sharp.png",   label: "C#",         pos: "top-[16%] left-[-60px]",                   floatDelay: 2.4  },
  { src: "/ts.png",        label: "TypeScript", pos: "bottom-[16%] right-[-60px]",               floatDelay: 3.2  },
];

/* ─── Shared text content (used in both mobile + desktop) ────────────── */
function HeroText({ isMobile = false, onNavigate }: { isMobile?: boolean; onNavigate?: (id: string) => void }) {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="visible"
      className={`flex flex-col ${isMobile ? "gap-3" : "gap-3"} ${isMobile ? "items-center text-center" : "items-start text-left"}`}
    >
      {/* Available status — desktop only */}
      <motion.div
        variants={fadeUp}
        className="hidden lg:flex items-center gap-2.5 px-4 py-2 rounded-lg"
        style={{
          background: "rgba(74,222,128,0.05)",
          border: "1px solid rgba(74,222,128,0.22)",
          backdropFilter: "blur(8px)",
        }}
      >
        <span className="relative flex h-2.5 w-2.5 flex-shrink-0">
          <motion.span
            animate={{ scale: [1, 2.4], opacity: [0.6, 0] }}
            transition={{ repeat: Infinity, duration: 2.2, ease: "easeOut", repeatDelay: 0.6 }}
            className="absolute inline-flex h-full w-full rounded-full"
            style={{ background: "rgba(74,222,128,0.55)" }}
          />
          <span
            className="relative inline-flex h-2.5 w-2.5 rounded-full"
            style={{ background: "rgba(74,222,128,0.90)", boxShadow: "0 0 8px rgba(74,222,128,0.7)" }}
          />
        </span>
        <span
          className="text-sm font-medium tracking-wide"
          style={{ color: "rgba(134,239,172,0.85)", textShadow: "0 0 18px rgba(74,222,128,0.35)" }}
        >
          Disponible pour de nouvelles opportunités
        </span>
      </motion.div>

      {/* Greeting */}
      <motion.p
        variants={fadeUp}
        className="text-sm tracking-[0.18em] uppercase -mb-2"
        style={{ color: "rgba(167,139,250,0.88)" }}
      >
        Hello, je suis
      </motion.p>

      {/* Name */}
      <motion.div variants={fadeUp} className="flex flex-col gap-0.5">
        <h1
          className="font-extrabold leading-tight text-white"
          style={{
            fontSize: isMobile ? "clamp(38px, 10vw, 52px)" : "clamp(40px, 4.5vw, 62px)",
            letterSpacing: "-0.02em",
          }}
        >
          Yattara Aboubacar
        </h1>
        <h1
          className="font-extrabold leading-tight"
          style={{
            fontSize: isMobile ? "clamp(38px, 10vw, 52px)" : "clamp(40px, 4.5vw, 62px)",
            letterSpacing: "-0.02em",
            background: "linear-gradient(100deg, #e879f9 0%, #a78bfa 40%, #67e8f9 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          Tidiane.
        </h1>
      </motion.div>

      {/* Role */}
      <motion.p
        variants={fadeUp}
        className="text-lg font-semibold tracking-wide"
        style={{ color: "rgba(210,200,255,0.90)" }}
      >
        Analyste Développeur
      </motion.p>

      {/* Bio */}
      <motion.p
        variants={fadeUp}
        className={`text-[15px] leading-relaxed ${isMobile ? "max-w-[400px]" : "max-w-[600px]"}`}
        style={{ color: "rgba(185,175,235,0.82)" }}
      >
        J'analyse, conçois et déploie des solutions logicielles robustes —
        en alliant rigueur fonctionnelle, architecture technique maîtrisée
        et expérience utilisateur soignée.
      </motion.p>

      {/* CTA buttons */}
      <motion.div variants={fadeUp} className="flex flex-wrap gap-3">
        <motion.button
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.96 }}
          transition={{ type: "spring", stiffness: 180, damping: 20 }}
          onClick={() => onNavigate?.("projects")}
          className="flex items-center gap-2 px-6 py-[11px] rounded-xl font-semibold text-white text-sm"
          style={{
            background: "linear-gradient(135deg, rgba(112,66,248,0.85) 0%, rgba(67,232,249,0.55) 100%)",
            border: "1px solid rgba(167,139,250,0.45)",
            boxShadow: "0 4px 24px rgba(112,66,248,0.38), inset 0 1px 0 rgba(255,255,255,0.14)",
          }}
        >
          Voir mes projets <HiArrowRight size={15} />
        </motion.button>
        <motion.a
          href="/cv/CV_Yattara_Aboubacar.pdf"
          download
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.96 }}
          transition={{ type: "spring", stiffness: 180, damping: 20 }}
          className="flex items-center gap-2 px-6 py-[11px] rounded-xl font-semibold text-sm"
          style={{
            background: "rgba(255,255,255,0.05)",
            border: "1px solid rgba(167,139,250,0.22)",
            color: "rgba(205,195,255,0.82)",
            backdropFilter: "blur(12px)",
            boxShadow: "inset 0 1px 0 rgba(255,255,255,0.07)",
          }}
        >
          <HiDownload size={15} /> CV
        </motion.a>
      </motion.div>

      {/* Socials */}
      <motion.div variants={fadeUp} className="flex items-center gap-3">
        <span className="text-[11px] tracking-widest uppercase" style={{ color: "rgba(160,150,210,0.70)" }}>
          Suivre sur
        </span>
        <div className="h-px w-10" style={{ background: "linear-gradient(90deg, rgba(130,120,180,0.3), transparent)" }} />
        {[
          { href: "https://github.com/YattuX-Pro", icon: <FaGithub size={19} /> },
          { href: "https://www.linkedin.com/in/aboubacar-tidiane-yattara-5608b6232/", icon: <FaLinkedin size={19} />, hoverColor: "#0A66C2" },
        ].map((s, i) => (
          <a key={i} href={s.href} target="_blank" rel="noopener noreferrer"
            className="group p-2 rounded-xl transition-colors duration-300 hover:bg-white/[0.07]"
          >
            <span className="block transition-all duration-300 group-hover:scale-110"
              style={{ color: "rgba(195,185,245,0.78)" }}
            >{s.icon}</span>
          </a>
        ))}
      </motion.div>

      {/* Stats */}
      <motion.div variants={fadeUp} className="flex gap-3 pt-1">
        {STATS.map((s, i) => (
          <div key={i} className="flex flex-col items-center px-5 py-[10px] rounded-2xl"
            style={{
              background: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(167,139,250,0.12)",
              backdropFilter: "blur(10px)",
              minWidth: 68,
            }}
          >
            <span className="text-[22px] font-extrabold"
              style={{
                background: "linear-gradient(135deg, #a78bfa, #67e8f9)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >{s.value}</span>
            <span className="text-[10px] font-medium mt-0.5" style={{ color: "rgba(178,168,228,0.75)" }}>
              {s.label}
            </span>
          </div>
        ))}
      </motion.div>
    </motion.div>
  );
}

/* ─── Desktop visual (circle + floating badges) ──────────────────────── */
function DesktopVisual() {
  return (
    <motion.div
      variants={fadeRight}
      initial="hidden"
      animate="visible"
      className="hidden lg:flex flex-shrink-0 items-center justify-center"
    >
      <div className="relative w-[360px] h-[360px] lg:w-[420px] lg:h-[420px] xl:w-[480px] xl:h-[480px]">
        {/* Ambient glow orbs */}
        <div className="absolute inset-0 rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(112,66,248,0.22) 0%, transparent 65%)", filter: "blur(50px)" }}
        />
        <div className="absolute inset-[25%] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(67,232,249,0.18) 0%, transparent 70%)", filter: "blur(35px)" }}
        />

        {/* Static outer orbit ring */}
        <div className="absolute inset-[16px] rounded-full border pointer-events-none"
          style={{ borderColor: "rgba(112,66,248,0.10)" }}
        />

        {/* Gradient ring — opacity pulse (no rotation = no GPU repaint) */}
        <motion.div
          animate={{ opacity: [0.45, 0.90, 0.45] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-[36px] rounded-full"
          style={{
            background: "conic-gradient(from 45deg, transparent 0%, #7c3aed 25%, #a78bfa 50%, #67e8f9 75%, transparent 100%)",
            padding: "2.5px",
            willChange: "opacity",
          }}
        />

        {/* Glass inner circle */}
        <div
          className="absolute inset-[39px] rounded-full flex items-center justify-center overflow-hidden"
          style={{
            background: "linear-gradient(145deg, rgba(18,10,48,0.94) 0%, rgba(6,4,20,0.90) 100%)",
            backdropFilter: "blur(20px)",
            border: "1px solid rgba(167,139,250,0.14)",
            boxShadow: "inset 0 1px 0 rgba(255,255,255,0.08)",
          }}
        >
          <div className="absolute top-0 left-[15%] right-[15%] h-px"
            style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.30), transparent)" }}
          />
          <Image src="/mainIconsdark.svg" alt="Tech icons"
            width={230} height={230}
            className="opacity-90 xl:w-[270px] xl:h-[270px]"
          />
        </div>

        {/* Floating tech badges */}
        {BADGES.map((b, i) => (
          <motion.div
            key={b.label}
            className={`absolute ${b.pos} flex items-center gap-2 px-3 py-[7px] rounded-full z-10`}
            initial={{ opacity: 0, scale: 0.65 }}
            animate={{ opacity: 1, scale: 1, y: [0, -9, 0] }}
            transition={{
              opacity: { delay: 0.7 + i * 0.14, duration: 0.4 },
              scale:   { delay: 0.7 + i * 0.14, duration: 0.4 },
              y: { delay: b.floatDelay, duration: 3.4 + i * 0.45, repeat: Infinity, ease: "easeInOut" },
            }}
            style={{
              background: "rgba(10,6,30,0.92)",
              border: "1px solid rgba(167,139,250,0.26)",
              boxShadow: "0 4px 20px rgba(0,0,0,0.50)",
              willChange: "transform",
            }}
          >
            <Image src={b.src} alt={b.label} width={18} height={18} className="object-contain" />
            <span className="text-xs font-semibold whitespace-nowrap" style={{ color: "rgba(205,195,255,0.80)" }}>
              {b.label}
            </span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

/* ─── Mobile tech grid (shown only on mobile/tablet) ─────────────────── */
const MOBILE_TECHS = [
  { src: "/next.png",    label: "Next.js"    },
  { src: "/angular.png", label: "Angular"    },
  { src: "/ts.png",      label: "TypeScript" },
  { src: "/dotnet.png",  label: ".NET"       },
  { src: "/C-Sharp.png", label: "C#"         },
];

function MobileTechGrid() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.9, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="lg:hidden flex flex-wrap gap-2 justify-center w-full pt-2"
    >
      {MOBILE_TECHS.map((t, i) => (
        <motion.div
          key={t.label}
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.0 + i * 0.08, duration: 0.35 }}
          className="flex items-center justify-center gap-2 px-3 py-[11px] rounded-xl"
          style={{
            flex: "0 0 calc(33.33% - 6px)",
            background: "rgba(255,255,255,0.04)",
            border: "1px solid rgba(167,139,250,0.15)",
            backdropFilter: "blur(10px)",
          }}
        >
          <Image src={t.src} alt={t.label} width={26} height={26} className="object-contain flex-shrink-0" />
          <span className="text-[11px] font-medium truncate" style={{ color: "rgba(190,180,235,0.70)" }}>
            {t.label}
          </span>
        </motion.div>
      ))}
    </motion.div>
  );
}

/* ─── Main component ─────────────────────────────────────────────────── */
export default function HeroContent({ onNavigate }: { onNavigate?: (id: string) => void }) {
  return (
    <section
      id="about-me"
      className="flex items-center w-full py-2 lg:py-4 h-full"
    >
      {/* ── Mobile / Tablet layout (< lg) ── */}
      <div className="lg:hidden w-full flex flex-col items-center gap-4">
        <HeroText isMobile onNavigate={onNavigate} />
        <MobileTechGrid />
      </div>

      {/* ── Desktop layout (≥ lg) ── */}
      <div className="hidden lg:flex w-full items-center gap-12 xl:gap-20 h-full">
        <div className="flex-1 min-w-0">
          <HeroText onNavigate={onNavigate} />
        </div>
        <DesktopVisual />
      </div>
    </section>
  );
}
