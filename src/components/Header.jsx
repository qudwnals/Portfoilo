import React from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';

const Header = ({ theme, toggleTheme }) => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed-header">
      <div className="header-container">
        <div className="logo" onClick={() => scrollToSection('about')}>
          BJ.Min
        </div>
        <nav className="nav-menu" style={{ display: 'flex', alignItems: 'center' }}>
          <button onClick={() => scrollToSection('about')} className="nav-link">About</button>
          <button onClick={() => scrollToSection('skills')} className="nav-link">Skills</button>
          <button onClick={() => scrollToSection('experience')} className="nav-link">Experience</button>
          <button onClick={() => scrollToSection('awards')} className="nav-link">Awards</button>
          <button onClick={() => scrollToSection('projects')} className="nav-link">Projects</button>
          <button onClick={() => scrollToSection('contact')} className="nav-link">Contact</button>
          
          <button 
            onClick={toggleTheme} 
            className="nav-link" 
            style={{ fontSize: '1.2rem', display: 'flex', alignItems: 'center', marginLeft: '10px' }} 
            aria-label="Toggle Dark Mode"
          >
            {theme === 'light' ? <FaMoon /> : <FaSun />}
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
