import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import { Mail, Phone, MapPin } from "lucide-react";
import { Button } from "./ui/button";

const ProfileContact = () => {
  return (
    <div className="container mx-auto px-4">
      <h2 className="text-4xl font-bold text-center mb-16 text-[#FFB6A3]">
        Get In Touch
      </h2>
      <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <div className="flex items-center gap-4 text-gray-400">
            <Mail className="w-6 h-6 text-[#FFB6A3]" />
            <span>{portfolioData.personal_info.contact.email}</span>
          </div>
          <div className="flex items-center gap-4 text-gray-400">
            <Phone className="w-6 h-6 text-[#FFB6A3]" />
            <span>{portfolioData.personal_info.contact.phone}</span>
          </div>
          <div className="flex items-center gap-4 text-gray-400">
            <MapPin className="w-6 h-6 text-[#FFB6A3]" />
            <span>Remote</span>
          </div>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-6"
          onSubmit={(e) => {
            e.preventDefault();
            const formData = new FormData(e.currentTarget);
            const data = Object.fromEntries(formData);
            window.location.href = `mailto:${portfolioData.personal_info.contact.email}?subject=Contact from Portfolio&body=Name: ${data.name}%0D%0AEmail: ${data.email}%0D%0AMessage: ${data.message}`;
          }}
        >
          <input
            name="name"
            type="text"
            placeholder="Your Name"
            className="w-full p-3 bg-[#121212] border border-[#FFB6A3]/20 rounded-lg focus:border-[#FFB6A3]/40 focus:outline-none"
            required
          />
          <input
            name="email"
            type="email"
            placeholder="Your Email"
            className="w-full p-3 bg-[#121212] border border-[#FFB6A3]/20 rounded-lg focus:border-[#FFB6A3]/40 focus:outline-none"
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows={4}
            className="w-full p-3 bg-[#121212] border border-[#FFB6A3]/20 rounded-lg focus:border-[#FFB6A3]/40 focus:outline-none"
            required
          />
          <Button className="w-full bg-[#FFB6A3] hover:bg-[#FFB6A3]/90 text-black">
            Send Message
          </Button>
        </motion.form>
      </div>
    </div>
  );
};

export default ProfileContact;