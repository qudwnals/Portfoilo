# CLAUDE.md

이 파일은 이 저장소에서 작업하는 Claude Code(claude.ai/code)에게 안내를 제공합니다.

## 명령어

```bash
npm run dev       # Vite 개발 서버 실행 (localhost:5173)
npm run build     # 프로덕션 빌드 → dist/
npm run preview   # 프로덕션 빌드 로컬 미리보기
npm run lint      # ESLint 실행
```

## 아키텍처

React 19 + Vite로 구축된 백엔드 개발자 포트폴리오 단일 페이지 웹사이트입니다. TypeScript 없이 순수 JSX를 사용합니다.

### 데이터 흐름

모든 콘텐츠는 [src/data.js](src/data.js)에 집중 관리됩니다: `personalInfo`, `skills`, `projects`, `experiences`, `awards`. 컴포넌트들은 자체 정적 데이터를 보유하지 않고 이 파일에서 import합니다. 포트폴리오 내용을 추가하거나 수정할 때는 이 파일만 편집하면 됩니다.

### 테마 시스템

라이트/다크 모드는 [src/App.jsx](src/App.jsx)에서 React state로 관리되며, `localStorage`에 저장되고 시스템 설정을 기본값으로 사용합니다. 활성 테마는 `<html>`의 `data-theme` 속성으로 적용됩니다. 모든 색상은 [src/index.css](src/index.css)에 CSS 변수로 정의되어 있습니다 — Tailwind나 CSS-in-JS는 사용하지 않습니다. 주요 브랜드 색상은 `#FF8C00`(오렌지)입니다.

### 프로젝트 상세 렌더링

`data.js`의 `projects` 항목은 `component` 필드를 통해 커스텀 컴포넌트를 참조할 수 있습니다 (예: `"CUSTOM_COMPONENT:OpenCloset"`). [src/components/ProjectModal.jsx](src/components/ProjectModal.jsx)가 이 문자열 키를 [src/components/project-details/](src/components/project-details/)의 실제 React 컴포넌트로 매핑합니다. 커스텀 컴포넌트가 없으면 `details` 문자열을 `react-markdown`으로 렌더링합니다. 새 프로젝트를 풍부한 콘텐츠로 추가하려면: `project-details/`에 컴포넌트를 생성하고, `ProjectModal.jsx`의 컴포넌트 맵에 등록한 뒤, `data.js`의 `component` 필드를 설정합니다.

### 섹션 레이아웃

[src/App.jsx](src/App.jsx)는 다음 순서로 섹션을 렌더링합니다: Header → ProfileSection → Skills → Experience → Awards → ProjectGallery → Contact. 각 섹션에는 [src/components/Header.jsx](src/components/Header.jsx)의 스무스 스크롤 네비게이션을 위한 `id` 속성이 있습니다.

### 정적 에셋

프로젝트 이미지는 [public/projects/](public/projects/) 하위에 프로젝트 슬러그별로 정리되어 있습니다 (예: `public/projects/open-closet/`). 루트 상대 경로로 참조합니다 (예: `/projects/open-closet/image.png`).
