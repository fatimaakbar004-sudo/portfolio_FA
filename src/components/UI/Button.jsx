import clsx from "clsx";

function Button({
  children,
  outline = false,
  size = "md",
  className = "",
  type = "button",
  disabled = false,
  ...props
}) {
  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3",
    lg: "px-8 py-4 text-lg",
  };

  return (
    <button
      type={type}
      disabled={disabled}
      {...props}
      className={clsx(
        "rounded-xl font-semibold transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-[rgb(var(--primary))]/30",

        sizes[size],

        outline
          ? "border border-[rgb(var(--primary))] text-[rgb(var(--primary))] hover:bg-[rgb(var(--primary))]/10"
          : "bg-[rgb(var(--primary))] text-white hover:-translate-y-1 hover:shadow-xl",

        disabled && "cursor-not-allowed opacity-50",

        className
      )}
    >
      {children}
    </button>
  );
}

export default Button;