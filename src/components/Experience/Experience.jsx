import { motion } from "framer-motion";

import ExperienceCard from "./ExperienceCard";
import { experiences } from "./experienceData";

function Experience() {
  return (
    <section id="experience" className="py-28">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="uppercase tracking-[6px] text-[rgb(var(--primary))] font-semibold">
            Experience
          </span>
          <h2 className="text-5xl font-black mt-4">Professional Journey</h2>
          <p className="max-w-3xl mx-auto mt-6 text-gray-500 leading-8">
            My internship experience has strengthened my frontend development
            skills while giving me practical exposure to building responsive
            web applications using modern technologies.
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-5 top-0 bottom-0 w-1 bg-[rgb(var(--primary))]/30 hidden md:block" />

          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <ExperienceCard
                key={experience.id}
                experience={experience}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;