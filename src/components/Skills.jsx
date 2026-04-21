import React, { useState } from 'react';
import { skills } from '../data';

const Skills = () => {
  const [activeTab, setActiveTab] = useState(skills[0].category);

  const activeGroup = skills.find(g => g.category === activeTab);

  return (
    <section id="skills" className="section skills-section">
      <div className="container">
        <div className="section-label">SKILLS &amp; TOOLS</div>
        <h2 className="section-heading">기술 스택</h2>
        <p className="section-subheading">프로젝트를 통해 직접 사용하고 검증한 기술들입니다.</p>

        {/* Tab buttons */}
        <div className="skills-tabs">
          {skills.map((group) => (
            <button
              key={group.category}
              className={`skills-tab-btn ${activeTab === group.category ? 'active' : ''}`}
              style={activeTab === group.category
                ? { borderColor: group.color, color: group.color, backgroundColor: group.color + '12' }
                : {}
              }
              onClick={() => setActiveTab(group.category)}
            >
              {group.category}
            </button>
          ))}
        </div>

        {/* Skill cards grid */}
        <div className="skills-grid" key={activeTab}>
          {activeGroup && activeGroup.items.map((skill, idx) => (
            <div
              key={skill.name}
              className="skill-card"
              style={{
                '--card-accent': activeGroup.color,
                animationDelay: `${idx * 50}ms`
              }}
            >
              <div className="skill-logo-wrap">
                <img
                  src={skill.logo}
                  alt={skill.name}
                  className="skill-logo-img"
                  loading="lazy"
                />
              </div>
              <span className="skill-name">{skill.name}</span>
            </div>
          ))}
        </div>

        {/* All skills summary row */}
        <div className="all-skills-row">
          {skills.map(group => (
            <div key={group.category} className="all-skills-group">
              <span className="all-skills-category" style={{ color: group.color }}>
                {group.category}
              </span>
              <span className="all-skills-list">
                {group.items.map(i => i.name).join(' · ')}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
