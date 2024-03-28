import "./Footer.styles.css";
import { PiLinkedinLogoBold } from "react-icons/pi";
import { FiGithub } from "react-icons/fi";
import { BsInstagram } from "react-icons/bs";
const Footer = () => {
  return (
    <>
      <div className="footer-hr"></div>
      <div className="footer">
        <span className="cobyright">© 2024 All rights reserved.</span>
        <div className="items_group">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/mahmoud-mohamed-5a80a01b4/"
          >
            <span className="footer_items">Linkedin</span>
            <PiLinkedinLogoBold size={20} className="icon" />
          </a>
          <span className="space">/</span>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/mody100000"
          >
            <span className="footer_items">GitHub</span>
            <FiGithub size={20} className="icon" />
          </a>
          <span className="space">/</span>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.instagram.com/m.anamody/"
          >
            <span className="footer_items">Instagram </span>
            <BsInstagram size={20} className="icon" />
          </a>
        </div>
      </div>
    </>
  );
};

export default Footer;
