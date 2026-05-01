import { useEffect, useState } from "react";

const CursorGlow = () => {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e) => {
      setPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div
      className="pointer-events-none fixed top-0 left-0 z-50"
      style={{
        transform: `translate(${pos.x - 100}px, ${pos.y - 100}px)`,
      }}
    >
      <div className="w-[200px] h-[200px] bg-purple-500/20 blur-3xl rounded-full"></div>
    </div>
  );
};

export default CursorGlow;