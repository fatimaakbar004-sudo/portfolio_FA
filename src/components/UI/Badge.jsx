function Badge({
  children,
}) {
  return (
    <span className="inline-flex items-center px-4 py-2 rounded-full bg-[rgb(var(--primary))]/10 text-[rgb(var(--primary))] text-sm font-semibold">
      {children}
    </span>
  );
}

export default Badge;