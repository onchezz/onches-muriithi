import { motion } from "framer-motion";
import { Code2, Brain, Users, Rocket } from "lucide-react";

const skills = [
  {
    icon: Code2,
    title: "Smart Contract Development",
    description: "Expertise in Solidity and blockchain development patterns"
  },
  {
    icon: Brain,
    title: "Web3 Solutions",
    description: "Building decentralized applications and protocols"
  },
  {
    icon: Users,
    title: "Customer Support",
    description: "Exceptional communication and problem-solving skills"
  },
  {
    icon: Rocket,
    title: "Innovation",
    description: "Pushing boundaries in blockchain technology"
  }
];

const AboutSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-black to-indigo-950">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 text-white">About Me</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto mb-8"></div>
          <p className="text-gray-300 max-w-3xl mx-auto text-lg">
            With extensive experience in blockchain technology and Web3 development, 
            I specialize in creating secure and efficient smart contracts while providing 
            exceptional customer support and innovative solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-blue-900/50 to-indigo-900/50 p-6 rounded-xl backdrop-blur-sm border border-blue-500/20 hover:border-blue-500/40 transition-all group"
            >
              <div className="flex flex-col items-center text-center">
                <div className="p-3 bg-blue-500/20 rounded-lg mb-4 group-hover:bg-blue-500/30 transition-colors">
                  <skill.icon className="w-8 h-8 text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white">{skill.title}</h3>
                <p className="text-gray-400">{skill.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;