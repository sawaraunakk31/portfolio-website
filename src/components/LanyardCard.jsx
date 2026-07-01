import React from "react";
import { motion } from "framer-motion";
import { FaShieldAlt } from "react-icons/fa";

const LanyardCard = ({ photoSrc }) => {
  return (
    <div className="relative mx-auto w-full max-w-[320px] pt-10">
      <div className="absolute left-1/2 top-0 h-12 w-[3px] -translate-x-1/2 bg-gradient-to-b from-white via-amber-100 to-amber-300" />
      <div className="absolute left-1/2 top-10 h-4 w-4 -translate-x-1/2 rounded-full border border-zinc-100/60 bg-zinc-900" />

      <motion.div
        animate={{ rotate: [-1.5, 1.5, -1.5], y: [0, 6, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="rounded-[28px] border border-amber-200/30 bg-zinc-950/70 p-4 shadow-[0_20px_70px_rgba(212,175,55,0.2)] backdrop-blur-xl"
      >
        <div className="overflow-hidden rounded-2xl border border-white/10 bg-zinc-900">
          {/* Add your preferred photo by replacing src/assets/profile.jpg or passing a different photoSrc prop. */}
          <img
            src={photoSrc}
            alt="Raunak Sawa"
            className="h-[320px] w-full object-cover object-top"
          />
        </div>

        <div className="mt-4 space-y-2 px-1">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-amber-100">
            Portfolio Access Pass
          </p>
          <h3 className="text-2xl font-semibold text-white">Raunak Sawa</h3>
          <div className="flex items-center justify-between text-sm text-zinc-300">
            <span>Data Scientist</span>
            <FaShieldAlt className="text-amber-200" />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default LanyardCard;
