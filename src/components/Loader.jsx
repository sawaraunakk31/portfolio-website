import React, { useState, useEffect, useRef } from 'react';

const fakeLogs = [
  '[SYS] Booting...',
  '[CORE] Modules loading...',
  '[NET] Securing link...',
  '[AI] Memory sync...',
  '[DONE] System online.',
];

const generateMatrixColumn = () => {
  const chars = '01';
  const length = Math.floor(Math.random() * 25) + 10;
  return Array.from({ length }, () => chars.charAt(Math.floor(Math.random() * chars.length)));
};

const Loader = ({ onFinish }) => {
  const [soundEnabled, setSoundEnabled] = useState(true);
  const audioRef = useRef(null);
  const [typedLogs, setTypedLogs] = useState([]);
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [matrixColumns, setMatrixColumns] = useState([]);

  useEffect(() => {
    const columns = Array.from({ length: 80 }, () => generateMatrixColumn());
    setMatrixColumns(columns);
  }, []);

  useEffect(() => {
    if (audioRef.current && soundEnabled) {
      audioRef.current.volume = 0.2;
      audioRef.current.play().catch(() => {});
    }
  }, [soundEnabled]);

  useEffect(() => {
    if (currentLineIndex < fakeLogs.length) {
      const currentLine = fakeLogs[currentLineIndex];
      if (currentCharIndex <= currentLine.length) {
        const timeout = setTimeout(() => {
          setTypedLogs((prevLogs) => {
            const updated = [...prevLogs];
            updated[currentLineIndex] = currentLine.slice(0, currentCharIndex);
            return updated;
          });
          setCurrentCharIndex((prev) => prev + 1);
          setProgress(
            Math.floor(
              ((currentLineIndex + currentCharIndex / currentLine.length) / fakeLogs.length) * 100
            )
          );
        }, 5);
        return () => clearTimeout(timeout);
      } else {
        setCurrentLineIndex((prev) => prev + 1);
        setCurrentCharIndex(0);
      }
    } else {
      setTimeout(() => {
        if (audioRef.current) audioRef.current.pause();
        onFinish?.();
      }, 500);
    }
  }, [currentCharIndex, currentLineIndex]);

  const toggleSound = () => {
    setSoundEnabled(!soundEnabled);
    if (audioRef.current) {
      if (!soundEnabled) {
        audioRef.current.play().catch(() => {});
      } else {
        audioRef.current.pause();
      }
    }
  };

  return (
    <div className="w-full h-screen bg-black flex flex-col items-center justify-center relative overflow-hidden font-orbitron text-green-400">
      {/* Matrix Rain Top-to-Bottom & Bottom-to-Top */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden flex justify-between gap-1 px-[2px]">
        {matrixColumns.map((column, i) => (
          <div key={i} className="flex flex-col items-center w-[1.25%] text-s font-mono">
            <div
              className="animate-matrixFallDown"
              style={{ animationDelay: `${i * 20}ms`, color: 'rgba(0,255,0,0.3)' }}
            >
              {column.map((char, idx) => (
                <div key={idx}>{char}</div>
              ))}
            </div>
            <div
              className="animate-matrixFallUp mt-4"
              style={{ animationDelay: `${i * 40}ms`, color: 'rgba(0,255,0,0.2)' }}
            >
              {column.map((char, idx) => (
                <div key={idx}>{char}</div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Terminal Typing Logs */}
      <div className="z-10 text-left w-[90%] max-w-xl p-4 bg-[#0d0d0d]/60 border border-green-400 rounded-md shadow-md backdrop-blur-md font-mono text-sm">
        {typedLogs.map((line, i) => (
          <div key={i} className="text-green-400">
            {line}
            {i === currentLineIndex && <span className="typing-cursor">▌</span>}
          </div>
        ))}
      </div>

      {/* Progress Bar */}
      <div className="z-10 mt-8 w-[80%] max-w-lg h-2 bg-gray-800 rounded overflow-hidden">
        <div
          className="h-full bg-green-400 glow-bar transition-all duration-200"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Sound Toggle */}
      <div className="absolute top-4 right-4 z-20">
        <button
          onClick={toggleSound}
          className="text-xs border border-green-400 text-green-400 px-3 py-1 rounded hover:bg-green-600/10 transition"
        >
          {soundEnabled ? '🔊 Sound On' : '🔇 Sound Off'}
        </button>
      </div>

      <audio ref={audioRef} src="/typing.mp3" loop />
    </div>
  );
};

export default Loader;
