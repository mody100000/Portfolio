import "./Button.styles.css";
const Button = ({ children }) => {
  return (
    <button className="button-container">
      <span className="button-title">{children}</span>
    </button>
  );
};

export default Button;
