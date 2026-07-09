import { FaGithub, FaLinkedin, FaEnvelope, FaArrowUp } from "react-icons/fa";

const QUICK_LINKS = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

const SOCIAL_LINKS = [
  { icon: FaGithub, href: "https://github.com/fatimaakbar004-sudo", label: "GitHub" },
  { icon: FaLinkedin, href: "https://www.linkedin.com/in/fatima-akbar-45b7b33a6", label: "LinkedIn" },
  { icon: FaEnvelope, href: "mailto:fatimaakbar004@gmail.com", label: "Email" },
];

function Footer() {
  const year = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-gray-200 dark:border-zinc-800 mt-24">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <h2 className="text-3xl font-black">
              Fatima<span className="text-[rgb(var(--primary))]">.</span>
            </h2>
            <p className="mt-6 text-gray-500 leading-8">
              Frontend developer specializing in React, JavaScript, and
              Tailwind CSS. Passionate about building responsive, accessible,
              and user-friendly web applications.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="font-bold text-xl mb-6">Quick Links</h3>
            <ul className="space-y-4">
              {QUICK_LINKS.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-500 hover:text-[rgb(var(--primary))] transition"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-bold text-xl mb-6">Connect</h3>
            <div className="flex gap-5">
              {SOCIAL_LINKS.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-12 h-12 rounded-xl bg-[rgb(var(--primary))]/10 flex justify-center items-center hover:bg-[rgb(var(--primary))] hover:text-white transition"
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 dark:border-zinc-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-500 text-center">
            © {year} Fatima Akbar. All Rights Reserved.
          </p>

          <button
            type="button"
            onClick={scrollToTop}
            aria-label="Back to top"
            className="w-12 h-12 rounded-full bg-[rgb(var(--primary))] text-white hover:scale-110 transition"
          >
            <FaArrowUp />
          </button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;