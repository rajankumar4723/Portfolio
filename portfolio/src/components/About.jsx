import React from "react";
import "../styles/About.css";
import Footer from "./Footer";
import Pic from "../assets/linkdin_pic.jpg";

const About = () => {
  return (
    <>
      <div className="main-about">
        <div className="about-container">
          <div className="about-section">
            <div className="profile-image-container">
              <img src={Pic} alt="Rajan - Frontend Developer" className="profile-image" />
            </div>
            <div className="about-text">
              {/* <h2>About Me</h2> */}
              <p>
                I'm <strong>Rajan Modanwal</strong>, a passionate Front-End Developer focused on creating
                dynamic and responsive web applications. I specialize in React.js and
                have a strong foundation in HTML, CSS, JavaScript, and backend basics with Node.js.
              </p>
              <p>
                I enjoy building real-world projects, solving DSA problems, and learning new
                technologies like Tailwind, MongoDB, and Next.js.
              </p>
            </div>
          </div>

          <div className="skills-section">
            <h2>Tech Stack</h2>
            <div className="skills">
              {["HTML 5", "CSS 3", "JavaScript", "React", "Node JS", "MongoDB", "Tailwind CSS", "Java", "DSA"].map((skill) => (
                <div className="skill" key={skill}>
                  <span className="skill-name">{skill}</span>
                  <div className="skill-progress"></div>
                </div>
              ))}
            </div>
          </div>

          <div className="contact-info">
            <h2>Contact Info</h2>
            <ul>
              <li><strong>Email:</strong> <a href="mailto:rajan@example.com">rajandev55555@.com</a></li>
              <li><strong>Phone:</strong> +91 9305085242</li>
              <li><strong>Location:</strong> Uttar Pradesh, India</li>
              <li><strong>LinkedIn:</strong> <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noreferrer">LinkedIn Profile</a></li>
              <li><strong>Freelance:</strong> Available</li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
