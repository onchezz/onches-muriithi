import { useQuery } from "@tanstack/react-query";
import { Octokit } from "@octokit/rest";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";
import { Github, ExternalLink, Code2, Boxes, Mail, Linkedin, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";

const octokit = new Octokit();

const ProjectCard = ({ name, description, language, url }: { 
  name: string;
  description: string | null;
  language: string | null;
  url: string;
}) => (
  <Card className="group bg-[#222] border-[#333] hover:border-[#0FA0CE] transition-all duration-300">
    <CardHeader>
      <CardTitle className="text-xl text-[#eee] flex items-center gap-2">
        <Code2 className="w-5 h-5 text-[#0FA0CE]" />
        {name}
      </CardTitle>
      <CardDescription className="text-[#888]">{language}</CardDescription>
    </CardHeader>
    <CardContent>
      <p className="text-[#999] mb-4">{description || "No description available"}</p>
      <a 
        href={url} 
        target="_blank" 
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 text-[#0FA0CE] hover:text-[#33C3F0] transition-colors"
      >
        <Github className="w-4 h-4" />
        View Project
        <ExternalLink className="w-4 h-4" />
      </a>
    </CardContent>
  </Card>
);

const SkillCard = ({ icon: Icon, title, description }: {
  icon: any;
  title: string;
  description: string;
}) => (
  <Card className="group bg-[#222] border-[#333] hover:border-[#0FA0CE] transition-all duration-300">
    <CardHeader>
      <CardTitle className="text-xl text-[#eee] flex items-center gap-2">
        <Icon className="w-6 h-6 text-[#0FA0CE]" />
        {title}
      </CardTitle>
    </CardHeader>
    <CardContent>
      <p className="text-[#999]">{description}</p>
    </CardContent>
  </Card>
);

const Index = () => {
  const { toast } = useToast();
  
  const { data: projects, isLoading, error } = useQuery({
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

  console.log("GitHub Projects:", projects);

  if (error) {
    toast({
      title: "Error",
      description: "Failed to load GitHub projects",
      variant: "destructive"
    });
  }

  const skills = [
    {
      icon: Code2,
      title: "Smart Contract Development",
      description: "Expertise in Solidity, Web3.js, and blockchain development patterns"
    },
    {
      icon: Boxes,
      title: "DeFi Protocols",
      description: "Experience building decentralized finance applications and protocols"
    },
    {
      icon: ExternalLink,
      title: "Full Stack Development",
      description: "Proficient in React, Node.js, and modern web development technologies"
    }
  ];

  return (
    <div className="min-h-screen bg-[#000000e6] text-white">
      {/* Hero Section */}
      <div className="min-h-screen flex flex-col items-center justify-center px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQ0MCIgaGVpZ2h0PSI5MDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48Y2lyY2xlIHN0cm9rZT0iIzMzMyIgc3Ryb2tlLXdpZHRoPSIyIiBjeD0iMjIyIiBjeT0iMjIyIiByPSIyMjIiLz48Y2lyY2xlIHN0cm9rZT0iIzMzMyIgc3Ryb2tlLXdpZHRoPSIyIiBjeD0iNjY2IiBjeT0iNjY2IiByPSIyMjIiLz48Y2lyY2xlIHN0cm9rZT0iIzMzMyIgc3Ryb2tlLXdpZHRoPSIyIiBjeD0iMTExMCIgY3k9IjExMTAiIHI9IjIyMiIvPjwvZz48L3N2Zz4=')] opacity-10" />
        <div className="text-center relative z-10 max-w-4xl mx-auto">
          <h1 className="text-7xl sm:text-8xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#0FA0CE] to-[#33C3F0] tracking-tight">
            Onchez
          </h1>
          <p className="text-xl sm:text-2xl text-[#888] mb-8 leading-relaxed">
            Blockchain Developer & Crypto Enthusiast
          </p>
          <p className="text-lg text-[#999] mb-12 max-w-2xl mx-auto">
            With over 5 years of experience in blockchain development, I specialize in creating secure and efficient smart contracts, DeFi protocols, and Web3 applications.
          </p>
          <div className="flex gap-4 justify-center">
            <a href="#projects" className="px-8 py-3 bg-[#0FA0CE] hover:bg-[#33C3F0] transition-colors rounded-md font-medium">
              View Projects
            </a>
            <a href="https://github.com/onchezz" target="_blank" rel="noopener noreferrer" 
               className="px-8 py-3 border border-[#333] hover:border-[#0FA0CE] transition-colors rounded-md font-medium inline-flex items-center gap-2">
              <Github className="w-5 h-5" />
              GitHub
            </a>
          </div>
        </div>
      </div>

      {/* Skills Section */}
      <section className="py-20 px-4 md:px-8 bg-[#111] relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Technical Expertise</h2>
            <div className="w-20 h-1 bg-[#0FA0CE] mx-auto" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <SkillCard key={index} {...skill} />
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 inline-flex items-center gap-3">
            <Boxes className="w-8 h-8 text-[#0FA0CE]" />
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-[#0FA0CE] mx-auto" />
        </div>
        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(6)].map((_, i) => (
              <Card key={i} className="w-full h-48 animate-pulse bg-[#222] border-[#333]" />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects?.map((project) => (
              <ProjectCard
                key={project.id}
                name={project.name}
                description={project.description}
                language={project.language}
                url={project.html_url}
              />
            ))}
          </div>
        )}
      </section>

      {/* Experience Section */}
      <section className="py-20 px-4 md:px-8 bg-[#111]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Work Experience</h2>
            <div className="w-20 h-1 bg-[#0FA0CE] mx-auto" />
          </div>
          <div className="space-y-12">
            <Card className="bg-[#222] border-[#333]">
              <CardHeader>
                <CardTitle className="text-2xl text-[#eee]">Senior Blockchain Developer</CardTitle>
                <CardDescription className="text-[#0FA0CE]">DeFi Protocol • 2021 - Present</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside text-[#999] space-y-2">
                  <li>Led the development of smart contracts for a decentralized exchange</li>
                  <li>Implemented automated market maker protocols</li>
                  <li>Conducted security audits and optimizations</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="bg-[#222] border-[#333]">
              <CardHeader>
                <CardTitle className="text-2xl text-[#eee]">Full Stack Developer</CardTitle>
                <CardDescription className="text-[#0FA0CE]">Web3 Studio • 2019 - 2021</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside text-[#999] space-y-2">
                  <li>Built and maintained multiple Web3 applications</li>
                  <li>Developed user interfaces for blockchain applications</li>
                  <li>Integrated various blockchain networks and protocols</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Get in Touch</h2>
            <div className="w-20 h-1 bg-[#0FA0CE] mx-auto mb-8" />
            <p className="text-[#999] max-w-2xl mx-auto mb-8">
              Interested in working together? Let's discuss your project and see how I can help.
            </p>
          </div>
          <div className="flex justify-center gap-6">
            <Button variant="outline" className="hover:border-[#0FA0CE] hover:text-[#0FA0CE]">
              <Mail className="mr-2 h-4 w-4" />
              Email Me
            </Button>
            <Button variant="outline" className="hover:border-[#0FA0CE] hover:text-[#0FA0CE]">
              <Linkedin className="mr-2 h-4 w-4" />
              LinkedIn
            </Button>
            <Button variant="outline" className="hover:border-[#0FA0CE] hover:text-[#0FA0CE]">
              <Twitter className="mr-2 h-4 w-4" />
              Twitter
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;