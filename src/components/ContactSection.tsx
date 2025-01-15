import { motion } from "framer-motion";
import ContactForm from "./contact/ContactForm";
import ContactInfo from "./contact/ContactInfo";

const ContactSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-indigo-950 to-black relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 text-white">Get in Touch</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto mb-8"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Interested in collaborating or have a project in mind? Let's discuss how we can work together
            to bring your blockchain vision to life.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <ContactInfo />
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;