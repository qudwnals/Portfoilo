import React from 'react';
import { certifications } from '../data';
import { FaCertificate } from 'react-icons/fa';

const Certifications = () => {
  return (
    <section id="certifications" className="section container">
      <div className="section-label">CERTIFICATIONS</div>
      <h2 className="section-heading">자격증</h2>
      <p className="section-subheading">개발 역량을 객관적으로 확인한 자격입니다.</p>

      <div className="awards-grid certifications-grid">
        {certifications.map((certification) => (
          <article key={certification.id} className="award-card certification-card">
            <div className="award-card-icon">
              <FaCertificate />
            </div>
            <div className="award-card-content">
              <h3 className="award-contest">{certification.name}</h3>
              <div className="award-rank">합격</div>
              <p className="award-org">{certification.issuer}</p>
              <p className="award-date">{certification.date}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
