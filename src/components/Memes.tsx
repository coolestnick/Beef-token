import React, { useState } from 'react';
import { Heart, MessageCircle, Share, Trophy, Flame, X } from 'lucide-react';

const Memes = () => {
  const [showSubmitDialog, setShowSubmitDialog] = useState(false);
  const [memeTitle, setMemeTitle] = useState('');
  const [memeImage, setMemeImage] = useState('');
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const memes = [
    {
      id: 1,
      title: "Elon vs Trump Showdown",
      image: "/ChatGPT Image Jun 6, 2025, 02_55_40 PM.png",
      likes: 42069,
      comments: 1337,
      shares: 420,
      author: "BeefMaster69",
      prize: "500 $BEEF"
    },
    {
      id: 2,
      title: "The Epic Standoff",
      image: "/ChatGPT Image Jun 6, 2025, 02_57_38 PM.png",
      likes: 69420,
      comments: 2024,
      shares: 888,
      author: "MemeGod420",
      prize: "1000 $BEEF"
    }
  ];

  const slogans = [
    "More Drama Than Wall Street Bets",
    "Decentralized Drama, Tokenized Chaos",
    "Built on Copium, Fueled by Beef",
    "Not Financial Advice. Just Family Feud.",
    "Where Rockets Fall and Tweets Spark Wars"
  ];

  const handleSubmitMeme = () => {
    if (memeTitle.trim()) {
      setShowSubmitDialog(false);
      setMemeTitle('');
      setMemeImage('');
      setShowSuccessMessage(true);
      setTimeout(() => setShowSuccessMessage(false), 3000);
    }
  };

  return (
    <section id="memes" className="py-20 bg-gradient-to-br from-gray-900 via-black to-orange-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500 mb-4">
            Meme War Zone
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            The battlefield where creativity meets chaos. Submit your best memes and win $BEEF!
          </p>
        </div>

        {showSuccessMessage && (
          <div className="fixed top-20 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-6 py-3 rounded-full font-bold z-50">
            Meme submitted successfully! 🎉
          </div>
        )}

        {/* Submit Dialog */}
        {showSubmitDialog && (
          <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
            <div className="bg-gray-900 rounded-2xl p-8 max-w-md w-full border border-orange-500/30">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold text-white">Submit Your Meme</h3>
                <button 
                  onClick={() => setShowSubmitDialog(false)}
                  className="text-gray-400 hover:text-white"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-gray-300 mb-2">Meme Title</label>
                  <input
                    type="text"
                    value={memeTitle}
                    onChange={(e) => setMemeTitle(e.target.value)}
                    className="w-full bg-gray-800 text-white px-4 py-2 rounded-lg border border-gray-700 focus:border-orange-500 focus:outline-none"
                    placeholder="Enter your meme title..."
                  />
                </div>
                
                <div>
                  <label className="block text-gray-300 mb-2">Image URL (optional)</label>
                  <input
                    type="text"
                    value={memeImage}
                    onChange={(e) => setMemeImage(e.target.value)}
                    className="w-full bg-gray-800 text-white px-4 py-2 rounded-lg border border-gray-700 focus:border-orange-500 focus:outline-none"
                    placeholder="Paste image URL..."
                  />
                </div>
                
                <button
                  onClick={handleSubmitMeme}
                  className="w-full bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white font-bold py-3 rounded-lg transition-all duration-300"
                >
                  Submit Meme
                </button>
              </div>
            </div>
          </div>
        )}

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {memes.map((meme) => (
              <div key={meme.id} className="bg-black/50 backdrop-blur-md rounded-3xl overflow-hidden border border-orange-500/30 hover:border-orange-500/60 transition-all duration-300 transform hover:scale-105">
                <div className="relative">
                  <img 
                    src={meme.image} 
                    alt={meme.title}
                    className="w-full h-80 object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-orange-500 text-black px-3 py-1 rounded-full font-bold text-sm flex items-center">
                    <Trophy className="w-4 h-4 mr-1" />
                    {meme.prize}
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{meme.title}</h3>
                  <p className="text-gray-400 mb-4">by @{meme.author}</p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-6">
                      <div className="flex items-center space-x-2 text-red-400">
                        <Heart className="w-5 h-5" />
                        <span>{meme.likes.toLocaleString()}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-blue-400">
                        <MessageCircle className="w-5 h-5" />
                        <span>{meme.comments.toLocaleString()}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-green-400">
                        <Share className="w-5 h-5" />
                        <span>{meme.shares}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-black/50 backdrop-blur-md rounded-3xl p-8 border border-orange-500/30 mb-16">
            <h3 className="text-3xl font-bold text-white mb-8 text-center flex items-center justify-center">
              <Flame className="mr-3 text-orange-400" />
              Community Slogans
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {slogans.map((slogan, index) => (
                <div key={index} className="bg-gradient-to-br from-orange-900/30 to-red-900/30 rounded-2xl p-6 border border-orange-500/20 text-center">
                  <p className="text-white font-bold text-lg">{slogan}</p>
                </div>
              ))}
            </div>
          </div>

          

          <div className="bg-gradient-to-br from-purple-900/50 to-pink-900/50 rounded-3xl p-8 border border-purple-500/30">
            <div className="text-center">
              <h3 className="text-3xl font-bold text-white mb-4">#BeefBattleFriday</h3>
              <p className="text-xl text-gray-300 mb-8">
                Submit your best Musk vs Trump memes every Friday. Top voted meme gets 500 $BEEF!
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-purple-400">500+</div>
                  <div className="text-gray-300">Memes Submitted</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-purple-400">50K</div>
                  <div className="text-gray-300">$BEEF Distributed</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-purple-400">24h</div>
                  <div className="text-gray-300">Until Next Contest</div>
                </div>
              </div>

              <button 
                onClick={() => setShowSubmitDialog(true)}
                className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white font-bold px-8 py-4 rounded-full text-lg transition-all duration-300 transform hover:scale-105"
              >
                Submit Your Meme
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Memes;