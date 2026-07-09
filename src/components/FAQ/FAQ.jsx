import { motion } from "framer-motion";

import FAQItem from "./FAQItem";
import { faqs } from "./faqData";

function FAQ() {
  return (
    <section id="faq" className="py-28">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="uppercase tracking-[6px] text-[rgb(var(--primary))] font-semibold">
            FAQ
          </span>
          <h2 className="text-5xl font-black mt-4">
            Frequently Asked Questions
          </h2>
          <p className="mt-6 text-gray-500 dark:text-gray-400 leading-8 max-w-2xl mx-auto">
            Here are some common questions about my skills, experience, and
            the services I provide.
          </p>
        </motion.div>

        <div className="space-y-5">
          {faqs.map((faq) => (
            <FAQItem key={faq.id} faq={faq} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQ;