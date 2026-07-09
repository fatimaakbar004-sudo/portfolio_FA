import { motion } from "framer-motion";

function SectionTitle({
  badge,
  title,
  description,
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 50,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
      }}
      className="text-center mb-20"
    >
      <span className="uppercase tracking-[6px] font-semibold text-[rgb(var(--primary))]">
        {badge}
      </span>

      <h2 className="text-5xl font-black mt-4">
        {title}
      </h2>

      {description && (
        <p className="mt-6 max-w-3xl mx-auto text-gray-500 leading-8">
          {description}
        </p>
      )}
    </motion.div>
  );
}

export default SectionTitle;