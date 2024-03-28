import ProjectBox from "../projectBox/ProjectBox";
import "./MyProjects.styles.css";
import { SiPayloadcms } from "react-icons/si";
import { AiOutlineShopping } from "react-icons/ai";
import { PiBarbell } from "react-icons/pi";
import { BiMoviePlay } from "react-icons/bi";
import { CgWebsite } from "react-icons/cg";
import { FaGamepad } from "react-icons/fa";
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
        <a
          target="_blank"
          rel="noreferrer"
          href="https://keen-lalande-fd1f49.netlify.app/"
        >
          {" "}
          <ProjectBox>
            <CgWebsite size={25} />
            <h3 className="project-title">Template</h3>
            <p className="project-info">
              responsive and smooth template website with beautiful animations
              and Optimize images for performance.
            </p>
            {/* <span className="project-tec">React / Node.js</span> */}
          </ProjectBox>
        </a>
      </div>
    </div>
  );
};

export default MyProjects;
