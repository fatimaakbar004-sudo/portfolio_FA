import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import PropTypes from "prop-types";

function ProjectModal({ project, open, onClose }) {
  // Hooks must always run in the same order, so the "no project" guard
  // lives inside the effect/render instead of before the hook call.
  useEffect(() => {
    if (!open) return undefined;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex justify-center items-center p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={(e) => e.stopPropagation()}
            className="relative bg-white dark:bg-zinc-900 rounded-3xl max-w-5xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
          >
            <button
              type="button"
              onClick={onClose}
              aria-label="Close dialog"
              className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-black/80 transition"
            >
              <X size={20} />
            </button>

            <div className="grid md:grid-cols-3 gap-4 p-6">
              {project.gallery.map((image) => (
                <img
                  key={image}
                  src={image}
                  alt={project.title}
                  className="rounded-xl object-cover h-48 w-full hover:scale-105 duration-300 cursor-pointer"
                />
              ))}
            </div>

            <div className="p-8">
              <h2 className="text-4xl font-black">{project.title}</h2>

              <p className="mt-6 leading-8 text-gray-500">
                {project.longDescription}
              </p>

              <div className="mt-10">
                <h3 className="font-bold text-xl">Technologies</h3>
                <div className="flex flex-wrap gap-3 mt-5">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-4 py-2 rounded-full bg-[rgb(var(--primary))]/10"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-10">
                <h3 className="font-bold text-xl">Key Features</h3>
                <ul className="list-disc ml-6 mt-5 space-y-3">
                  {project.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
              </div>

              <div className="flex gap-5 mt-10">
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 bg-[rgb(var(--primary))] text-white px-6 py-3 rounded-xl"
                >
                  <ExternalLink size={20} />
                  Live Demo
                </a>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 border-2 border-[rgb(var(--primary))] px-6 py-3 rounded-xl"
                >
                  <FaGithub size={20} />
                  GitHub
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

ProjectModal.propTypes = {
  project: PropTypes.shape({
    title: PropTypes.string,
    longDescription: PropTypes.string,
    gallery: PropTypes.arrayOf(PropTypes.string),
    technologies: PropTypes.arrayOf(PropTypes.string),
    features: PropTypes.arrayOf(PropTypes.string),
    demo: PropTypes.string,
    github: PropTypes.string,
  }),
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

ProjectModal.defaultProps = {
  project: null,
};

export default ProjectModal;