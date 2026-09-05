export interface HackathonItem {
  title: string;
  role: string;
  location: string;
  dates: string;
  logo: string;
  bullets: string[];
  skills: string[];
  certificateUrl?: string;
  videoDemoUrl?: string;
  links?: {
    linkedin?: string;
    github?: string;
    website?: string;
  };
}

export const hackathons: HackathonItem[] = [
  {
    title: "NASA Space Apps Challenge",
    role: "Full-Stack Developer",
    location: "Cairo, Egypt",
    dates: "Oct 2023",
    logo: "/images/education/space-apps.png",
    bullets: [
      "Achieved Global Nominee status, representing the top local project recommended for the Global Judging stage of the NASA International Space Apps Challenge.",
      "Collaborated with a cross-functional team of developers to design and build 'Exo-plore', a 3D-interactive, AI-powered exoplanet exploration platform combining React Three Fiber and Generative AI.",
      "Developed a realistic 3D telescope visualization using React Three Fiber, enabling interactive planetary navigation and visual exploration.",
      "Implemented a Retrieval-Augmented Generation (RAG) framework using LangChain, Pinecone vector database, OpenAI embeddings, and ChatGPT to power an intelligent 'virtual telescope' Q&A assistant.",
      "Engineered a catalog system connecting discovered exoplanets directly to their historical discovering telescope data, providing educational scientific context.",
    ],
    skills: [
      "React.js",
      "Three.js",
      "React Three Fiber",
      "Generative AI",
      "LangChain",
      "Pinecone",
      "OpenAI",
      "ChatGPT",
      "RAG",
    ],
    certificateUrl: "/certificates/nasa-space-apps-nomination.pdf",
    videoDemoUrl: "https://www.youtube.com/watch?v=example-demo", // Template link for the video demo
    links: {
      website: "https://www.spaceappschallenge.org/",
      // github: "https://github.com/your-username/exo-plore" // Add project repo here
    },
  },
];
