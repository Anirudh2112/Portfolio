// src/components/sections/WorkInProgress.jsx
import React from 'react';
import { Construction } from 'lucide-react';

const WorkInProgress = ({ type }) => {
  const titles = {
    'challenges': 'Interactive Challenges',
    'publications': 'Publications',
    'blog': 'Blog'
  };
  
  const messages = {
    'challenges': 'Exciting interactive challenges are being prepared to test your skills!',
    'publications': 'My research publications and articles will be available here soon.',
    'blog': 'Thoughtful blog posts about technology, AI, and software development coming soon.'
  };
  
  return (
    <div className="wip-container">
      <Construction size={80} className="wip-icon" />
      <h2 className="wip-title">{titles[type]}</h2>
      <p className="wip-message">{messages[type]}</p>
      <div className="wip-progress">
        <div className="wip-progress-bar"></div>
      </div>
      <p className="wip-check-back">Check back soon!</p>
    </div>
  );
};

export default WorkInProgress;