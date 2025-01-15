import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import Avatar3D from "./Avatar3D";
import { Button } from "./ui/button";
import { generatePDF } from "@/utils/generatePDF";
import { HireModal } from "./HireModal";
import AnimatedText from "./AnimatedText";

const ProfileHero = () => {
  const letters = portfolioData.personal_info.name.split("");

  return (
    <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-5xl md:text-7xl font-bold mb-4">
          Hello, I`m
          <AnimatedText name={portfolioData.personal_info.name} />
          {/* <div className="text-[#FFB6A3]">
            {letters.map((letter, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.2,
                  delay: index * 0.1,
                  ease: [0.43, 0.13, 0.23, 0.96],
                }}
                className="inline-block"
              >
                {letter === " " ? "\u00A0" : letter}
              </motion.span>
            ))}
          </div> */}
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
        className="relative h-[400px]"
      >
        <Avatar3D className="w-full h-full" />
      </motion.div>
    </div>
  );
};

export default ProfileHero;
