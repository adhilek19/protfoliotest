import React, { useEffect } from 'react';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Cursor from './components/Cursor/Cursor';
import BackgroundAnimation from './components/BackgroundAnimation/BackgroundAnimation';
import ProgressBar from './components/ProgressBar/ProgressBar';
import Terminal from './components/Terminal/Terminal';
import FloatingHire from './components/FloatingHire/FloatingHire';
import Freelance from './components/Freelance/Freelance';
import { Toaster } from 'react-hot-toast';

function App() {
  // Smooth scroll behavior for older browsers or explicit handling if needed
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  return (
    <div className="app">
      <Toaster position="top-center" reverseOrder={false} />
      <ProgressBar />
      <FloatingHire />
      <BackgroundAnimation />
      <Cursor />
      <Header />
      <main>
        <Hero />
        <Terminal />
        <About />
        <Projects />
        <Freelance />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
