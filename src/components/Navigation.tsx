import { motion } from "framer-motion";
import { Link } from "react-scroll";

const Navigation = () => {
  const navItems = [
    { label: "Home", to: "hero" },
    { label: "About", to: "about" },
    { label: "Experience", to: "experience" },
    { label: "Contact", to: "contact" }
  ];

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm border-b border-blue-500/20"
    >
      <div className="container mx-auto px-4">
        <ul className="flex justify-center items-center space-x-8 py-4">
          {navItems.map((item) => (
            <motion.li
              key={item.to}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to={item.to}
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                className="text-gray-300 hover:text-blue-400 transition-colors cursor-pointer text-sm font-medium"
              >
                {item.label}
              </Link>
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.nav>
  );
};

export default Navigation;