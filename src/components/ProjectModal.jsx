import React, { useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import OpenCloset from './project-details/OpenCloset';
import RunnerHigh from './project-details/RunnerHigh';
import SentiLogic from './project-details/SentiLogic';
import Mercenary from './project-details/Mercenary';
import SmartSafety from './project-details/SmartSafety';

const detailComponents = {
  OpenCloset: <OpenCloset />,
  RunnerHigh: <RunnerHigh />,
  SentiLogic: <SentiLogic />,
  Mercenary: <Mercenary />,
  SmartSafety: <SmartSafety />
};

const ProjectModal = ({ project, onClose }) => {
  useEffect(() => {
    if (project) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [project]);

  if (!project) return null;

  const isCustomComponent = typeof project.details === 'string' && project.details.startsWith('CUSTOM_COMPONENT:');
  const componentKey = isCustomComponent ? project.details.split(':')[1] : null;

  return (
    <div className={`modal-overlay ${project ? 'open' : ''}`} onClick={onClose}>
      <div className="modal-content" onClick={(event) => event.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="프로젝트 상세 닫기">&times;</button>
        <h2>{project.title}</h2>
        <p className="project-role" style={{ marginTop: '10px' }}>{project.role}</p>

        <div className="project-tech" style={{ margin: '15px 0' }}>
          {project.techStack.map((tech) => (
            <span key={tech} className="tech-badge">{tech}</span>
          ))}
        </div>

        <div className="project-detail-content">
          {isCustomComponent ? (
            detailComponents[componentKey] || <p>Component not found</p>
          ) : (
            <div className="markdown-body">
              <ReactMarkdown>{project.details}</ReactMarkdown>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
