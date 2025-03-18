// src/components/ui/ProjectCard.jsx
import React from 'react';

const ProjectCard = ({ title, period, description, details, technologies, links }) => {
  return (
    <div className="project-card">
      <div className="project-header">
        <h3 className="project-title">{title}</h3>
        <div className="project-period">
          {period}
        </div>
      </div>
      
      <p className="project-description">{description}</p>
      <p className="project-details">{details}</p>
      
      <div className="mb-5">
        <h4 className="project-tech-title">Technologies Used</h4>
        <div className="skill-list">
          {technologies.map((tech, index) => (
            <span key={index} className="skill-tag">
              {tech}
            </span>
          ))}
        </div>
      </div>
      
      <div className="project-links">
        {links.map((link, index) => (
          <a 
            key={index} 
            href={link.url} 
            className="project-link"
          >
            {link.label}
          </a>
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;