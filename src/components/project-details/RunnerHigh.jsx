import React from 'react';

const M = ({ children }) => <span className="metric-badge">{children}</span>;
const G = ({ children }) => <span className="metric-badge-green">{children}</span>;

const RunnerHigh = () => {
  return (
    <div className="project-detail-container">

      <div className="detail-metrics-grid">
        <div className="detail-metric-card">
          <span className="detail-metric-value">3가지</span>
          <span className="detail-metric-label">맞춤형 매칭 로직</span>
        </div>
        <div className="detail-metric-card">
          <span className="detail-metric-value">최우수상 · 은상</span>
          <span className="detail-metric-label">캡스톤 경진대회 수상</span>
        </div>
        <div className="detail-metric-card">
          <span className="detail-metric-value">건강 데이터</span>
          <span className="detail-metric-label">심박수·케이던스 기반</span>
        </div>
      </div>

      {/* 1. Overview */}
      <section className="detail-section">
        <h3 className="section-sub-title">Overview</h3>
        <p><strong>건강 데이터 기반 맞춤형 러닝 크루 매칭 및 지역 갈등 해소 앱</strong></p>
        <img src="/projects/runners-high/thumbnail-intro.png" alt="Runner's High Overview" className="img-fluid" style={{ marginBottom: '20px' }} />

        <div className="contribution-item">
          <h4 className="contribution-heading">배경 및 문제점 (Problem)</h4>
          <p>
            기존의 러닝 크루 문화는 카카오톡 오픈채팅이나 네이버 밴드 등을 통해 <M>정량적인 기준 없이 인원을 모집</M>하는 방식이 주를 이뤘습니다.
            이는 참여자의 실력 격차로 인한 훈련 효율 저하를 야기할 뿐만 아니라, 무분별한 대규모 인원 집합으로 소음 및 통행 방해 등 <strong>지역 사회와의 갈등</strong>을 초래하는 원인이 되었습니다.
          </p>
        </div>

        <div className="contribution-item">
          <h4 className="contribution-heading">상세 매칭 알고리즘 (Logic)</h4>
          <ul className="detail-list bullet">
            <li><M>스탭업 (Step-Up / 2:2 매칭):</M> 상위 레벨 멘토와 멘티를 1:1 비율로 매칭하여, 실질적인 <strong>기량 향상</strong>에 중점을 둔 고강도 성장형 구성입니다.</li>
            <li><M>러닝 커넥트 (Running Connect / 동급 4인):</M> 유사한 퍼포먼스 데이터를 가진 러너 4명을 매칭하여, 서로 건전한 경쟁(외부 자극)을 유도하고 러닝의 즐거움을 극대화하는 구성입니다.</li>
            <li><M>러닝 메이트 (Running Mate / 1:3 매칭):</M> 리더 1명과 팔로워 3명을 매칭하여, 멘토의 부담은 줄이되 그룹 전체의 <strong>안정적인 완주와 동기부여</strong>를 균형 있게 달성하는 구성입니다.</li>
          </ul>
        </div>

        <div className="contribution-item">
          <h4 className="contribution-heading">기대 효과 (Impact)</h4>
          <div className="insight-block">
            각 그룹 특성에 맞는 <strong>'데이터 기반 맞춤형 미션'</strong>을 자동 생성하여, 대규모 크루 없이도 체계적인 훈련 + 지역 주민과의 갈등 해소를 동시에 달성.
          </div>
        </div>
      </section>

      {/* 2. Tech Stack */}
      <section className="detail-section">
        <h3 className="section-sub-title">Tech Stack & Architecture</h3>
        <p className="caption">라즈베리파이 기반 독립 서버 인프라 및 Nest.js/SwiftUI 시스템 아키텍처</p>
        <img src="/projects/runners-high/tech-stack-architecture.png" alt="Tech Stack Architecture" className="img-fluid" />
      </section>

      {/* 3. Key Features */}
      <section className="detail-section">
        <h3 className="section-sub-title">Key Features & Logic</h3>
        <p className="caption">사용자의 목적과 실력에 따른 3가지 맞춤형 매칭 로직</p>
        <img src="/projects/runners-high/logic-matching.png" alt="Matching Logic" className="img-fluid" />
      </section>

      {/* 4. Results & Demo */}
      <section className="detail-section">
        <h3 className="section-sub-title">Result & Demo</h3>
        <img src="/projects/runners-high/app-screens.png" alt="App Screens" className="img-fluid" />
      </section>

      {/* 5. Contributions */}
      <section className="detail-section">
        <h3 className="section-sub-title">Contributions</h3>

        <div className="contribution-item">
          <h4 className="contribution-heading">📌 서비스 기획 및 핵심 로직 설계</h4>
          <ul className="detail-list bullet">
            <li><strong>데이터 기반 비즈니스 모델 수립:</strong> <M>심박수·케이던스</M> 기반 매칭 아이디어 제안 및 <M>3가지 알고리즘</M> 설계.</li>
            <li><strong>요구사항 명세:</strong> 사용자 시나리오(User Flow)에 맞춘 데이터 구조 및 API 명세 수립.</li>
          </ul>
        </div>

        <div className="contribution-item">
          <h4 className="contribution-heading">📌 백엔드 데이터 모델링 및 아키텍처 구축</h4>
          <ul className="detail-list bullet">
            <li><strong>RDBMS 스키마 설계:</strong> MariaDB와 Nest.js(TypeORM) 환경에서 User, Crew, Post 등 핵심 엔티티 <strong>정규화 설계</strong>.</li>
            <li><strong>개발 환경 표준화:</strong> 초기 API 아키텍처 및 베이스 코드를 구축하여 <G>팀 협업 효율성 강화</G>.</li>
          </ul>
        </div>

        <div className="contribution-item">
          <h4 className="contribution-heading">📌 클라이언트 구현 및 데이터 시각화</h4>
          <ul className="detail-list bullet">
            <li><strong>WatchOS 수집 인터페이스:</strong> <strong>SwiftUI</strong>를 활용한 Apple Watch 앱 프로토타입 및 헬스 데이터 수집 UX 구현.</li>
            <li><strong>Web 데이터 시각화:</strong> React 기반 랭킹 페이지 및 백엔드 API 연동 데이터 시각화.</li>
          </ul>
        </div>
      </section>

      {/* 6. Awards */}
      <section className="detail-section">
        <h3 className="section-sub-title">Awards</h3>
        <div style={{ display: 'flex', gap: '12px', marginBottom: '20px' }}>
          <span className="metric-badge" style={{ fontSize: '1rem', padding: '6px 14px' }}>🏆 최우수상 — 동의대학교 총장상</span>
          <span className="metric-badge-green" style={{ fontSize: '1rem', padding: '6px 14px' }}>🥈 은상 — 국립부경대학교 소프트웨어융합혁신원장상</span>
        </div>
        <div className="img-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
          <div>
            <p className="caption">최우수상 (동의대학교 총장상)</p>
            <img src="/projects/runners-high/award-grand.png" alt="Grand Prize" className="img-fluid" />
          </div>
          <div>
            <p className="caption">은상 (국립부경대학교 소프트웨어융합혁신원장상)</p>
            <img src="/projects/runners-high/award-silver.jpg" alt="Silver Prize" className="img-fluid" />
          </div>
        </div>
      </section>

    </div>
  );
};

export default RunnerHigh;
