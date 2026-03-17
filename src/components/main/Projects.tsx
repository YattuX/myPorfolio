"use client";

import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { HiArrowLeft, HiArrowRight, HiExternalLink } from "react-icons/hi";
import { FaGithub } from "react-icons/fa";

const EASE = [0.16, 1, 0.3, 1] as [number, number, number, number];

const PROJECTS = [
  {
    title: "Rental Car",
    description:
      "Plateforme de réservation de véhicules construite sur une architecture microservices. Consultation, filtrage et réservation de voitures en temps réel.",
    image: "/carties.PNG",
    stack: ["Next.js", "ASP.NET", "Microservices", "Docker"],
    demo: null as string | null,
    github: "https://github.com/YattuX/car-rental-micorservices-nextJs",
    accent: "#a78bfa",
  },
  {
    title: "AlphaX",
    description:
      "Plateforme de partage de cours vidéo réservée aux comptes validés. Authentification complète, gestion des rôles et upload de vidéos intégré.",
    image: "/alphax.PNG",
    stack: ["Django", "Tailwind CSS", "Python", "PostgreSQL"],
    demo: "https://www.linkedin.com/posts/aboubacar-tidiane-yattara-5608b6232_linkedin-django-tailwind-activity-7117579562418348032-e__j",
    github: "https://github.com/YattuX/fx-Alpha",
    accent: "#67e8f9",
  },
  {
    title: "Remove BG",
    description:
      "Suppression d'arrière-plan par lot grâce à l'IA. Interface simple pour traiter plusieurs images simultanément avec un résultat net et immédiat.",
    image: "/rm_bg.PNG",
    stack: ["Django", "Tailwind CSS", "Python", "AI API"],
    demo: "https://www.linkedin.com/posts/aboubacar-tidiane-yattara-5608b6232_hello-word-ci-dessous-une-id%C3%A9e-dapplication-activity-7117965221771575296-x-v2",
    github: "https://github.com/YattuX/removebg",
    accent: "#f0abfc",
  },
  {
    title: "Digitalize",
    description:
      "Dashboard statistique pour la gestion d'une flotte de véhicules. Visualisations interactives des ventes, locations et performances en temps réel.",
    image: "/digitalise.PNG",
    stack: ["Django", "Bootstrap", "JavaScript", "Chart.js"],
    demo: "https://www.linkedin.com/posts/aboubacar-tidiane-yattara-5608b6232_activity-7118265120589258753-ALCl",
    github: "https://github.com/Affane99/management_rolling_stock",
    accent: "#fbbf24",
  },
  {
    title: "My Portfolio",
    description:
      "Portfolio personnel avec interface glassmorphism. Animations Framer Motion fluides, design responsive et transitions soignées pour une expérience immersive.",
    image: "/portfolio.PNG",
    stack: ["Next.js", "Framer Motion", "Tailwind CSS", "TypeScript"],
    demo: "https://yattara.dev/",
    github: "https://github.com/YattuX/myPorfolio",
    accent: "#34d399",
  },
] as const;

const N = PROJECTS.length;
const pad = (n: number) => String(n).padStart(2, "0");

const SLIDE_EASE = [0.25, 0.46, 0.45, 0.94] as [number, number, number, number];

/* ─── Desktop slide variants — simultaneous enter/exit ───────────────── */
const desktopVariants = {
  enter: (dir: number) => ({
    x: dir > 0 ? "100%" : "-100%",
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.78, ease: SLIDE_EASE },
  },
  exit: (dir: number) => ({
    x: dir > 0 ? "-18%" : "18%",
    opacity: 0,
    transition: { duration: 0.58, ease: SLIDE_EASE },
  }),
};

/* ─── Mobile slide variants — smooth fade + subtle y ─────────────────── */
const mobileVariants = {
  enter: { opacity: 0, y: 10 },
  center: { opacity: 1, y: 0, transition: { duration: 0.55, ease: SLIDE_EASE } },
  exit:   { opacity: 0, y: -10, transition: { duration: 0.38, ease: SLIDE_EASE } },
};

/* ─── Nav button ──────────────────────────────────────────────────────── */
function NavBtn({
  onClick,
  children,
  size = "md",
}: {
  onClick: () => void;
  children: React.ReactNode;
  size?: "sm" | "md";
}) {
  const dim = size === "sm" ? "w-10 h-10" : "w-11 h-11";
  return (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: 1.09 }}
      whileTap={{ scale: 0.93 }}
      className={`${dim} rounded-full flex items-center justify-center flex-shrink-0`}
      style={{
        background: "rgba(255,255,255,0.05)",
        border: "1px solid rgba(167,139,250,0.22)",
        color: "rgba(210,200,255,0.85)",
      }}
    >
      {children}
    </motion.button>
  );
}

