import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import ProfileSection from './components/ProfileSection';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Awards from './components/Awards';
import ProjectGallery from './components/ProjectGallery';
import Contact from './components/Contact';
import './index.css';

function App() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.setAttribute('data-theme', savedTheme);
    } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('dark');
      document.documentElement.setAttribute('data-theme', 'dark');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  };

  return (
    <div className="App">
      <Header theme={theme} toggleTheme={toggleTheme} />
      <main>
        <ProfileSection />
        <Skills />
        <Experience />
        <Awards />
        <ProjectGallery />
      </main>
      <Contact />
    </div>
  );
}

export default App;
