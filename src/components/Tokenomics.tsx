import React from 'react';
import { PieChart, Flame, Shield, Users, Zap } from 'lucide-react';

const Tokenomics = () => {
  const tokenomicsData = [
    { label: 'Liquidity Pool', percentage: 50, color: 'from-orange-500 to-red-500', icon: PieChart },
    { label: 'Marketing/Meme Fund', percentage: 20, color: 'from-blue-500 to-purple-500', icon: Zap },
    { label: 'Airdrops & Contests', percentage: 10, color: 'from-green-500 to-teal-500', icon: Users },
    { label: 'Team & Dev (Locked)', percentage: 10, color: 'from-yellow-500 to-orange-500', icon: Shield },
    { label: 'Treasury Reserve', percentage: 10, color: 'from-purple-500 to-pink-500', icon: Flame }
  ];

  return (
    <section id="tokenomics" className="py-20 bg-gradient-to-br from-black to-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500 mb-4">
            Beefonomics
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Tokenomics designed for maximum chaos and community rewards
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            <div className="bg-black/50 backdrop-blur-md rounded-2xl p-6 border border-orange-500/30 text-center">
              <div className="text-orange-400 text-sm font-medium mb-2">Total Supply</div>
              <div className="text-white text-3xl font-bold">1B $BEEF</div>
            </div>
            <div className="bg-black/50 backdrop-blur-md rounded-2xl p-6 border border-orange-500/30 text-center">
              <div className="text-orange-400 text-sm font-medium mb-2">Team Lock</div>
              <div className="text-white text-3xl font-bold">6 Months</div>
            </div>
            <div className="bg-black/50 backdrop-blur-md rounded-2xl p-6 border border-orange-500/30 text-center">
              <div className="text-orange-400 text-sm font-medium mb-2">Contract</div>
              <div className="text-white text-lg font-bold">Renounced</div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="w-80 h-80 mx-auto relative">
                <div className="w-full h-full rounded-full bg-gradient-to-br from-orange-500 via-red-500 to-purple-500 relative overflow-hidden">
                  <div className="absolute inset-8 bg-black rounded-full flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-4xl font-bold text-orange-400">$BEEF</div>
                      <div className="text-gray-300">1B Total</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              {tokenomicsData.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <div key={index} className="bg-black/50 backdrop-blur-md rounded-2xl p-6 border border-gray-700/50">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${item.color} flex items-center justify-center`}>
                          <IconComponent className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <div className="text-white font-bold text-lg">{item.label}</div>
                          <div className="text-gray-400">{item.percentage === 50 ? '500M' : item.percentage === 20 ? '200M' : '100M'} $BEEF</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-orange-400">{item.percentage}%</div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-orange-900/50 to-red-900/50 rounded-2xl p-8 border border-orange-500/30">
              <Flame className="w-12 h-12 text-orange-400 mb-4" />
              <h3 className="text-2xl font-bold text-white mb-4">Burn the Ego</h3>
              <p className="text-gray-300">
                Token burn events triggered by Musk/Trump news cycles. The more drama, the more tokens burn!
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-900/50 to-purple-900/50 rounded-2xl p-8 border border-blue-500/30">
              <Users className="w-12 h-12 text-blue-400 mb-4" />
              <h3 className="text-2xl font-bold text-white mb-4">Voting Arena</h3>
              <p className="text-gray-300">
                Community votes weekly on who won the week's "beef". Winners get exclusive NFT drops.
              </p>
            </div>

            <div className="bg-gradient-to-br from-green-900/50 to-teal-900/50 rounded-2xl p-8 border border-green-500/30">
              <Zap className="w-12 h-12 text-green-400 mb-4" />
              <h3 className="text-2xl font-bold text-white mb-4">Meme Battles</h3>
              <p className="text-gray-300">
                Submit memes, win $BEEF prizes. The community decides the best content creators.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tokenomics;