/* ─── Dots ────────────────────────────────────────────────────────────── */
function Dots({
  current,
  accent,
  onGo,
  dotH = 6,
}: {
  current: number;
  accent: string;
  onGo: (i: number) => void;
  dotH?: number;
}) {
  return (
    <div className="flex items-center gap-2">
      {PROJECTS.map((_, i) => (
        <motion.button
          key={i}
          onClick={() => onGo(i)}
          animate={{
            width: i === current ? 24 : 6,
            opacity: i === current ? 1 : 0.28,
          }}
          transition={{ type: "spring", stiffness: 400, damping: 28 }}
          className="rounded-full"
          style={{
            height: dotH,
            background: i === current ? accent : "rgba(167,139,250,0.5)",
            boxShadow: i === current ? `0 0 8px ${accent}70` : "none",
          }}
        />
      ))}
    </div>
  );
}

/* ════════════════════════════════════════════════════════════════════════
   MAIN
   ════════════════════════════════════════════════════════════════════════ */
export default function Projects() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  const go = useCallback(
    (to: number) => {
      if (to === current) return;
      setDirection(to > current ? 1 : -1);
      setCurrent(to);
    },
    [current]
  );

  const prev = () => go((current - 1 + N) % N);
  const next = () => go((current + 1) % N);

  const p = PROJECTS[current];

  return (
    <>
      {/* ══════════════════════════════════════════════════ DESKTOP (lg+) */}
      <section
        className="hidden lg:flex flex-col gap-5 w-full"
        style={{ minHeight: "calc(100vh - 210px)" }}
      >
        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.48, ease: EASE }}
          className="flex items-end justify-between"
        >
          <div className="flex flex-col gap-1.5">
            <h2
              className="text-3xl md:text-4xl font-extrabold leading-tight"
              style={{
                background:
                  "linear-gradient(100deg, #e879f9 0%, #a78bfa 40%, #67e8f9 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Mes Projets
            </h2>
            <p className="text-sm" style={{ color: "rgba(178,168,225,0.75)" }}>
              Projets personnels &amp; professionnels
            </p>
            <div
              className="h-px w-16 mt-1"
              style={{
                background:
                  "linear-gradient(90deg, rgba(167,139,250,0.7), transparent)",
              }}
            />
          </div>

          {/* Big counter */}
          <AnimatePresence>
            <motion.div
              key={current}
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 8 }}
              transition={{ duration: 0.28, ease: EASE }}
              className="flex items-baseline gap-2 select-none"
            >
              <span
                className="text-[56px] font-black tabular-nums leading-none"
                style={{
                  background: `linear-gradient(135deg, ${p.accent}, rgba(255,255,255,0.30))`,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                {pad(current + 1)}
              </span>
              <span
                className="text-2xl font-bold"
                style={{ color: "rgba(168,158,218,0.58)" }}
              >
                / {pad(N)}
              </span>
            </motion.div>
          </AnimatePresence>
        </motion.div>

        {/* ── Main slide card ── */}
        <div
          className="relative flex-1 overflow-hidden rounded-3xl"
          style={{
            background: "rgba(12,7,32,0.82)",
            border: "1px solid rgba(167,139,250,0.10)",
            backdropFilter: "blur(24px)",
            boxShadow:
              "0 24px 80px rgba(0,0,0,0.55), inset 0 1px 0 rgba(255,255,255,0.04)",
          }}
        >
          <AnimatePresence custom={direction}>
            <motion.div
              key={current}
              custom={direction}
              variants={desktopVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="absolute inset-0 flex"
            >
              {/* Left — image */}
              <div
                className="relative w-[58%] overflow-hidden"
                style={{ background: "rgba(10,6,28,0.90)" }}
              >
                <div
                  className="absolute top-0 left-0 right-0 h-[2px] z-10"
                  style={{
                    background: `linear-gradient(90deg, transparent, ${p.accent}CC, transparent)`,
                  }}
                />
                <Image
                  src={p.image}
                  alt={p.title}
                  fill
                  className="object-contain"
                  quality={100}
                  priority
                />
                {/* Right fade into panel */}
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background:
                      "linear-gradient(90deg, transparent 42%, rgba(12,7,32,0.92) 100%)",
                  }}
                />
                {/* Bottom fade */}
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background:
                      "linear-gradient(180deg, transparent 55%, rgba(12,7,32,0.40) 100%)",
                  }}
                />
                {/* Watermark number */}
                <div
                  className="absolute bottom-4 left-5 z-10 select-none pointer-events-none font-black leading-none"
                  style={{
                    fontSize: "110px",
                    color: p.accent + "12",
                  }}
                >
                  {pad(current + 1)}
                </div>
              </div>

              {/* Right — content */}
              <div className="w-[42%] flex flex-col justify-center gap-5 px-10 py-8">
                {/* Label */}
                <div className="flex items-center gap-2">
                  <div
                    className="w-[3px] h-4 rounded-full flex-shrink-0"
                    style={{
                      background: p.accent,
                      boxShadow: `0 0 8px ${p.accent}`,
                    }}
                  />
                  <span
                    className="text-[10px] font-bold tracking-[0.22em] uppercase"
                    style={{ color: p.accent }}
                  >
                    Projet {pad(current + 1)}
                  </span>
                </div>

                {/* Title */}
                <h3
                  className="text-3xl xl:text-4xl font-black leading-tight"
                  style={{ color: "rgba(235,225,255,0.96)" }}
                >
                  {p.title}
                </h3>

                {/* Divider */}
                <div
                  className="h-px w-14"
                  style={{
                    background: `linear-gradient(90deg, ${p.accent}88, transparent)`,
                  }}
                />

                {/* Description */}
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "rgba(198,188,248,0.88)" }}
                >
                  {p.description}
                </p>

                {/* Stack */}
                <div className="flex flex-col gap-2">
                  <span
                    className="text-[10px] font-bold tracking-[0.15em] uppercase"
                    style={{ color: "rgba(172,162,222,0.68)" }}
                  >
                    Stack
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {p.stack.map((t) => (
                      <span
                        key={t}
                        className="px-3 py-[5px] rounded-lg text-[11px] font-semibold"
                        style={{
                          background: p.accent + "18",
                          border: `1px solid ${p.accent}35`,
                          color: p.accent,
                        }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <div className="flex gap-3 pt-1">
                  {p.demo ? (
                    <motion.a
                      href={p.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.04 }}
                      whileTap={{ scale: 0.96 }}
                      className="flex items-center gap-2 px-5 py-[10px] rounded-xl font-semibold text-sm text-white"
                      style={{
                        background: `linear-gradient(135deg, ${p.accent}BB 0%, ${p.accent}50 100%)`,
                        border: `1px solid ${p.accent}55`,
                        boxShadow: `0 4px 20px ${p.accent}28`,
                      }}
                    >
                      <HiExternalLink size={14} /> Demo
                    </motion.a>
                  ) : (
                    <span
                      className="flex items-center gap-2 px-5 py-[10px] rounded-xl font-semibold text-sm"
                      style={{
                        background: "rgba(255,255,255,0.06)",
                        border: "1px solid rgba(255,255,255,0.12)",
                        color: "rgba(172,162,222,0.65)",
                      }}
                    >
                      En cours...
                    </span>
                  )}
                  <motion.a
                    href={p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.96 }}
                    className="flex items-center gap-2 px-5 py-[10px] rounded-xl font-semibold text-sm"
                    style={{
                      background: "rgba(255,255,255,0.05)",
                      border: "1px solid rgba(167,139,250,0.22)",
                      color: "rgba(205,195,255,0.80)",
                      backdropFilter: "blur(12px)",
                    }}
                  >
                    <FaGithub size={14} /> GitHub
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Dynamic accent glow */}
          <div
            className="absolute inset-0 pointer-events-none rounded-3xl transition-all duration-700"
            style={{ boxShadow: `inset 0 0 80px ${p.accent}07` }}
          />
        </div>

        {/* ── Bottom nav ── */}
        <div className="flex items-center justify-between px-1">
          <NavBtn onClick={prev}>
            <HiArrowLeft size={18} />
          </NavBtn>
          <Dots current={current} accent={p.accent} onGo={go} dotH={6} />
          <NavBtn onClick={next}>
            <HiArrowRight size={18} />
          </NavBtn>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════ MOBILE (< lg) */}
      <section
        className="flex lg:hidden flex-col gap-3 w-full"
        style={{ minHeight: "calc(100dvh - 220px)" }}
      >
        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.42, ease: EASE }}
          className="flex items-center justify-between"
        >
          <div>
            <h2
              className="text-2xl font-extrabold leading-tight"
              style={{
                background:
                  "linear-gradient(100deg, #e879f9 0%, #a78bfa 40%, #67e8f9 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Mes Projets
            </h2>
            <p
              className="text-[11px] mt-0.5"
              style={{ color: "rgba(178,168,225,0.72)" }}
            >
              Projets personnels &amp; pro
            </p>
          </div>

          {/* x / n */}
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, scale: 0.75 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.75 }}
              transition={{ duration: 0.25, ease: EASE }}
              className="flex items-baseline gap-0.5 select-none"
            >
              <span
                className="text-3xl font-black tabular-nums leading-none"
                style={{ color: p.accent }}
              >
                {pad(current + 1)}
              </span>
              <span
                className="text-base font-bold"
                style={{ color: "rgba(168,158,218,0.62)" }}
              >
                /{pad(N)}
              </span>
            </motion.div>
          </AnimatePresence>
        </motion.div>

        {/* ── Slide content ── */}
        <div className="flex-1 relative min-h-0">
        <AnimatePresence mode="popLayout" custom={direction}>
          <motion.div
            key={current}
            custom={direction}
            variants={mobileVariants}
            initial="enter"
            animate="center"
            exit="exit"
            className="flex flex-col gap-3 h-full"
          >
            {/* Image */}
            <div
              className="relative w-full flex-none overflow-hidden rounded-2xl"
              style={{
                aspectRatio: "16/9",
                border: `1px solid ${p.accent}30`,
                boxShadow: `0 8px 32px ${p.accent}18`,
              }}
            >
              <div
                className="absolute top-0 left-0 right-0 h-[2px] z-10"
                style={{
                  background: `linear-gradient(90deg, transparent, ${p.accent}, transparent)`,
                }}
              />
              <Image
                src={p.image}
                alt={p.title}
                fill
                className="object-cover"
                priority
              />
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    "linear-gradient(180deg, transparent 50%, rgba(10,6,28,0.55) 100%)",
                }}
              />
            </div>

            {/* Content card */}
            <div
              className="flex-1 flex flex-col gap-3 p-4 rounded-2xl overflow-hidden"
              style={{
                background: "rgba(12,7,32,0.82)",
                border: "1px solid rgba(167,139,250,0.10)",
                backdropFilter: "blur(16px)",
                boxShadow: "0 8px 40px rgba(0,0,0,0.35)",
              }}
            >
              {/* Label + title */}
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-2">
                  <div
                    className="w-[2.5px] h-3 rounded-full flex-shrink-0"
                    style={{ background: p.accent }}
                  />
                  <span
                    className="text-[9px] font-bold tracking-[0.18em] uppercase"
                    style={{ color: p.accent }}
                  >
                    Projet {pad(current + 1)}
                  </span>
                </div>
                <h3
                  className="text-[22px] font-black leading-tight"
                  style={{ color: "rgba(235,225,255,0.96)" }}
                >
                  {p.title}
                </h3>
              </div>

              {/* Description */}
              <p
                className="text-[13px] leading-relaxed line-clamp-3"
                style={{ color: "rgba(198,188,248,0.85)" }}
              >
                {p.description}
              </p>

              {/* Stack */}
              <div className="flex flex-wrap gap-1.5">
                {p.stack.map((t) => (
                  <span
                    key={t}
                    className="px-2.5 py-[5px] rounded-lg text-[10px] font-semibold"
                    style={{
                      background: p.accent + "18",
                      border: `1px solid ${p.accent}35`,
                      color: p.accent,
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Buttons */}
              <div className="flex gap-2 mt-auto pt-1">
                {p.demo ? (
                  <motion.a
                    href={p.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 flex items-center justify-center gap-1.5 py-[11px] rounded-xl font-semibold text-[12px] text-white"
                    style={{
                      background: `linear-gradient(135deg, ${p.accent}BB 0%, ${p.accent}50 100%)`,
                      border: `1px solid ${p.accent}55`,
                      boxShadow: `0 4px 16px ${p.accent}22`,
                    }}
                  >
                    <HiExternalLink size={13} /> Demo
                  </motion.a>
                ) : (
                  <span
                    className="flex-1 flex items-center justify-center py-[11px] rounded-xl font-semibold text-[12px]"
                    style={{
                      background: "rgba(255,255,255,0.06)",
                      border: "1px solid rgba(255,255,255,0.12)",
                      color: "rgba(172,162,222,0.65)",
                    }}
                  >
                    En cours...
                  </span>
                )}
                <motion.a
                  href={p.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileTap={{ scale: 0.95 }}
                  className="flex-1 flex items-center justify-center gap-1.5 py-[11px] rounded-xl font-semibold text-[12px]"
                  style={{
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(167,139,250,0.22)",
                    color: "rgba(205,195,255,0.80)",
                  }}
                >
                  <FaGithub size={13} /> GitHub
                </motion.a>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
        </div>

        {/* ── Bottom nav ── */}
        <div className="flex items-center justify-between mt-1">
          <NavBtn onClick={prev} size="sm">
            <HiArrowLeft size={16} />
          </NavBtn>
          <Dots current={current} accent={p.accent} onGo={go} dotH={5} />
          <NavBtn onClick={next} size="sm">
            <HiArrowRight size={16} />
          </NavBtn>
        </div>
      </section>
    </>
  );
}
