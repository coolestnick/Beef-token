import React from 'react';
import { Rocket, Users, Gamepad2, Zap, Crown, Twitter, MessageCircle } from 'lucide-react';

const Roadmap = () => {
  const roadmapItems = [
    {
      phase: "Phase 1",
      title: "Launch & Ignition",
      status: "completed",
      icon: Rocket,
      items: [
        "Token Launch on DEX",
        "Community Building",
        "First Meme Contests",
        "Beef-o-Meter Launch"
      ]
    },
    {
      phase: "Phase 2", 
      title: "Meme Wars Begin",
      status: "current",
      icon: Users,
      items: [
        "Weekly Voting Arena",
        "NFT Beef Cards",
        "Partnership Announcements",
        "10K Holders Milestone"
      ]
    },
    {
      phase: "Phase 3",
      title: "Game On",
      status: "upcoming",
      icon: Gamepad2,
      items: [
        "Launch the Beef Mini-Game",
        "Rocket or Rant Predictions",
        "Mobile App Beta",
        "CEX Listings"
      ]
    },
    {
      phase: "Phase 4",
      title: "Beef Empire",
      status: "future",
      icon: Crown,
      items: [
        "Meme DAO Governance",
        "Beef Metaverse",
        "Celebrity Endorsements",
        "Global Domination"
      ]
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'completed': return 'from-green-500 to-emerald-600';
      case 'current': return 'from-orange-500 to-red-600';
      case 'upcoming': return 'from-blue-500 to-purple-600';
      case 'future': return 'from-purple-500 to-pink-600';
      default: return 'from-gray-500 to-gray-600';
    }
  };

  const getStatusText = (status) => {
    switch (status) {
      case 'completed': return 'Completed ✅';
      case 'current': return 'In Progress 🔥';
      case 'upcoming': return 'Coming Soon 🚀';
      case 'future': return 'Future 🌟';
      default: return 'Unknown';
    }
  };

  return (
    <section id="roadmap" className="py-20 bg-gradient-to-br from-black to-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500 mb-4">
            Roadmap to Beef Supremacy
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Our journey from meme coin to the ultimate platform for billionaire beef tracking
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-orange-500 to-red-600 hidden lg:block"></div>

            <div className="space-y-12">
              {roadmapItems.map((item, index) => {
                const IconComponent = item.icon;
                const isEven = index % 2 === 0;
                
                return (
                  <div key={index} className={`flex items-center ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} flex-col lg:space-x-8`}>
                    <div className={`w-full lg:w-5/12 ${isEven ? 'lg:text-right' : 'lg:text-left'} text-center lg:text-left`}>
                      <div className="bg-black/50 backdrop-blur-md rounded-3xl p-8 border border-orange-500/30 hover:border-orange-500/60 transition-all duration-300">
                        <div className="mb-4">
                          <span className="text-orange-400 font-bold text-lg">{item.phase}</span>
                          <div className={`inline-block ml-4 px-3 py-1 rounded-full text-sm font-bold bg-gradient-to-r ${getStatusColor(item.status)} text-white`}>
                            {getStatusText(item.status)}
                          </div>
                        </div>
                        
                        <h3 className="text-3xl font-bold text-white mb-6">{item.title}</h3>
                        
                        <ul className="space-y-3">
                          {item.items.map((listItem, itemIndex) => (
                            <li key={itemIndex} className="text-gray-300 flex items-center justify-center lg:justify-start">
                              <Zap className="w-4 h-4 text-orange-400 mr-2 flex-shrink-0" />
                              {listItem}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="relative z-10 my-8 lg:my-0">
                      <div className={`w-20 h-20 rounded-full bg-gradient-to-r ${getStatusColor(item.status)} flex items-center justify-center border-4 border-black`}>
                        <IconComponent className="w-10 h-10 text-white" />
                      </div>
                    </div>

                    <div className="w-full lg:w-5/12 hidden lg:block"></div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="mt-20 text-center">
            <div className="bg-gradient-to-br from-orange-900/50 to-red-900/50 rounded-3xl p-12 border border-orange-500/30">
              <h3 className="text-4xl font-bold text-white mb-6">Join the Beef Revolution</h3>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Be part of the most entertaining memecoin in the crypto space. 
                Where drama meets DeFi and chaos creates community.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <a href="https://x.com/TheBeefToken" target="_blank" rel="noopener noreferrer" className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-bold px-8 py-4 rounded-full text-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
                  <Twitter className="mr-2 w-5 h-5" />
                  Follow on X
                </a>
                <a href="https://discord.gg/RWSpaMUbq9" target="_blank" rel="noopener noreferrer" className="border-2 border-orange-500 text-orange-400 hover:bg-orange-500 hover:text-black font-bold px-8 py-4 rounded-full text-lg transition-all duration-300 flex items-center justify-center">
                  <MessageCircle className="mr-2 w-5 h-5" />
                  Join Discord
                </a>
              </div>
              
              <div className="text-gray-400 text-sm">
                Join our community of 10K+ beef enthusiasts and meme warriors!
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Roadmap;