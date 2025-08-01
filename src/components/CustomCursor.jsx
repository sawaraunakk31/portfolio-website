import React, { useEffect, useRef } from 'react';

const CustomCursor = () => {
  const cursorRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;

    const moveCursor = (e) => {
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;
    };

    const addHoverEffect = () => cursor.classList.add('hovered');
    const removeHoverEffect = () => cursor.classList.remove('hovered');
    const addClickEffect = () => {
      cursor.classList.add('clicked');
      setTimeout(() => cursor.classList.remove('clicked'), 150);
    };

    document.addEventListener('mousemove', moveCursor);
    document.querySelectorAll('button, a, .cursor-hover').forEach((el) => {
      el.addEventListener('mouseenter', addHoverEffect);
      el.addEventListener('mouseleave', removeHoverEffect);
      el.addEventListener('mousedown', addClickEffect);
    });

    return () => {
      document.removeEventListener('mousemove', moveCursor);
      document.querySelectorAll('button, a, .cursor-hover').forEach((el) => {
        el.removeEventListener('mouseenter', addHoverEffect);
        el.removeEventListener('mouseleave', removeHoverEffect);
        el.removeEventListener('mousedown', addClickEffect);
      });
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="custom-cursor pointer-events-none fixed z-[9999] w-5 h-5 rounded-full border-2 border-cyan-400 bg-cyan-400/10 transition-all duration-150 ease-out mix-blend-difference"
    ></div>
  );
};

export default CustomCursor;
