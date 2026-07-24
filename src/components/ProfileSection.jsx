import React from 'react';
import { personalInfo } from '../data';
import { FaCalendar, FaEnvelope, FaGithub, FaGraduationCap } from 'react-icons/fa';

const ProfileSection = () => {
  return (
    <section id="about" className="section container profile-section" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center' }}>
      <div className="profile-grid">
        <div className="profile-left">
          <img
            src={personalInfo.profileImage}
            alt={`${personalInfo.name} Profile`}
            className="hero-profile-img"
            onError={(event) => {
              event.currentTarget.src = 'https://via.placeholder.com/320?text=Profile';
            }}
          />
          <h1 className="profile-name">
            {personalInfo.name} <span>|</span> <span className="profile-role">{personalInfo.role}</span>
          </h1>
          <p className="profile-subtitle">{personalInfo.heroSubtitle}</p>

          <div className="hero-links" style={{ justifyContent: 'center' }}>
            <a href="#projects" className="btn-primary">프로젝트 보기</a>
          </div>
        </div>

        <div className="profile-right">
          <h2 className="section-title left-align">About Me</h2>
          <div className="about-paragraphs">
            {personalInfo.about.split('\n\n').map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <div className="personal-details">
            <div className="detail-item">
              <FaCalendar className="detail-icon" />
              <div className="detail-info">
                <strong>Birth</strong>
                <span>{personalInfo.birth}</span>
              </div>
            </div>
            <div className="detail-item">
              <FaEnvelope className="detail-icon" />
              <div className="detail-info">
                <strong>E-Mail</strong>
                <span>{personalInfo.email}</span>
              </div>
            </div>
            <div className="detail-item">
              <FaGithub className="detail-icon" />
              <div className="detail-info">
                <strong>Github</strong>
                <span>
                  <a href={`https://github.com/${personalInfo.github}`} target="_blank" rel="noreferrer" className="detail-link">
                    github.com/{personalInfo.github}
                  </a>
                </span>
              </div>
            </div>
            <div className="detail-item">
              <FaGraduationCap className="detail-icon" />
              <div className="detail-info">
                <strong>Education</strong>
                <span>{personalInfo.education.school} <br /> ({personalInfo.education.period})</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfileSection;
