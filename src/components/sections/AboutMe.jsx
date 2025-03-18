// src/components/sections/AboutMe.jsx
import React from 'react';
import { Mail, Linkedin, Github, FileText } from 'lucide-react';
import JobCard from '../ui/JobCard';
import SkillCategory from '../ui/SkillCategory';

const AboutMe = () => {
  return (
    <div className="mt-8 max-w-4xl mx-auto">
      <div className="profile-container mb-12">
        <div className="profile-image">
          <span>AP</span>
        </div>
        
        <div className="flex-1">
          <h1 className="mb-4">Anirudh Patil</h1>
          <h2 className="text-blue-400 mb-6">Software Engineer & Machine Learning Specialist</h2>
          
          <div className="grid grid-cols-1 grid-cols-md-2 gap-4 mb-6">
            <div className="flex items-center gap-2 text-gray-300">
              <Mail size={18} />
              <span>akanirudh12@gmail.com</span>
            </div>
            <div className="flex items-center gap-2 text-gray-300">
              <Linkedin size={18} />
              <a href="https://www.linkedin.com/in/anirudh-andhe/" className="hover-effect">Anirudh-Andhe</a>
            </div>
            <div className="flex items-center gap-2 text-gray-300">
              <Github size={18} />
              <a href="https://github.com/Anirudh2112/" className="hover-effect">Anirudh-Andhe</a>
            </div>
            <div className="flex items-center gap-2 text-gray-300">
              <FileText size={18} />
              <a href="/Anirudh_Andhe_Resume.pdf" className="hover-effect">Download Resume</a>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mb-12">
        <h3 className="section-title">Professional Summary</h3>
        <p className="text-gray-300 mb-4">
          Software Engineer with over 3 years of experience with strong communication skills. Driven by a passion for leveraging technology to improve efficiency in fullstack development, machine learning, and service-oriented systems. Skilled in building data-driven applications, designing RESTful APIs, implementing creative solutions, and developing distributed systems while showcasing resilience to deliver impactful solutions.
        </p>
        <p className="text-gray-300">
          Currently focused on developing and fine-tuning Large Language Models (LLMs) for generative AI applications, improving text classification accuracy and reducing manual data processing time.
        </p>
      </div>
      
      <div className="mb-12">
        <h3 className="section-title">Education</h3>
        <div className="space-y-6">
          <div className="card">
            <div className="flex flex-col flex-md-row justify-between mb-2">
              <h4 className="text-xl font-semibold">MS in Information Science</h4>
              <div className="text-blue-400">Aug 2022 - May 2024</div>
            </div>
            <div className="text-lg mb-2">The University of North Carolina at Chapel Hill, NC</div>
            <div className="text-gray-300">GPA: 3.9/4</div>
          </div>
          
          <div className="card">
            <div className="flex flex-col flex-md-row justify-between mb-2">
              <h4 className="text-xl font-semibold">BS in Electronics & Computer Engineering</h4>
              <div className="text-blue-400">Aug 2016 - Aug 2020</div>
            </div>
            <div className="text-lg mb-2">Jawaharlal Nehru Technological University - Hyderabad, India</div>
            <div className="text-gray-300">GPA: 3.98/4</div>
          </div>
        </div>
      </div>
      
      <div className="mb-12">
        <h3 className="section-title">Work Experience</h3>
        <div className="space-y-8">
          <JobCard
            title="Software Engineer"
            company="UNC-School of Medicine"
            location="Chapel Hill, NC, USA"
            period="Aug 2024 - Present"
            responsibilities={[
              "Developing and fine-tuning Large Language Models (LLMs) for generative AI applications, improving text classification accuracy by 30% and reducing manual data processing time by 40%.",
              "Engineering LLM Ops pipelines, automating model training, fine-tuning, and deployment workflows, reducing deployment time by 50%.",
              "Designing and deploying scalable AI models on AWS Bedrock, enabling real-time text generation and automated data extraction for clinical reports.",
              "Developing full-stack applications using MongoDB, Express, React, and Node.js (MERN stack).",
              "Automating CI/CD pipelines (Git, Jenkins, AWS CodeDeploy), increasing deployment efficiency by 35%."
            ]}
          />
          
          <JobCard
            title="Software Engineer Intern"
            company="UNC-Chapel Hill"
            location="Chapel Hill, NC, USA"
            period="Aug 2023 - Apr 2024"
            responsibilities={[
              "Led an EPA project by analyzing over 10,000+ PostgreSQL entries, implementing data preprocessing and ETL pipelines.",
              "Optimized SQL queries and database operations (PostgreSQL, MySQL), improving data retrieval speeds by 25%.",
              "Defined database design and optimized Django REST framework-based products.",
              "Enhanced backend data pipelines by implementing ETL workflows and real-time data streaming with Kafka, reducing latency by 40%."
            ]}
          />
          
          <JobCard
            title="Software Engineer - Full Stack"
            company="Virtusa"
            location="Hyderabad, India"
            period="Oct 2020 - Jun 2022"
            responsibilities={[
              "Led feature development by breaking down wireframes into reusable UI components for 7 web applications.",
              "Streamlined coding efficiency by 8% utilizing object-oriented programming with React and Node.js.",
              "Utilized Apache Kafka and Spark to enhance data streaming and processing pipelines.",
              "Employed source code management tools like Git for CI/CD operations, resulting in a 21% performance increase."
            ]}
          />
        </div>
      </div>
      
      <div className="mb-12">
        <h3 className="section-title">Technical Skills</h3>
        <div className="skills-container">
          <SkillCategory 
            title="Programming Languages & Web Technologies" 
            skills={['Java', 'Python', 'JavaScript', 'Angular JS', 'React JS', 'TypeScript', 'C++', 'SQL', 'HTML', 'CSS']} 
          />
          <SkillCategory 
            title="Frameworks & Libraries" 
            skills={['TensorFlow', 'PyTorch', 'CUDA', 'Keras', 'Numpy', 'Scikit-Learn', 'pandas', 'Spring', 'Agile development', 'Scrum']} 
          />
          <SkillCategory 
            title="Tools & Cloud Services" 
            skills={['CI/CD', 'Jenkins', 'Terraform', 'Docker', 'kubernetes', 'AWS services', 'CMS', 'Wordpress']} 
          />
          <SkillCategory 
            title="Databases & Big Data" 
            skills={['DynamoDB', 'Postgres', 'MySQL', 'Snowflake', 'Apache Spark', 'Redis']} 
          />
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
