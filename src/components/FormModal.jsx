import React, { useState, useEffect } from 'react';
import { X, Target } from 'lucide-react';

const DailyLotteryModal = ({ isOpen, onClose }) => {
  const [timeLeft, setTimeLeft] = useState({ hours: 6, minutes: 1, seconds: 19 });
  const [ticketsSold, setTicketsSold] = useState(8);

  const winners = [
    { name: 'Meena', amount: '₹50,000', game: 'Lottery', time: '1h ago', avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b524?w=40&h=40&fit=crop&crop=face' },
    { name: 'Ankit', amount: '₹25,000', game: 'Jackpot', time: '12m ago', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face' },
    { name: 'Rajesh', amount: '₹10,000', game: 'Teen Patti', time: '2m ago', avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face' },
    { name: 'Priya', amount: '₹5,000', game: 'Ludo', time: '1h ago', avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face' },
    { name: 'Saira', amount: '₹12,500', game: 'Jackpot', time: '1h ago', avatar: 'https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=40&h=40&fit=crop&crop=face' },
    { name: 'Aarav', amount: '₹3,800', game: 'Ludo', time: '8m ago', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=40&h=40&fit=crop&crop=face' }
  ];

  // Countdown Timer
  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  // Tickets Sold Increment
  useEffect(() => {
    const interval = setInterval(() => {
      setTicketsSold(prev => prev + Math.floor(Math.random() * 3));
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/70 z-[2000]">
      <div className="bg-gray-900 text-white rounded-2xl shadow-2xl w-[80%] max-w-6xl relative overflow-hidden">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-400 hover:text-white text-2xl z-20"
        >
          ✕
        </button>

        {/* Main Container */}
        <div className="flex relative overflow-hidden">
          {/* Background decorative elements */}
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-32 h-32 bg-red-500 rounded-full opacity-10 blur-2xl"></div>
            <div className="absolute top-40 right-20 w-40 h-40 bg-purple-500 rounded-full opacity-10 blur-2xl"></div>
            <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-blue-500 rounded-full opacity-10 blur-2xl"></div>
          </div>

          {/* Left Section */}
          <div className=" p-8 relative z-10">
            {/* Header */}
            <div className="flex items-center space-x-4 mb-8">
              <div className="bg-red-600 text-white px-2 py-1 rounded text-xs font-bold">PlayZeIn</div>
              <div className="bg-gradient-to-r from-pink-400 to-pink-600 text-white px-3 py-1 rounded-full font-bold text-xs">
                DAILY LOTTERY
              </div>
            </div>

            {/* Entry Info */}
            <p className="text-gray-300 text-lg mb-8">
              Entries open 7:00 AM — Close 6:00 PM. Winners announced 7:00 PM.
            </p>

            {/* Countdown Timer */}
            <div className="flex items-center space-x-6 mb-8">
              {['hours', 'minutes', 'seconds'].map((unit, idx) => (
                <div key={idx} className="text-center">
                  <div className="text-xs text-gray-400 mb-1">{unit.toUpperCase()}</div>
                  <div className="bg-gradient-to-b from-yellow-300 to-yellow-600 text-black px-4 py-2 font-bold text-xl min-w-[60px] text-center shadow-lg rounded">
                    {String(timeLeft[unit]).padStart(2, '0')}
                  </div>
                  <div className="bg-gradient-to-b from-yellow-400 to-yellow-700 text-black px-4 py-1 font-bold text-lg rounded">
                    {String(timeLeft[unit]).padStart(2, '0')}
                  </div>
                </div>
              ))}
            </div>

            {/* Buttons */}
            <div className="flex items-center space-x-4 mb-8">
              <button className="bg-gradient-to-r from-orange-400 to-orange-600 hover:from-orange-500 hover:to-orange-700 text-white px-6 py-3 font-bold rounded shadow-lg transition transform hover:scale-105">
                Buy Ticket
              </button>
              <button className="text-gray-300 hover:text-white font-bold text-lg transition-colors">
                View Lottery Results
              </button>
            </div>

            {/* Bottom Info */}
            <div className="flex items-center space-x-6 text-gray-300">
              <div className="flex items-center space-x-2">
                <Target className="text-red-500" size={20} />
                <span className="font-bold">Top Prize ₹50,000</span>
              </div>
              <div>
                <span className="font-bold">
                  Tickets sold: <span className="text-orange-400">{ticketsSold}</span>
                </span>
              </div>
            </div>
          </div>

          {/* Right Section - Winners */}
          <div className="w-96 bg-gray-800 p-6">
            <h2 className="text-orange-400 font-bold text-xl mb-1">Recent Winners</h2>
            <p className="text-gray-400 text-sm mb-6">Verified payouts • 1,324</p>

            <div className="space-y-4">
              {winners.map((winner, index) => (
                <div key={index} className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-700 transition-colors ">
                  <img src={winner.avatar} alt={winner.name} className="w-10 h-10 rounded-full object-cover" />
                  <div className="flex-1">
                    <div className="flex items-center space-x-2">
                      <span className="font-bold text-white">{winner.name}</span>
                      <span className="text-orange-400 font-bold">won {winner.amount}</span>
                    </div>
                    <div className="text-gray-400 text-sm">{winner.game} • {winner.time}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default DailyLotteryModal;
