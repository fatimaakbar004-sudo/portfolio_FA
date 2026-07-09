import { useMemo, useState } from "react";
import { motion } from "framer-motion";

import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";
import { projects } from "./projectsData";

const FILTERS = ["All", "React", "JavaScript", "API"];

function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = useMemo(() => {
    if (activeFilter === "All") return projects;
    return projects.filter((project) => project.category === activeFilter);
  }, [activeFilter]);

  return (
    <>
      <section id="projects" className="py-28">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <span className="uppercase tracking-[6px] text-[rgb(var(--primary))] font-semibold">
              Portfolio
            </span>
            <h2 className="text-5xl font-black mt-4">Featured Projects</h2>
            <p className="max-w-3xl mx-auto mt-6 text-gray-500 leading-8">
              A collection of frontend applications developed during
              internships, university learning, and personal practice.
            </p>
          </motion.div>

          {/* Filters */}
          <div className="flex justify-center flex-wrap gap-4 mt-16">
            {FILTERS.map((filter) => (
              <button
                key={filter}
                type="button"
                onClick={() => setActiveFilter(filter)}
                aria-pressed={activeFilter === filter}
                className={`px-6 py-3 rounded-full transition ${
                  activeFilter === filter
                    ? "bg-[rgb(var(--primary))] text-white"
                    : "bg-gray-100 dark:bg-zinc-800"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 mt-16">
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onOpen={setSelectedProject}
              />
            ))}
          </div>
        </div>
      </section>

      <ProjectModal
        open={!!selectedProject}
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </>
  );
}

export default Projects;