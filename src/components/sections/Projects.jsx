// src/components/sections/Projects.jsx
import React from 'react';
import ProjectCard from '../ui/ProjectCard';

const Projects = () => {
  return (
    <div className="mt-8 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-6">Projects</h2>
      <div className="space-y-10">
        
        <ProjectCard
          title="AI Resume Optimizer"
          period="Jan 2025 - Present"
          description="Built an AI-powered Resume Optimizer using TensorFlow and spaCy that analyzes job requirements, calculates ATS compatibility scores, and suggests targeted improvements through a React/FastAPI full-stack architecture."
          details="Architected a system that extracts technical and soft skills from job descriptions with advanced NLP techniques, providing keyword matching analysis with 95% accuracy while showcasing both matched and missing competencies to maximize interview potential."
          technologies={['Next.js', 'React', 'FastAPI', 'TensorFlow', 'spaCy', 'Hugging Face Transformers', 'PyMuPDF', 'Tailwind CSS']}
          links={[
            { label: 'GitHub', url: 'https://github.com/Anirudh2112/Resume_Optimizer' }
          ]}
        />

        <ProjectCard
          title="Outlier Detection"
          period="Dec 2024 - Feb 2025"
          description="Developed an unsupervised anomaly detection system for prostate CT scans using a 3D adaptation of the f-AnoGAN architecture, enabling identification of abnormalities without labeled training data."
          details="Implemented a complete pipeline from preprocessing to detection with TensorFlow, processing 3D volumetric medical data to identify hip replacements and fiducials. The model combines reconstruction error and feature matching for anomaly scoring, achieving effective separation between normal and anomalous scans with customizable sensitivity thresholds."
          technologies={['TensorFlow', '3D CNNs', 'Autoencoders', 'GANs', 'Medical Imaging', 'Unsupervised Learning']}
          links={[
            { label: 'GitHub', url: 'https://github.com/Anirudh2112/Outlier_detection' }
          ]}
        />

        <ProjectCard
          title="Stock Market Analysis Tool"
          period="Dec 2024"
          description="Engineered a full-stack stock analysis application using FastAPI (Python) and React.js, integrating Yahoo Finance API to analyze volume and price breakout patterns across multiple stocks."
          details="Generated robust financial calculations with zero lookahead bias, processing historical stock data to identify trading signals with up to 100% win rate on specific tickers, deployed on Render and Netlify with 99.9% uptime."
          technologies={['FastAPI', 'React.js', 'Python', 'Financial Algorithms', 'Yahoo Finance API']}
          links={[
            { label: 'Live Demo', url: 'https://rococo-pony-c2d71b.netlify.app/' },
            { label: 'GitHub', url: 'https://github.com/Anirudh2112/Stock_Analysis_Frontend' }
          ]}
        />
        
        <ProjectCard
          title="Roboflow Supervision (Open Source Contribution)"
          period="Dec 2024"
          description="Fixed critical functionality in mask movement operations enabling bi-directional movement in this popular Computer Vision Library."
          details="Created comprehensive test suite covering edge cases to ensure reliability of the enhanced features."
          technologies={['Computer Vision', 'Python', 'Testing', 'Open Source']}
          links={[
            { label: 'GitHub PR', url: 'https://github.com/roboflow/supervision/pull/1739' },
            { label: 'Roboflow Repo', url: 'https://github.com/roboflow/supervision' }
          ]}
        />

        <ProjectCard
          title="3D Point Cloud Segmentation"
          period="Aug 2023 - Dec 2023"
          description="Applied machine learning with TensorFlow and PyTorch, using PointNet++ and attention mechanisms, for point cloud data segmentation, showing innovation."
          details="Prepared 3D datasets, demonstrating discipline in pre-processing and augmentation for tasks. Leveraged linear algebra using numpy for predictive modeling, improving critical data region awareness, enabling precise model adjustments for better accuracy."
          technologies={['TensorFlow', 'PyTorch', 'PointNet++', 'Attention Mechanisms', 'Numpy', '3D Visualization']}
          links={[
            { label: 'Research Paper', url: 'https://arxiv.org/abs/1706.02413' }
          ]}
        />
      </div>
    </div>
  );
};

export default Projects;