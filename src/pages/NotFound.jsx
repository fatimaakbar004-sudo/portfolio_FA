import { Link } from "react-router-dom";
import { Home } from "lucide-react";
import { motion } from "framer-motion";

function NotFound() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-[rgb(var(--background))] px-6">
      <motion.div
        initial={{ opacity: 0, scale: .8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: .6 }}
        className="text-center"
      >
        <h1 className="text-8xl md:text-9xl font-black text-[rgb(var(--primary))]">
          404
        </h1>

        <h2 className="text-4xl font-bold mt-6">
          Page Not Found
        </h2>

        <p className="mt-6 text-gray-500 max-w-xl mx-auto">
          Sorry, the page you're looking for doesn't exist or has been moved.
        </p>

        <Link
          to="/"
          className="inline-flex items-center gap-3 mt-10 px-8 py-4 rounded-xl bg-[rgb(var(--primary))] text-white hover:scale-105 duration-300"
        >
          <Home size={20} />
          Back to Home
        </Link>
      </motion.div>
    </section>
  );
}

export default NotFound;