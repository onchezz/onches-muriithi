import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";

const HeroSection = () => {
  return (
    <motion.section 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen relative overflow-hidden bg-gradient-to-br from-indigo-950 via-blue-900 to-teal-900"
    >
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('/lovable-uploads/98f1f0d0-f4bb-4fd0-a28b-ad4464f5c6e7.png')] bg-cover bg-center opacity-20 mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black"></div>
      </div>
      
      <div className="relative z-10 container mx-auto px-4 py-20 flex flex-col justify-center min-h-screen">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="max-w-4xl"
        >
          <div className="mb-8 w-48 h-48 mx-auto rounded-full overflow-hidden border-4 border-blue-500/50">
            <img 
              src="/lovable-uploads/98f1f0d0-f4bb-4fd0-a28b-ad4464f5c6e7.png" 
              alt="Onches Muriithi" 
              className="w-full h-full object-cover"
            />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-teal-400">
            Onches Muriithi
          </h1>
          <p className="text-2xl md:text-3xl text-gray-300 mb-8 font-light">
            Crafting Scalable Blockchain Solutions for a Decentralized Future
          </p>
          <p className="text-lg text-gray-400 mb-12 max-w-2xl">
            Web3 Smart Contract Developer | Blockchain Specialist | Customer Support Expert
          </p>
          <div className="flex gap-6">
            <Button 
              size="lg"
              className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-6 text-lg group"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Explore My Work
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default HeroSection;