import { AiOutlineMail } from "react-icons/ai";
import "./Navbar.styles.css";
import { PiLinkedinLogoBold } from "react-icons/pi";
import { FiGithub } from "react-icons/fi";
import { BsInstagram } from "react-icons/bs";
const Navbar = () => {
  return (
    <>
      <div className="nav">
        <a
          target="_blank"
          rel="noreferrer"
          href="https://mail.google.com/mail/?view=cm&fs=1&to=mahmoud.m.gomaaa.dev@gmail.com">
          <div className="email">
            <div className="icon-container">
              <AiOutlineMail className="email_logo" />
            </div>
            <span className="email-title">Get in touch</span>
          </div>
        </a>
        <div className="items_group">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/mahmoud-mohamed-5a80a01b4/"
          >
            <span className="nav_items">Linkedin</span>
            <PiLinkedinLogoBold size={20} className="icon" />
          </a>
          <span className="space">/</span>
          <a href="https://github.com/mody100000">
            <span className="nav_items">GitHub</span>
            <FiGithub size={20} className="icon" />
          </a>
          <span className="space">/</span>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.instagram.com/mody_dev/"
          >
            <span className="nav_items">Instagram </span>
            <BsInstagram size={20} className="icon" />
          </a>
        </div>
      </div>
      <div className="nav-hr"></div>
    </>
  );
};

export default Navbar;
