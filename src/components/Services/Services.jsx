import { motion } from "framer-motion";

import ServiceCard from "./ServiceCard";
import { services } from "./servicesData";

function Services() {
  return (
    <section id="services" className="py-28">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="uppercase tracking-[6px] text-[rgb(var(--primary))] font-semibold">
            Services
          </span>
          <h2 className="text-5xl font-black mt-4">What I Can Do</h2>
          <p className="max-w-3xl mx-auto mt-6 leading-8 text-gray-500 dark:text-gray-400">
            I build modern, responsive, and user-friendly web applications
            with a focus on performance, accessibility, and clean code.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;