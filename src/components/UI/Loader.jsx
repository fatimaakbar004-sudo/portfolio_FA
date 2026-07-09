import { motion, AnimatePresence } from "framer-motion";

function Loader({ loading }) {
  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-[rgb(var(--background))]"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex flex-col items-center">

            {/* Animated Logo */}

            <motion.div
              animate={{
                rotate: 360,
              }}
              transition={{
                repeat: Infinity,
                duration: 2,
                ease: "linear",
              }}
              className="w-20 h-20 rounded-full border-4 border-[rgb(var(--primary))] border-t-transparent"
            />

            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.3,
              }}
              className="mt-8 text-4xl font-black"
            >
              Fatima
              <span className="text-[rgb(var(--primary))]">.</span>
            </motion.h1>

           <p className="mt-4 text-[rgb(var(--muted))]">
              Loading Portfolio...
            </p>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default Loader;