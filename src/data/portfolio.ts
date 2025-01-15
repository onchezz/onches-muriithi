export const portfolioData = {
  personal_info: {
    name: "Onches Muriithi",
    tagline: "Web3 Smart Contract Developer | Blockchain Specialist | Customer Support Expert",
    location: "Kenya",
    contact: {
      phone: "+254757218603",
      email: "brianonchezz@gmail.com",
      linkedin: "https://www.linkedin.com/in/onches-muriithi",
      github: "https://github.com/onchezz/"
    }
  },
  summary: "I am a dedicated professional with a passion for the intersection of blockchain technology and customer success. With a background in decentralized finance (DeFi) and Web3, I bring expertise in smart contracts, crypto markets, and the NFT ecosystem. My customer support experience ensures seamless solutions in this rapidly evolving digital space.",
  skills: ["Web3", "Blockchain Development", "Smart Contracts", "Customer Support", "Java", "HTML", "CSS", "JavaScript"],
  services: [
    {
      title: "Smart Contract Development",
      icon: "Code2",
      description: "Building secure and efficient blockchain solutions"
    },
    {
      title: "Web3 Development",
      icon: "Globe",
      description: "Creating decentralized applications and interfaces"
    },
    {
      title: "Blockchain Consulting",
      icon: "Brain",
      description: "Strategic guidance for blockchain implementation"
    }
  ],
  experience: [
    {
      company: "Freelance",
      role: "Web3 Open Source Developer",
      duration: "May 2023 - Present",
      location: "Tel Aviv District, Israel",
      responsibilities: [
        "Design, develop, and deploy smart contracts on StarkNet and Scroll.",
        "Contribute to open-source projects, enhancing Layer 2 solutions.",
        "Conduct testing and debugging of blockchain applications.",
        "Create comprehensive documentation for smart contracts."
      ],
      achievements: [
        "Optimized smart contracts, increasing transaction speed by 30%.",
        "Organized workshops to foster community engagement.",
        "Developed Layer 2 solutions to improve dApp scalability."
      ]
    },
    {
      company: "Twiga Labs",
      role: "Freelance Web3 Developer",
      duration: "May 2021 - Present",
      location: "Kenya",
      responsibilities: [
        "Developed and maintained web applications using Java, HTML, CSS, and JavaScript.",
        "Implemented new features, ensuring adherence to coding standards.",
        "Optimized application performance, reducing response times by 40%."
      ]
    },
    {
      company: "Kanga Labs",
      role: "Web3 Customer Support Specialist",
      duration: "February 2021 - December 2022",
      location: "Kenya",
      responsibilities: [
        "Resolved technical issues, achieving a 95% customer satisfaction rate.",
        "Managed high volumes of support tickets, reducing response times from 24 hours to 4 hours.",
        "Developed training materials for new hires and clients."
      ]
    }
  ],
  education: {
    institution: "Great Lakes University of Kisumu",
    degree: "Bachelor of Science in Information Technology",
    years: "2019 - 2023"
  },
  testimonials: [
    {
      name: "John Doe",
      role: "CTO at BlockChain Corp",
      content: "Onches delivered exceptional smart contract solutions that exceeded our expectations.",
      image: "/placeholder.svg"
    }
  ]
};

export type PortfolioData = typeof portfolioData;