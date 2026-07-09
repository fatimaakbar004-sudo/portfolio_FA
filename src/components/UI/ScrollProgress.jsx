import { useEffect, useState } from "react";

function ScrollProgress() {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const update = () => {
      const total =
        document.documentElement.scrollHeight -
        window.innerHeight;

      const current =
        (window.scrollY / total) * 100;

      setWidth(current);
    };

    window.addEventListener("scroll", update);

    return () =>
      window.removeEventListener("scroll", update);
  }, []);

  return (
    <div
      className="fixed top-0 left-0 h-1 bg-[rgb(var(--primary))] z-[100]"
      style={{
        width: `${width}%`,
      }}
    />
  );
}

export default ScrollProgress;