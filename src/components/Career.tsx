import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>P.R & Outreach</h4>
                <h5>Hack4Bengal</h5>
              </div>
              <h3>2023</h3>
            </div>
            <p>
              • Planned and coordinated Hack4Bengal event<br />
              • Secured sponsorships and managed event budget<br />
              • Encouraged problem-solving among participants.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Content Writer</h4>
                <h5>Skepsis[Bit's & bites]</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              •  Create blogs, posts, and newsletters<br />
              • Maintain brand voice and consistency<br />
              •  Research trends and engage the audience.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>P.R Lead</h4>
                <h5>Web3Wizard</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
            • Build and maintain community partnerships<br />
            • Manage outreach and sponsorships<br />
            • Promote events and boost engagement.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
