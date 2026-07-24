import React from 'react';

const M = ({ children }) => <span className="metric-badge">{children}</span>;
const G = ({ children }) => <span className="metric-badge-green">{children}</span>;

const Mercenary = () => {
  return (
    <div className="project-detail-container">

      {/* 1. Overview */}
      <section className="detail-section">
        <h3 className="section-sub-title">Overview</h3>
        <img src="/projects/mercenary/main.png" alt="Mercenary 메인 화면" className="img-fluid" style={{ marginBottom: '24px' }} />

        <div className="contribution-item">
          <h4 className="contribution-heading">문제 인식</h4>
          <p>
            실제로 축구 용병으로 활동하면서 <strong>"내 주변에서 지금 사람이 부족한 경기"</strong>를 찾는 일이
            매번 단톡방·카페·오픈채팅을 떠도는 비효율이 컸습니다.
            위치 기반 매칭이 없는 상태에서 사용자는 매번 위치/시간/포지션을 텍스트로 비교해야 했습니다.
          </p>
        </div>

        <div className="contribution-item">
          <h4 className="contribution-heading">가설</h4>
          <div className="insight-block">
            위치 기반으로 가까운 매치만 즉시 보여주고, 정원 마감을 동시성 안전하게 관리하면
            매칭 비용을 크게 줄일 수 있다.
          </div>
        </div>

        <div className="contribution-item">
          <h4 className="contribution-heading">기술적 도전 목표</h4>
          <p>
            이전 프로젝트(오픈클로젯)에서 시간·역량 부족으로 시도하지 못했던
            <strong> 분산 락 · 부하 테스트 · AWS 배포 자동화 · 테스트 가능한 시간 추상화</strong>를 적용해 한계점을 극복.
          </p>
        </div>
      </section>

      {/* 2. 핵심 성과 */}
      <section className="detail-section">
        <h3 className="section-sub-title">핵심 성과 (Highlights)</h3>
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '10px' }}>
            <thead>
              <tr style={{ borderBottom: '2px solid var(--border-color)', textAlign: 'left' }}>
                <th style={{ padding: '12px' }}>영역</th>
                <th style={{ padding: '12px' }}>결과</th>
                <th style={{ padding: '12px' }}>측정 조건</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ padding: '12px', borderBottom: '1px solid var(--border-color)' }}><strong>동시성 정합성</strong></td>
                <td style={{ padding: '12px', borderBottom: '1px solid var(--border-color)' }}>
                  9석 매치에 100명 동시 신청 → <M>정확히 9명만 성공</M>, 91명 정상 차단 (<M>정합성 100%</M>)
                </td>
                <td style={{ padding: '12px', borderBottom: '1px solid var(--border-color)', color: 'var(--text-muted)' }}>ExecutorService 32 thread pool, 100 동시 신청</td>
              </tr>
              <tr>
                <td style={{ padding: '12px', borderBottom: '1px solid var(--border-color)' }}><strong>캐시 효과</strong></td>
                <td style={{ padding: '12px', borderBottom: '1px solid var(--border-color)' }}>
                  매치 목록 p95 63.4ms → 22.1ms (<G>65% 개선</G>)<br />
                  매치 상세 p95 90.0ms → 21.5ms (<G>76% 개선</G>)
                </td>
                <td style={{ padding: '12px', borderBottom: '1px solid var(--border-color)', color: 'var(--text-muted)' }}>k6, VU 100, 5,000개 매치, 200명 사용자 토큰</td>
              </tr>
              <tr>
                <td style={{ padding: '12px', borderBottom: '1px solid var(--border-color)' }}><strong>GEO 검색 부하</strong></td>
                <td style={{ padding: '12px', borderBottom: '1px solid var(--border-color)' }}>
                  1만 건 매치 / 강남구 10km 반경, <M>p95 1,815ms</M> (임계값 2,000ms <G>통과</G>, 에러율 <G>0%</G>)
                </td>
                <td style={{ padding: '12px', borderBottom: '1px solid var(--border-color)', color: 'var(--text-muted)' }}>k6, 100 VU, 7,280 iteration</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* 3. Tech Stack */}
      <section className="detail-section">
        <h3 className="section-sub-title">Tech Stack</h3>

        <h4 style={{ marginBottom: '8px', marginTop: '16px' }}>Backend</h4>
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ borderBottom: '2px solid var(--border-color)', textAlign: 'left' }}>
                <th style={{ padding: '10px' }}>구분</th>
                <th style={{ padding: '10px' }}>상세</th>
                <th style={{ padding: '10px' }}>선택 이유</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Language / Framework', 'Java 17, Spring Boot 3.2.5', '풍부한 레퍼런스, 모던 JVM 기능(Records, Pattern Matching) 활용'],
                ['Database', 'MySQL 8.0, Spring Data JPA', '트랜잭션 일관성·관계형 모델 적합, 운영 사례 풍부'],
                ['Cache / 위치 검색', 'Redis (Spring Cache, GEO)', 'GEORADIUS 단일 명령으로 O(log N + M) 반경 검색'],
                ['분산 락', 'Redisson 3.27.0', '멀티 인스턴스 확장 대비, 만료/대기 시간 세밀 제어 가능'],
                ['인증', 'Kakao OAuth 2.0, JJWT 0.11', '국내 사용자 대상, 가입 마찰 최소화'],
                ['외부 통신', 'Spring WebFlux (WebClient)', '카카오 API 호출 시 논블로킹 + 타임아웃 제어'],
                ['테스트', 'JUnit 5, Spring Security Test, H2, k6', '단위/통합 + 부하 테스트까지 일원화'],
                ['인프라', 'Docker, AWS Lightsail, GitHub Actions CI/CD', '1인 개발 비용·운영 부담 최소화'],
              ].map(([구분, 상세, 이유]) => (
                <tr key={구분}>
                  <td style={{ padding: '10px', borderBottom: '1px solid var(--border-color)' }}><strong>{구분}</strong></td>
                  <td style={{ padding: '10px', borderBottom: '1px solid var(--border-color)' }}>{상세}</td>
                  <td style={{ padding: '10px', borderBottom: '1px solid var(--border-color)', color: 'var(--text-muted)' }}>{이유}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h4 style={{ marginBottom: '8px', marginTop: '24px' }}>Frontend</h4>
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ borderBottom: '2px solid var(--border-color)', textAlign: 'left' }}>
                <th style={{ padding: '10px' }}>구분</th>
                <th style={{ padding: '10px' }}>상세</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Language / Framework', 'TypeScript, React 19, Vite'],
                ['라우팅', 'React Router DOM'],
                ['폼 / 유효성 검사', 'React Hook Form, Zod'],
                ['지도', 'Kakao Maps SDK'],
                ['HTTP', 'Axios 1.13.2, Custom fetch wrapper (apiFetch)'],
                ['주소 검색', 'react-daum-postcode 3.2.0 (카카오 우편번호 서비스)'],
              ].map(([구분, 상세]) => (
                <tr key={구분}>
                  <td style={{ padding: '10px', borderBottom: '1px solid var(--border-color)' }}><strong>{구분}</strong></td>
                  <td style={{ padding: '10px', borderBottom: '1px solid var(--border-color)' }}>{상세}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* 4. System Architecture */}
      <section className="detail-section">
        <h3 className="section-sub-title">System Architecture</h3>
        <img src="/projects/mercenary/architecture.png" alt="System Architecture" className="img-fluid" />
        <ul className="detail-list bullet" style={{ marginTop: '16px' }}>
          <li>클라이언트(React/TypeScript) → HTTPS → AWS Lightsail (Docker Compose)</li>
          <li>Spring Boot 애플리케이션이 <strong>Redis(분산 락·캐시)</strong>와 <strong>MySQL</strong>을 함께 운용</li>
          <li>Kakao OAuth 2.0 / Kakao Maps API 외부 연동</li>
          <li><strong>GitHub Actions → Docker Hub → AWS Lightsail</strong> 자동 배포 파이프라인</li>
          <li>모든 통신은 HTTPS 기반으로 암호화</li>
        </ul>
      </section>

      {/* 5. ERD */}
      <section className="detail-section">
        <h3 className="section-sub-title">ERD</h3>
        <img src="/projects/mercenary/erd.png" alt="ERD" className="img-fluid" />
        <ul className="detail-list bullet" style={{ marginTop: '16px' }}>
          <li><strong>members</strong> — Kakao OAuth ID, 닉네임, 선호 포지션, 실력 수준, 매너 점수</li>
          <li><strong>matches</strong> — 주최자, 일시, 장소(위·경도), 상태 <code>RECRUITING / CLOSED</code></li>
          <li><strong>match_position_slots</strong> — 매치별 포지션·정원(required)·현재 인원(filled)</li>
          <li><strong>applications</strong> — 신청자, 신청 포지션, 상태 <code>READY / APPROVED / REJECTED / CANCELED</code></li>
        </ul>
      </section>

      {/* 6. Key Features */}
      <section className="detail-section">
        <h3 className="section-sub-title">Key Features</h3>

        <div className="contribution-item">
          <h4 className="contribution-heading">📌 위치 기반 매치 검색 (Redis GEO)</h4>
          <ul className="detail-list bullet">
            <li>매치 등록 시 위·경도를 Redis GEO 자료구조(<code>GEOADD</code>)에 저장</li>
            <li>사용자가 반경 N km를 지정하면 <M>GEORADIUS 한 번</M>으로 주변 매치 ID·거리 즉시 반환 — <G>O(log N + M)</G></li>
            <li>거리순 정렬 후 카카오 지도에 핀으로 표시</li>
          </ul>
          <pre className="code-block">
            <code>{`# Redis GEO: matches:geo
GEOADD matches:geo {longitude} {latitude} {matchId}
GEORADIUS → [(matchId, distanceKm), ...]`}</code>
          </pre>
        </div>

        <div className="contribution-item">
          <h4 className="contribution-heading">📌 매치 등록</h4>
          <ul className="detail-list bullet">
            <li>제목, 일시, 포지션별 모집 인원, 장소(카카오 지도 검색)를 입력해 매치 생성</li>
            <li>GK·CB·LB·RB·CDM·CM·CAM·LW·RW·ST <strong>포지션 단위로 정원을 개별 설정</strong></li>
          </ul>
          <img src="/projects/mercenary/매치등록.png" alt="매치 등록 화면" className="img-fluid" style={{ marginTop: '12px' }} />
        </div>

        <div className="contribution-item">
          <h4 className="contribution-heading">📌 매치 신청 / 승인 / 거절</h4>
          <ul className="detail-list bullet">
            <li>용병 신청 상태 머신: <code>READY</code> → <M>APPROVED</M> / <code>REJECTED</code> / <code>CANCELLED</code></li>
            <li>지도 핀 클릭 → 포지션 잔여석 확인 → 원하는 포지션 선택 후 신청</li>
            <li>주최자 마이페이지에서 신청자 목록 확인 후 개별 승인·거절</li>
            <li>정원 마감 시 <code>MatchStatus</code>가 자동으로 <M>CLOSED</M>로 전환</li>
          </ul>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginTop: '12px' }}>
            <div>
              <p className="caption">매치 신청 (포지션 선택)</p>
              <img src="/projects/mercenary/매치신청.png" alt="매치 신청 화면" className="img-fluid" />
            </div>
            <div>
              <p className="caption">주최자 신청 승인 / 거절 (마이페이지)</p>
              <img src="/projects/mercenary/매치승인.png" alt="매치 승인 화면" className="img-fluid" />
            </div>
          </div>
        </div>

        <div className="contribution-item">
          <h4 className="contribution-heading">📌 Redis 캐싱</h4>
          <ul className="detail-list bullet">
            <li>목록 <code>GET /api/matches</code>, 상세 <code>GET /api/matches/{'{id}'}</code>에 <code>@Cacheable</code> 적용</li>
            <li>생성·수정·삭제 시 <code>@CacheEvict</code>로 즉시 무효화 → <strong>조회 성능과 데이터 정합성 동시 확보</strong></li>
            <li><strong>현재 한계 인지:</strong> 반경·날짜 조합 키가 많아 evict 누락 가능성이 있어, 짧은 TTL(목록 10분 / 상세 1시간)을 병행해 stale 위험 제한</li>
          </ul>
        </div>

        <div className="contribution-item">
          <h4 className="contribution-heading">📌 만료 매치 자동 정리</h4>
          <ul className="detail-list bullet">
            <li><code>ExpiredMatchCleanupScheduler</code>가 <M>10분 주기 cron</M>으로 경기 일시가 지난 매치를 일괄 삭제</li>
            <li>Redis GEO 데이터도 함께 제거하여 위치 데이터 누적 방지</li>
            <li>연관된 신청(applications)도 함께 <strong>CASCADE 삭제</strong> + Redis 캐시 동시 무효화</li>
          </ul>
        </div>
      </section>

      {/* 7. Problem Solving */}
      <section className="detail-section">
        <h3 className="section-sub-title">Problem Solving</h3>

        <div className="issue-card">
          <h4 className="issue-title">✅ Issue 1: 동시 신청으로 인한 정원 초과</h4>
          <ul className="issue-details">
            <li>
              <strong>상황:</strong> 9자리 매치에 100명이 동시에 신청하면 <code>currentPlayerCount</code>를
              read → check → write 사이의 <M>Race Condition</M>으로 10명 이상이 승인될 수 있음.
            </li>
            <li>
              <strong style={{ color: 'var(--text-muted)' }}>시도 1 — JPA 낙관적 락 (포기):</strong>{' '}
              <code>@Version</code>으로 시도했으나 충돌 시 <code>OptimisticLockException</code>이 빈번해
              재시도 로직과 UX 처리 비용이 커지고, 인기 매치일수록 충돌율이 높아짐.
            </li>
            <li>
              <strong style={{ color: 'var(--text-muted)' }}>시도 2 — 비관적 락 (<code>SELECT ... FOR UPDATE</code>) 검토:</strong>{' '}
              DB 단일 인스턴스 환경에서는 동작하지만, 멀티 인스턴스 확장 시 DB 부하 집중 우려 및 락 키 단위 세밀 제어 어려움.
            </li>
          </ul>

          <div className="insight-block" style={{ margin: '16px 0' }}>
            <strong>선택 — Redisson 분산 락:</strong> 트랜잭션 시작 전에 락을 획득해 한 번에 한 스레드만 신청
            로직을 실행. 락-트랜잭션 경계를 분리해 락 해제와 커밋 시점이 꼬이지 않도록 설계.
          </div>

          <pre className="code-block">
            <code>{`// ApplicationService.applyMatch()
public void applyMatch(Long matchId, Long userId) {
    executeWithMatchLock(matchId,
        () -> transactionTemplate.executeWithoutResult(
            status -> processApplication(matchId, userId)));
}`}</code>
          </pre>

          <ul className="issue-details" style={{ marginTop: '12px' }}>
            <li>
              <strong>검증:</strong> ExecutorService 스레드 풀 32개로 100 스레드 동시 실행 —
              정원 10명(주최자 1 + 모집 9)인 매치에 <M>정확히 9명만 신청 성공</M>.
            </li>
          </ul>
          <pre className="code-block">
            <code>{`assertThat(successCount.get()).isEqualTo(9);         // ✅ 성공
assertThat(applicationRepository.count()).isEqualTo(9);
assertThat(updatedMatch.getCurrentPlayerCount()).isEqualTo(10); // 주최자 1 + 신청자 9`}</code>
          </pre>

          <p className="caption" style={{ marginTop: '16px' }}>동시성 테스트 결과 — 신청 성공 <span className="metric-badge">9</span> / 차단 <span className="metric-badge">91</span> (PASS)</p>
          <img src="/projects/mercenary/동시성테스트로그.png" alt="동시성 테스트 콘솔 로그" className="img-fluid" />

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginTop: '16px' }}>
            <div>
              <p className="caption">k6 대시보드 — 전체 요청 <span className="metric-badge">100건</span>, P95 1.12s</p>
              <img src="/projects/mercenary/동시성테스트1.png" alt="k6 동시성 테스트 대시보드 1" className="img-fluid" />
            </div>
            <div>
              <p className="caption">Redisson 분산 락 검증 — 성공 <span className="metric-badge-green">9</span> / 차단 <span className="metric-badge">91</span></p>
              <img src="/projects/mercenary/동시성테스트2.png" alt="k6 동시성 테스트 대시보드 2" className="img-fluid" />
            </div>
          </div>

          <ul className="issue-details" style={{ marginTop: '16px' }}>
            <li><strong>한계:</strong> 단일 Redis 인스턴스 장애 시 락이 SPOF가 됨 → Redis Sentinel/Cluster 또는 Redlock 검토</li>
            <li><strong>한계:</strong> 대기 5초 / 점유 3초는 측정이 아닌 경험치 → 실 트래픽 데이터 기반 재조정 필요</li>
          </ul>
        </div>

        <div className="issue-card" style={{ marginTop: '24px' }}>
          <h4 className="issue-title">✅ Issue 2: 테스트에서 시간 의존성 제거</h4>
          <ul className="issue-details">
            <li>
              <strong>상황:</strong> <code>LocalDateTime.now()</code>를 서비스 안에서 직접 호출하면
              만료 매치 필터링 테스트가 <M>시스템 시각에 종속</M>되어 실패 재현이 어려움.
            </li>
          </ul>

          <div className="insight-block" style={{ margin: '16px 0' }}>
            <strong>선택 — Clock Bean 주입:</strong> <code>TimeConfig</code>에 <code>Clock</code> 빈을
            등록하고 서비스에 주입. 테스트는 <code>Clock.fixed(...)</code>로 교체해 <strong>결정론적 검증</strong> 확보.
          </div>

          <pre className="code-block">
            <code>{`// 서비스
private LocalDateTime currentDateTime() {
    return LocalDateTime.now(appClock); // Clock 주입
}

// 테스트 — 시각을 고정해 언제나 동일한 결과 보장
Clock fixedClock = Clock.fixed(
    Instant.parse("2025-06-01T10:00:00Z"),
    ZoneId.of("Asia/Seoul"));`}</code>
          </pre>
          <ul className="issue-details" style={{ marginTop: '12px' }}>
            <li><G>효과:</G> 만료 매치 cleanup, 매치 모집 마감 시점 등 시간 의존 로직을 결정론적으로 검증</li>
            <li><G>효과:</G> 향후 휴일/이벤트 시간 정책 추가 시에도 동일 패턴으로 확장 가능</li>
          </ul>
        </div>
      </section>

      {/* 8. Performance Testing */}
      <section className="detail-section">
        <h3 className="section-sub-title">Performance Testing</h3>

        {/* 캐시 효과 */}
        <div className="contribution-item">
          <h4 className="contribution-heading">캐시 효과 비교 (k6, p95)</h4>
          <p className="caption" style={{ textAlign: 'left', fontStyle: 'normal', marginBottom: '8px' }}>
            5,000개 매치 사전 생성, 200명 토큰 발급, 100 VU, 30초 워밍업 + 2분 측정 / 에러율 <G>0%</G>, 체크 59,264건 전부 <G>200 OK</G>
          </p>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '10px' }}>
              <thead>
                <tr style={{ borderBottom: '2px solid var(--border-color)', textAlign: 'left' }}>
                  <th style={{ padding: '12px' }}>구분</th>
                  <th style={{ padding: '12px' }}>Miss (DB)</th>
                  <th style={{ padding: '12px' }}>Hit (Redis)</th>
                  <th style={{ padding: '12px' }}>개선율</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={{ padding: '12px', borderBottom: '1px solid var(--border-color)' }}>매치 목록 조회</td>
                  <td style={{ padding: '12px', borderBottom: '1px solid var(--border-color)', color: 'var(--text-muted)' }}>63.4 ms</td>
                  <td style={{ padding: '12px', borderBottom: '1px solid var(--border-color)' }}><M>22.1 ms</M></td>
                  <td style={{ padding: '12px', borderBottom: '1px solid var(--border-color)' }}><G>65% ↓</G></td>
                </tr>
                <tr>
                  <td style={{ padding: '12px', borderBottom: '1px solid var(--border-color)' }}>매치 상세 조회</td>
                  <td style={{ padding: '12px', borderBottom: '1px solid var(--border-color)', color: 'var(--text-muted)' }}>90.0 ms</td>
                  <td style={{ padding: '12px', borderBottom: '1px solid var(--border-color)' }}><M>21.5 ms</M></td>
                  <td style={{ padding: '12px', borderBottom: '1px solid var(--border-color)' }}><G>76% ↓</G></td>
                </tr>
              </tbody>
            </table>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginTop: '20px' }}>
            <div>
              <p className="caption">캐시 미적용 — p95 <span className="metric-badge">76.4ms</span>, 총 8,855건</p>
              <img src="/projects/mercenary/캐시효과_미적용.png" alt="캐시 미적용 Grafana 대시보드" className="img-fluid" />
            </div>
            <div>
              <p className="caption">캐시 적용 — p95 <span className="metric-badge-green">21.3ms</span>, 총 23,487건</p>
              <img src="/projects/mercenary/캐시효과_적용.png" alt="캐시 적용 Grafana 대시보드" className="img-fluid" />
            </div>
          </div>

          <p className="caption" style={{ marginTop: '20px' }}>k6 콘솔 결과 — Miss/Hit p95 수치 비교</p>
          <img src="/projects/mercenary/캐시효과테스트로그.png" alt="캐시 효과 테스트 로그" className="img-fluid" />
          <img src="/projects/mercenary/캐시효과테스트로그2.png" alt="캐시 효과 테스트 상세 로그" className="img-fluid" style={{ marginTop: '12px' }} />
        </div>

        {/* GEO 부하 테스트 */}
        <div className="contribution-item" style={{ marginTop: '40px' }}>
          <h4 className="contribution-heading">Redis GEO 부하 테스트</h4>
          <p className="caption" style={{ textAlign: 'left', fontStyle: 'normal', marginBottom: '8px' }}>
            강남구 중심 10km 반경 / 1만 건 매치 / 100 VU / 4분 30초
          </p>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '10px' }}>
              <thead>
                <tr style={{ borderBottom: '2px solid var(--border-color)', textAlign: 'left' }}>
                  <th style={{ padding: '12px' }}>항목</th>
                  <th style={{ padding: '12px' }}>수치</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['평균 응답시간', '727 ms', false],
                  ['중앙값 (p50)', '699 ms', false],
                  ['p95', '1,815 ms', true],
                  ['최댓값', '4,580 ms', false],
                  ['에러율', '0.00%', true],
                  ['총 iteration', '7,280', false],
                  ['초당 처리량', '26.9 iter/s', false],
                ].map(([항목, 수치, highlight]) => (
                  <tr key={항목}>
                    <td style={{ padding: '12px', borderBottom: '1px solid var(--border-color)' }}><strong>{항목}</strong></td>
                    <td style={{ padding: '12px', borderBottom: '1px solid var(--border-color)' }}>
                      {highlight ? <M>{수치}</M> : 수치}
                      {항목 === 'p95' && <> <G>임계값 2,000ms ✓</G></>}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="caption" style={{ marginTop: '20px' }}>k6 콘솔 로그 — GEO 검색 응답시간 <span className="metric-badge">p95 1,815ms</span>, 에러율 <span className="metric-badge-green">0%</span></p>
          <img src="/projects/mercenary/Redis_GEO로그.png" alt="Redis GEO 부하 테스트 로그" className="img-fluid" />
          <img src="/projects/mercenary/Redis_GEO로그2.png" alt="Redis GEO 부하 테스트 상세 로그" className="img-fluid" style={{ marginTop: '12px' }} />

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginTop: '20px' }}>
            <div>
              <p className="caption">Grafana 대시보드 — 부하 증가 구간 (VU 95, 969ms)</p>
              <img src="/projects/mercenary/Redis_GEO_test.png" alt="Redis GEO 테스트 대시보드 1" className="img-fluid" />
            </div>
            <div>
              <p className="caption">Grafana 대시보드 — 안정 구간 (VU 3, 1.79s)</p>
              <img src="/projects/mercenary/Redis_GEO_test2.png" alt="Redis GEO 테스트 대시보드 2" className="img-fluid" />
            </div>
          </div>

          <div className="contribution-item" style={{ marginTop: '20px' }}>
            <h4 className="contribution-heading" style={{ fontSize: '0.95rem' }}>해석 & 개선 후보</h4>
            <ul className="detail-list bullet">
              <li>1만 건 매치 + 동시 100 VU 환경에서 <M>p95 1.8s</M>는 임계 통과지만 추가 최적화 여지 존재</li>
              <li><code>GEORADIUS</code> 결과 + 매치 메타 fetch를 <strong>Redis 파이프라이닝/MGET</strong>으로 묶기</li>
              <li>결과 COUNT 제한 + 무한 스크롤로 클라이언트 부담 분산</li>
              <li>Redis 7+의 <code>GEOSEARCH BYBOX/BYRADIUS</code>로 마이그레이션 (더 풍부한 제어 옵션)</li>
              <li>매치 메타 캐시를 geohash 셀 단위 키로 분할해 fan-out 감소</li>
            </ul>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Mercenary;
