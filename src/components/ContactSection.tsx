import { motion } from "framer-motion";
import { Mail, Linkedin, Github, Send } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { toast } from "./ui/use-toast";

const ContactSection = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = "mailto:brianonchezz@gmail.com";
    toast({
      title: "Thanks for reaching out!",
      description: "Redirecting you to your email client...",
    });
  };

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

          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            <div>
              <Input
                placeholder="Your Name"
                className="bg-blue-950/20 border-blue-500/20 text-white"
                required
              />
            </div>
            <div>
              <Input
                type="email"
                placeholder="Your Email"
                className="bg-blue-950/20 border-blue-500/20 text-white"
                required
              />
            </div>
            <div>
              <Textarea
                placeholder="Your Message"
                className="bg-blue-950/20 border-blue-500/20 text-white min-h-[150px]"
                required
              />
            </div>
            <Button 
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-600 text-white"
            >
              Send Message
              <Send className="ml-2 w-4 h-4" />
            </Button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;