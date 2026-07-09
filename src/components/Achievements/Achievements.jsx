import { motion } from "framer-motion";

import AchievementCard from "./AchievementCard";
import { achievements } from "./achievementsData";

const STATS = [
  { value: "6+", label: "Certifications" },
  { value: "2", label: "Internships" },
  { value: "20+", label: "Projects" },
  { value: "100%", label: "Dedication" },
];

function Achievements() {
  return (
    <section id="achievements" className="py-28">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="uppercase tracking-[6px] font-semibold text-[rgb(var(--primary))]">
            Achievements
          </span>
          <h2 className="text-5xl font-black mt-4">
            Certifications & Awards
          </h2>
          <p className="mt-6 max-w-3xl mx-auto text-gray-500 leading-8">
            A collection of internships, certifications, awards, and
            accomplishments that reflect my commitment to continuous
            learning and professional growth.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {achievements.map((achievement) => (
            <AchievementCard key={achievement.id} achievement={achievement} />
          ))}
        </div>

        <div className="grid md:grid-cols-4 gap-8 mt-24">
          {STATS.map((stat) => (
            <div
              key={stat.label}
              className="rounded-3xl bg-white dark:bg-zinc-900 shadow-xl p-8 text-center"
            >
              <h2 className="text-5xl font-black text-[rgb(var(--primary))]">
                {stat.value}
              </h2>
              <p className="mt-4 text-gray-500">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Achievements;