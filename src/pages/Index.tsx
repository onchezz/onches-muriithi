import { useQuery } from "@tanstack/react-query";
import { Octokit } from "@octokit/rest";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";
import { Github, ExternalLink, Code2, Boxes } from "lucide-react";

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

      {/* Crypto Section */}
      <section className="py-20 px-4 md:px-8 bg-[#111] relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQ0MCIgaGVpZ2h0PSI5MDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48Y2lyY2xlIHN0cm9rZT0iIzIyMiIgc3Ryb2tlLXdpZHRoPSIyIiBjeD0iMjIyIiBjeT0iMjIyIiByPSIyMjIiLz48Y2lyY2xlIHN0cm9rZT0iIzIyMiIgc3Ryb2tlLXdpZHRoPSIyIiBjeD0iNjY2IiBjeT0iNjY2IiByPSIyMjIiLz48Y2lyY2xlIHN0cm9rZT0iIzIyMiIgc3Ryb2tlLXdpZHRoPSIyIiBjeD0iMTExMCIgY3k9IjExMTAiIHI9IjIyMiIvPjwvZz48L3N2Zz4=')] opacity-5" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Crypto Expertise</h2>
            <div className="w-20 h-1 bg-[#0FA0CE] mx-auto" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-[#222] border-[#333] hover:border-[#0FA0CE] transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-xl text-[#eee]">Smart Contracts</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-[#999]">Development and auditing of secure smart contracts on multiple chains</p>
              </CardContent>
            </Card>
            <Card className="bg-[#222] border-[#333] hover:border-[#0FA0CE] transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-xl text-[#eee]">DeFi Protocols</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-[#999]">Building and integrating decentralized finance solutions</p>
              </CardContent>
            </Card>
            <Card className="bg-[#222] border-[#333] hover:border-[#0FA0CE] transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-xl text-[#eee]">Web3 Integration</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-[#999]">Seamless integration of blockchain functionality into web applications</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;