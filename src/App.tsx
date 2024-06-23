import React from 'react';
import { Warning } from './components/warning/warning';
import { Header } from './components/header/header';
import { Main } from './components/main/main';
import { Footer } from './components/footer/footer';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import { useLanguageToggle } from './utils/translate/handleLang';
import { Gliter } from './pages/gliter/gliter';

export const App: React.FC = () => {

  const { currentLanguage, handleLanguageChange } = useLanguageToggle('ru');

  React.useEffect(() => {
    document.title = 'Textile Pro';
  }, []);

  return (

    <Router>

      <Warning currentLanguage={currentLanguage} />

      <Header
        currentLanguage={currentLanguage}
        handleLanguageChange={handleLanguageChange}
      />

      <Routes>

        <Route path="/Глитер" element={<Gliter />} />
        <Route path="/Глітер" element={<Gliter />} />
        <Route path="/" element={<Main currentLanguage={currentLanguage} />} />

      </Routes>

      <Footer currentLanguage={currentLanguage} />

    </Router>

  );

};
