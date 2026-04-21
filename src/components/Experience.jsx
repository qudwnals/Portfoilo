import React, { useState } from 'react';
import { experiences } from '../data';

const typeLabel = {
  "대외 활동": { label: "대외활동", color: "#3b82f6" },
  "공모전": { label: "공모전", color: "#8b5cf6" },
  "해외연수": { label: "해외연수", color: "#10b981" },
  "동아리": { label: "동아리", color: "#f59e0b" },
};

function getBadgeStyle(period) {
  for (const key of Object.keys(typeLabel)) {
    if (period.includes(key)) return typeLabel[key];
  }
  return { label: "활동", color: "#6b7280" };
}

const Experience = () => {
  const [expanded, setExpanded] = useState(null);

  return (
    <section id="experience" className="section exp-section">
      <div className="container">
        <div className="section-label">EXPERIENCE</div>
        <h2 className="section-heading">경력 및 활동</h2>
        <p className="section-subheading">개발 역량을 쌓아온 주요 활동 이력입니다.(클릭 시 상세 내용 확인)</p>

        <div className="timeline">
          {experiences.map((exp, index) => {
            const badge = getBadgeStyle(exp.period);
            const isOpen = expanded === exp.id;
            return (
              <div key={exp.id} className={`timeline-item ${isOpen ? 'open' : ''}`}>
                {/* 왼쪽: 날짜 + 뱃지 */}
                <div className="tl-left">
                  <span className="tl-period">{exp.period.split('(')[0].trim()}</span>
                  <span
                    className="tl-badge"
                    style={{ backgroundColor: badge.color + '18', color: badge.color, borderColor: badge.color + '40' }}
                  >
                    {badge.label}
                  </span>
                </div>

                {/* 가운데: 타임라인 선 */}
                <div className="tl-line-col">
                  <div className="tl-dot" style={{ borderColor: badge.color, backgroundColor: isOpen ? badge.color : '#fff' }} />
                  {index < experiences.length - 1 && <div className="tl-connector" />}
                </div>

                {/* 오른쪽: 내용 */}
                <div className="tl-right">
                  <div className="tl-card" onClick={() => setExpanded(isOpen ? null : exp.id)}>
                    <div className="tl-card-header">
                      <div>
                        <h3 className="tl-title">{exp.title}</h3>
                        <p className="tl-role">{exp.role}</p>
                      </div>
                      <span className="tl-toggle">{isOpen ? '▲' : '▼'}</span>
                    </div>
                    {isOpen && (
                      <ul className="tl-details">
                        {exp.details.map((detail, idx) => (
                          <li key={idx}>{detail}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;
