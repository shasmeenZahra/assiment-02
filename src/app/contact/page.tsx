// pages/contact.js
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../globals.css';

const Contact = () => {
  return (
    
    <div className="contact-container">
      <Header />
      
      <main className="contact-main">
        <h2 className="contact-heading">Contact Me</h2>
        <form className="contact-form">
          <div className="contact-card">
            <label>Name</label>
            <input type="text" className="contact-input" />
          </div>
          <div className="contact-card">
            <label>Email</label>
            <input type="email" className="contact-input" />
          </div>
          <div className="contact-card">
            <label>Message</label>
            <input type="email" className="contact-input" />
          </div>
          <button type="submit" className="contact-button">Send Message</button>
        </form>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
