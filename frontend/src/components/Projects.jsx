import React from "react";
import "../styles/Projects.css";
import Footer from "./Footer";
import projects from "../projectsData"; 

const Projects = () => {
  return (
    <>
    
      <div className="projects-page">
        <div className="projects-header">
          <h1>Featured <span className="highlight">Portfolio</span></h1>
          <p>A collection of full-stack applications and cloud-integrated solutions.</p>
        </div>

        <div className="project-grid">
          {projects.map((project, index) => (
            <div className="project-card" key={index}>
              <div className="image-wrapper">
                <img src={project.image} alt={project.title} />
                <div className="overlay">
                  <div className="project-links">
                    <a href={project.live} target="_blank" rel="noreferrer" className="btn-live">Live Demo</a>
                    <a href={project.github} target="_blank" rel="noreferrer" className="btn-git">View Code</a>
                  </div>
                </div>
              </div>
              
              <div className="project-info">
                <div className="project-type">{project.type || "Web Application"}</div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                
                <div className="tech-stack">
                  {/* Mapping through tech tags if available in your data */}
                  {project.tags && project.tags.map((tag, i) => (
                    <span key={i} className="tech-tag">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Projects;