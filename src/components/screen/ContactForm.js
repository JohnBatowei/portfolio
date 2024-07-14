import { useState } from 'react';
import emailjs from 'emailjs-com';
import '../styles/contact.scss';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_6ehecns', 'template_mc33u0f', e.target, '_RckHEE8ovpSQtt4w')
      .then((result) => {
        console.log(result.text);
        alert('Your message was successfully sent to Engr John Batowei!');
        alert('You would be contacted shortly but feel free to call 2348160228215');
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: ''
        });
      }, (error) => {
        console.log(error.text);
        alert('There was an error sending your message. Please try again later.');
      });
  };

  return (
    <div className="contact-form">
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone Number</label>
          <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" value={formData.message} onChange={handleChange} rows="5" required></textarea>
        </div>
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default ContactForm;
