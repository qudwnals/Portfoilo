import React from 'react';

const SentiLogic = () => {
  return (
    <div className="project-detail-container">
      {/* 1. Overview */}
      <section className="detail-section">
        <h3 className="section-sub-title">Overview</h3>
        <img src="/projects/senti-logic/main-dashboard.png" alt="Main Dashboard" className="img-fluid" style={{ marginBottom: '30px' }} />

        <p style={{ fontWeight: '800', color: '#000', fontSize: '1.1rem', marginBottom: '20px' }}>
          본 프로젝트는 전국 단위의 거시 경제 흐름과 지역별 미시 경제 이슈를 통합 분석하고,
          이를 주식·가상화폐 등 자산 지표와 연결하여 데이터 기반의 인사이트를 제공하는 플랫폼입니다.
        </p>
        <ul className="detail-list bullet">
          <li><strong>목적:</strong> 파편화된 지역별 경제 뉴스를 수집·분석하여 지역별 경제 온도를 시각화하고, 시장 지표와의 상관관계를 규명함.</li>
          <li><strong>핵심 가치:</strong> 실시간 데이터 파이프라인 구축 + NLP 기반 감성 분석 + 인터랙티브 시각화 대시보드.</li>
          <li><strong>주요 특징:</strong> 12개 권역 언론사 자동 스크래핑, KoBERT 기반 경제 체감 지수 산출, KOSPI/KOSDAQ 상관계수(r) 분석.</li>
        </ul>
      </section>

      {/* 2. Tech Stack */}
      <section className="detail-section">
        <h3 className="section-sub-title">Tech Stack</h3>
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '10px' }}>
            <thead>
              <tr style={{ borderBottom: '2px solid var(--border-color)', textAlign: 'left' }}>
                <th style={{ padding: '12px' }}>구분</th>
                <th style={{ padding: '12px' }}>상세 내용</th>
              </tr>
            </thead>
            <tbody>
              <tr><td style={{ padding: '12px', borderBottom: '1px solid var(--border-color)' }}><strong>Language</strong></td><td style={{ padding: '12px', borderBottom: '1px solid var(--border-color)' }}>Python 3.9+</td></tr>
              <tr><td style={{ padding: '12px', borderBottom: '1px solid var(--border-color)' }}><strong>Frontend</strong></td><td style={{ padding: '12px', borderBottom: '1px solid var(--border-color)' }}>Streamlit</td></tr>
              <tr><td style={{ padding: '12px', borderBottom: '1px solid var(--border-color)' }}><strong>AI / NLP</strong></td><td style={{ padding: '12px', borderBottom: '1px solid var(--border-color)' }}>PyTorch, Transformers (KoBERT), KoNLPy, Kiwipiepy</td></tr>
              <tr><td style={{ padding: '12px', borderBottom: '1px solid var(--border-color)' }}><strong>Data Engineering</strong></td><td style={{ padding: '12px', borderBottom: '1px solid var(--border-color)' }}>Selenium, BeautifulSoup4, Pandas, NumPy, ThreadPoolExecutor</td></tr>
              <tr><td style={{ padding: '12px', borderBottom: '1px solid var(--border-color)' }}><strong>Database</strong></td><td style={{ padding: '12px', borderBottom: '1px solid var(--border-color)' }}>SQLite3</td></tr>
              <tr><td style={{ padding: '12px', borderBottom: '1px solid var(--border-color)' }}><strong>Visualization</strong></td><td style={{ padding: '12px', borderBottom: '1px solid var(--border-color)' }}>Folium (GIS), Plotly, Seaborn, Pyvis</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* 3. Contributions */}
      <section className="detail-section">
        <h3 className="section-sub-title">Contributions</h3>
        <div className="contribution-item">
          <div className="contribution-heading">Kiwi 기반 키워드 추출 로직 구현</div>
          <p>
            뉴스 기사 제목과 본문에서 <strong>Kiwi(kiwipiepy)</strong> 기반 형태소 분석을 활용해 핵심 키워드를 추출하는 로직을 개발했습니다.
            불용어 제거와 fallback 처리까지 포함하여 실제 적재 파이프라인에서 안정적으로 동작하도록 구현했습니다.
          </p>
        </div>
        <div className="contribution-item">
          <div className="contribution-heading">시장 지표 연동 및 통합 분석 대시보드 구현</div>
          <p>
            FinanceDataReader를 활용해 <strong>KOSPI/KOSDAQ</strong> 지수를 실시간으로 불러오고, 뉴스 감성 데이터와 결합해
            변동률, 상관관계, 회귀 분석, 변동성 지표를 확인할 수 있도록 구성했습니다.
            Streamlit 기반으로 KPI 카드, 상세 분석 탭, 뉴스 피드 등의 UI를 구현하여 분석 환경을 구축했습니다.
          </p>
        </div>
      </section>

      {/* 4. Problem Solving */}
      <section className="detail-section">
        <h3 className="section-sub-title">Problem Solving</h3>
        <div className="issue-card">
          <div className="issue-title">한국어 텍스트 노이즈 및 파이프라인 안정성 문제</div>
          <p>
            기자명, 관용 표현 등 핵심 내용외의 노이즈가 키워드 분석 품질을 저하시키는 문제가 있었습니다.
            또한 형태소 분석 환경에 따른 예외 발생 시 파이프라인이 중단될 위험이 있었습니다.
          </p>
          <ul className="issue-details">
            <li>Kiwi 형태소 분석을 적용하여 일반명사와 고유명사만 선별하고, 프로젝트 특화 불용어 사전 구축.</li>
            <li>라이브러리 미설치나 예외 상황에 대비한 <strong>Fallback 로직(기본 공백 분할 방식)</strong> 구현으로 안정성 확보.</li>
          </ul>
        </div>
        <div className="code-block">
          <img src="/projects/senti-logic/code-snippet.png" alt="Kiwi extraction logic" className="img-fluid" style={{ marginTop: 0, boxShadow: 'none' }} />
        </div>
      </section>

      {/* 5. Dashboard Results */}
      <section className="detail-section">
        <h3 className="section-sub-title">Dashboard & Results</h3>

        <div style={{ marginBottom: '40px' }}>
          <h4>1. 종합 경제 모니터링 (Main)</h4>
          <p>지역별 통합 감성 지수와 경제 변동성을 한눈에 파악하며, 시장 지표와의 흐름을 대조합니다.</p>
          <img src="/projects/senti-logic/main-dashboard.png" alt="Main Dashboard" className="img-fluid" />
        </div>

        <div style={{ marginBottom: '40px' }}>
          <h4>2. 인터랙티브 지역별 지도 및 이슈 분석</h4>
          <p>GIS 기반 감성 맵으로 지역별 경제 온도를 시각화하고, 특정 지역 클릭 시 상세 리포트를 제공합니다.</p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
            <img src="/projects/senti-logic/gis-map.png" alt="GIS Map" className="img-fluid" />
            <img src="/projects/senti-logic/map-popup.png" alt="Map Popup" className="img-fluid" />
          </div>
        </div>

        <div style={{ marginBottom: '40px' }}>
          <h4>3. 자산 상관관계 분석</h4>
          <p>뉴스 감성과 KOSPI/KOSDAQ 지수 간의 상관관계 히트맵 및 회귀 분석 산점도를 산출합니다.</p>
          <img src="/projects/senti-logic/correlation-overview.png" alt="Correlation Overview" className="img-fluid" />
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginTop: '20px' }}>
            <img src="/projects/senti-logic/correlation-kospi.png" alt="KOSPI Correlation" className="img-fluid" />
            <img src="/projects/senti-logic/correlation-kosdaq.png" alt="KOSDAQ Correlation" className="img-fluid" />
          </div>
        </div>

        <div style={{ marginBottom: '40px' }}>
          <h4>4. 감성 타임라인 캘린더</h4>
          <p>일별 감성 지수의 변화를 캘린더 UI로 추적하여 여론의 변곡점을 직관적으로 식별합니다.</p>
          <img src="/projects/senti-logic/calendar-timeline.png" alt="Calendar Timeline" className="img-fluid" />
        </div>

        <div style={{ marginBottom: '40px' }}>
          <h4>5. 기술적 지표 및 변동성 분석</h4>
          <p>볼린저 밴드 등 기술적 지표를 결합하여 시장의 과열 또는 침체 구간을 통계적으로 진단합니다.</p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
            <img src="/projects/senti-logic/technical-kospi.png" alt="KOSPI Technical" className="img-fluid" />
            <img src="/projects/senti-logic/technical-kosdaq.png" alt="KOSDAQ Technical" className="img-fluid" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default SentiLogic;
