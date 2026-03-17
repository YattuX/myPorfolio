"use client";

import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

const EASE = [0.16, 1, 0.3, 1] as [number, number, number, number];

const CATEGORIES = [
  {
    id: "frontend",
    label: "Front-end",
    shortLabel: "Front",
    accent: "#a78bfa",
    border: "rgba(167,139,250,0.22)",
    glow: "rgba(167,139,250,0.09)",
    barFrom: "#a78bfa",
    barTo: "#67e8f9",
    skills: [
      { src: "/next.png",    name: "Next.js",    level: 80 },
      { src: "/angular.png", name: "Angular",    level: 85 },
      { src: "/ts.png",      name: "TypeScript", level: 76 },
    ],
  },
  {
    id: "backend",
    label: "Back-end",
    shortLabel: "Back",
    accent: "#67e8f9",
    border: "rgba(103,232,249,0.22)",
    glow: "rgba(103,232,249,0.09)",
    barFrom: "#67e8f9",
    barTo: "#a78bfa",
    skills: [
      { src: "/dotnet.png",  name: ".NET", level: 92 },
      { src: "/C-Sharp.png", name: "C#",   level: 88 },
    ],
  },
  {
    id: "tools",
    label: "DB & Outils",
    shortLabel: "Outils",
    accent: "#f0abfc",
    border: "rgba(240,171,252,0.20)",
    glow: "rgba(240,171,252,0.08)",
    barFrom: "#f0abfc",
    barTo: "#67e8f9",
    skills: [
      { src: "/postger.png",   name: "PostgreSQL", level: 74 },
      { src: "/docker.webp",   name: "Docker",     level: 70 },
      { src: "/github.png",    name: "GitHub",     level: 78 },
      { src: "/bitbucket.png", name: "Bitbucket",  level: 68 },
    ],
  },
] as const;

/* ════════════════════════════════════════════════════════════════════════
   DESKTOP — skill row with animated bar
   ════════════════════════════════════════════════════════════════════════ */
function SkillBar({
  src, name, level, barFrom, barTo, delay,
}: {
  src: string; name: string; level: number;
  barFrom: string; barTo: string; delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -14 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.42, delay, ease: EASE }}
      className="flex flex-col gap-1"
    >
      <div className="flex items-center gap-2.5">
        <div className="w-7 h-7 flex-shrink-0 flex items-center justify-center">
          <Image src={src} alt={name} width={26} height={26} className="object-contain" />
        </div>
        <span className="flex-1 text-sm font-semibold" style={{ color: "rgba(225,218,255,0.96)" }}>
          {name}
        </span>
        <span className="text-xs font-bold tabular-nums" style={{ color: "rgba(195,185,245,0.75)" }}>
          {level}%
        </span>
      </div>
      <div
        className="relative h-[5px] w-full rounded-full overflow-hidden"
        style={{ background: "rgba(255,255,255,0.06)" }}
      >
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1.1, delay: delay + 0.08, ease: EASE }}
          className="absolute inset-y-0 left-0 rounded-full"
          style={{
            background: `linear-gradient(90deg, ${barFrom}, ${barTo})`,
            boxShadow: `0 0 8px ${barFrom}55`,
          }}
        />
      </div>
    </motion.div>
  );
}

function DesktopCategoryCard({
  cat, index, className = "",
}: {
  cat: (typeof CATEGORIES)[number]; index: number; className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.10, ease: EASE }}
      className={`relative flex flex-col gap-3 p-4 rounded-2xl overflow-hidden ${className}`}
      style={{
        background: `linear-gradient(150deg, ${cat.glow} 0%, rgba(10,6,30,0.78) 100%)`,
        border: `1px solid ${cat.border}`,
        backdropFilter: "blur(20px)",
        boxShadow: "0 8px 40px rgba(0,0,0,0.38), inset 0 1px 0 rgba(255,255,255,0.05)",
      }}
    >
      <div
        className="absolute top-0 left-[8%] right-[8%] h-[1.5px]"
        style={{ background: `linear-gradient(90deg, transparent, ${cat.accent}, transparent)` }}
      />
      <div
        className="absolute top-0 left-0 right-0 h-20 pointer-events-none"
        style={{ background: `radial-gradient(ellipse at 50% 0%, ${cat.glow} 0%, transparent 75%)` }}
      />

      {/* Header */}
      <div className="relative flex items-center gap-2.5 z-10">
        <div
          className="w-[3px] h-4 rounded-full flex-shrink-0"
          style={{ background: cat.accent, boxShadow: `0 0 8px ${cat.accent}` }}
        />
        <h3
          className="text-[11px] font-bold tracking-[0.16em] uppercase"
          style={{ color: cat.accent, textShadow: `0 0 16px ${cat.accent}77` }}
        >
          {cat.label}
        </h3>
      </div>

      {/* Bars */}
      <div className="relative z-10 flex flex-col gap-3 flex-1 justify-around">
        {cat.skills.map((s, i) => (
          <SkillBar
            key={s.name}
            src={s.src} name={s.name} level={s.level}
            barFrom={cat.barFrom} barTo={cat.barTo}
            delay={index * 0.10 + i * 0.08}
          />
        ))}
      </div>
    </motion.div>
  );
}

/* ════════════════════════════════════════════════════════════════════════
   MOBILE — circular progress per skill
   ════════════════════════════════════════════════════════════════════════ */
