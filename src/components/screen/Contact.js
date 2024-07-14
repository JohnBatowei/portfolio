import ContactForm from "./ContactForm";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Contact = () => {
  return (
    <>
      <Navbar />
      <div className="contact">
        <ContactForm />
      </div>
      <Footer />
    </>
  );
};

export default Contact;
