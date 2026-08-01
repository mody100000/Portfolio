export interface EducationItem {
  institution: string;
  degree: string;
  department?: string;
  location: string;
  dates: string;
  gpa?: string;
  logo: string;
  bullets: string[];
  courses?: string[];
  certificateUrl?: string;
  links?: {
    linkedin?: string;
  };
}

export interface InternshipItem {
  organization: string;
  role: string;
  location: string;
  dates: string;
  logo: string;
  bullets: string[];
  skills: string[];
  certificateUrl?: string;
  links?: {
    linkedin?: string;
  };
}

export const education: EducationItem[] = [
  {
    institution: "New Cairo Academy",
    degree: "Bachelor of Computer Science",
    department: "Management Information System Department",
    location: "Cairo, Egypt",
    dates: "Sep 2019 – Jul 2023",
    gpa: "3.54",
    logo: "/images/education/nca.jpeg",
    bullets: [
      "Specialized in Computer Science and Management Information Systems, bridging technical skills with business intelligence.",
      "Graduated with a GPA of 3.54, demonstrating strong academic performance and dedication.",
      "Completed comprehensive coursework in Software Engineering, Database Management Systems, Data Structures & Algorithms, and Web Development.",
      "Developed academic projects including database-driven web apps and systems analysis designs.",
    ],
    courses: [
      "Software Engineering",
      "Database Systems",
      "Data Structures & Algorithms",
      "System Analysis & Design",
      "Web Development",
    ],
    certificateUrl: "/Mahmoud Mohamed Gomaa Software Engineer.pdf",
    links: {
      linkedin: "https://www.linkedin.com/school/new-cairo-academy/",
    },
  },
];

export const internships: InternshipItem[] = [
  {
    organization: "Information Technology Institute (ITI)",
    role: "Full-Stack Developer (MERN)",
    location: "Hybrid – Beni Suef, Egypt",
    dates: "Nov 2023 – Mar 2024",
    logo: "/images/education/iti.jpeg",
    bullets: [
      "Participated in a highly selective intensive training program focused on Full-Stack Web Development.",
      "Built responsive, accessible web applications and RESTful backend APIs using the MERN stack.",
      "Gained hands-on experience in database schema design, MVC architecture, and automated API testing.",
      "Collaborated in agile team environments using Git and GitHub for version control and issue tracking.",
    ],
    skills: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JavaScript",
      "RESTful APIs",
      "Git",
    ],
    certificateUrl: "/Mahmoud Mohamed Gomaa Software Engineer.pdf",
    links: {
      linkedin:
        "https://www.linkedin.com/school/information-technology-institute-iti-/",
    },
  },
  {
    organization: "FWD (Future Work is Digital)",
    role: "Full-Stack Web Developer",
    location: "Remote",
    dates: "Aug 2020 – Oct 2020",
    logo: "/images/education/fwd.jpg",
    bullets: [
      "Completed the intensive Full-Stack Web Developer track, mastering client-side logic and interface design.",
      "Developed multiple frontend and integration projects using advanced JavaScript (ES6+), semantic HTML, and responsive CSS styling.",
      "Learned server-side fundamentals, database management, and cloud deployment procedures.",
    ],
    skills: ["JavaScript", "HTML5", "CSS3", "Git"],
    certificateUrl: "/Mahmoud Mohamed Gomaa Software Engineer.pdf",
    links: {
      linkedin: "https://www.linkedin.com/company/future-work-is-digital/",
    },
  },
];
