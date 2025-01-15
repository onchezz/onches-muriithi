import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import { Briefcase, MapPin, Calendar } from "lucide-react";

const ExperienceTimeline = () => {
  return (
    <div className="relative container mx-auto px-4 py-20">
      <h2 className="text-4xl font-bold text-center mb-16 text-[#FFB6A3]">Experience</h2>
      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-[#FFB6A3] opacity-20 transform -translate-x-1/2" />
        
        {portfolioData.experience.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, rotateY: -90 }}
            whileInView={{ opacity: 1, rotateY: 0 }}
            transition={{ 
              duration: 0.8, 
              delay: index * 0.2,
              type: "spring",
              stiffness: 100
            }}
            className={`mb-12 relative grid grid-cols-[1fr,auto,1fr] items-center perspective-1000`}
          >
            {/* Content for left side */}
            <div className={`${index % 2 === 0 ? 'pr-8' : 'col-start-3 pl-8'}`}>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.2 }}
                className="p-6 bg-[#1A1A1A] rounded-lg border border-[#FFB6A3] border-opacity-20 hover:border-opacity-40 transition-all transform-gpu hover:scale-105"
              >
                <h3 className="text-2xl font-bold text-[#FFB6A3] mb-2">{exp.role}</h3>
                <div className="flex flex-wrap gap-4 text-gray-400 mb-4">
                  <span className="flex items-center gap-2">
                    <Briefcase className="w-4 h-4" />
                    {exp.company}
                  </span>
                  <span className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    Remote
                  </span>
                  <span className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    {exp.duration}
                  </span>
                </div>
                
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  whileInView={{ height: "auto", opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <h4 className="font-semibold text-[#FFB6A3] mb-2">Responsibilities:</h4>
                  <ul className="list-disc list-inside space-y-2 text-gray-400 mb-4">
                    {exp.responsibilities.map((resp, idx) => (
                      <li key={idx}>{resp}</li>
                    ))}
                  </ul>
                  
                  {exp.achievements && (
                    <>
                      <h4 className="font-semibold text-[#FFB6A3] mb-2">Achievements:</h4>
                      <ul className="list-disc list-inside space-y-2 text-gray-400">
                        {exp.achievements.map((achievement, idx) => (
                          <li key={idx}>{achievement}</li>
                        ))}
                      </ul>
                    </>
                  )}
                </motion.div>
              </motion.div>
            </div>

            {/* Timeline dot */}
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.2 }}
              className="w-4 h-4 rounded-full bg-[#FFB6A3] z-10"
            />

            {/* Empty space for opposite side */}
            <div className={`${index % 2 === 0 ? 'col-start-3' : 'col-start-1'}`} />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ExperienceTimeline;