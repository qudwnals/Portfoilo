import React from 'react';

const OpenCloset = () => {
  return (
    <div className="project-detail-container">
      <img src="/projects/open-closet/main-mockup.png" alt="Overview Mockup" className="img-fluid" />
      <img src='/projects/open-closet/market-validation.png' alt='market-validation' className="img-fluid" />
      {/* 1. Overview */}
      <section className="detail-section">
        <h3 className="section-sub-title">Overview</h3>
        <ul className="detail-list">
          <li><strong>배경:</strong> 패스트 패션으로 인한 환경 오염(연간 의류 폐기물 10만 톤) 및 고가 의류 구매 부담 해결.</li>
          <li><strong>목표:</strong> 사용자 간 직접 대여(P2P)를 통해 자원 순환을 돕고 합리적인 패션 소비 문화를 조성.</li>
          <li><strong>시장 검증:</strong> 대학생 30명 대상 설문 결과, 87.5%가 의류 대여를 통한 수익 창출 및 문제 해결 가능성에 긍정적 답변 확인</li>
        </ul>

      </section>

      {/* 2. Participants */}
      <section className="detail-section">
        <h3 className="section-sub-title">Participants</h3>
        <ul className="detail-list bullet">
          <li>총 4명 팀 프로젝트</li>
          <li>본인 역할: <strong>백엔드 서버 전체 설계 및 개발 담당</strong></li>
        </ul>
      </section>

      {/* 3. Architecture */}
      <section className="detail-section">
        <h3 className="section-sub-title">Architecture</h3>
        <img src="/projects/open-closet/architecture.png" alt="Architecture" className="img-fluid mb-4" />
        <ul className="detail-list bullet">
          <li>React 기반 클라이언트와 Spring Boot API 서버로 구성된 구조</li>
          <li>Docker 컨테이너 환경에서 MariaDB와 이미지 저장소를 분리하여 관리</li>
        </ul>
      </section>

      {/* 4. UserFlow */}
      <section className="detail-section">
        <h3 className="section-sub-title">UserFlow</h3>
        <img src="/projects/open-closet/user-flow.png" alt="UserFlow" className="img-fluid" />
      </section>

      {/* 5. Contributions */}
      <section className="detail-section">
        <h3 className="section-sub-title">Contributions</h3>

        <div className="contribution-item">
          <h4 className="contribution-heading">📌 JWT 기반의 안정적인 인증/인가 시스템 구축</h4>
          <ul className="detail-list bullet">
            <li>JWT 기반 Access/Refresh Token 발급 및 Spring Security를 활용한 단방향 암호화(BCrypt) 적용.</li>
            <li><strong>서버 세션 제거 → 확장성 확보</strong></li>
          </ul>
        </div>

        <div className="contribution-item">
          <h4 className="contribution-heading">📌 DB 아키텍처 설계</h4>
          <img src="/projects/open-closet/erd.jpg" alt="DB ERD" className="img-fluid mt-2" />
        </div>

        <div className="contribution-item">
          <h4 className="contribution-heading">📌 동적 쿼리를 활용한 다중 조건 검색 및 지역 필터링 최적화</h4>
          <ul className="detail-list bullet mb-4">
            <li>제목 / 설명 / 사이즈 / 지역 조건 검색 구현</li>
            <li>JPQL Boolean Logic 기반 동적 쿼리 설계</li>
            <li><strong>개선:</strong> if-else 분기 제거, 단일 쿼리 구조로 통합</li>
            <li><strong>성과:</strong> DB 호출 횟수 1회로 감소, 코드 유지보수성 향상</li>
          </ul>
          <img src="/projects/open-closet/filtering.png" alt="Filtering Comparison" className="img-fluid" />
          <p className="caption">*동일한 검색 내용이지만 주소 동에 맞게 필터링되는 결과*</p>
        </div>
      </section>

      {/* 6. Problem Solving */}
      <section className="detail-section">
        <h3 className="section-sub-title">Problem Solving</h3>

        <div className="issue-card">
          <h4 className="issue-title">✅ Issue 1: 실시간 GPS 수집에 따른 프라이버시 및 리소스 소모 문제</h4>
          <ul className="issue-details">
            <li><strong>Analysis:</strong> 사용자들은 실시간 위치 공유보다 실제 생활 반경 내 거래를 선호하며, 잦은 GPS 호출은 배터리 소모와 거부감을 유발함.</li>
            <li><strong>Solution:</strong> 가입 시 등록한 '행정동' 정보를 활용한 정적 위치 필터링(Static Location Filtering) 방식으로 전환.</li>
            <li><strong>Result:</strong> 개인정보 보호 수준을 높이고 앱 진입 속도를 향상하여 사용자 경험 최적화.</li>
            <li><strong>기술적 부채 해결 계획:</strong> 추후 행정 구역 경계 문제를 해결하기 위해, 저장된 주소를 좌표로 변환하여 DB단에서 반경 검색을 수행하는 고도화 계획 수립.</li>
          </ul>
        </div>

        <div className="issue-card mt-4">
          <h4 className="issue-title">✅ Issue 2: 검색 필터 조합 증가에 따른 코드 복잡도(Combinatorial Explosion)</h4>
          <ul className="issue-details mb-4">
            <li><strong>Analysis:</strong> 제목, 내용, 사이즈 등 다중 조건 검색 시 if-else 분기문이 기하급수적으로 늘어 유지보수가 어려워짐.</li>
            <li><strong>Solution:</strong> JPQL의 Boolean Logic(`:param IS NULL OR...`)을 적용하여 단일 쿼리로 통합 설계.</li>
          </ul>

          <pre className="code-block">
            <code>
              {`@Query("SELECT b FROM Board b " +
       "WHERE (:title IS NULL OR LOWER(b.title) LIKE LOWER(CONCAT('%', :title, '%'))) " +
       "AND (:description IS NULL OR LOWER(b.description) LIKE LOWER(CONCAT('%', :description, '%'))) " +
       "AND (:size IS NULL OR b.size = :size) " +
       "ORDER BY b.createdAt DESC")
List<Board> searchBoards(
       @Param("title") String title,
       @Param("description") String description,
       @Param("size") String size
);`}
            </code>
          </pre>

          <ul className="issue-details mt-4">
            <li><strong>Result:</strong> DB 호출 횟수를 1회로 최적화하고 코드 가독성 및 유지보수성 비약적 향상</li>
          </ul>
        </div>
      </section>

    </div>
  );
};

export default OpenCloset;