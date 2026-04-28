import React from "react";

function Skills({heroImg}) {
  return (
    <section className="skills">
      <div className="skills-inner">

        {/* 🔥 NEW HERO SECTION */}
          <div className="skills-hero">
  {/* LEFT */}
      <div className="hero-left">
          <h2 className="skills-heading">
            We Build Digital Solutions <br />
           <span className="gradient-text">That Drive Results</span>
          </h2>

        <p className="skills-desc">
          From websites to Fintech solutions, IFEMS.XYZ Helps Brands scale faster with cutting-edge Digital experiences.
        </p>

        <button className="get-started-btn"
                onClick={() => {

                  document.getElementById("future").scrollIntoView({behavior: "smooth"});
                }}
        >
          <span>OUR SERVICES</span>
        </button>
      </div>

  {/* RIGHT */}
        <div className="hero-right">
          {heroImg}
        </div>


        </div>

    
      </div>
    </section>
  );
}

export default Skills;