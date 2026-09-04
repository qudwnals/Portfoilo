import React from 'react';
import { certifications } from '../data';
import { FaCertificate } from 'react-icons/fa';

const Certifications = () => {
  return (
    <div className="credentials-column">
      <h3 className="credentials-column-title">
        <FaCertificate aria-hidden="true" />
        <span>자격증</span>
      </h3>
      <div className="credentials-card-list">
        {certifications.map((certification) => (
          <article key={certification.id} className="award-card certification-card">
            <div className="award-card-icon">
              <FaCertificate aria-hidden="true" />
            </div>
            <div className="award-card-content">
              <h4 className="award-contest">{certification.name}</h4>
              <div className="award-rank">합격</div>
              <p className="award-org">{certification.issuer}</p>
              <p className="award-date">{certification.date}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Certifications;
