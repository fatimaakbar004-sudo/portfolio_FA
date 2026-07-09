import { motion } from "framer-motion";
import { Star } from "lucide-react";
import PropTypes from "prop-types";

function TestimonialCard({ testimonial }) {
  return (
    <motion.div
      whileHover={{ y: -10, scale: 1.02 }}
      transition={{ duration: 0.3 }}
      className="rounded-3xl bg-white dark:bg-zinc-900 shadow-xl p-8"
    >
      <div className="flex items-center gap-5">
        <img
          src={testimonial.image}
          alt={testimonial.name}
          loading="lazy"
          className="w-20 h-20 rounded-full object-cover border-4 border-[rgb(var(--primary))]"
        />

        <div>
          <h3 className="text-xl font-bold">{testimonial.name}</h3>
          <p className="text-gray-500">{testimonial.company}</p>

          <div className="flex mt-2" aria-label={`${testimonial.rating} out of 5 stars`}>
            {Array.from({ length: testimonial.rating }).map((_, index) => (
              <Star
                // Rating is static per testimonial, so index is a stable key here.
                // eslint-disable-next-line react/no-array-index-key
                key={index}
                size={18}
                className="fill-yellow-400 text-yellow-400"
              />
            ))}
          </div>
        </div>
      </div>

      <p className="mt-8 leading-8 text-gray-500">
        &ldquo;{testimonial.review}&rdquo;
      </p>
    </motion.div>
  );
}

TestimonialCard.propTypes = {
  testimonial: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    name: PropTypes.string.isRequired,
    company: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    review: PropTypes.string.isRequired,
  }).isRequired,
};

export default TestimonialCard;