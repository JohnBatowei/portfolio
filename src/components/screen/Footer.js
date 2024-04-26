import { Link } from "react-router-dom";
import "../styles/footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="wrapper-top">
        <h2>
          Let's work together to transform your digital presence and achieve
          your business goals.
        </h2>
        <a href="/">Lets talk</a>
      </div>

      <div className="wrapper-bottom">
        <a href="#home" className="logo">
          Batowei ariebi john
        </a>
        <div className="group">
          <Link to="/pricing">Pricing</Link>
          <Link to="/contact">Contact</Link>
          <a href="#project">Projects</a>
          <Link to="/">Download CV</Link>
        </div>

        <Link to="/contact" className="letsTalk">
          {" "}
          Lets talk{" "}
        </Link>
      </div>
    </div>
  );
};

export default Footer;
