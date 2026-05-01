export const personalInfo = {
  name: "민병주",
  role: "백엔드 개발자",
  heroSubtitle: "안정적인 서비스를 설계하고 데이터로 문제를 해결하는 백엔드 개발자, 민병주입니다.",
  birth: "2001.11.26",
  education: {
    school: "동의대학교 응용소프트웨어 공학과",
    period: "2020.03 ~ 2026.02 졸업"
  },
  about: `Java · Spring Boot를 주력으로, 성능과 안정성을 수치로 증명하는 백엔드 개발자입니다. 위치 기반 축구 매칭 플랫폼 Mercenary를 1인 개발로 완성하며 Redisson 분산 락으로 100명 동시 신청 환경에서 동시성 정합성 100%를 달성하고, Redis 캐싱으로 API 응답 속도를 최대 76% 개선했습니다. k6 부하 테스트로 모든 결과를 직접 정량 검증했습니다.

팀 프로젝트에서도 핵심 역할을 맡아왔습니다. 오픈 클로젯 백엔드를 전담 설계하며 JPQL Boolean Logic 기반 동적 쿼리로 다중 조건 검색의 DB 호출을 1회로 최적화했고, 러너스 하이에서는 심박수·케이던스 기반 3단계 맞춤형 러닝 크루 매칭을 기획·개발해 교내 캡스톤 경진대회 최우수상과 지역현안 경진대회 은상을 수상했습니다.

백엔드에  AWS 인프라 자동화까지 필요에 따라 기술 영역을 확장해왔습니다. 매 프로젝트에서 이전의 한계를 다음 기술 도전으로 삼아, 분산 시스템·부하 테스트·배포 자동화 등 실무 역량을 스스로 쌓아가고 있습니다.`,
  email: "cwjk1008@naver.com",
  github: "qudwnals",
  velog: "",
  resumeLink: "#",
  profileImage: "/profile.jpg"
};

