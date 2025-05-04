import React from "react";
import "../styles/Projects.css";
import Footer from "./Footer";
import projects from "../projectsData"; // new file with project list

const Projects = () => {
  return (
    <>
      <div className="projects-container">
        <h1>My Projects</h1>
        <div className="project-grid">
          {projects.map((project, index) => (
            <div className="project-card" key={index}>
              <img src={project.image} alt={project.title} />
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-links">
                <a href={project.live} target="_blank">Live</a>
                <a href={project.github} target="_blank">GitHub</a>
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
