import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import ProfileSection from './components/ProfileSection';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Awards from './components/Awards';
import ProjectGallery from './components/ProjectGallery';
import Contact from './components/Contact';
import './index.css';

const getInitialTheme = () => {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'light' || savedTheme === 'dark') {
    return savedTheme;
  }
  return window.matchMedia?.('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
};

function App() {
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((currentTheme) => currentTheme === 'light' ? 'dark' : 'light');
  };

  return (
    <div className="App">
      <Header theme={theme} toggleTheme={toggleTheme} />
      <main>
        <ProfileSection />
        <Experience />
        <Awards />
        <ProjectGallery />
        <Skills />
      </main>
      <Contact />
    </div>
  );
}

export default App;
