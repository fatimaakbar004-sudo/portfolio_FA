function Skeleton({
  className = "",
}) {
  return (
    <div
      className={`animate-pulse bg-gray-200 dark:bg-zinc-800 rounded-xl ${className}`}
    />
  );
}

export default Skeleton;