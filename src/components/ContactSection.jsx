import { Phone, Mail, MessageCircle } from "lucide-react";

function Contact() {
  return (
    <section className="contact">
      <div className="contact-overlay"></div>

      <div className="contact-inner">
        <h2 className="contact-title">
          Get In <span>Touch</span>
        </h2>
        <p className="contact-subtitle">
          Let’s talk about your next premium project.
        </p>

        <div className="contact-grid">
          {/* LEFT – CONTACT INFO */}
          <div className="contact-info">
            <div className="contact-item">
              <div className="contact-icon">
                <Phone />
              </div>
              <div>
                <h4>Call Us</h4>
                <p>+ 234 912 959 6420</p>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">
                <Mail />
              </div>
              <div>
                <h4>Email</h4>
                <p>hello@ifemsxyz.com</p>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">
                <MessageCircle />
              </div>
              <div>
                <h4>WhatsApp</h4>
                <p>Chat instantly with us</p>
              </div>
            </div>
          </div>

          {/* RIGHT – FORM */}
          <form className="contact-form">
            <input type="text" placeholder="Your Name" />
            <input type="email" placeholder="Your Email" />
            <textarea placeholder="Tell us about your project..." />
            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
