// src/components/ui/SkillCategory.jsx
import React from 'react';

const SkillCategory = ({ title, skills }) => {
  return (
    <div className="skill-category">
      <h4 className="skill-title">{title}</h4>
      <div className="skill-list">
        {skills.map((skill, index) => (
          <span key={index} className="skill-tag">
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

export default SkillCategory;