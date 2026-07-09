import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import PropTypes from "prop-types";

function ExperienceCard({ experience, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: index % 2 === 0 ? -80 : 80 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="relative bg-white dark:bg-zinc-900 rounded-3xl shadow-xl p-8 hover:-translate-y-2 transition"
    >
      <div className="absolute -left-5 top-10 w-10 h-10 rounded-full bg-[rgb(var(--primary))] flex items-center justify-center text-white shadow-lg">
        <Briefcase size={18} />
      </div>

      <span className="inline-block px-4 py-1 rounded-full bg-[rgb(var(--primary))]/10 text-[rgb(var(--primary))] text-sm font-semibold mb-5">
        {experience.type}
      </span>

      <h3 className="text-2xl font-bold">{experience.role}</h3>
      <h4 className="text-lg mt-2 font-semibold text-[rgb(var(--primary))]">
        {experience.company}
      </h4>
      <p className="text-gray-500 mt-2">{experience.duration}</p>
      <p className="mt-6 leading-8 text-gray-500">
        {experience.description}
      </p>

      <div className="flex flex-wrap gap-3 mt-6">
        {experience.technologies.map((tech) => (
          <span
            key={tech}
            className="px-4 py-2 rounded-full bg-gray-100 dark:bg-zinc-800 text-sm"
          >
            {tech}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

ExperienceCard.propTypes = {
  experience: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    company: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired,
    duration: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    technologies: PropTypes.arrayOf(PropTypes.string).isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired,
};

export default ExperienceCard;