function CircularSkill({
  src, name, level, accent, delay,
}: {
  src: string; name: string; level: number; accent: string; delay: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const size = 72;
  const r = size * 0.36;
  const cx = size / 2;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.75 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.38, delay, ease: EASE }}
      className="flex flex-col items-center gap-1"
    >
      <div className="relative flex-shrink-0" style={{ width: size, height: size }}>
        <svg viewBox={`0 0 ${size} ${size}`} className="w-full h-full" style={{ transform: "rotate(-90deg)" }}>
          <circle cx={cx} cy={cx} r={r} fill="none" stroke="rgba(255,255,255,0.07)" strokeWidth="4" />
          <motion.circle
            cx={cx} cy={cx} r={r}
            fill="none" stroke={accent}
            strokeWidth="4" strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: isInView ? level / 100 : 0 }}
            transition={{ duration: 1.2, delay: delay + 0.1, ease: EASE }}
            style={{ filter: `drop-shadow(0 0 4px ${accent}88)` }}
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <Image src={src} alt={name} width={30} height={30} className="object-contain" />
        </div>
        <div
          className="absolute bottom-0 right-0 text-[8px] font-bold px-1 py-px rounded-full"
          style={{
            background: accent + "22",
            border: `1px solid ${accent}44`,
            color: accent,
            transform: "translate(20%, 20%)",
          }}
        >
          {level}%
        </div>
      </div>
      <span className="text-[9px] font-semibold text-center leading-tight" style={{ color: "rgba(220,212,255,0.92)" }}>
        {name}
      </span>
    </motion.div>
  );
}

/* 3-column card: one category per column */
function MobileCategoryCard({
  cat, index,
}: {
  cat: (typeof CATEGORIES)[number]; index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.42, delay: index * 0.07, ease: EASE }}
      className="relative flex flex-col gap-3 p-3 rounded-2xl overflow-hidden"
      style={{
        background: `linear-gradient(150deg, ${cat.glow} 0%, rgba(10,6,30,0.82) 100%)`,
        border: `1px solid ${cat.border}`,
        backdropFilter: "blur(16px)",
      }}
    >
      {/* top accent line */}
      <div
        className="absolute top-0 left-0 right-0 h-[1.5px]"
        style={{ background: `linear-gradient(90deg, transparent, ${cat.accent}, transparent)` }}
      />

      {/* label */}
      <div className="flex items-center justify-center gap-1.5 pt-0.5">
        <div className="w-[2.5px] h-3 rounded-full flex-shrink-0" style={{ background: cat.accent }} />
        <h3 className="text-[9px] font-bold tracking-[0.12em] uppercase" style={{ color: cat.accent }}>
          {cat.shortLabel}
        </h3>
      </div>

      {/* skills stacked */}
      <div className="flex flex-col items-center gap-3">
        {cat.skills.map((s, i) => (
          <CircularSkill
            key={s.name}
            src={s.src} name={s.name} level={s.level}
            accent={cat.accent}
            delay={index * 0.07 + i * 0.06}
          />
        ))}
      </div>
    </motion.div>
  );
}

/* ════════════════════════════════════════════════════════════════════════
   STATS BAR (shared)
   ════════════════════════════════════════════════════════════════════════ */
function StatsBar() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay: 0.3, ease: EASE }}
      className="flex flex-wrap gap-5 items-center px-5 py-3.5 rounded-2xl"
      style={{
        background: "rgba(255,255,255,0.025)",
        border: "1px solid rgba(167,139,250,0.10)",
      }}
    >
      {[
        { value: "9",  label: "Technologies" },
        { value: "3",  label: "Domaines"     },
        { value: "3+", label: "Années d'expérience" },
      ].map((s) => (
        <div key={s.label} className="flex items-baseline gap-2">
          <span
            className="text-xl font-extrabold"
            style={{
              background: "linear-gradient(135deg, #a78bfa, #67e8f9)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            {s.value}
          </span>
          <span className="text-xs" style={{ color: "rgba(178,168,225,0.75)" }}>{s.label}</span>
        </div>
      ))}
    </motion.div>
  );
}

/* ════════════════════════════════════════════════════════════════════════
   HEADER (shared)
   ════════════════════════════════════════════════════════════════════════ */
function Header() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.48, ease: EASE }}
      className="flex flex-col gap-1.5"
    >
      <h2
        className="text-3xl md:text-4xl font-extrabold leading-tight"
        style={{
          background: "linear-gradient(100deg, #e879f9 0%, #a78bfa 40%, #67e8f9 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
        }}
      >
        Stack technique
      </h2>
      <p className="text-sm" style={{ color: "rgba(178,168,225,0.75)" }}>
        Niveau de maîtrise par technologie
      </p>
      <div className="h-px w-16 mt-1" style={{ background: "linear-gradient(90deg, rgba(167,139,250,0.7), transparent)" }} />
    </motion.div>
  );
}

/* ════════════════════════════════════════════════════════════════════════
   MAIN
   ════════════════════════════════════════════════════════════════════════ */
export default function Skills() {
  return (
    <>
      {/* ── DESKTOP (lg+) : bars filling height ── */}
      <section className="hidden lg:flex flex-col gap-3 w-full h-full min-h-0">
        <Header />
        <div className="flex-1 grid grid-cols-2 gap-3 min-h-0">
          <DesktopCategoryCard cat={CATEGORIES[0]} index={0} />
          <DesktopCategoryCard cat={CATEGORIES[1]} index={1} />
          <DesktopCategoryCard cat={CATEGORIES[2]} index={2} className="col-span-2" />
        </div>
        <StatsBar />
      </section>

      {/* ── MOBILE (< lg) : 3 columns, one per category ── */}
      <section className="flex lg:hidden flex-col gap-4 w-full">
        <Header />
        <div className="grid grid-cols-3 gap-2.5">
          {CATEGORIES.map((cat, i) => (
            <MobileCategoryCard key={cat.id} cat={cat} index={i} />
          ))}
        </div>
        <StatsBar />
      </section>
    </>
  );
}
