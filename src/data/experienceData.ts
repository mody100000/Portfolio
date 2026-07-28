export interface ExperienceItem {
  company: string;
  role: string;
  employmentType: string;
  location: string;
  dates: string;
  duration: string;
  logo: string;
  companyDescription?: string;
  bullets: string[];
  skills: string[];
}

export const experiences: ExperienceItem[] = [
  {
    company: "LAUNCH WORKZ (B2B with TeleShield)",
    role: "Front-End Developer",
    employmentType: "Full-time",
    location: "Remote",
    dates: "Mar 2025 – Mar 2026",
    duration: "1 yr",
    logo: "/images/experience/Launch Workz.jpeg",
    companyDescription:
      "TeleShield is a Telecom Expense Management (TEM) leader with 30+ years of experience, helping enterprises and mid-market businesses simplify, optimize, and gain real-time visibility into telecom orders, inventory, invoices, and expenses.",
    bullets: [
      "Developed and maintained enterprise dashboards, web applications, and internal systems using Next.js, React, TypeScript, and Tailwind CSS, delivering scalable, reliable frontends.",
      "Containerized apps with Docker for smoother deployment and collaboration.",
      "Designed responsive UIs ensuring cross-device compatibility and usability for enterprise clients.",
      "Worked in agile teams, delivering features on time and boosting productivity through documentation and task tracking.",
    ],
    skills: [
      "Next.js",
      "React.js",
      "TypeScript",
      "Redux",
      "Tailwind",
      "shadcn/ui",
      "Figma",
      "Docker",
      "Agile",
    ],
  },
  {
    company: "Future Comprehensive Solutions (FCS)",
    role: "Full-Stack Developer",
    employmentType: "Contract-Based",
    location: "Saudi Arabia (Riyadh) / Remote",
    dates: "Jun 2026 – Present",
    duration: "3 mos",
    logo: "/images/experience/FCS.jpeg",
    companyDescription:
      "FCS is a Saudi company specializing in workspace solutions, educational furniture, and commercial interior fit-out projects.",
    bullets: [
      "Developed a bilingual commercial website and a secure role-based Admin Dashboard with full English/Arabic (RTL/LTR) localization using React, TypeScript, and React Router.",
      "Built an end-to-end consultation booking system with real-time scheduling, availability management, and automated booking validation.",
      "Integrated Google OAuth authentication and implemented an automated email workflow using Spring Boot, Microsoft SMTP, and HTML templates, generating Google Calendar, Outlook, and ICS meeting invitations for bookings.",
      "Developed analytics dashboards with interactive charts to monitor bookings, user activity, and visitor statistics.",
      "Integrated live customer support through Tawk.to and Crisp Chat while containerizing the application with Docker and Nginx for production deployment.",
    ],
    skills: [
      "React.js",
      "TypeScript",
      "Spring Boot",
      "Azure",
      "OAuth",
      "SMTP",
      "i18next",
      "Docker",
      "Nginx",
    ],
  },
  {
    company: "NUMU",
    role: "Front-End Developer",
    employmentType: "Contract-Based",
    location: "UAE / Remote",
    dates: "Jan 2025 – Jun 2025",
    duration: "6 mos",
    logo: "/images/experience/numu.png",
    companyDescription:
      "Numu is an educational platform for the UAE Ministry of Education to manage schools, teachers, experts, classes, materials, and facilities.",
    bullets: [
      "Built a scalable admin dashboard powered by React, Apollo Client (GraphQL), Redux, and Tailwind CSS, providing real-time statistics and centralized management of teachers, experts, materials, schools, and classrooms.",
      "Implemented AWS S3 file upload & management with integrated video streaming (plyr-react), enabling schools to store, access, and deliver educational content easily.",
      "Handled large data tables with efficient filtering, sorting, and searching for administrators.",
      "Integrated localization (Arabic & English) and Firebase Cloud Messaging for real-time multilingual notifications.",
      "Implemented secure auth with server cookies and refresh tokens for reliable session management.",
    ],
    skills: [
      "React.js",
      "GraphQL",
      "Redux",
      "Tailwind",
      "i18next",
      "AWS S3",
      "Firebase",
      "Figma",
    ],
  },
  {
    company: "Galaxy Spies",
    role: "Front-End Developer",
    employmentType: "Full-time",
    location: "Egypt / OnSite",
    dates: "May 2024 – May 2025",
    duration: "1 yr",
    logo: "/images/experience/Galaxy Spies.jpeg",
    bullets: [
      "Developed and maintained web applications using React.js, ensuring optimal performance and responsiveness.",
      "Collaborated with cross-functional teams including UI designers, backend developers, and product managers to deliver high-quality features and improvements.",
      "Wrote clean, modular, and reusable code, adhering to best practices and coding standards.",
    ],
    skills: [
      "React.js",
      "JavaScript",
      "CSS3",
      "Tailwind",
      "Bootstrap",
      "Redux",
      "Figma",
    ],
  },
];
