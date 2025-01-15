import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import { useQuery } from "@tanstack/react-query";
import { Octokit } from "@octokit/rest";
import { Card } from "@/components/ui/card";

const octokit = new Octokit();

const Index = () => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({ opacity: 1, y: 0 });
  }, [controls]);

  const { data: projects, isLoading } = useQuery({
    queryKey: ["github-projects"],
    queryFn: async () => {
      const response = await octokit.repos.listForUser({
        username: "onchezz",
        sort: "updated",
        per_page: 6
      });
      return response.data;
    }
  });

  return (
    <div className="min-h-screen bg-black text-white">
      <HeroSection />
      <AboutSection />
      
      {/* Projects Section */}
      <section id="projects" className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Featured Projects</h2>
            <div className="w-20 h-1 bg-blue-500 mx-auto mb-8"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {isLoading ? (
              Array(6).fill(0).map((_, i) => (
                <Card key={i} className="h-48 animate-pulse bg-blue-900/20" />
              ))
            ) : (
              projects?.map((project) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <Card className="bg-gradient-to-br from-blue-900/50 to-indigo-900/50 border-blue-500/20 hover:border-blue-500/40 transition-all p-6 h-full">
                    <h3 className="text-xl font-semibold mb-2 text-white">{project.name}</h3>
                    <p className="text-gray-400 mb-4">{project.description || "No description available"}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-blue-400">{project.language}</span>
                      <a
                        href={project.html_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-400 hover:text-blue-300 transition-colors"
                      >
                        View Project →
                      </a>
                    </div>
                  </Card>
                </motion.div>
              ))
            )}
          </div>
        </div>
      </section>

      <ContactSection />
    </div>
  );
};

export default Index;