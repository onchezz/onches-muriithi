import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useTexture } from "@react-three/drei";
import { Suspense } from "react";
import Avatar3D from "./Avatar3D";

const Scene = () => {
  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <Suspense fallback={null}>
        <Avatar3D className="rounded-full overflow-hidden" />
        <OrbitControls enableZoom={false} />
      </Suspense>
    </>
  );
};

const HeroSection = () => {
  const letters = "Onches Muriithi".split("");

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        repeat: Infinity,
        repeatDelay: 2
      }
    }
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.43, 0.13, 0.23, 0.96]
      }
    }
  };

  return (
    <motion.section 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen relative overflow-hidden bg-gradient-to-br from-blue-900 to-blue-700"
    >
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('/lovable-uploads/ffdd34fd-b353-4089-b4c4-09d3f98cda45.png')] bg-cover bg-center opacity-20 mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black"></div>
      </div>
      
      <div className="relative z-10 container mx-auto px-4 py-20 flex flex-col justify-center min-h-screen">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="mb-8 w-64 h-64 mx-auto rounded-full overflow-hidden">
            <Avatar3D className="w-full h-full" />
          </div>
          
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="mb-6"
          >
            {letters.map((letter, index) => (
              <motion.span
                key={index}
                variants={letterVariants}
                className="inline-block text-5xl md:text-7xl font-bold text-white"
              >
                {letter === " " ? "\u00A0" : letter}
              </motion.span>
            ))}
          </motion.div>

          <p className="text-2xl md:text-3xl text-gray-300 mb-8 font-light">
            Crafting Scalable Blockchain Solutions for a Decentralized Future
          </p>
          <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto">
            Web3 Smart Contract Developer | Blockchain Specialist | Customer Support Expert
          </p>
          <div className="flex gap-6 justify-center">
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