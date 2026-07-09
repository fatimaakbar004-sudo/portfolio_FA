function ColorButton({ color, active, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`
        w-8 h-8 rounded-full border-2 transition-all duration-300
        ${active ? "scale-125 border-white shadow-lg" : "border-transparent"}
      `}
      style={{
        backgroundColor: `rgb(var(${color}))`,
      }}
      aria-label={`Select ${color.replace("--", "")} theme`}
    />
  );
}

export default ColorButton;