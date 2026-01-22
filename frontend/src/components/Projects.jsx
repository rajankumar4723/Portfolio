import React, { useState } from "react";
import "../styles/Projects.css";
import Footer from "./Footer";
import projects from "../projectsData";

const Projects = () => {
  const [filter, setFilter] = useState("All");

  // Filtering logic to show Cloud vs Web
  const filteredProjects =
    filter === "All"
      ? projects
      : projects.filter((p) => p.category === filter || p.type === filter);

  return (
    <>
      <div className="projects-page">
        <div className="projects-header">
          <h1>
            Engineered <span className="highlight">Cloud Solutions</span>
          </h1>{" "}
          <p>
    Showcasing <strong>production-ready</strong> cloud architectures and 
    scalable full-stack applications built with <strong>AWS Best Practices</strong>.
  </p>
          {/* Category Filter - Highly attractive for HR */}
          <div className="filter-container">
            {["All", "Cloud", "Full Stack", "Frontend"].map((cat) => (
              <button
                key={cat}
                className={`filter-btn ${filter === cat ? "active" : ""}`}
                onClick={() => setFilter(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="project-grid" key={filter}>
  {filteredProjects.map((project, index) => (
    <ProjectCard key={project.title} project={project} />
  ))}
</div>
      </div>
      <Footer />
    </>
  );
};

// Extracted ProjectCard for better performance and readability
const ProjectCard = ({ project }) => (
  <div className="project-card">
    <div className="image-wrapper">
      <img src={project.image} alt={project.title} />
      <div className="overlay">
        <div className="project-links">
          <a
            href={project.live}
            target="_blank"
            rel="noreferrer"
            className="btn-live"
          >
            Live Demo
          </a>
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="btn-git"
          >
            Source Code
          </a>
        </div>
      </div>
    </div>

    <div className="project-info">
      {/* Dynamic color for Cloud vs Web types */}
      <div
        className={`project-type ${
          project.category === "Cloud" ? "cloud-type" : ""
        }`}
      >
        {project.category || project.type}
      </div>
      <h3>{project.title}</h3>
      <p>{project.description}</p>

      <div className="tech-stack">
        {project.tags &&
          project.tags.map((tag, i) => (
            <span key={i} className="tech-tag">
              {tag}
            </span>
          ))}
      </div>
    </div>
  </div>
);

export default Projects;
