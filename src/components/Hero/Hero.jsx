import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { FaGithub, FaLinkedin, FaArrowDown } from "react-icons/fa";

import Button from "../UI/Button";

const TYPE_SEQUENCE = [
  "Frontend Developer",
  2000,
  "React Developer",
  2000,
  "UI Designer",
  2000,
  "Tailwind CSS Expert",
  2000,
];

const SOCIAL_LINKS = [
  {
    icon: FaGithub,
    href: "https://github.com/fatimaakbar004-sudo",
    label: "GitHub",
  },
  {
    icon: FaLinkedin,
    href: "https://www.linkedin.com/in/fatima-akbar-45b7b33a6",
    label: "LinkedIn",
  },
];

function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 -z-20 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-cyan-500/10" />
      <div className="absolute top-20 left-10 w-72 h-72 rounded-full bg-blue-500/20 blur-[120px]" />
      <div className="absolute bottom-10 right-10 w-72 h-72 rounded-full bg-purple-500/20 blur-[120px]" />

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-14 items-center">
        {/* Left side */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block px-5 py-2 rounded-full bg-[rgb(var(--primary))]/10 text-[rgb(var(--primary))] font-semibold mb-6">
            <span aria-hidden="true">👋</span> Welcome to my portfolio
          </span>

          <h1 className="text-5xl lg:text-7xl font-black leading-tight">
            Hi, I&apos;m
            <span className="text-[rgb(var(--primary))]"> Fatima Akbar</span>
          </h1>

          <div className="text-2xl mt-8 h-16 font-semibold">
            <TypeAnimation
              sequence={TYPE_SEQUENCE}
              speed={40}
              repeat={Infinity}
            />
          </div>

          <p className="mt-8 text-lg text-gray-500 max-w-xl leading-8">
            Passionate frontend developer focused on building modern,
            responsive, accessible, and high-performance web applications
            using React, Tailwind CSS, and JavaScript.
          </p>

          <div className="flex flex-wrap gap-5 mt-10">
             <a href="#projects">
              <Button>View Projects </Button>
            </a>

            <Button
              href="/Fatima-Akbar-CV.pdf"
              download
              outline
            >
              Download CV
            </Button>
          </div>

          <div className="flex gap-6 mt-10 text-3xl">
            {SOCIAL_LINKS.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="hover:text-[rgb(var(--primary))] transition"
              >
                <Icon />
              </a>
            ))}
          </div>
        </motion.div>

        {/* Right side */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-[rgb(var(--primary))]/30 blur-3xl" />
            <img
              src="/projects/profile.svg"
              alt="Fatima Akbar"
              loading="lazy"
              className="relative w-80 lg:w-[430px] rounded-full border-8 border-white shadow-2xl object-cover"
            />
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        aria-label="Scroll to About section"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce"
      >
        <FaArrowDown size={26} />
      </a>
    </section>
  );
}

export default Hero;
