import React, { useState, useEffect } from 'react';
import { Flame, Twitter, Rocket, ExternalLink } from 'lucide-react';

const BeefMeter = () => {
  const [beefLevel, setBeefLevel] = useState(73);
  const [winner, setWinner] = useState('Elon');
  const [showVoteMessage, setShowVoteMessage] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      const newLevel = Math.floor(Math.random() * 30) + 55;
      setBeefLevel(newLevel);
      setWinner(newLevel > 50 ? 'Elon' : 'Trump');
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handleVote = (candidate) => {
    setShowVoteMessage(true);
    setTimeout(() => setShowVoteMessage(false), 3000);
  };

  const newsItems = [
    {
      id: 1,
      title: "🔥 Elon's Bombshell: Trump & Epstein Files",
      description: "Time to drop the really big bomb: @realDonaldTrump is in the Epstein files. That is the real reason they have not been made public. Have a nice day, DJT!",
      views: "173M views",
      time: "16h ago",
      twitterLink: "https://x.com/elonmusk/status/1930719235770359903", // Replace with actual Twitter link
      image: "/Reaction.png"
    },
    {
      id: 2,
      title: "⚡ Follow-up: Mark This Post",
      description: "Mark this post for the future. The truth will come out.",
      views: "29M views", 
      time: "15h ago",
      twitterLink: "https://x.com/elonmusk/status/1930703865801810022", // Replace with actual Twitter link
      image: "/Bomb.png"
    },
    {
      id: 3,
      title: "💥 BREAKING: Elon & Trump Call Scheduled",
      description: "ELON MUSK AND DONALD TRUMP ARE SCHEDULED TO SPEAK ON A CALL TODAY. Elon said he will stream it on X",
      views: "23K views",
      time: "4h ago", 
      twitterLink: "https://x.com/AltcoinGordon/status/1930944277451800643", // Replace with actual Twitter link
      image: "/Rumours.png"
    },
    {
      id: 4,
      title: "🚀 SpaceX vs Politics: The Ultimate Showdown",
      description: "Community rallies behind the beef as $BEEF token gains momentum amid the epic showdown between tech and politics",
      views: "12M views",
      time: "2h ago",
      twitterLink: "https://x.com/elonmusk/status/1930718684819112251", // Replace with actual Twitter link  
      image: "/Fireback.png"
    }
  ];

  const handleNewsClick = (twitterLink) => {
    if (twitterLink && twitterLink !== "#") {
      window.open(twitterLink, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <section id="beef-meter" className="py-20 bg-gradient-to-br from-gray-900 to-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500 mb-4">
            Live Beef-o-Meter
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Real-time tracking of the epic battle between tech and politics
          </p>
        </div>

        {showVoteMessage && (
          <div className="fixed top-20 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-6 py-3 rounded-full font-bold z-50">
            Vote cast successfully! 🎉
          </div>
        )}

        <div className="max-w-6xl mx-auto">
          <div className="bg-black/50 backdrop-blur-md rounded-3xl p-8 border border-orange-500/30 mb-12">
            <div className="text-center mb-8">
              <div className="text-3xl font-bold text-white mb-2">Current Beef Level</div>
              <div className="text-6xl font-black text-orange-400">{beefLevel}%</div>
              <div className="text-xl text-gray-300">
                Winner: <span className={`font-bold ${winner === 'Elon' ? 'text-blue-400' : 'text-red-400'}`}>{winner}</span>
              </div>
            </div>

            <div className="relative h-8 bg-gray-800 rounded-full overflow-hidden mb-8">
              <div 
                className="absolute left-0 top-0 h-full bg-gradient-to-r from-orange-500 to-red-600 transition-all duration-1000 ease-out"
                style={{ width: `${beefLevel}%` }}
              ></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <Flame className="text-white w-6 h-6" />
              </div>
            </div>

            <div className="flex justify-center space-x-8 mb-8">
              <button 
                onClick={() => handleVote('Elon')}
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-4 rounded-full text-lg transition-all duration-300 transform hover:scale-105"
              >
                Vote Elon
              </button>
              <button 
                onClick={() => handleVote('Trump')}
                className="bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-4 rounded-full text-lg transition-all duration-300 transform hover:scale-105"
              >
                Vote Trump
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="text-center p-6 bg-blue-900/30 rounded-2xl border border-blue-500/30">
                <Rocket className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-blue-400 mb-2">Elon Musk</h3>
                <div className="space-y-2 text-gray-300">
                  <div>SpaceX Launches: 42</div>
                  <div>X Posts Today: 23</div>
                  <div>Beef Score: {winner === 'Elon' ? beefLevel : 100 - beefLevel}</div>
                </div>
              </div>

              <div className="text-center p-6 bg-red-900/30 rounded-2xl border border-red-500/30">
                <Twitter className="w-12 h-12 text-red-400 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-red-400 mb-2">Donald Trump</h3>
                <div className="space-y-2 text-gray-300">
                  <div>Truth Posts: 15</div>
                  <div>Rallies Planned: 8</div>
                  <div>Beef Score: {winner === 'Trump' ? beefLevel : 100 - beefLevel}</div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-black/50 backdrop-blur-md rounded-3xl p-8 border border-orange-500/30">
            <h3 className="text-3xl font-bold text-white mb-6 flex items-center">
              <Twitter className="mr-3 text-orange-400" />
              Latest Beef News & Screenshots
            </h3>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {newsItems.map((item) => (
                <div 
                  key={item.id}
                  onClick={() => handleNewsClick(item.twitterLink)}
                  className="bg-gray-800/50 rounded-2xl overflow-hidden border border-gray-700/50 hover:border-orange-500/50 transition-all duration-300 cursor-pointer group"
                >
                  <div className="relative">
                    <img 
                      src={item.image}
                      alt={item.title}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 right-4 bg-black/70 rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <ExternalLink className="w-4 h-4 text-orange-400" />
                    </div>
                  </div>
                  <div className="p-6">
                    <h4 className="text-white font-bold text-lg mb-3 group-hover:text-orange-400 transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                      {item.description}
                    </p>
                    <div className="flex items-center justify-between text-gray-400 text-sm">
                      <span className="flex items-center">
                        <span className="w-2 h-2 bg-orange-400 rounded-full mr-2"></span>
                        {item.views}
                      </span>
                      <span>{item.time}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 bg-gradient-to-r from-orange-900/20 to-red-900/20 rounded-2xl p-6 border border-orange-500/20">
              <h4 className="text-2xl font-bold text-white mb-4 text-center">
                🔥 Breaking Beef Updates 
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-black/30 rounded-xl p-4">
                  <div className="text-orange-400 font-bold mb-2">Latest Drama:</div>
                  <div className="text-gray-300 text-sm">
                    Elon drops Epstein bombshell targeting Trump, sparking massive social media reaction
                  </div>
                </div>
                <div className="bg-black/30 rounded-xl p-4">
                  <div className="text-blue-400 font-bold mb-2">Community Impact:</div>
                  <div className="text-gray-300 text-sm">
                    $BEEF token holders rally as the ultimate tech vs politics showdown unfolds
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-orange-900/30 rounded-xl border border-orange-500/20">
                <div className="text-3xl font-bold text-orange-400 mb-2">500M+</div>
                <div className="text-gray-300 font-medium">Total Tweet Views</div>
                <div className="text-gray-500 text-sm mt-1">Across all platforms</div>
              </div>
              <div className="text-center p-6 bg-blue-900/30 rounded-xl border border-blue-500/20">
                <div className="text-3xl font-bold text-blue-400 mb-2">73%</div>
                <div className="text-gray-300 font-medium">Elon Support</div>
                <div className="text-gray-500 text-sm mt-1">Community votes</div>
              </div>
              <div className="text-center p-6 bg-red-900/30 rounded-xl border border-red-500/20">
                <div className="text-3xl font-bold text-red-400 mb-2">27%</div>
                <div className="text-gray-300 font-medium">Trump Support</div>
                <div className="text-gray-500 text-sm mt-1">Community votes</div>
              </div>
            </div>

            <div className="mt-8 text-center">
              <div className="inline-flex items-center bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-full px-6 py-3 border border-orange-500/30">
                <Flame className="w-5 h-5 text-orange-400 mr-2" />
                <span className="text-white font-medium">Click any post above to view on Twitter/X</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeefMeter;