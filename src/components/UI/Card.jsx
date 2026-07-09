function Card({
  children,
  className = "",
}) {
  return (
    <div
      className={`
        rounded-3xl
        bg-white
        dark:bg-zinc-900
        shadow-lg
        p-6
        hover:shadow-2xl
        transition
        ${className}
      `}
    >
      {children}
    </div>
  );
}

export default Card;