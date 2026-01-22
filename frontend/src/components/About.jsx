import React from "react";
import "../styles/About.css";
import Footer from "./Footer";
import Pic from "../assets/linkdin_pic.jpg";

const About = () => {
  const techStack = ["React.js", "JavaScript (ES6+)", "Node JS", "MongoDB", "Tailwind CSS", "Java", "DSA","HTML5","CSS","Firebase",];
  const cloudSkills = ["AWS EC2", "CloudWatch","IAM","Linux" ,"Windows","VPC", "S3 Bucket","APi Gateway", "Route 53","DynamoDB" ,"CI/CD Pipelines", "Lamda"];

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
  <h1 className="job-title">Cloud & DevOps Engineer</h1>
  <p className="description">
    I am a <strong>Cloud Solutions Architect</strong> specializing in automated, 
    <strong> High-Availability infrastructure</strong>. Leveraging a deep background 
    in <strong>Networking and Hardware</strong>, I bridge the gap between bare-metal 
    reliability and modern cloud scalability. My mission is to engineer 
    <strong> Zero-Downtime environments</strong> using AWS best practices, 
    Infrastructure as Code (IaC), and secure CI/CD pipelines.
  </p>
  <div className="hero-stats">
    <div className="stat-item">
      <strong>10+</strong>
      <span>Cloud Deployments</span>
    </div>
    <div className="stat-item">
      <strong>IaC</strong>
      <span>Terraform / CloudFormation</span>
    </div>
    <div className="stat-item">
      <strong>99.9%</strong>
      <span>Uptime Focus</span>
    </div>
  </div>
</div>
          </div>

          {/* New Section: Experience & Internships */}
          <div className="experience-section">
            <div className="section-header">
              <h2>Experience & Internships</h2>
            </div>
            <div className="timeline">
              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <span className="timeline-date">Current</span>
                  <h3>Aspiring Cloud Architect</h3>
                  <p>Building serverless applications and deploying automated CI/CD pipelines on AWS for portfolio-scale projects.</p>
                </div>
              </div>
              {/* Add your internship here */}
              <div className="timeline-item">
  <div className="timeline-dot"></div>
  <div className="timeline-content">
    <span className="timeline-date">2024 - Present</span>
    <h3>Full-Stack  Development Intern</h3>
    <p>
      Spearheading the development of <strong>scalable MERN stack applications</strong>. 
      Integrated <strong>Firebase Managed Services</strong> for secure OAuth 2.0 authentication and 
      real-time data synchronization. Focused on building modular <strong>React components</strong> 
      and optimizing RESTful API endpoints for seamless frontend-backend communication.
    </p>
    <div className="intern-tags">
      <span className="mini-tag">MERN Stack</span>
      <span className="mini-tag">OAuth 2.0</span>
      <span className="mini-tag">Cloud-Integration</span>
    </div>
  </div>
</div>
            </div>
          </div>

          {/* New Section: Education & Certifications */}
        {/* New Section: Education & Certifications */}
<div className="edu-cert-grid">
  <div className="skill-card education">
    <div className="hot-badge">Ongoing</div>
    <h3>Education</h3>
    
    <div className="edu-item">
      <h4>MCA (Master of Computer Applications)</h4>
      <p>Uttaranchal University, Dehradun</p>
      <span>2024 - 2026 (Expected)</span>
    </div>

    <div className="edu-item border-top">
      <h4>BCA (Bachelor of Computer Applications)</h4>
      <p>Microtek College of Management & Technology</p>
      <div className="edu-meta">
        <span>2020 - 2023</span>
        <span className="cgpa">CGPA: 7.9</span>
      </div>
    </div>
  </div>

  <div className="skill-card certification">
    <div className="hot-badge">Hardware & Cloud</div>
    <h3>Certifications</h3>
    <ul className="cert-list">
      <li>🏆 AWS Cloud Practitioner (In Progress)</li>
      <li className="jetking-cert">
        <strong>Jetking Certified H/N Engineer</strong>
        <p>Mastery in Computer Hardware & Advanced Networking</p>
      </li>
      <li>📜 Full-Stack Web Development (udemy)</li>
    </ul>
  </div>
</div>
          {/* Proficiency Section */}
          <div className="skills-section" style={{marginTop: '80px'}}>
             <div className="section-header">
               <h2>Technical Proficiency</h2>
             </div>
             <div className="skills-grid">
              
               <div className="skill-card cloud">
                 <div className="hot-badge">Cloud-Native</div>
                 <h3>Cloud & DevOps</h3>
                 <div className="skills-list">
                   {cloudSkills.map((skill) => <span className="skill-tag aws-tag" key={skill}>{skill}</span>)}
                 </div>
               </div>
               <div className="skill-card core">
                 <h3>Core Stack</h3>
                 <div className="skills-list">
                   {techStack.map((skill) => <span className="skill-tag" key={skill}>{skill}</span>)}
                 </div>
               </div>
             </div>
          </div>

          {/* Contact Section */}
          <div className="contact-wrapper">
             <h2>Ready to Innovate?</h2>
             <div className="contact-grid">
                <div className="contact-box">
                    <p>Open for Internships and Full-time roles.</p>
                    <a href="mailto:rajandev55555@gmail.com" className="cta-button">Hire Me</a>
                </div>
                <div className="contact-details">
                    <p>📍 Uttar Pradesh, India</p>
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