import React from 'react';
import { awards } from '../data';
import { FaTrophy } from 'react-icons/fa';
import Certifications from './Certifications';

const Awards = () => {
  return (
    <section id="awards" className="section container">
      <div className="section-label">CREDENTIALS</div>
      <h2 className="section-heading">수상 및 자격증</h2>
      <p className="section-subheading">프로젝트와 학습을 통해 쌓은 주요 성과와 자격입니다.</p>

      <div className="credentials-grid">
        <div className="credentials-column">
          <h3 className="credentials-column-title">
            <FaTrophy aria-hidden="true" />
            <span>수상 이력</span>
          </h3>
          <div className="credentials-card-list">
            {awards.map((award) => (
              <article key={award.id} className="award-card">
                <div className="award-card-icon">
                  <FaTrophy aria-hidden="true" />
                </div>
                <div className="award-card-content">
                  <h4 className="award-contest">{award.contest}</h4>
                  <div className="award-rank">{award.award}</div>
                  <p className="award-org">{award.organization}</p>
                  <p className="award-date">{award.date}</p>
                </div>
              </article>
            ))}
          </div>
        </div>

        <Certifications />
      </div>
    </section>
  );
};

export default Awards;
