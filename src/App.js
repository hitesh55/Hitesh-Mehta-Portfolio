import React, { useContext } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Removed Navigate

import { ThemeContext } from './contexts/ThemeContext';
import { Main,  ProjectPage } from './pages';
import { BackToTop } from './components';
import ScrollToTop from './utils/ScrollToTop';

import './App.css';

function App() {
  const { theme } = useContext(ThemeContext);

  console.log("%cDEVELOPER PORTFOLIO", `color:${theme.primary}; font-size:50px`);
  console.log("%chttps://github.com/hhhrrrttt222111/developer-portfolio", `color:${theme.tertiary}; font-size:20px`);

  return (
    <div className="app">
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Main />} /> {/* Updated syntax */}
          
          <Route path="/projects" element={<ProjectPage />} /> {/* Updated syntax */}
        </Routes>
      </Router>
      <BackToTop />
    </div>
  );
}

export default App;
