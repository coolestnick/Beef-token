import React from 'react';
import { Twitter, MessageCircle, Rocket } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black border-t border-orange-500/30">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="text-4xl font-bold text-orange-400">$BEEF</div>
              <Rocket className="text-orange-400 w-8 h-8" />
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Where Billionaires Battle and Degens Win. The ultimate memecoin capturing the eternal drama of tech vs politics.
            </p>
            <div className="flex space-x-4">
              <a href="https://x.com/TheBeefToken" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-orange-400 transition-colors">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="https://discord.gg/RWSpaMUbq9" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-orange-400 transition-colors">
                <MessageCircle className="w-6 h-6" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-400 hover:text-orange-400 transition-colors">Home</a></li>
              <li><a href="#tokenomics" className="text-gray-400 hover:text-orange-400 transition-colors">Tokenomics</a></li>
              <li><a href="#beef-meter" className="text-gray-400 hover:text-orange-400 transition-colors">Beef-o-Meter</a></li>
              <li><a href="#memes" className="text-gray-400 hover:text-orange-400 transition-colors">Memes</a></li>
              <li><a href="#roadmap" className="text-gray-400 hover:text-orange-400 transition-colors">Roadmap</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold text-lg mb-4">Community</h3>
            <ul className="space-y-2">
              <li><a href="https://discord.gg/RWSpaMUbq9" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-orange-400 transition-colors">Discord</a></li>
              <li><a href="https://x.com/TheBeefToken" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-orange-400 transition-colors">Twitter/X</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 mb-4 md:mb-0">
              © 2025 $BEEF Token. Built on Copium, Fueled by Beef.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">Disclaimer</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;