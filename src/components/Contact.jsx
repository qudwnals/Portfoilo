import React from 'react';
import { personalInfo } from '../data';
import { FaEnvelope, FaGithub, FaPen } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="contact-section container">
      <h2 className="section-title">Contact</h2>
      <p style={{ color: 'var(--text-muted)' }}>새로운 기회를 환영합니다. 자유롭게 연락주세요!</p>
      
      <div className="contact-links">
        <a href={`mailto:${personalInfo.email}`} className="contact-item">
          <FaEnvelope className="contact-icon" />
          <span>{personalInfo.email}</span>
        </a>
        
        <a href={`https://github.com/${personalInfo.github}`} target="_blank" rel="noreferrer" className="contact-item">
          <FaGithub className="contact-icon" />
          <span>github.com/{personalInfo.github}</span>
        </a>

        {personalInfo.velog && (
          <a href={personalInfo.velog} target="_blank" rel="noreferrer" className="contact-item">
            <FaPen className="contact-icon" />
            <span>Blog</span>
          </a>
        )}
      </div>
    </section>
  );
};

export default Contact;
