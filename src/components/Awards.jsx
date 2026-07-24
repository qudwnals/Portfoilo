import React from 'react';
import { awards } from '../data';
import { FaTrophy } from 'react-icons/fa';

const Awards = () => {
  return (
    <section id="awards" className="section container">
      <div className="section-label">AWARDS</div>
      <h2 className="section-heading">수상 이력</h2>
      <p className="section-subheading">도전과 성장의 기록입니다.</p>

      <div className="awards-grid">
        {awards.map((award) => (
          <div key={award.id} className="award-card">
            <div className="award-card-icon">
              <FaTrophy />
            </div>
            <div className="award-card-content">
              <h3 className="award-contest">{award.contest}</h3>
              <div className="award-rank">{award.award}</div>
              <p className="award-org">{award.organization}</p>
              <p className="award-date">{award.date}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Awards;
