import { Mail, Linkedin, Github } from "lucide-react";
import { motion } from "framer-motion";

const ContactInfo = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <h3 className="text-2xl font-semibold mb-6 text-white">Contact Information</h3>
      <div className="space-y-6">
        <a 
          href="mailto:brianonchezz@gmail.com"
          className="flex items-center gap-4 text-gray-300 hover:text-blue-400 transition-colors"
        >
          <Mail className="w-6 h-6" />
          <span>brianonchezz@gmail.com</span>
        </a>
        <a 
          href="https://www.linkedin.com/in/brian-onchezz-b3b1b3b3/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-4 text-gray-300 hover:text-blue-400 transition-colors"
        >
          <Linkedin className="w-6 h-6" />
          <span>LinkedIn</span>
        </a>
        <a 
          href="https://github.com/onchezz"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-4 text-gray-300 hover:text-blue-400 transition-colors"
        >
          <Github className="w-6 h-6" />
          <span>GitHub</span>
        </a>
      </div>
    </motion.div>
  );
};

export default ContactInfo;