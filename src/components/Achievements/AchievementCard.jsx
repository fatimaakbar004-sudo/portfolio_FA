import { motion } from "framer-motion";
import PropTypes from "prop-types";

function AchievementCard({ achievement }) {
  return (
    <motion.div
      whileHover={{ y: -10, scale: 1.03 }}
      transition={{ duration: 0.3 }}
      className="bg-white dark:bg-zinc-900 rounded-3xl shadow-xl p-8"
    >
      <div className="text-5xl mb-6">{achievement.icon}</div>
      <h3 className="text-2xl font-bold">{achievement.title}</h3>
      <h4 className="mt-2 font-semibold text-[rgb(var(--primary))]">
        {achievement.organization}
      </h4>
      <p className="text-sm mt-2 text-gray-500">{achievement.date}</p>
      <p className="mt-6 leading-8 text-gray-500">
        {achievement.description}
      </p>
    </motion.div>
  );
}

AchievementCard.propTypes = {
  achievement: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    icon: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    organization: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};

export default AchievementCard;