export const skills = [
  {
    category: "Backend",
    color: "#3b82f6",
    items: [
      { name: "Java", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
      { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
      { name: "Spring Boot", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" },
      { name: "Spring Security", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" },
      { name: "JWT", logo: "https://jwt.io/img/pic_logo.svg" },
      { name: "Nest.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-original.svg" },
      { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
      { name: "TypeORM", logo: "https://raw.githubusercontent.com/typeorm/typeorm/master/resources/logo_big.png" },
    ]
  },
  {
    category: "Database",
    color: "#10b981",
    items: [
      { name: "MySQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
      { name: "MariaDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mariadb/mariadb-original.svg" },
      { name: "SQLite", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg" },
      { name: "Redis", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg" },
    ]
  },
  {
    category: "Frontend",
    color: "#8b5cf6",
    items: [
      { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "TypeScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
      { name: "HTML5", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
      { name: "Swift", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg" },
    ]
  },
  {
    category: "DevOps",
    color: "#06b6d4",
    items: [
      { name: "Docker", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
      { name: "AWS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg" },
      { name: "GitHub Actions", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/githubactions/githubactions-original.svg" },
      { name: "Git", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
      { name: "GitHub", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
    ]
  },
  {
    category: "ML / Data",
    color: "#ec4899",
    items: [
      { name: "PyTorch", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg" },
      { name: "OpenCV", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg" },
      { name: "Selenium", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/selenium/selenium-original.svg" },
    ]
  },
];
export const projects = [
  {
    id: "mercenary",
    title: "Mercenary (용병 매칭 플랫폼)",
    role: "1인 개발 (Frontend · Backend · DevOps)",
    techStack: ["Java", "Spring Boot", "MySQL", "Redis", "Redisson", "Docker", "AWS Lightsail", "React", "TypeScript"],
    summary: "위치기반 축구 용병 매칭 플랫폼 — k6 부하 테스트로 동시성 정합성 100%, 캐시 적용 시 응답속도 76% 개선 정량 검증",
    thumbnail: "/projects/mercenary/main.png",
    details: "CUSTOM_COMPONENT:Mercenary",
    github: "https://github.com/Mercenary-Project"
  },
  {
    id: "open-closet",
    title: "오픈 클로젯 (Open Closet)",
    role: "백엔드 개발 (팀원 4명 중 2명 백엔드)",
    techStack: ["Spring Boot", "MariaDB", "Docker", "React", "JPQL"],
    summary: "위치 기반 P2P 중고의류 대여 서비스 플랫폼",
    thumbnail: "/projects/open-closet/main-mockup.png", // 업로드하신 고화질 목업 이미지로 변경
    details: "CUSTOM_COMPONENT:OpenCloset",
    github: "https://github.com/DevFlow-DEU/OpenCloset_Back/tree/Min"
  },
  {
    id: "runners-high",
    title: "러너스 하이 (Runner's High)",
    role: "서비스 기획 및 백엔드 리드 개발",
    techStack: ["Nest.js", "MariaDB", "TypeORM", "Docker", "Swift", "Node.js"],
    summary: "건강 데이터 기반 맞춤형 러닝 크루 매칭 및 지역 갈등 해소 앱",
    thumbnail: "/projects/runners-high/thumbnail-intro.png",
    details: "CUSTOM_COMPONENT:RunnerHigh",
    award: "최우수상",
    github: "https://github.com/Time-to-run/Runnershigh_bakc"
  },
  {
    id: "senti-logic",
    title: "Senti Logic (지능형 경제 모니터링 대시보드)",
    role: "데이터 크롤링, NLP 분석, DB 설계",
    techStack: ["Python", "PyTorch", "SQLite3", "BeautifulSoup4", "Selenium", "Transformers"],
    summary: "감성 분석 기반 지역 경제 뉴스 모니터링 및 자산 영향 분석 서비스",
    thumbnail: "/projects/senti-logic/main-dashboard.png",
    details: "CUSTOM_COMPONENT:SentiLogic",
    github: "https://github.com/fraidy53/Project_Mini"
  }
];

export const experiences = [
  {
    id: 1,
    title: "SK쉴더스 루키즈 5기 부트캠프 ",
    period: "2026년 1월 30일 → 2026년 7월 30일 (부트캠프)",
    role: "지능형 애플리케이션 개발자 양성과정",
    details: [
      "데이터 분석 위한 파이썬 언어학습",
      "지능형 애플리케이션 웹서비스 개발",
      "아이디어톤 & 생성형 AI기반 애플리케이션 보안 개발"
    ]
  },
  {
    id: 2,
    title: "미래내일 일 경험(프로젝트 형) : 주식회사 트립빌더 IT 플랫폼 프로토타입 개발",
    period: "2025년 3월 20일 → 2025년 6월 22일 (대외 활동)",
    role: "위치 기반 P2P 의류 대여 서비스 개발 & 백엔드 리드",
    details: [
      "Spring Security 및 JWT 기반 보안 인증 체계 구축과 BCrypt 단방향 암호화를 통한 보안성 강화",
      "JPQL Boolean Logic 활용 동적 쿼리 최적화로 다중 조건 검색 시 DB 오버헤드 및 호출 횟수 절감",
      "행정동 기반 정적 위치 필터링 도입을 통해 사용자 프라이버시 보호 및 서비스 응답 속도 개선"
    ]
  },
  {
    id: 3,
    title: "한국장학재단 말레이시아 어학연수",
    period: "2025.07 → 2025.08",
    role: "해외 연수(말레이시아) 당시 15인 팀의 총괄 팀장 담당",
    details: [
      "낯선 환경에서 발생하는 돌발 상황에 대한 리스크 관리 및 팀원 간 갈등 중재를 통해 성공적인 연수 환경 조성",
      "다문화 환경에서의 협업 및 리더십 경험을 바탕으로, 협업 부서와 원활하게 소통하는 '소통형 리더십' 역량 확보"
    ]
  },
  {
    id: 4,
    title: "교내 캡스톤 경진 디자인 대회, 지역현안 캡스톤 경진대회",
    period: "2024.12.02 → 2024.02.13 (공모전)",
    role: "러너스 하이 건강 데이터 기반 맞춤형 러닝 크루 매칭 서비스 개발 & 백엔드 개발",
    details: [
      "Nest.js 환경에서 심박수·케이던스 데이터 분석을 통한 3단계 맞춤형 크루 매칭 설계 및 구현",
      "라즈베리파이 와 Docker 기반의 독립 서버 인프라 구축 및 SwiftUI 연동 데이터 수집 환경 조성",
      "캡스톤디자인 경진대회 최우수상(LINC 3.0) 및 은상 수상을 통해 데이터 기반 매칭 시스템 기술력 검증"
    ]
  },

  {
    id: 5,
    title: "DOD 학과 개발 동아리",
    period: "2023.06. ~ 2026.09 (동아리 활동)",
    role: "Nest.js 개발 스터디",
    details: [
      "Nest.js 기반 RESTful API CRUD 구현 및 모듈 중심의 계층형 아키텍처 학습",
      "포트포워딩 기술을 활용한 로컬 서버의 외부 네트워크 노출 및 실시간 API 통신 환경 구축",
      "정기적 코드 리뷰 및 알고리즘 스터디 참여를 통한 로직 최적화 및 코드 유지보수 역량 강화"
    ]
  }
];

export const awards = [
  {
    id: 1,
    date: "2025년 2월 13일",
    contest: "지역현안 캡스톤 경진대회",
    award: "은상",
    organization: "국립 부경대"
  },
  {
    id: 2,
    date: "2024년 12월 2일",
    contest: "교내 캡스톤 경진대회",
    award: "최우수상",
    organization: "동의대(링크 사업단)"
  }
];