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
      <p className="section-subheading">문제를 발견하고 구조적으로 해결한 프로젝트 경험입니다.</p>

      <div className="project-grid">
        {projects.map((project) => (
          <article
            key={project.id}
            className={`project-card ${project.featured ? 'project-card--featured' : ''}`}
            onClick={() => setSelectedProject(project)}
          >
            <div className="project-card-image-wrap">
              <img
                src={project.thumbnail}
                alt={project.title}
                className="project-thumb"
                loading="lazy"
                onError={(event) => {
                  event.currentTarget.src = `https://via.placeholder.com/400x250?text=${encodeURIComponent(project.title)}`;
                }}
              />

              {(project.featured || project.award) && (
                <div className="project-badge-overlay">
                  <span className="badge-icon">{project.featured ? '★' : '🏆'}</span>
                  <span className="badge-text">{project.featured ? '대표 프로젝트' : project.award}</span>
                </div>
              )}
            </div>

            <div className="project-info">
              <h3>{project.title}</h3>
              <p className="project-role">{project.role}</p>
              {project.period && <p className="project-period">{project.period}</p>}
              <p className="project-desc">{project.summary}</p>

              {project.github && (
                <div className="project-github-wrap">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="project-github-link"
                    onClick={(event) => event.stopPropagation()}
                  >
                    <FaGithub aria-hidden="true" />
                    <span>{project.github.replace('https://', '')}</span>
                  </a>
                </div>
              )}

              <div className="project-tech">
                {project.techStack.map((tech) => (
                  <span key={tech} className="tech-badge">{tech}</span>
                ))}
              </div>
            </div>
          </article>
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
