import React, { useState, useEffect } from 'react';
import { Rocket, Twitter, Menu, X, MessageCircle } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-black/90 backdrop-blur-md border-b border-orange-500/20' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="text-3xl font-bold text-orange-400">$BEEF</div>
            <Rocket className="text-orange-400 w-6 h-6" />
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-white hover:text-orange-400 transition-colors">Home</a>
            <a href="#tokenomics" className="text-white hover:text-orange-400 transition-colors">Tokenomics</a>
            <a href="#beef-meter" className="text-white hover:text-orange-400 transition-colors">Beef-o-Meter</a>
            <a href="#memes" className="text-white hover:text-orange-400 transition-colors">Memes</a>
            <a href="#roadmap" className="text-white hover:text-orange-400 transition-colors">Roadmap</a>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <a 
              href="https://pump.fun/coin/GSMZxwBNoT6RE9eWt5vTS9Zqm8hjYuwu1utt1gJipump" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white font-bold px-6 py-2 rounded-full text-sm transition-all duration-300 transform hover:scale-105"
            >
              Buy on Pump.fun
            </a>
            <a href="https://x.com/TheBeefToken" target="_blank" rel="noopener noreferrer">
              <Twitter className="text-white hover:text-orange-400 w-6 h-6 cursor-pointer transition-colors" />
            </a>
            <a href="https://discord.gg/RWSpaMUbq9" target="_blank" rel="noopener noreferrer">
              <MessageCircle className="text-white hover:text-orange-400 w-6 h-6 cursor-pointer transition-colors" />
            </a>
          </div>

          <button 
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-orange-500/20">
            <nav className="flex flex-col space-y-4 mt-4">
              <a href="#home" className="text-white hover:text-orange-400 transition-colors">Home</a>
              <a href="#tokenomics" className="text-white hover:text-orange-400 transition-colors">Tokenomics</a>
              <a href="#beef-meter" className="text-white hover:text-orange-400 transition-colors">Beef-o-Meter</a>
              <a href="#memes" className="text-white hover:text-orange-400 transition-colors">Memes</a>
              <a href="#roadmap" className="text-white hover:text-orange-400 transition-colors">Roadmap</a>
              
              <a 
                href="https://pump.fun/coin/GSMZxwBNoT6RE9eWt5vTS9Zqm8hjYuwu1utt1gJipump" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white font-bold px-6 py-3 rounded-full text-center transition-all duration-300"
              >
                Buy on Pump.fun
              </a>
              
              <div className="flex space-x-4 justify-center">
                <a href="https://x.com/TheBeefToken" target="_blank" rel="noopener noreferrer">
                  <Twitter className="text-white hover:text-orange-400 w-8 h-8 cursor-pointer transition-colors" />
                </a>
                <a href="https://discord.gg/RWSpaMUbq9" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="text-white hover:text-orange-400 w-8 h-8 cursor-pointer transition-colors" />
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;