import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import BeefMeter from './components/BeefMeter';
import Tokenomics from './components/Tokenomics';
import Memes from './components/Memes';
import Roadmap from './components/Roadmap';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <Header />
      <Hero />
      <BeefMeter />
      <Tokenomics />
      <Memes />
      <Roadmap />
      <Footer />
    </div>
  );
}

export default App;