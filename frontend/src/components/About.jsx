import React from "react";
import "../styles/About.css";
import Footer from "./Footer";
import Pic from "../assets/linkdin_pic.jpg";

const About = () => {
  const techStack = ["React.js", "JavaScript (ES6+)", "Node JS", "MongoDB", "Tailwind CSS", "Java", "DSA"];
  const cloudSkills = ["AWS (EC2/S3)", "Amplify", "S3 Bucket", "Route 53", "CI/CD Pipelines", "Netlify"];

  return (
    <>
      <div className="main-about">
        <div className="about-container">
          
          {/* Hero Section */}
          <div className="about-hero">
            <div className="profile-image-container">
              <img src={Pic} alt="Rajan Modanwal" className="profile-image" />
              <div className="status-badge">Available for Work</div>
            </div>
            <div className="about-text">
              <span className="greeting">Hello, I'm</span>
              <h1>Rajan Modanwal</h1>
              <h3 className="job-title">Full Stack Developer & <span className="highlight-text">Cloud Specialist</span></h3>
              <p className="description">
                I specialize in engineering high-performance web architectures. My core focus is bridging the gap between 
                <strong> seamless UI/UX</strong> and <strong>robust Cloud infrastructure</strong>. 
              </p>
              <div className="hero-stats">
                <div className="stat-item"><strong>10+</strong><span>Projects</span></div>
                <div className="stat-item"><strong>Dev..</strong><span>Expertise</span></div>
                <div className="stat-item"><strong>AWS</strong><span>Certified Trainee</span></div>
              </div>
            </div>
          </div>

          {/* Proficiency Section */}
          <div className="skills-section">
            <div className="section-header">
              <h2>Technical Proficiency</h2>
              <p>Highly skilled in modern web technologies and cloud deployment</p>
            </div>
            
            <div className="skills-grid">
              <div className="skill-card core">
                <h3>Core Stack</h3>
                <div className="skills-list">
                  {techStack.map((skill) => (
                    <span className="skill-tag" key={skill}>{skill}</span>
                  ))}
                </div>
              </div>
              
              <div className="skill-card cloud">
                <div className="hot-badge">High Demand</div>
                <h3>Cloud & DevOps</h3>
                <div className="skills-list">
                  {cloudSkills.map((skill) => (
                    <span className="skill-tag aws-tag" key={skill}>{skill}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Contact Section */}
          <div className="contact-wrapper">
             <h2>Let's Build Something Together</h2>
             <div className="contact-grid">
                <div className="contact-box">
                    <p>Interested in hiring or collaborating?</p>
                    <a href="mailto:rajandev55555@gmail.com" className="cta-button">Email Me Directly</a>
                </div>
                <div className="contact-details">
                    <p>📍 Uttar Pradesh, India</p>
                    <p>📞 +91 9305085242</p>
                    <p>💼 <a href="https://linkedin.com/in/yourprofile" target="_blank">LinkedIn Profile</a></p>
                </div>
             </div>
          </div>

        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;