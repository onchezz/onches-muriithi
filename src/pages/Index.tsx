import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import ProfileHero from "@/components/ProfileHero";
import ProfileContact from "@/components/ProfileContact";
import ExperienceTimeline from "@/components/ExperienceTimeline";

const Index = () => {
  return (
    <div className="min-h-screen bg-[#121212] text-white">
      <Navigation />

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center relative overflow-hidden pt-20">
        <ProfileHero />
      </section>

      {/* Experience Timeline */}
      <section id="experience">
        <ExperienceTimeline />
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-[#1A1A1A]">
        <ProfileContact />
      </section>
    </div>
  );
};

export default Index;