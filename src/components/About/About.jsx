import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Award, Download } from "lucide-react";

import Button from "../UI/Button";
import { experiences } from "../Experience/experienceData";

const EDUCATION = [
  {
    degree: "BS Software Engineering",
    institute: "Virtual University of Pakistan",
    duration: "2025 - Present",
  },
];

const INFO_CARDS = [
  { icon: <Award />, title: "Projects", value: "20+" },
  { icon: <Briefcase />, title: "Experience", value: "2 Internships" },
  {
    icon: <GraduationCap />,
    title: "Education",
    value: "BS Software Engineering",
  },
  { icon: <Award />, title: "Certificates", value: "Multiple" },
];

function About() {
  return (
    <section id="about" className="py-28 bg-[rgb(var(--background))]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-[rgb(var(--primary))] font-semibold uppercase tracking-widest">
            About Me
          </span>
          <h2 className="text-4xl md:text-5xl font-black mt-4">
            Know More About Me
          </h2>
          <p className="max-w-3xl mx-auto mt-6 text-gray-500 leading-8">
            I&apos;m a passionate React frontend developer dedicated to
            building fast, responsive, and accessible web applications with
            modern UI, clean architecture, and exceptional user experiences.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="/projects/profile.svg"
                alt="Fatima Akbar"
                loading="lazy"
                className="w-full"
              />
            </div>
          </motion.div>

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="text-3xl font-bold mb-6">Frontend Developer</h3>

            <p className="text-gray-500 leading-8 mb-10">
              I specialize in React.js, JavaScript, Tailwind CSS, responsive
              web development, UI/UX implementation, REST API integration,
              and performance optimization. My goal is to create elegant
              digital experiences that are scalable, accessible, and
              user-friendly.
            </p>

            <div className="grid sm:grid-cols-2 gap-5 mb-10">
              {INFO_CARDS.map((card) => (
                <InfoCard key={card.title} {...card} />
              ))}
            </div>

            <Button>
              <Download size={18} />
              Download CV
            </Button>
          </motion.div>
        </div>

        {/* Timeline */}
        <div className="grid lg:grid-cols-2 gap-10 mt-24">
          {/* Experience */}
          <motion.div
            initial={{ opacity: 0, y: 70 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-8">Experience</h3>
            <div className="space-y-6">
              {experiences.map((item) => (
                <TimelineCard
                  key={item.id}
                  title={item.role}
                  subtitle={item.company}
                  duration={item.duration}
                />
              ))}
            </div>
          </motion.div>

          {/* Education */}
          <motion.div
            initial={{ opacity: 0, y: 70 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-8">Education</h3>
            <div className="space-y-6">
              {EDUCATION.map((item) => (
                <TimelineCard
                  key={item.degree}
                  title={item.degree}
                  subtitle={item.institute}
                  duration={item.duration}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function InfoCard({ icon, title, value }) {
  return (
    <div className="rounded-2xl bg-white dark:bg-zinc-900 shadow-lg p-6 hover:scale-105 transition">
      <div className="text-[rgb(var(--primary))] mb-4">{icon}</div>
      <h4 className="font-semibold">{title}</h4>
      <p className="text-gray-500 mt-2">{value}</p>
    </div>
  );
}

function TimelineCard({ title, subtitle, duration }) {
  return (
    <div className="rounded-2xl border border-gray-200 dark:border-zinc-700 p-6 hover:border-[rgb(var(--primary))] transition">
      <h4 className="font-bold text-xl">{title}</h4>
      <p className="text-[rgb(var(--primary))] mt-2">{subtitle}</p>
      <span className="text-gray-500 text-sm mt-3 block">{duration}</span>
    </div>
  );
}

export default About;