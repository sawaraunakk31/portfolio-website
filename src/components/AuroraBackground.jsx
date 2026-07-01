import React, { useEffect } from "react";
import { motion, useMotionTemplate, useMotionValue, useSpring } from "framer-motion";

const AuroraBackground = () => {
  const mouseX = useMotionValue(50);
  const mouseY = useMotionValue(30);
  const smoothX = useSpring(mouseX, { stiffness: 55, damping: 22, mass: 0.8 });
  const smoothY = useSpring(mouseY, { stiffness: 55, damping: 22, mass: 0.8 });

  useEffect(() => {
    const handlePointerMove = (event) => {
      const nextX = (event.clientX / window.innerWidth) * 100;
      const nextY = (event.clientY / window.innerHeight) * 100;
      mouseX.set(nextX);
      mouseY.set(nextY);
    };

    window.addEventListener("pointermove", handlePointerMove, { passive: true });

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
    };
  }, [mouseX, mouseY]);

  const interactiveGlow = useMotionTemplate`radial-gradient(circle at ${smoothX}% ${smoothY}%, rgba(243, 212, 134, 0.11), transparent 26%)`;

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(180deg,#0c0c0c_0%,#070707_46%,#050505_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_10%,rgba(243,212,134,0.14),transparent_34%),radial-gradient(circle_at_85%_15%,rgba(255,255,255,0.07),transparent_32%),radial-gradient(circle_at_52%_88%,rgba(212,175,55,0.12),transparent_40%)]" />
      <motion.div className="absolute inset-0" style={{ backgroundImage: interactiveGlow }} />
      <div className="absolute inset-0 opacity-[0.08] [background-image:radial-gradient(rgba(255,255,255,0.9)_0.6px,transparent_0.6px)] [background-size:3px_3px]" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0)_0%,rgba(0,0,0,0.2)_48%,rgba(0,0,0,0.45)_100%)]" />
    </div>
  );
};

export default AuroraBackground;
