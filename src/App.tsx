import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProjectsSection from './components/ProjectsSection';
import Footer from './components/Footer';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  // Add scroll progress tracking
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const currentScroll = window.scrollY;
      const progress = (currentScroll / totalScroll) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <ThemeProvider>
      <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
        {/* Progress bar */}
        <div 
          className="fixed top-0 left-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 z-50 transition-all duration-300"
          style={{ width: `${scrollProgress}%` }}
        />
        
        <Header />
        <main className="flex-grow">
          <Hero />
          <ProjectsSection />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;