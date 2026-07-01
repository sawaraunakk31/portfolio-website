import React, { useEffect, useRef, useState } from "react";

const interactiveSelector = "a, button, input, textarea, select, [data-cursor='interactive']";
const textFieldSelector = "input, textarea, [contenteditable='true']";

const CustomCursor = () => {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const frameRef = useRef(null);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(pointer: fine)");
    const setCursorMode = () => setEnabled(mediaQuery.matches);

    setCursorMode();
    mediaQuery.addEventListener("change", setCursorMode);

    return () => mediaQuery.removeEventListener("change", setCursorMode);
  }, []);

  useEffect(() => {
    if (!enabled || !dotRef.current || !ringRef.current) {
      return;
    }

    const dot = dotRef.current;
    const ring = ringRef.current;

    let targetX = window.innerWidth / 2;
    let targetY = window.innerHeight / 2;
    let ringX = targetX;
    let ringY = targetY;

    const updateCursorPosition = (event) => {
      targetX = event.clientX;
      targetY = event.clientY;
      dot.style.left = `${targetX}px`;
      dot.style.top = `${targetY}px`;
    };

    const animateCursor = () => {
      ringX += (targetX - ringX) * 0.17;
      ringY += (targetY - ringY) * 0.17;
      ring.style.left = `${ringX}px`;
      ring.style.top = `${ringY}px`;

      frameRef.current = requestAnimationFrame(animateCursor);
    };

    const handleMouseDown = () => {
      ring.classList.add("cursor-ring-simple-pressed");
    };

    const handleMouseUp = () => {
      ring.classList.remove("cursor-ring-simple-pressed");
    };

    const handlePointerOver = (event) => {
      const textField = event.target.closest(textFieldSelector);
      if (textField) {
        ring.classList.add("cursor-ring-simple-hidden");
        dot.classList.add("cursor-dot-simple-hidden");
        return;
      }

      const target = event.target.closest(interactiveSelector);
      if (target) {
        ring.classList.add("cursor-ring-simple-active");
        dot.classList.add("cursor-dot-simple-active");
      } else {
        ring.classList.remove("cursor-ring-simple-hidden");
        dot.classList.remove("cursor-dot-simple-hidden");
      }
    };

    const handlePointerOut = (event) => {
      const leavingTextField = event.target.closest(textFieldSelector);
      const enteringTextField = event.relatedTarget?.closest(textFieldSelector);

      if (leavingTextField && !enteringTextField) {
        ring.classList.remove("cursor-ring-simple-hidden");
        dot.classList.remove("cursor-dot-simple-hidden");
      }

      const leavingInteractive = event.target.closest(interactiveSelector);
      const enteringInteractive = event.relatedTarget?.closest(interactiveSelector);

      if (leavingInteractive && !enteringInteractive) {
        ring.classList.remove("cursor-ring-simple-active");
        dot.classList.remove("cursor-dot-simple-active");
      }
    };

    const handleMouseLeaveViewport = () => {
      ring.classList.add("cursor-ring-simple-hidden");
      dot.classList.add("cursor-dot-simple-hidden");
    };

    const handleMouseEnterViewport = () => {
      ring.classList.remove("cursor-ring-simple-hidden");
      dot.classList.remove("cursor-dot-simple-hidden");
    };

    window.addEventListener("mousemove", updateCursorPosition);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("mouseleave", handleMouseLeaveViewport);
    window.addEventListener("mouseenter", handleMouseEnterViewport);
    document.addEventListener("mouseover", handlePointerOver);
    document.addEventListener("mouseout", handlePointerOut);
    frameRef.current = requestAnimationFrame(animateCursor);

    return () => {
      window.removeEventListener("mousemove", updateCursorPosition);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("mouseleave", handleMouseLeaveViewport);
      window.removeEventListener("mouseenter", handleMouseEnterViewport);
      document.removeEventListener("mouseover", handlePointerOver);
      document.removeEventListener("mouseout", handlePointerOut);

      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, [enabled]);

  if (!enabled) {
    return null;
  }

  return (
    <>
      <div ref={ringRef} className="cursor-ring-simple" />
      <div ref={dotRef} className="cursor-dot-simple" />
    </>
  );
};

export default CustomCursor;
