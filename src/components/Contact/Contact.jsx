import { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";

import ContactInfo from "./ContactInfo";

function Contact() {
  const formRef = useRef(null);
  const [isSending, setIsSending] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAIL_SERVICE_ID,
        import.meta.env.VITE_EMAIL_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAIL_PUBLIC_KEY
      )
      .then(() => {
        toast.success("Message sent successfully!");
        formRef.current.reset();
      })
      .catch(() => {
        toast.error("Something went wrong. Please try again.");
      })
      .finally(() => {
        setIsSending(false);
      });
  };

  return (
    <section id="contact" className="py-28">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="uppercase tracking-[5px] text-[rgb(var(--primary))] font-semibold">
            Contact
          </span>
          <h2 className="text-5xl font-black mt-4">Let&apos;s Work Together</h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          <ContactInfo />

          <motion.form
            ref={formRef}
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6 bg-white dark:bg-zinc-900 shadow-xl rounded-3xl p-8"
          >
            <input
              required
              type="text"
              name="name"
              placeholder="Your Name"
              className="w-full p-4 rounded-xl border dark:bg-zinc-800"
            />

            <input
              required
              type="email"
              name="email"
              placeholder="Your Email"
              className="w-full p-4 rounded-xl border dark:bg-zinc-800"
            />

            <textarea
              required
              rows="6"
              name="message"
              placeholder="Message..."
              className="w-full p-4 rounded-xl border dark:bg-zinc-800"
            />

            <button
              type="submit"
              disabled={isSending}
              className="w-full py-4 rounded-xl bg-[rgb(var(--primary))] text-white font-semibold hover:opacity-90 transition disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {isSending ? "Sending..." : "Send Message"}
            </button>
          </motion.form>
        </div>

        <div className="mt-20 rounded-3xl overflow-hidden shadow-xl">
          <iframe
            title="Location"
            src="https://www.google.com/maps?q=Karachi,Pakistan&output=embed"
            loading="lazy"
            className="w-full h-[450px]"
          />
        </div>
      </div>
    </section>
  );
}

export default Contact;