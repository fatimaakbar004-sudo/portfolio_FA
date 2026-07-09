import { useEffect, useState } from "react";

function CustomCursor() {
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const move = (e) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", move);

    return () => {
      window.removeEventListener("mousemove", move);
    };
  }, []);

  return (
    <div
      className="hidden lg:block fixed pointer-events-none z-[9999] w-6 h-6 rounded-full border-2 border-[rgb(var(--primary))] transition-transform duration-75"
      style={{
        left: position.x - 12,
        top: position.y - 12,
      }}
    />
  );
}

export default CustomCursor;