import { useEffect, useState } from "react";
import { ChevronUp } from "lucide-react";

function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      onClick={() =>
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        })
      }
      className="fixed bottom-8 right-8 w-14 h-14 rounded-full bg-[rgb(var(--primary))] text-white shadow-xl hover:scale-110 transition"
      aria-label="Scroll to top"
    >
      <ChevronUp className="mx-auto" />
    </button>
  );
}

export default ScrollToTop;