import React from 'react';
import { Flame, Zap } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen relative overflow-hidden bg-gradient-to-br from-black via-gray-900 to-orange-900">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-2 h-2 bg-orange-400 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-1 h-1 bg-white rounded-full animate-ping"></div>
        <div className="absolute bottom-40 left-1/4 w-1 h-1 bg-orange-300 rounded-full animate-pulse"></div>
        <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-orange-500 rounded-full animate-ping"></div>
      </div>

      <div className="container mx-auto px-4 pt-32 pb-20 relative z-10">
        <div className="text-center max-w-6xl mx-auto">
          {/* Main hero image */}
          <div className="mb-8 relative">
            <img 
              src="/ChatGPT Image Jun 6, 2025, 02_57_38 PM.png" 
              alt="Elon vs Trump - $BEEF" 
              className="w-full max-w-4xl mx-auto rounded-2xl shadow-2xl border-4 border-orange-500/30"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl"></div>
          </div>

          {/* Main headline */}
          <h1 className="text-6xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-red-500 to-orange-600 mb-6 leading-tight">
            $BEEF
          </h1>
          
          <h2 className="text-2xl md:text-4xl font-bold text-white mb-4">
            Where Billionaires Battle and Degens Win
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Elon vs. Trump. Rockets vs. Rants. Welcome to the Beef Market.<br/>
            <span className="text-orange-400 font-semibold">Trade the chaos. Meme the madness.</span>
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button className="border-2 border-orange-500 text-orange-400 hover:bg-orange-500 hover:text-black font-bold px-8 py-4 rounded-full text-lg transition-all duration-300 transform hover:scale-105 flex items-center">
              <Zap className="mr-2" />
              Join the Meme War
            </button>
          </div>

          {/* Live stats */}
          <div className="grid grid-cols-1 gap-6 max-w-2xl mx-auto">
            <div className="bg-black/30 backdrop-blur-md rounded-xl p-6 border border-orange-500/20">
              <div className="text-orange-400 text-sm font-medium mb-2">Total Supply</div>
              <div className="text-white text-3xl font-bold">1B $BEEF</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;