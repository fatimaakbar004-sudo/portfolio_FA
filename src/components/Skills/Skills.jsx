import { motion } from "framer-motion";
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";
import { SiTailwindcss, SiVite, SiRedux } from "react-icons/si";

const FRONTEND_SKILLS = [
  { name: "React.js", value: 95 },
  { name: "JavaScript", value: 92 },
  { name: "Tailwind CSS", value: 95 },
  { name: "HTML5", value: 98 },
  { name: "CSS3", value: 95 },
];

const TOOLS = [
  { icon: FaReact, title: "React" },
  { icon: SiTailwindcss, title: "Tailwind" },
  { icon: FaJs, title: "JavaScript" },
  { icon: FaHtml5, title: "HTML5" },
  { icon: FaCss3Alt, title: "CSS3" },
  { icon: SiRedux, title: "Redux" },
  { icon: FaGitAlt, title: "Git" },
  { icon: FaGithub, title: "GitHub" },
  { icon: SiVite, title: "Vite" },
];

const STATS = [
  { number: "20+", title: "Projects" },
  { number: "10+", title: "Technologies" },
  { number: "2", title: "Internships" },
  { number: "100%", title: "Dedication" },
];

function Skills() {
  return (
    <section id="skills" className="py-28">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="uppercase tracking-[6px] font-semibold text-[rgb(var(--primary))]">
            Skills
          </span>
          <h2 className="text-5xl font-black mt-4">Technical Expertise</h2>
          <p className="mt-6 text-gray-500 max-w-3xl mx-auto leading-8">
            My frontend development stack focuses on creating scalable,
            responsive, accessible and modern web applications using
            today&apos;s latest technologies.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Skill bars */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-10">Professional Skills</h3>

            {FRONTEND_SKILLS.map((skill) => (
              <div key={skill.name} className="mb-8">
                <div className="flex justify-between mb-3">
                  <span className="font-semibold">{skill.name}</span>
                  <span>{skill.value}%</span>
                </div>

                <div className="h-3 rounded-full bg-gray-200 dark:bg-zinc-800">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.value}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                    className="h-3 rounded-full bg-[rgb(var(--primary))]"
                  />
                </div>
              </div>
            ))}
          </motion.div>

          {/* Tools grid */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {TOOLS.map(({ icon: Icon, title }) => (
                <div
                  key={title}
                  className="rounded-3xl p-8 bg-white dark:bg-zinc-900 shadow-lg hover:-translate-y-3 hover:shadow-2xl transition duration-300 flex flex-col items-center"
                >
                  <Icon size={42} className="text-[rgb(var(--primary))]" />
                  <h4 className="mt-5 font-semibold">{title}</h4>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-4 gap-8 mt-24"
        >
          {STATS.map((stat) => (
            <Stat key={stat.title} number={stat.number} title={stat.title} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function Stat({ number, title }) {
  return (
    <div className="rounded-3xl bg-white dark:bg-zinc-900 shadow-xl p-8 text-center hover:scale-105 transition">
      <h3 className="text-5xl font-black text-[rgb(var(--primary))]">
        {number}
      </h3>
      <p className="mt-4 text-gray-500">{title}</p>
    </div>
  );
}

export default Skills;