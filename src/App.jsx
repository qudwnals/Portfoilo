import React from 'react';
import Header from './components/Header';
import ProfileSection from './components/ProfileSection';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Awards from './components/Awards';
import ProjectGallery from './components/ProjectGallery';
import Contact from './components/Contact';
import './index.css';

function App() {
  return (
    <div className="App">
      <Header />
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
