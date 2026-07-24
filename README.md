# 민병주 포트폴리오

풀스택·백엔드 개발자 민병주의 프로젝트와 문제 해결 경험을 소개하는 React 포트폴리오입니다.

## 대표 프로젝트

### AI 스마트 안전 관제 시스템

RTSP 영상에서 AI가 위험 행동을 탐지하면 MQTT로 백엔드에 전달하고, 웹 대시보드와 Android 푸시까지 연결하는 End-to-End 안전 서비스입니다.

- Spring Security, JWT, Redis 기반 인증·회원가입
- 주소 기반 관할 소방서·119안전센터 자동 매칭
- MQTT 이벤트 수신과 WebSocket/STOMP 실시간 관제
- 영상 Bounding Box 오버레이 동기화
- Capacitor Android 및 Firebase Cloud Messaging
- MQTT 이벤트·오버레이 subscriber 분리로 38초 알림 지연을 약 0.8초까지 개선

## 기술 구성

- React 19
- Vite 8
- React Icons
- React Markdown
- CSS Variables 기반 라이트·다크 테마

## 실행

```bash
npm install
npm run dev
```

## 검증

```bash
npm run lint
npm run build
```

## 프로젝트 저장소

- [Backend](https://github.com/strangeRookies/back)
- [Frontend](https://github.com/strangeRookies/front)
- [AI](https://github.com/strangeRookies/ai)
