import Button from "../button/Button";
import "./Contact.styles.css";
import { AiOutlineMail } from "react-icons/ai";

const Contact = () => {
  return (
    <div>
      <div className="hr"></div>
      <div className="contact-container">
        <h1 className="contact">
          Tell me about your <br /> next project
        </h1>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://mail.google.com/mail/?view=cm&fs=1&to=mahmoud.m.gomaaa.dev@gmail.com">
          <Button>
            Get In Touch <AiOutlineMail className="icon-m" size={15} />
          </Button>
        </a>
      </div>
    </div>
  );
};

export default Contact;
