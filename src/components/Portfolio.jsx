// src/components/Portfolio.jsx
import React, { useState } from 'react';
import { Github, Linkedin, Mail, FileText, Code, BrainCircuit, Construction, PenTool } from 'lucide-react';
import AboutMe from './sections/AboutMe';
import Projects from './sections/Projects';
import WorkInProgress from './sections/WorkInProgress';

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState('about');
  
  return (
    <div className="min-h-screen">
      {/* Particle Background (using absolute positioning) */}
      <ParticleBackground />
      
      {/* Header */}
      <header className="header container">
        <div className="flex-md-row flex-col header-content">
          <div className="logo mb-4">Anirudh Patil</div>
          <nav className="nav-tabs">
            <button 
              className={`nav-tab ${activeTab === 'about' ? 'active' : ''}`}
              onClick={() => setActiveTab('about')}
            >
              <FileText size={18} className="tab-icon" />
              About Me
            </button>
            <button 
              className={`nav-tab ${activeTab === 'projects' ? 'active' : ''}`}
              onClick={() => setActiveTab('projects')}
            >
              <Code size={18} className="tab-icon" />
              Projects
            </button>
            <button 
              className={`nav-tab ${activeTab === 'challenges' ? 'active' : ''}`}
              onClick={() => setActiveTab('challenges')}
            >
              <BrainCircuit size={18} className="tab-icon" />
              Challenges
            </button>
            <button 
              className={`nav-tab ${activeTab === 'publications' ? 'active' : ''}`}
              onClick={() => setActiveTab('publications')}
            >
              <PenTool size={18} className="tab-icon" />
              Publications
            </button>
            <button 
              className={`nav-tab ${activeTab === 'blog' ? 'active' : ''}`}
              onClick={() => setActiveTab('blog')}
            >
              <PenTool size={18} className="tab-icon" />
              Blog
            </button>
          </nav>
        </div>
      </header>
      
      {/* Main Content */}
      <main className="container py-4">
        {activeTab === 'about' && <AboutMe />}
        {activeTab === 'projects' && <Projects />}
        {activeTab === 'challenges' && <WorkInProgress type="challenges" />}
        {activeTab === 'publications' && <WorkInProgress type="publications" />}
        {activeTab === 'blog' && <WorkInProgress type="blog" />}
      </main>
      
      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="social-links">
            <a href="https://github.com/Anirudh2112/" className="social-link">
              <Github size={24} />
            </a>
            <a href="https://www.linkedin.com/in/anirudh-andhe/" className="social-link">
              <Linkedin size={24} />
            </a>
            <a href="mailto:akanirudh12@gmail.com" className="social-link">
              <Mail size={24} />
            </a>
          </div>
          <p className="copyright">
            © {new Date().getFullYear()} Anirudh Patil. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

// Component for the particle background effect
const ParticleBackground = () => {
  const particles = [
    { top: '10%', left: '20%', size: '1rem', color: 'rgba(59, 130, 246, 0.2)' },
    { top: '20%', left: '80%', size: '0.75rem', color: 'rgba(96, 165, 250, 0.15)' },
    { top: '60%', left: '10%', size: '1.5rem', color: 'rgba(59, 130, 246, 0.1)' },
    { top: '80%', left: '70%', size: '1.25rem', color: 'rgba(147, 197, 253, 0.2)' },
    { top: '30%', left: '30%', size: '1rem', color: 'rgba(37, 99, 235, 0.15)' },
    { top: '70%', left: '40%', size: '0.75rem', color: 'rgba(96, 165, 250, 0.2)' },
    { top: '40%', left: '60%', size: '0.5rem', color: 'rgba(59, 130, 246, 0.15)' },
    { top: '50%', left: '90%', size: '1.25rem', color: 'rgba(59, 130, 246, 0.1)' },
  ];

  return (
    <div style={{ 
      position: 'fixed', 
      inset: 0, 
      zIndex: -1, 
      pointerEvents: 'none' 
    }}>
      {particles.map((particle, index) => (
        <div 
          key={index}
          style={{
            position: 'absolute',
            top: particle.top,
            left: particle.left,
            width: particle.size,
            height: particle.size,
            borderRadius: '50%',
            backgroundColor: particle.color,
            animation: 'pulse 8s infinite ease-in-out',
            animationDelay: `${index * 0.5}s`
          }}
        ></div>
      ))}
    </div>
  );
};

export default Portfolio;