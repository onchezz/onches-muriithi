import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-scroll";
import { Menu, ChevronDown } from "lucide-react";
import { useState } from "react";
import { useIsMobile } from "@/hooks/use-mobile";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useIsMobile();

  const navItems = [
    { label: "Home", to: "hero" },
    { label: "About", to: "about" },
    { label: "Experience", to: "experience" },
    { label: "Contact", to: "contact" }
  ];

  const toggleMenu = () => setIsOpen(!isOpen);

  if (isMobile) {
    return (
      <div className="fixed top-4 right-4 z-50">
        <motion.button
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.3 }}
          onClick={toggleMenu}
          className="bg-black/80 backdrop-blur-sm border border-blue-500/20 rounded-lg p-2 shadow-lg"
        >
          <ChevronDown className="w-6 h-6 text-gray-300" />
        </motion.button>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="absolute top-full right-0 mt-2 bg-black/90 backdrop-blur-sm rounded-lg shadow-lg border border-blue-500/20 min-w-[160px] py-2"
            >
              <nav>
                <ul className="flex flex-col">
                  {navItems.map((item) => (
                    <motion.li
                      key={item.to}
                      whileHover={{ backgroundColor: "rgba(59, 130, 246, 0.1)" }}
                    >
                      <Link
                        to={item.to}
                        spy={true}
                        smooth={true}
                        offset={-100}
                        duration={500}
                        className="block px-4 py-2 text-gray-300 hover:text-blue-400 transition-colors cursor-pointer text-sm"
                        onClick={toggleMenu}
                      >
                        {item.label}
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  }

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="fixed top-4 left-1/2 -translate-x-1/2 z-50 bg-black/80 backdrop-blur-sm border border-blue-500/20 rounded-full px-6 py-2 shadow-lg"
    >
      <ul className="flex justify-center items-center space-x-8">
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
    </motion.nav>
  );
};

export default Navigation;
