// src/components/ui/JobCard.jsx
import React from 'react';

const JobCard = ({ title, company, location, period, responsibilities }) => {
  return (
    <div className="job-card">
      <div className="job-header">
        <div>
          <h4 className="job-title">{title}</h4>
          <div className="job-company">{company}</div>
        </div>
        <div className="job-details">
          <div>{location}</div>
          <div>{period}</div>
        </div>
      </div>
      <ul className="job-responsibilities">
        {responsibilities.map((item, index) => (
          <li key={index} className="text-gray-300">{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default JobCard;