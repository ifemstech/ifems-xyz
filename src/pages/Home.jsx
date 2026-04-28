import Ova from "../components/Ova.jsx";
import Hero from "../components/Hero.jsx";
import Skills from "../components/Skills.jsx";
import Features from "../components/Features.jsx";
import Testimonial from "../components/Testimonial.jsx";
import Contact from "../components/ContactSection.jsx";
import Footer from "../components/Footer.jsx";

import leftLogo from "../assets/ifemslogo.jpg";
import rightLogo from "../assets/ifemslogo1.jpg";
import heroImg from "../assets/ifems-hero.png";

function Home() {
    return (
        <>
            <Ova />
            <Skills heroImg={<img src={heroImg} alt="IFEMS" /> } 
            
            />

            <Hero
                leftLogo={<img src={leftLogo} alt="Left logo" />}
                rightLogo={<img src={rightLogo} alt="Right logo" />}
            />
            <Features />
            <Testimonial />
            <Contact />
            <Footer />
        </>
    );
}

export default Home;
