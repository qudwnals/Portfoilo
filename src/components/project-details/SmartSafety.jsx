import React from 'react';

const M = ({ children }) => <span className="metric-badge">{children}</span>;
const G = ({ children }) => <span className="metric-badge-green">{children}</span>;

const SmartSafety = () => {
  return (
    <div className="project-detail-container">
      <section className="detail-section">
        <h3 className="section-sub-title">Overview</h3>
        <img
          src="/projects/smart-safety/dashboard.png"
          alt="다중 CCTV 영상과 AI 쓰러짐 이벤트를 표시하는 스마트 안전 관제 대시보드"
          className="img-fluid"
        />
        <p className="detail-lead">
          RTSP 영상에서 AI가 위험 행동을 탐지하면 MQTT로 백엔드에 전달하고,
          웹 대시보드와 Android 푸시까지 연결하는 End-to-End 안전 관제 서비스입니다.
        </p>

        <div className="detail-metrics-grid">
          <div className="detail-metric-card">
            <span className="detail-metric-value">38.1초 → 0.8초</span>
            <span className="detail-metric-label">MQTT 지연 트러블슈팅</span>
          </div>
          <div className="detail-metric-card">
            <span className="detail-metric-value">2ms</span>
            <span className="detail-metric-label">Backend → Frontend STOMP</span>
          </div>
          <div className="detail-metric-card">
            <span className="detail-metric-value">Web + Android</span>
            <span className="detail-metric-label">실시간 관제 채널</span>
          </div>
          <div className="detail-metric-card">
            <span className="detail-metric-value">QoS 1 / QoS 0</span>
            <span className="detail-metric-label">이벤트·오버레이 분리</span>
          </div>
        </div>

        <div className="project-source-links">
          <a href="https://github.com/strangeRookies/back" target="_blank" rel="noreferrer">Backend</a>
          <a href="https://github.com/strangeRookies/front" target="_blank" rel="noreferrer">Frontend</a>
          <a href="https://github.com/strangeRookies/ai" target="_blank" rel="noreferrer">AI</a>
        </div>
      </section>

      <section className="detail-section">
        <h3 className="section-sub-title">My Contributions</h3>
        <div className="contribution-item">
          <h4 className="contribution-heading">인증·회원가입과 관할 기관 자동 매칭</h4>
          <ul className="detail-list bullet">
            <li>JWT Access Token과 HttpOnly Refresh Cookie, Redis TTL을 조합한 인증 흐름 구현</li>
            <li>로그인 실패 횟수 제한, SMS 인증 토큰 소비, 역할별 접근 제어로 인증 경계 강화</li>
            <li>설치 주소를 기준으로 관할 소방서·119안전센터를 자동 조회해 가입 데이터와 안전 관제 도메인을 연결</li>
          </ul>
        </div>

        <div className="contribution-item">
          <h4 className="contribution-heading">실시간 이벤트 중계와 오버레이 동기화</h4>
          <ul className="detail-list bullet">
            <li>AI 위험 이벤트를 MQTT로 수신하고 비동기 저장 후 STOMP 대상 토픽으로 라우팅</li>
            <li>eventId 중복 수신, 후속 클립 이벤트, 늦게 도착한 오버레이를 서버와 클라이언트 양쪽에서 방어</li>
            <li>카메라별 최신 timestamp와 2초 TTL을 사용해 지나간 프레임의 Bounding Box가 남지 않도록 처리</li>
          </ul>
        </div>

        <div className="contribution-item">
          <h4 className="contribution-heading">Capacitor Android와 FCM 푸시</h4>
          <ul className="detail-list bullet">
            <li>React 웹을 Capacitor Android 앱으로 확장하고 위험 알림 채널 및 권한 흐름 구현</li>
            <li>DB 커밋 이후 비동기 발송해 저장 실패인데 푸시만 전송되는 불일치 방지</li>
            <li>alertEventId + deviceId 단위 예약으로 중복 발송을 차단하고 영구 오류 기기를 비활성화</li>
          </ul>
        </div>
      </section>

      <section className="detail-section">
        <h3 className="section-sub-title">Architecture</h3>
        <img
          src="/projects/smart-safety/architecture.png"
          alt="AI 서버, Spring Boot 백엔드, PostgreSQL, Redis, React와 Android 클라이언트로 구성된 시스템 구조"
          className="img-fluid"
          loading="lazy"
        />
        <div className="realtime-flow">
          <span>RTSP Camera</span>
          <span>AI Detection</span>
          <span>MQTT Broker</span>
          <span>Spring Boot</span>
          <span>STOMP / FCM</span>
          <span>Web / Android</span>
        </div>
        <ul className="detail-list bullet">
          <li><strong>Backend:</strong> Java 21, Spring Boot 3.3, Security, JPA, Redis, PostgreSQL</li>
          <li><strong>Realtime:</strong> Eclipse Paho MQTT, Spring Integration, WebSocket/STOMP</li>
          <li><strong>Client:</strong> React, TypeScript, Capacitor Android, Firebase Cloud Messaging</li>
          <li><strong>AI Integration:</strong> Python, YOLO Pose, OpenCV, MQTT payload contract</li>
        </ul>
      </section>

      <section className="detail-section">
        <h3 className="section-sub-title">Problem Solving</h3>
        <div className="issue-card">
          <h4 className="issue-title">MQTT 이벤트가 브로커 도착 후 38초 늦게 표시되는 문제</h4>
          <ul className="issue-details">
            <li>
              <strong>관측:</strong> AI → Broker는 즉시였지만 Broker → Backend subscriber 구간에서
              <M> 38,068ms</M>가 소요됐고, Backend → STOMP는 358ms였습니다.
            </li>
            <li>
              <strong>원인:</strong> 중요 이벤트와 프레임 단위 오버레이가 하나의 Paho client,
              DirectChannel, subscriber를 공유해 callback 경로의 부하와 연결 장애 범위가 결합됐습니다.
            </li>
          </ul>

          <div className="insight-block">
            <strong>해결:</strong> event/status와 camera overlay를 별도 MQTT client·adapter·channel·subscriber로 분리하고,
            중요 이벤트는 QoS 1, 최신성이 중요한 오버레이는 QoS 0으로 운영 특성을 나눴습니다.
          </div>

          <ul className="issue-details">
            <li><G>결과:</G> 사용자 관점 알림 도착 약 <G>769ms</G>, Backend → Frontend STOMP <G>2ms</G></li>
            <li><strong>계약 유지:</strong> AI 토픽과 프론트 STOMP destination을 변경하지 않아 외부 서비스 수정 없이 개선</li>
            <li><strong>검증:</strong> MQTT 구성·토픽·QoS·subscriber 책임 분리 테스트 통과</li>
          </ul>
        </div>

        <div className="issue-card" style={{ marginTop: '20px' }}>
          <h4 className="issue-title">성능 계측 중 발견한 장비 간 시계 오차</h4>
          <p>
            mqttPublishedAtMs보다 mqttReceivedAtMs가 174ms 빠른 음수 지연을 확인했습니다.
            애플리케이션 로직이 아니라 서로 다른 장비의 clock skew였으며,
            <M>NTP 동기화가 분산 시스템 성능 계측의 전제</M>라는 점을 후속 운영 과제로 남겼습니다.
          </p>
        </div>
      </section>

      <section className="detail-section">
        <h3 className="section-sub-title">Service Experience</h3>
        <div className="detail-media-grid">
          <figure className="detail-media-card">
            <img
              src="/projects/smart-safety/signup-fire-station.png"
              alt="주소를 기반으로 관할 소방서와 119안전센터를 자동 조회한 회원가입 화면"
              className="img-fluid"
              loading="lazy"
            />
            <figcaption>주소 기반 관할 소방서·119안전센터 자동 등록</figcaption>
          </figure>
          <figure className="detail-media-card detail-media-card--phone">
            <img
              src="/projects/smart-safety/mobile-push.png"
              alt="Android 알림센터에 표시된 쓰러짐 위험 감지 푸시"
              className="img-fluid"
              loading="lazy"
            />
            <figcaption>MQTT 이벤트와 연결된 Android FCM 위험 푸시</figcaption>
          </figure>
        </div>

        <div className="detail-video-card">
          <h4 className="contribution-heading">앱 연동 및 푸시 시연</h4>
          <video className="detail-video" controls preload="metadata" playsInline poster="/projects/smart-safety/mobile-push.png">
            <source src="/projects/smart-safety/app-push-demo.mp4" type="video/mp4" />
            브라우저가 MP4 영상을 지원하지 않습니다.
          </video>
          <p className="caption">위험 이벤트 발생 후 Android 알림센터에 푸시가 도착하는 약 10초 시연입니다.</p>
        </div>
      </section>

      <section className="detail-section">
        <h3 className="section-sub-title">What I Learned</h3>
        <ul className="detail-list bullet">
          <li>실시간 시스템은 평균 속도보다 중요한 메시지와 고빈도 데이터를 격리해 장애 범위를 줄이는 설계가 중요합니다.</li>
          <li>구간별 timestamp와 연결 로그가 있어야 AI·Broker·Backend·Frontend 중 실제 병목을 증거로 좁힐 수 있습니다.</li>
          <li>운영 환경에서는 재연결 후 재구독, persistent session 정책, NTP 동기화까지 포함해야 성능 수치가 신뢰할 수 있습니다.</li>
        </ul>
      </section>
    </div>
  );
};

export default SmartSafety;
