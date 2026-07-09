import { motion } from "framer-motion";
import { Eye } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import PropTypes from "prop-types";

function ProjectCard({ project, onOpen }) {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      transition={{ duration: 0.3 }}
      className="group bg-white dark:bg-zinc-900 rounded-3xl overflow-hidden shadow-xl"
    >
      {/* Image */}
      <div className="relative overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-64 object-cover duration-500 group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 duration-300 flex items-center justify-center gap-5">
          <button
            type="button"
            onClick={() => onOpen(project)}
            aria-label={`View details for ${project.title}`}
            className="w-14 h-14 rounded-full bg-white text-black flex items-center justify-center hover:scale-110 duration-300"
          >
            <Eye size={22} />
          </button>

          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View ${project.title} source on GitHub`}
            className="w-14 h-14 rounded-full bg-[rgb(var(--primary))] text-white flex items-center justify-center hover:scale-110 duration-300"
          >
            <FaGithub size={22} />
          </a>
        </div>
      </div>

      {/* Content */}
      <div className="p-7">
        <span className="text-sm uppercase tracking-widest text-[rgb(var(--primary))]">
          {project.category}
        </span>

        <h3 className="text-2xl font-bold mt-3">{project.title}</h3>

        <p className="mt-4 text-gray-500 dark:text-gray-400 leading-7">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mt-6">
          {project.technologies.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 rounded-full bg-[rgb(var(--primary))]/10 text-sm"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

ProjectCard.propTypes = {
  project: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    github: PropTypes.string.isRequired,
    technologies: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
  onOpen: PropTypes.func.isRequired,
};

export default ProjectCard;