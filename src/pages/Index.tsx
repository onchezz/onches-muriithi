import { Canvas } from "@react-three/fiber";
import { OrbitControls, Text3D, Center } from "@react-three/drei";
import { useQuery } from "@tanstack/react-query";
import { Octokit } from "@octokit/rest";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";

const octokit = new Octokit();

const Scene = () => {
  return (
    <Canvas
      camera={{ position: [0, 0, 5] }}
      style={{ background: 'transparent' }}
    >
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <OrbitControls 
        enableZoom={false}
        enablePan={false}
        minPolarAngle={Math.PI / 2}
        maxPolarAngle={Math.PI / 2}
      />
      <Center>
        <mesh>
          <Text3D
            font="/fonts/helvetiker_regular.typeface.json"
            size={0.5}
            height={0.2}
            curveSegments={12}
            bevelEnabled={false}
          >
            Onchez
          </Text3D>
          <meshStandardMaterial color="#88ff00" />
        </mesh>
      </Center>
    </Canvas>
  );
};

const ProjectCard = ({ name, description, language, url }: { 
  name: string;
  description: string | null;
  language: string | null;
  url: string;
}) => (
  <Card className="w-full hover:scale-105 transition-transform duration-300">
    <CardHeader>
      <CardTitle className="text-xl">{name}</CardTitle>
      <CardDescription>{language}</CardDescription>
    </CardHeader>
    <CardContent>
      <p className="text-muted-foreground">{description || "No description available"}</p>
      <a 
        href={url} 
        target="_blank" 
        rel="noopener noreferrer"
        className="text-primary hover:underline mt-2 inline-block"
      >
        View Project →
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
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      {/* Hero Section */}
      <div className="h-screen relative">
        <div className="absolute inset-0">
          <Scene />
        </div>
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="text-center">
            <h1 className="text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">
              Onchez
            </h1>
            <p className="text-xl text-gray-300">
              Blockchain Developer & Crypto Enthusiast
            </p>
          </div>
        </div>
      </div>

      {/* Projects Section */}
      <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">
          Featured Projects
        </h2>
        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(6)].map((_, i) => (
              <Card key={i} className="w-full h-48 animate-pulse bg-gray-800" />
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
      <section className="py-20 px-4 md:px-8 bg-black bg-opacity-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">
            Crypto Expertise
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-gradient-to-br from-yellow-400 to-yellow-600">
              <CardHeader>
                <CardTitle>Smart Contracts</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Development and auditing of secure smart contracts on multiple chains</p>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-br from-blue-400 to-blue-600">
              <CardHeader>
                <CardTitle>DeFi Protocols</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Building and integrating decentralized finance solutions</p>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-br from-purple-400 to-purple-600">
              <CardHeader>
                <CardTitle>Web3 Integration</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Seamless integration of blockchain functionality into web applications</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;