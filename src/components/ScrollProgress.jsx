import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const ScrollProgress = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const scrollTop = window.scrollY;
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const nextProgress = totalHeight > 0 ? scrollTop / totalHeight : 0;
      setProgress(Math.min(Math.max(nextProgress, 0), 1));
    };

    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });
    window.addEventListener("resize", updateProgress);

    return () => {
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
    };
  }, []);

  return (
    <motion.div
      className="fixed left-0 top-0 z-[120] h-1 origin-left bg-gradient-to-r from-amber-200 via-yellow-200 to-white shadow-[0_0_18px_rgba(212,175,55,0.82)]"
      style={{ scaleX: progress }}
    />
  );
};

export default ScrollProgress;
