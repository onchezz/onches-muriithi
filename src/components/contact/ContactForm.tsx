import { Send } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { toast } from "../ui/use-toast";
import { motion } from "framer-motion";

const ContactForm = () => {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    
    try {
      const response = await fetch("https://formspree.io/f/your-form-id", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });
      
      if (response.ok) {
        toast({
          title: "Message sent successfully!",
          description: "I'll get back to you soon.",
        });
        (e.target as HTMLFormElement).reset();
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      toast({
        title: "Error sending message",
        description: "Please try again later or contact me directly via email.",
        variant: "destructive",
      });
    }
  };

  return (
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
          name="name"
          placeholder="Your Name"
          className="bg-blue-950/20 border-blue-500/20 text-white"
          required
        />
      </div>
      <div>
        <Input
          name="email"
          type="email"
          placeholder="Your Email"
          className="bg-blue-950/20 border-blue-500/20 text-white"
          required
        />
      </div>
      <div>
        <Textarea
          name="message"
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
  );
};

export default ContactForm;