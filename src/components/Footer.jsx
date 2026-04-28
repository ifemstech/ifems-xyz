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
            <li><Link to="/">Home</Link></li>
            <li><Link to="/">Portfolio</Link></li>
            <li><Link to="/">Services</Link></li>
            <li><Link to="/">Contact</Link></li>
            <li><Link to="/about">About</Link></li>
          </ul>
        </div>

        {/* CONTACT */}
        <div className="footer-links">
          <h4>Contact</h4>
          <ul>
            <li>
              <a href="mailto:hello@ifemsxyz.com">hello@ifemsxyz.com</a>
            </li>
            <li>
              <a href="https://wa.me/2349129596420">+ 234 912 959 6420</a>
            </li>
            <li>
              <a href="https://wa.me/2349129596420" target="_blank" rel="noopener noreferrer">
                WhatsApp Support
              </a>
            </li>
          </ul>
        </div>

        {/* SOCIALS */}
        <div className="footer-socials">
          <h4>Follow</h4>
          <div className="social-icons">
            <a href="https://instagram.com/yourusername" target="_blank" rel="noopener noreferrer">
              <Instagram />
            </a>

            <a href="https://twitter.com/DatAlphaguy" target="_blank" rel="noopener noreferrer">
              <Twitter />
            </a>

            <a href="https://linkedin.com/in/ifems-xyz" target="_blank" rel="noopener noreferrer">
              <Linkedin />
            </a>

            <a href="https://github.com/ifemstech" target="_blank" rel="noopener noreferrer">
              <Github />
            </a>
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