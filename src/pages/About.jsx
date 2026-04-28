export default function About() {
  return (
    <section className="about">
      <div className="about-glow" />

      <div className="about-inner">
        {/* HERO TITLE */}
        <h1 className="about-title">
          ABOUT <span>IFEMS</span> XYZ
        </h1>

        {/* PHILOSOPHY */}
        <p className="about-lead">
          IFEMS XYZ is a premium digital brand focused on precision,
          clarity, and future-ready design systems.
        </p>

        {/* GRID */}
        <div className="about-grid">
          <div className="about-card glass">
            <h3>PHILOSOPHY</h3>
            <p>
              Design is not decoration.  
              It is structure, intention, and experience.
            </p>
          </div>

          <div className="about-card glass">
            <h3>MISSION</h3>
            <p>
              To craft high-end digital experiences that feel timeless,
              powerful, and engineered with care.
            </p>
          </div>

          <div className="about-card glass">
            <h3>CRAFT</h3>
            <p>
              Every pixel is intentional.  
              Every interaction has purpose.
            </p>
          </div>
        </div>

        {/* SIGNATURE */}
        <div className="about-signature">
          Designed & engineered by <span>IFEMS</span>
        </div>
      </div>


      
    </section>
  );
}
