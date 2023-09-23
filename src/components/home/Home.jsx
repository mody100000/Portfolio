import "./Home.styles.css";
import MyPhoto from "../../assets/portfolio.jpg";
import { RxResume } from "react-icons/rx";
import Button from "./../button/Button";
import Navbar from "./../navbar/Navbar";
import MyProjects from "../myProjects/MyProjects.jsx";
import Contact from "./../contact/Contact";
import Footer from "../footer/Footer";
const Home = () => {
  return (
    <div className="container">
      <Navbar></Navbar>
      <div className="about-me-container">
        <img className="my-photo" src={MyPhoto} alt="mahmoud mohamed" />
        <span className="my-name">Hi, I'm Mahmoud👋🏻</span>
        <h1 className="summery">
          MERN stack developer
          <br />
          quick learner, tutoring skills
          <br />
          Strong team player.
        </h1>
        <a
          target="_blank"
          href="https://drive.google.com/file/d/1n7eufNip6kNkcihYjQcOK-DPrm3Vh_0o/view?usp=sharing"
        >
          <Button>
            Check Out My CV <RxResume size="15" />
          </Button>
        </a>
      </div>
      <MyProjects />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
