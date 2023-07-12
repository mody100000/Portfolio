import "./ProjectBox.styles.css";
import { AiFillGithub, AiFillFolder } from "react-icons/ai";
const ProjectBox = ({ children }) => {
  return (
    <div className="box-container">
      <div className="box-content">
        <div className="icons">
          <AiFillFolder size={30} />
          <AiFillGithub size={30} />
        </div>
        <div className="content">{children}</div>
      </div>
    </div>
  );
};

export default ProjectBox;
