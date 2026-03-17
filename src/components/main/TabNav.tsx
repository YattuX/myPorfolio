"use client";

import { motion } from "framer-motion";
import { HiHome, HiLightBulb, HiBriefcase } from "react-icons/hi";

const TABS = [
  { id: "home",     label: "Home",     Icon: HiHome      },
  { id: "skills",   label: "Skills",   Icon: HiLightBulb },
  { id: "projects", label: "Projects", Icon: HiBriefcase },
] as const;

interface TabNavProps {
  currentPage: string;
  onNavigate: (id: string) => void;
}

/* ─── Button ─────────────────────────────────────────────────────────── */
function TabButton({
  tab,
  isActive,
  onClick,
  layout,
}: {
  tab: (typeof TABS)[number];
  isActive: boolean;
  onClick: () => void;
  layout: "vertical" | "horizontal";
}) {
  const { Icon, label } = tab;
  const isVertical = layout === "vertical";

  return (
    <motion.button
      onClick={onClick}
      whileTap={{ scale: 0.93 }}
      transition={{ type: "spring", stiffness: 200, damping: 22 }}
      className={[
        "relative flex items-center select-none cursor-pointer transition-colors duration-200",
        isVertical
          ? "w-full gap-3 px-5 py-[13px] rounded-[15px]"
          : "gap-2.5 px-4 py-[11px] rounded-[13px]",
      ].join(" ")}
    >
      {/* Water-bubble active indicator */}
      {isActive && (
        <motion.span
          layoutId={isVertical ? "tab-bubble-v" : "tab-bubble-h"}
          className="absolute inset-0"
          transition={{ type: "spring", stiffness: 220, damping: 28 }}
          style={{
            borderRadius: isVertical ? 15 : 13,
            background:
              "linear-gradient(145deg, rgba(167,139,250,0.52) 0%, rgba(112,66,248,0.32) 45%, rgba(67,232,249,0.16) 100%)",
            border: "1px solid rgba(167,139,250,0.50)",
            boxShadow: `
              inset 0 1.5px 1px rgba(255,255,255,0.30),
              inset 0 -1px 1px rgba(0,0,0,0.22),
              0 4px 24px rgba(112,66,248,0.42),
              0 0 0 0.5px rgba(112,66,248,0.20)
            `,
          }}
        />
      )}

      {/* Hover bg for inactive */}
      {!isActive && (
        <span
          className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-200 rounded-[15px]"
          style={{ background: "rgba(255,255,255,0.06)" }}
        />
      )}

      {/* Icon */}
      <span className="relative z-10 shrink-0 flex items-center justify-center">
        <Icon
          size={isVertical ? 20 : 22}
          style={{
            color: isActive ? "rgba(220,210,255,1)" : "rgba(180,165,230,0.48)",
            filter: isActive
              ? "drop-shadow(0 0 9px rgba(167,139,250,0.85))"
              : "none",
            transition: "color 0.5s ease, filter 0.5s ease",
          }}
        />
      </span>

      {/* Label */}
      <span
        className="relative z-10 font-semibold whitespace-nowrap"
        style={{
          fontSize: isVertical ? "14px" : "13px",
          color: isActive ? "rgba(235,225,255,1)" : "rgba(175,160,225,0.50)",
          textShadow: isActive
            ? "0 0 22px rgba(167,139,250,0.60)"
            : "none",
          transition: "color 0.5s ease, text-shadow 0.5s ease",
          letterSpacing: "0.03em",
        }}
      >
        {label}
      </span>
    </motion.button>
  );
}

/* ─── Glass container ────────────────────────────────────────────────── */
function GlassContainer({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`p-[1px] rounded-[22px] ${className}`}
      style={{
        background:
          "linear-gradient(145deg, rgba(180,150,255,0.40) 0%, rgba(112,66,248,0.18) 50%, rgba(103,232,249,0.25) 100%)",
        boxShadow:
          "0 12px 48px rgba(0,0,0,0.65), 0 0 80px rgba(112,66,248,0.12), 0 0 0 0.5px rgba(112,66,248,0.15)",
      }}
    >
      <div
        className="relative rounded-[21px] p-[7px]"
        style={{
          background:
            "linear-gradient(160deg, rgba(16,9,42,0.95) 0%, rgba(5,3,20,0.92) 100%)",
          backdropFilter: "blur(40px) saturate(200%)",
          WebkitBackdropFilter: "blur(40px) saturate(200%)",
        }}
      >
        {/* Top shimmer line */}
        <div
          className="absolute top-0 left-[10%] right-[10%] h-px pointer-events-none"
          style={{
            background:
              "linear-gradient(90deg, transparent, rgba(200,180,255,0.50), rgba(255,255,255,0.60), rgba(180,230,255,0.40), transparent)",
          }}
        />
        {children}
      </div>
    </div>
  );
}

/* ─── Main ───────────────────────────────────────────────────────────── */
export default function TabNav({ currentPage, onNavigate }: TabNavProps) {
  return (
    <>
      {/* ── Desktop — fixed left, vertical ── */}
      <div className="fixed left-6 top-1/2 -translate-y-1/2 z-50 hidden lg:block">
        <motion.div
          initial={{ opacity: 0, x: -60, scale: 0.92 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{
            duration: 0.9,
            delay: 0.2,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          <GlassContainer className="w-[200px]">
            {/* Header label */}
            <div className="px-4 pt-2 pb-3">
              <p
                className="text-[10px] font-bold tracking-[0.28em] uppercase text-center"
                style={{ color: "rgba(167,139,250,0.55)" }}
              >
                Navigation
              </p>
              {/* Divider */}
              <div
                className="mt-2 h-px rounded-full"
                style={{
                  background:
                    "linear-gradient(90deg, transparent, rgba(167,139,250,0.30), rgba(103,232,249,0.25), transparent)",
                }}
              />
            </div>

            {/* Buttons */}
            <div className="flex flex-col gap-[4px]">
              {TABS.map((tab, i) => (
                <motion.div
                  key={tab.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.35 + i * 0.07, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                >
                  <TabButton
                    tab={tab}
                    isActive={currentPage === tab.id}
                    onClick={() => onNavigate(tab.id)}
                    layout="vertical"
                  />
                </motion.div>
              ))}
            </div>

            {/* Bottom dots indicator */}
            <div className="flex justify-center gap-1.5 pt-3 pb-2">
              {TABS.map((tab) => (
                <motion.span
                  key={tab.id}
                  animate={{
                    width: currentPage === tab.id ? 16 : 5,
                    opacity: currentPage === tab.id ? 1 : 0.3,
                  }}
                  transition={{ type: "spring", stiffness: 400, damping: 28 }}
                  className="h-[5px] rounded-full block"
                  style={{
                    background:
                      currentPage === tab.id
                        ? "linear-gradient(90deg, #a78bfa, #67e8f9)"
                        : "rgba(167,139,250,0.5)",
                    boxShadow:
                      currentPage === tab.id
                        ? "0 0 8px rgba(167,139,250,0.7)"
                        : "none",
                  }}
                />
              ))}
            </div>
          </GlassContainer>
        </motion.div>
      </div>

    </>
  );
}
