import { motion } from "framer-motion";
import PropTypes from "prop-types";

function ServiceCard({ service }) {
  const Icon = service.icon;

  return (
    <motion.div
      whileHover={{ y: -10, scale: 1.03 }}
      transition={{ duration: 0.3 }}
      className="bg-white dark:bg-zinc-900 rounded-3xl shadow-xl p-8 border border-transparent hover:border-[rgb(var(--primary))]/40"
    >
      <div className="w-16 h-16 rounded-2xl bg-[rgb(var(--primary))]/10 flex items-center justify-center mb-6">
        <Icon size={32} className="text-[rgb(var(--primary))]" />
      </div>

      <h3 className="text-2xl font-bold mb-4">{service.title}</h3>

      <p className="text-gray-500 dark:text-gray-400 leading-8">
        {service.description}
      </p>
    </motion.div>
  );
}

ServiceCard.propTypes = {
  service: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    icon: PropTypes.elementType.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};

export default ServiceCard;