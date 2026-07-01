import React, { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";

const checkpoints = [
  { label: "Visual", threshold: 22 },
  { label: "Content", threshold: 48 },
  { label: "Motion", threshold: 76 },
  { label: "Launch", threshold: 100 },
];

const Loader = ({ onFinish }) => {
  const [progress, setProgress] = useState(0);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    let frameId;
    const startedAt = performance.now();
    const duration = 2100;

    const animateProgress = (now) => {
      const elapsed = now - startedAt;
      const raw = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - raw, 3);
      const next = Math.min(eased * 100, 100);
      setProgress(next);

      if (next < 100) {
        frameId = requestAnimationFrame(animateProgress);
      }
    };

    frameId = requestAnimationFrame(animateProgress);

    return () => {
      cancelAnimationFrame(frameId);
    };
  }, []);

  useEffect(() => {
    if (progress < 100) {
      return undefined;
    }

    setIsExiting(true);
    const timeoutId = setTimeout(() => onFinish?.(), 400);
    return () => clearTimeout(timeoutId);
  }, [onFinish, progress]);

  const activeCheckpointIndex = useMemo(() => {
    const nextIndex = checkpoints.findIndex((point) => progress < point.threshold);
    return nextIndex === -1 ? checkpoints.length - 1 : nextIndex;
  }, [progress]);

  const activeLabel = checkpoints[activeCheckpointIndex]?.label ?? checkpoints[checkpoints.length - 1].label;
  const orbLeft = Math.min(progress, 99);

  return (
    <div
      className={`fixed inset-0 z-[220] flex items-center justify-center bg-[#050505] transition-opacity duration-500 ${
        isExiting ? "opacity-0" : "opacity-100"
      }`}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(243,212,134,0.15),transparent_42%),linear-gradient(180deg,#0d0d0d_0%,#050505_100%)]" />
      <motion.div
        className="absolute inset-0 opacity-[0.06] [background-image:linear-gradient(120deg,rgba(255,255,255,0.4)_0,transparent_28%,transparent_72%,rgba(243,212,134,0.35)_100%)] [background-size:180%_180%]"
        animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
        transition={{ duration: 8.4, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="relative z-10 w-[min(92vw,720px)] px-4"
      >
        <div className="flex items-end justify-between">
          <p className="text-[11px] uppercase tracking-[0.32em] text-amber-100">Raunak Sawa</p>
          <p className="font-mono text-sm text-zinc-100">{Math.round(progress)}%</p>
        </div>

        <h2 className="mt-6 text-3xl font-semibold text-white sm:text-5xl">Loading portfolio experience</h2>
        <p className="mt-2 text-sm uppercase tracking-[0.2em] text-zinc-300">{activeLabel} system in progress</p>

        <div className="mt-10">
          <div className="relative h-[2px] rounded-full bg-white/20">
            <motion.div
              className="h-full bg-gradient-to-r from-amber-300 via-yellow-100 to-white"
              style={{ width: `${progress}%` }}
            />
            <motion.span
              className="absolute top-1/2 h-4 w-4 -translate-y-1/2 rounded-full border border-white/65 bg-amber-100 shadow-[0_0_16px_rgba(243,212,134,0.8)]"
              style={{ left: `${orbLeft}%` }}
              animate={{ scale: [1, 1.15, 1] }}
              transition={{ duration: 1.15, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>

          <div className="mt-5 grid grid-cols-4 gap-3">
            {checkpoints.map((point, index) => {
              const done = progress >= point.threshold;
              const active = !done && index === activeCheckpointIndex;

              return (
                <div key={point.label} className="flex flex-col items-center gap-2">
                  <span
                    className={`h-2.5 w-2.5 rounded-full ${
                      done
                        ? "bg-amber-100 shadow-[0_0_10px_rgba(243,212,134,0.9)]"
                        : active
                        ? "bg-white"
                        : "bg-white/20"
                    }`}
                  />
                  <span
                    className={`text-[10px] uppercase tracking-[0.12em] ${
                      done || active ? "text-zinc-100" : "text-zinc-500"
                    }`}
                  >
                    {point.label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Loader;
