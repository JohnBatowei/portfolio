import { Link } from "react-router-dom";
import { Whatsapp } from 'react-bootstrap-icons';
import "../styles/footer.scss";

const Footer = () => {
  const whatsappMessage = "Thank you for contacting Aritron Engineer. How may I help you today?";

  return (
    <div className="footer">
      <div className="wrapper-top">
        <h2>
          Let's work together to transform your digital presence and achieve
          your business goals.
        </h2>
        <a href="/">Let's talk</a>
      </div>

      <div className="wrapper-bottom">
        <a href="#home" className="logo">
          To Top
        </a>
        <div className="group">
          <a href="#pricing">Pricing</a>
          <Link to="/contact">Contact</Link>
          <a href="#project">Projects</a>
          <Link to="/">Download CV</Link>
          <a
            href={`https://wa.me/2348160228215?text=${encodeURIComponent(whatsappMessage)}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Whatsapp size={32} color="white" />
          </a>
        </div>

        <Link to="/contact" className="letsTalk">
          Let's talk
        </Link>
      </div>
    </div>
  );
};

export default Footer;
