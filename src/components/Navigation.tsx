import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-scroll";
import { Menu, X } from "lucide-react";
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
      <>
        <motion.button
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          onClick={toggleMenu}
          className="fixed top-4 right-4 z-50 bg-black/80 backdrop-blur-sm border border-blue-500/20 rounded-full p-2 shadow-lg"
        >
          <Menu className="w-6 h-6 text-gray-300" />
        </motion.button>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/90 backdrop-blur-sm z-40 flex items-center justify-center"
            >
              <button
                onClick={toggleMenu}
                className="absolute top-4 right-4 text-gray-300 p-2"
              >
                <X className="w-6 h-6" />
              </button>
              <motion.nav
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <ul className="flex flex-col items-center space-y-6">
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
                        className="text-gray-300 hover:text-blue-400 transition-colors cursor-pointer text-xl font-medium"
                        onClick={toggleMenu}
                      >
                        {item.label}
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </motion.nav>
            </motion.div>
          )}
        </AnimatePresence>
      </>
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