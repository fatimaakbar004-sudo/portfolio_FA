import { motion } from "framer-motion";

import TestimonialCard from "../Testimonials/TestimonialCard";
import { testimonials } from "../Testimonials/testimonialData";

function Testimonials() {
  return (
    <section id="testimonials" className="py-28">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="uppercase tracking-[6px] text-[rgb(var(--primary))] font-semibold">
            Testimonials
          </span>
          <h2 className="text-5xl font-black mt-4">What People Say</h2>
          <p className="max-w-3xl mx-auto mt-6 leading-8 text-gray-500">
            Feedback from mentors and professional experiences that reflect
            my dedication, teamwork, and frontend development skills.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;