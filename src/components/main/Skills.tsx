"use client";

import { motion } from "framer-motion";
import Image from "next/image";

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
   MOBILE — full-width cards with large icons + skill bars
   ════════════════════════════════════════════════════════════════════════ */
function MobileSkillRow({
  src, name, level, barFrom, barTo, accent, delay,
}: {
  src: string; name: string; level: number;
  barFrom: string; barTo: string; accent: string; delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -18 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ duration: 0.48, delay, ease: EASE }}
      className="flex items-center gap-4"
    >
      {/* Icon container */}
      <div
        className="w-[52px] h-[52px] rounded-2xl flex items-center justify-center shrink-0 relative"
        style={{
          background: `linear-gradient(145deg, ${accent}18 0%, ${accent}08 100%)`,
          border: `1px solid ${accent}30`,
          boxShadow: `0 4px 16px ${accent}12, inset 0 1px 0 rgba(255,255,255,0.06)`,
        }}
      >
        {/* Icon glow */}
        <div
          className="absolute inset-0 rounded-2xl pointer-events-none"
          style={{
            background: `radial-gradient(circle at 50% 30%, ${accent}14 0%, transparent 65%)`,
          }}
        />
        <Image src={src} alt={name} width={30} height={30} className="object-contain relative z-10" />
      </div>

      {/* Name + bar + badge */}
      <div className="flex-1 min-w-0 flex flex-col gap-2">
        <div className="flex items-center justify-between gap-2">
          <span
            className="text-[15px] font-bold truncate"
            style={{ color: "rgba(228,220,255,0.96)" }}
          >
            {name}
          </span>
          <span
            className="text-[11px] font-extrabold tabular-nums shrink-0 px-2 py-[3px] rounded-lg"
            style={{
              background: `${accent}18`,
              border: `1px solid ${accent}35`,
              color: accent,
              textShadow: `0 0 10px ${accent}66`,
            }}
          >
            {level}%
          </span>
        </div>

        {/* Progress track */}
        <div
          className="relative h-[7px] w-full rounded-full overflow-hidden"
          style={{ background: "rgba(255,255,255,0.07)" }}
        >
          {/* Track shimmer */}
          <div
            className="absolute inset-0 rounded-full"
            style={{ background: "linear-gradient(90deg, rgba(255,255,255,0.03) 0%, transparent 100%)" }}
          />
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: `${level}%` }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{ duration: 1.3, delay: delay + 0.12, ease: EASE }}
            className="absolute inset-y-0 left-0 rounded-full"
            style={{
              background: `linear-gradient(90deg, ${barFrom}, ${barTo})`,
              boxShadow: `0 0 12px ${barFrom}60`,
            }}
          />
        </div>
      </div>
    </motion.div>
  );
}

function MobileCategoryCard({
  cat, index,
}: {
  cat: (typeof CATEGORIES)[number]; index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.55, delay: index * 0.08, ease: EASE }}
      className="relative p-5 rounded-2xl overflow-hidden"
      style={{
        background: `linear-gradient(150deg, ${cat.glow} 0%, rgba(8,5,26,0.88) 100%)`,
        border: `1px solid ${cat.border}`,
        backdropFilter: "blur(20px)",
        boxShadow: `0 8px 32px rgba(0,0,0,0.45), inset 0 1px 0 rgba(255,255,255,0.04)`,
      }}
    >
      {/* Top accent line */}
      <div
        className="absolute top-0 left-[6%] right-[6%] h-[1.5px]"
        style={{ background: `linear-gradient(90deg, transparent, ${cat.accent}, transparent)` }}
      />
      {/* Ambient header glow */}
      <div
        className="absolute top-0 left-0 right-0 h-28 pointer-events-none"
        style={{ background: `radial-gradient(ellipse at 50% 0%, ${cat.glow} 0%, transparent 70%)` }}
      />

      {/* Category header */}
      <div className="relative flex items-center gap-3 mb-5 z-10">
        <div
          className="w-1 h-5 rounded-full shrink-0"
          style={{ background: `linear-gradient(180deg, ${cat.barFrom}, ${cat.barTo})`, boxShadow: `0 0 10px ${cat.accent}` }}
        />
        <h3
          className="text-[15px] font-extrabold tracking-wide"
          style={{ color: cat.accent, textShadow: `0 0 18px ${cat.accent}55` }}
        >
          {cat.label}
        </h3>
        <div
          className="ml-auto flex items-center gap-1.5 px-2.5 py-1 rounded-full"
          style={{
            background: `${cat.accent}12`,
            border: `1px solid ${cat.accent}28`,
          }}
        >
          <span
            className="w-1.5 h-1.5 rounded-full"
            style={{ background: cat.accent, boxShadow: `0 0 6px ${cat.accent}` }}
          />
          <span
            className="text-[10px] font-bold"
            style={{ color: `${cat.accent}bb` }}
          >
            {cat.skills.length} skills
          </span>
        </div>
      </div>

      {/* Skills list */}
      <div className="relative z-10 flex flex-col gap-5">
        {cat.skills.map((s, i) => (
          <MobileSkillRow
            key={s.name}
            src={s.src} name={s.name} level={s.level}
            barFrom={cat.barFrom} barTo={cat.barTo}
            accent={cat.accent}
            delay={index * 0.08 + i * 0.07}
          />
        ))}
      </div>

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-8 pointer-events-none"
        style={{ background: `linear-gradient(0deg, ${cat.glow} 0%, transparent 100%)` }}
      />
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
        { value: "4+", label: "Années d'expérience" },
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
      {/* ── DESKTOP (lg+) ── */}
      <section className="hidden lg:flex flex-col gap-3 w-full h-full min-h-0">
        <Header />
        <div className="flex-1 grid grid-cols-2 gap-3 min-h-0">
          <DesktopCategoryCard cat={CATEGORIES[0]} index={0} />
          <DesktopCategoryCard cat={CATEGORIES[1]} index={1} />
          <DesktopCategoryCard cat={CATEGORIES[2]} index={2} className="col-span-2" />
        </div>
        <StatsBar />
      </section>

      {/* ── MOBILE (< lg) : stacked full-width cards ── */}
      <section className="flex lg:hidden flex-col gap-4 w-full">
        <Header />
        <div className="flex flex-col gap-4">
          {CATEGORIES.map((cat, i) => (
            <MobileCategoryCard key={cat.id} cat={cat} index={i} />
          ))}
        </div>
        <StatsBar />
      </section>
    </>
  );
}
