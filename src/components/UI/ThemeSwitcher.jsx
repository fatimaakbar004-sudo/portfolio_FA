import { Palette } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";
import { useTheme } from "../../context/ThemeContext";
import ColorButton from "./ColorButton";

function ThemeSwitcher() {
  const [open, setOpen] = useState(false);

  const {
    accentColor,
    setAccentColor,
  } = useTheme();

  const colors = [
    "blue",
    "red",
    "green",
    "purple",
    "orange",
    "gold",
  ];

  return (
    <div className="fixed right-6 bottom-24 z-50">

      {open && (

        <motion.div
          initial={{
            opacity: 0,
            scale: 0.8,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          className="mb-4 p-4 rounded-2xl bg-white dark:bg-zinc-900 shadow-xl flex flex-col gap-3"
        >

          {colors.map((color) => (

            <ColorButton
              key={color}
              color={`--${color}`}
              active={accentColor === color}
              onClick={() => setAccentColor(color)}
            />

          ))}

        </motion.div>

      )}

      <button
        onClick={() => setOpen(!open)}
        className="w-14 h-14 rounded-full bg-[rgb(var(--primary))] text-white flex items-center justify-center shadow-xl"
      >

        <Palette />

      </button>

    </div>
  );
}

export default ThemeSwitcher;