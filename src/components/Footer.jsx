import { Link } from "react-router-dom";
import { Instagram, Twitter, Linkedin, Github } from "lucide-react";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-glow"></div>

      <div className="footer-inner">
        {/* BRAND */}
        <div className="footer-brand">
          <h3>IFEMS<span>XYZ</span></h3>
          <p>
            Crafting premium digital experiences with precision,
            creativity, and performance.
          </p>
        </div>

        {/* LINKS */}
        <div className="footer-links">
          <h4>Explore</h4>
          <ul>
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/home">Portfolio</Link></li>
            <li><Link to="/home">Services</Link></li>
            <li><Link to="/home">Contact</Link></li>
            <li><Link to="/about">About</Link></li> {/* Added About */}
          </ul>
        </div>

        {/* CONTACT */}
        <div className="footer-links">
          <h4>Contact</h4>
          <ul>
            <li>hello@ifemsxyz.com</li>
            <li>+ 234 912 959 6420</li>
            <li>WhatsApp Support</li>
          </ul>
        </div>

        {/* SOCIALS */}
        <div className="footer-socials">
          <h4>Follow</h4>
          <div className="social-icons">
            <span><Instagram /></span>
            <span><Twitter /></span>
            <span><Linkedin /></span>
            <span><Github /></span>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} IFEMS XYZ. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
