function Testimonial() {
  return (
    <section className="testimonial">
      <div className="testimonial-overlay"></div>

      <div className="testimonial-inner">
        <h2 className="testimonial-title">
          What People Say About <span>Ifems XYZ</span>
        </h2>

        <p className="testimonial-subtitle">
          Trusted by creatives, developers, and brands worldwide.
        </p>

        <div className="testimonial-grid">
          <div className="testimonial-card">
            <p className="testimonial-text">
              “Ifems XYZ delivers premium designs with precision. Every detail
              feels intentional and high-end.”
            </p>
            <div className="testimonial-user">
              <div className="avatar">A</div>
              <div>
                <h4>Alex Morgan</h4>
                <span>Creative Director</span>
              </div>
            </div>
          </div>

          <div className="testimonial-card">
            <p className="testimonial-text">
              “Clean UI, strong branding, and fast execution. This is next-level
              work.”
            </p>
            <div className="testimonial-user">
              <div className="avatar">S</div>
              <div>
                <h4>Sarah Kim</h4>
                <span>Product Designer</span>
              </div>
            </div>
          </div>

          <div className="testimonial-card">
            <p className="testimonial-text">
              “Ifems XYZ understands modern aesthetics. Red & black never looked
              this premium.”
            </p>
            <div className="testimonial-user">
              <div className="avatar">J</div>
              <div>
                <h4>James Carter</h4>
                <span>Startup Founder</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonial;
