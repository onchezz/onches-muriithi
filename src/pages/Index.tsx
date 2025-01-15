import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import { Github, Linkedin, Mail, Phone, MapPin } from "lucide-react";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import { Button } from "@/components/ui/button";
import { HireModal } from "@/components/HireModal";
import { generatePDF } from "@/utils/generatePDF";
import Navigation from "@/components/Navigation";

const Index = () => {
  return (
    <div className="min-h-screen bg-[#121212] text-white">
      <Navigation />

      {/* Hero Section */}
      <section
        id="hero"
        className="min-h-screen flex items-center relative overflow-hidden pt-20"
      >
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-4">
              Hello, I'm
              <span className="block text-[#FFB6A3]">
                {portfolioData.personal_info.name}
              </span>
            </h1>
            <p className="text-xl text-gray-400 mb-8">
              {portfolioData.personal_info.tagline}
            </p>
            <div className="flex gap-4">
              <HireModal />
              <Button
                variant="outline"
                className="border-[#FFB6A3] text-[#FFB6A3] hover:bg-[#FFB6A3]/10"
                onClick={generatePDF}
              >
                Download CV
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <img
              src="/lovable-uploads/98f1f0d0-f4bb-4fd0-a28b-ad4464f5c6e7.png"
              alt="Hero"
              className="w-full max-w-md mx-auto rounded-full border-4 border-[#FFB6A3]/20"
            />
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-[#1A1A1A]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-4xl font-bold mb-8 text-[#FFB6A3]">About Me</h2>
            <p className="text-lg text-gray-400 mb-8">
              {portfolioData.summary}
            </p>
            <div className="flex justify-center gap-6">
              <a
                href={portfolioData.personal_info.contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#FFB6A3] hover:text-[#FFB6A3]/80 transition-colors"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href={portfolioData.personal_info.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#FFB6A3] hover:text-[#FFB6A3]/80 transition-colors"
              >
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section id="experience">
        <ExperienceTimeline />
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-[#1A1A1A]">
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
      </section>
    </div>
  );
};

export default Index;
