import ProjectBox from "../projectBox/ProjectBox";
import "./MyProjects.styles.css";
import { SiPayloadcms } from "react-icons/si";
import { AiOutlineShopping } from "react-icons/ai";
import { PiBarbell } from "react-icons/pi";
import { BiMoviePlay } from "react-icons/bi";
import { FaGamepad } from "react-icons/fa";
import xLogo from "../../assets/logoLightMode.webp"
import EXO from "../../assets/EXO-plore.ico"
import GenoaMatroh from "../../assets/GenoaMatroh.png"

const MyProjects = () => {
  return (
    <div>
      <div className="hr">My Projects</div>
      <h2 className="main-text">
        get a high-quality project that meets your needs,
        <br /> and exceeds your expectations.
      </h2>
      <div className="grid">
        <a
          target="_blank"
          rel="noreferrer"
          href="https://uze.usd.mybluehost.me/"
        >
          {" "}
          <ProjectBox>
            <img src={xLogo} alt="xLogo" className="xLogo" />
            <h3 className="project-title xTitle">Xfactor</h3>
            <p className="project-info">
              web platform simplifies the process of reserving coaching sessions between clients and trainers. Whether you're searching for a fitness coach, personal trainer, or any other expert, the platform connects you with professionals who perfectly match your needs.
            </p>
            {/* <span className="project-tec">React / Node.js</span> */}
          </ProjectBox>
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://github.com/AliElgohary/Elgymwaya"
        >
          {" "}
          <ProjectBox>
            <PiBarbell size={28} />
            <h3 className="project-title">GYM web app</h3>
            <p className="project-info">
              Real world gym web application using the MEARN stack, Key features
              includes: Trainer Assignment ,Client Management,Custom Workouts
              Routines, Providing Feedback, Reservation Section, Subscription
              Plans Selection.
            </p>
            {/* <span className="project-tec">React / Node.js</span> */}
          </ProjectBox>
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://github.com/mody100000/Exo-plore"
        >
          {" "}
          <ProjectBox>
            <img src={EXO} alt="Exo-plore" className="xLogo" />
            <h3 className="project-title">Exo-plore</h3>
            <p className="project-info">
              interactive web application blends advanced 3D rendering and AI-driven conversational capabilities to create an interactive and educational platform focused on exoplanets. This innovative app allows users to explore information about exoplanets through a virtual telescope and engage in dynamic Q&A sessions
            </p>
            {/* <span className="project-tec">React / Node.js</span> */}
          </ProjectBox>
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://github.com/mody100000/fashion-flow"
        >
          {" "}
          <ProjectBox>
            <SiPayloadcms size={25} />
            <h3 className="project-title">CMS</h3>
            <p className="project-info">
              content management system for managing and storing clothing store
              data in an efficient way
            </p>
            {/* <span className="project-tec">React / Node.js</span> */}
          </ProjectBox>
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://uze.usd.mybluehost.me/genoamatroh"
        >
          {" "}
          <ProjectBox>
            <img src={GenoaMatroh} alt="GenoaMatroh" className="xLogo" />
            <h3 className="project-title">Genoa Matroh</h3>
            <p className="project-info">
              dynamic and interactive website for Genoa Matroh, a picturesque tourist village in Egypt. The website allows users to explore the village's offerings, including its beautiful accommodations and activities, while providing the convenience of reserving tickets or purchasing property directly online.
            </p>
            {/* <span className="project-tec">React / Node.js</span> */}
          </ProjectBox>
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://game-hup-amber.vercel.app/"
        >
          {" "}
          <ProjectBox>
            <FaGamepad color="white" size={28} />
            <h3 className="project-title">Video Game</h3>
            <p className="project-info">
              responsive video game discovery app built by fetching the RAWG API
            </p>
            {/* <span className="project-tec">React / Node.js</span> */}
          </ProjectBox>
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://github.com/mody100000/Modyfi_front-end"
        >
          {" "}
          <ProjectBox>
            <AiOutlineShopping size={25} />
            <h3 className="project-title">E-commerce</h3>
            <p className="project-info">
              full-stack web application <br /> for a scalable and responsive{" "}
              <br />
              e-commerce platform
            </p>
            {/* <span className="project-tec">React / Node.js</span> */}
          </ProjectBox>
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://github.com/mody100000/vidly"
        >
          {" "}
          <ProjectBox>
            <BiMoviePlay size={25} />
            <h3 className="project-title">Vidly</h3>
            <p className="project-info">
              full-stack web application <br />
              for a scalable and responsive <br /> movies platform
            </p>
            {/* <span className="project-tec">React / Node.js</span> */}
          </ProjectBox>
        </a>

      </div>
    </div>
  );
};

export default MyProjects;
