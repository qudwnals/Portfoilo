import React, { useState } from 'react';
import { projects } from '../data';
import ProjectModal from './ProjectModal';
import { FaGithub } from 'react-icons/fa';

const ProjectGallery = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="section container">
      <div className="section-label">PROJECT</div>
      <h2 className="section-heading">프로젝트</h2>
      <p className="section-subheading">프로젝트 경험을 소개합니다.</p>

      <div className="project-grid">
        {projects.map((project) => (
          <div
            key={project.id}
            className="project-card"
            onClick={() => setSelectedProject(project)}
          >
            <div className="project-card-image-wrap">
              <img
                src={project.thumbnail}
                alt={project.title}
                className="project-thumb"
                onError={(e) => { e.target.src = `https://via.placeholder.com/400x250?text=${project.title}`; }}
              />

            </div>
            <div className="project-info">
              <h3 style={{ marginBottom: '8px' }}>{project.title}</h3>
              <p className="project-role">{project.role}</p>
              <p className="project-desc">{project.summary}</p>
              
              {project.github && (
                <div style={{ marginBottom: '16px' }}>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '8px',
                      fontSize: '0.85rem',
                      color: 'var(--text-muted)',
                      textDecoration: 'none',
                      transition: 'color 0.2s',
                      wordBreak: 'break-all'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.color = 'var(--primary-color)'}
                    onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-muted)'}
                  >
                    <FaGithub style={{ fontSize: '1.2rem', color: 'var(--text-main)' }} />
                    <span style={{ textDecoration: 'underline' }}>{project.github}</span>
                  </a>
                </div>
              )}

              <div className="project-tech">
                {project.techStack.map(tech => (
                  <span key={tech} className="tech-badge">{tech}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};

export default ProjectGallery;
