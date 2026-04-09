import React, { useState, useEffect } from 'react';
import { Calendar, Clock, Sparkles } from 'lucide-react';

const HeroImage = ({ month, year, isDark }) => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  // Month themes with vibrant colors and detailed descriptions
  const monthThemes = [
    { name: 'Winter Wonderland', emoji: '❄️', gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 60%, #f093fb 100%)', secondary: '#4c72e8' },
    { name: 'Love Month', emoji: '💕', gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 50%, #ff6b9d 100%)', secondary: '#ff1493' },
    { name: 'Spring Awakening', emoji: '🌸', gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 50%, #43e97b 100%)', secondary: '#00d4ff' },
    { name: 'Cherry Blossoms', emoji: '🌷', gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 40%, #ffa502 100%)', secondary: '#ff69b4' },
    { name: 'Summer Vibes', emoji: '🌻', gradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 50%, #30cfd0 100%)', secondary: '#ffd700' },
    { name: 'Tropical Paradise', emoji: '🌺', gradient: 'linear-gradient(135deg, #30cfd0 0%, #330867 40%, #ff6b9d 100%)', secondary: '#ff1493' },
    { name: 'Beach Days', emoji: '🏖️', gradient: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 50%, #ffd89b 100%)', secondary: '#ff69b4' },
    { name: 'Golden Hour', emoji: '🌅', gradient: 'linear-gradient(135deg, #ff9a56 0%, #ff6a88 50%, #ffa502 100%)', secondary: '#ff8c00' },
    { name: 'Starry Night', emoji: '⭐', gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)', secondary: '#4169e1' },
    { name: 'Autumn Gold', emoji: '🍂', gradient: 'linear-gradient(135deg, #f5af19 0%, #f12711 50%, #ff6a00 100%)', secondary: '#ff8c00' },
    { name: 'Harvest Moon', emoji: '🎃', gradient: 'linear-gradient(135deg, #eb3349 0%, #f45c43 50%, #ffa500 100%)', secondary: '#ff6347' },
    { name: 'Festive Cheer', emoji: '🎄', gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 40%, #f093fb 100%)', secondary: '#ff1493' },
  ];

  const theme = monthThemes[month];

  // Generate decorative background patterns with more visual richness
  const generateBackground = () => {
    const bgPatterns = [
      // January - Snow texture  
      `<defs><pattern id="bg" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse"><circle cx="30" cy="30" r="3" fill="white" opacity="0.2"/><circle cx="70" cy="50" r="2" fill="white" opacity="0.15"/><circle cx="50" cy="80" r="3.5" fill="white" opacity="0.18"/></pattern></defs><rect width="100%" height="100%" fill="url(#bg)"/>`,
      
      // February - Heart patterns
      `<defs><pattern id="bg" x="0" y="0" width="120" height="120" patternUnits="userSpaceOnUse"><g opacity="0.15"><path d="M60 100 C30 80 10 60 10 40 C10 25 20 15 30 15 C40 15 50 25 60 35 C70 25 80 15 90 15 C100 15 110 25 110 40 C110 60 90 80 60 100 Z" fill="white"/></g></pattern></defs><rect width="100%" height="100%" fill="url(#bg)"/>`,
      
      // March - Rain texture
      `<defs><pattern id="bg" x="0" y="0" width="80" height="120" patternUnits="userSpaceOnUse"><line x1="20" y1="0" x2="20" y2="30" stroke="white" stroke-width="1.5" opacity="0.15"/><line x1="50" y1="20" x2="50" y2="50" stroke="white" stroke-width="1.5" opacity="0.15"/><line x1="70" y1="40" x2="70" y2="70" stroke="white" stroke-width="1.5" opacity="0.15"/></pattern></defs><rect width="100%" height="100%" fill="url(#bg)"/>`,
      
      // April - Flower petals
      `<defs><pattern id="bg" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse"><g opacity="0.15"><circle cx="50" cy="50" r="30" fill="none" stroke="white" stroke-width="1"/><circle cx="50" cy="30" r="3" fill="white"/><circle cx="65" cy="45" r="3" fill="white"/><circle cx="50" cy="60" r="3" fill="white"/></g></pattern></defs><rect width="100%" height="100%" fill="url(#bg)"/>`,
      
      // May - Butterfly shapes
      `<defs><pattern id="bg" x="0" y="0" width="120" height="100" patternUnits="userSpaceOnUse"><g opacity="0.15"><ellipse cx="30" cy="50" rx="6" ry="12" fill="white"/><ellipse cx="50" cy="50" rx="6" ry="12" fill="white"/><line x1="40" y1="40" x2="40" y2="60" stroke="white" stroke-width="1"/></g></pattern></defs><rect width="100%" height="100%" fill="url(#bg)"/>`,
      
      // June - Sun rays
      `<defs><radialGradient id="bg"><stop offset="0%" style="stop-color:white;stop-opacity:0.15" /><stop offset="100%" style="stop-color:white;stop-opacity:0" /></radialGradient></defs><circle cx="90%" cy="15%" r="150" fill="url(#bg)"/>`,
      
      // July - Stars cluster
      `<defs><pattern id="bg" x="0" y="0" width="150" height="150" patternUnits="userSpaceOnUse"><g opacity="0.15"><polygon points="50,25 55,40 70,40 60,50 65,65 50,55 35,65 40,50 30,40 45,40" fill="white"/><polygon points="120,100 123,110 135,110 127,117 130,127 120,120 110,127 113,117 105,110 117,110" fill="white"/></g></pattern></defs><rect width="100%" height="100%" fill="url(#bg)"/>`,
      
      // August - Waves pattern
      `<defs><pattern id="bg" x="0" y="0" width="120" height="80" patternUnits="userSpaceOnUse"><path d="M0 40 Q30 20 60 40 T120 40" stroke="white" stroke-width="2" fill="none" opacity="0.15"/><path d="M0 60 Q30 40 60 60 T120 60" stroke="white" stroke-width="1.5" fill="none" opacity="0.1"/></pattern></defs><rect width="100%" height="100%" fill="url(#bg)"/>`,
      
      // September - Leaf patterns
      `<defs><pattern id="bg" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse"><g opacity="0.15"><path d="M30 20 Q40 40 30 60 Q20 40 30 20" fill="white"/><path d="M70 50 Q80 70 70 90 Q60 70 70 50" fill="white"/></g></pattern></defs><rect width="100%" height="100%" fill="url(#bg)"/>`,
      
      // October - Pumpkin shapes
      `<defs><pattern id="bg" x="0" y="0" width="120" height="120" patternUnits="userSpaceOnUse"><g opacity="0.15"><circle cx="60" cy="60" r="20" fill="white"/><circle cx="45" cy="50" r="4" fill="white"/><line x1="60" y1="35" x2="60" y2="25" stroke="white" stroke-width="2"/></g></pattern></defs><rect width="100%" height="100%" fill="url(#bg)"/>`,
      
      // November - Turkey/Feather patterns
      `<defs><pattern id="bg" x="0" y="0" width="120" height="100" patternUnits="userSpaceOnUse"><g opacity="0.15"><circle cx="50" cy="40" r="12" fill="white"/><path d="M30 50 L40 55 L30 60" fill="white"/></g></pattern></defs><rect width="100%" height="100%" fill="url(#bg)"/>`,
      
      // December - Multiple snowflakes
      `<defs><pattern id="bg" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse"><g opacity="0.15"><line x1="50" y1="25" x2="50" y2="75" stroke="white" stroke-width="1"/><line x1="25" y1="50" x2="75" y2="50" stroke="white" stroke-width="1"/><line x1="30" y1="30" x2="70" y2="70" stroke="white" stroke-width="1"/></g></pattern></defs><rect width="100%" height="100%" fill="url(#bg)"/>`,
    ];
    return bgPatterns[month];
  };

  const hours = String(time.getHours()).padStart(2, '0');
  const minutes = String(time.getMinutes()).padStart(2, '0');
  const seconds = String(time.getSeconds()).padStart(2, '0');

  return (
    <div 
      className="relative w-full h-72 md:h-96 overflow-hidden rounded-2xl shadow-2xl transform hover:shadow-3xl transition-all duration-300"
      style={{
        background: theme.gradient,
        boxShadow: '0 20px 60px rgba(0,0,0,0.3)'
      }}
    >
      {/* Animated background elements with static images */}
      <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none" dangerouslySetInnerHTML={{__html: generateBackground()}} />

      {/* Gradient overlay with depth */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/20 opacity-30" />


      {/* Content */}
      <div className="relative h-full flex flex-col justify-between p-6 md:p-8 text-white">
        {/* Header */}
        <div className="flex justify-between items-start">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-5xl md:text-6xl">{theme.emoji}</span>
              <h2 className="text-4xl md:text-5xl font-black drop-shadow-lg">
                {['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'][month]}
              </h2>
            </div>
            <p className="text-lg opacity-95 font-semibold drop-shadow">{year}</p>
            <p className="text-sm opacity-80 mt-1 font-medium">{theme.name}</p>
          </div>
          <div className="text-right bg-white/15 backdrop-blur-xl rounded-xl p-4 border border-white/30 shadow-lg">
            <div className="flex items-center justify-end gap-2 mb-2">
              <Clock className="w-5 h-5" />
              <span className="font-mono text-sm font-bold">{hours}:{minutes}:{seconds}</span>
            </div>
            <div className="text-xs opacity-75 font-medium">Live Time</div>
          </div>
        </div>

        {/* Footer with calendar info */}
        <div className="flex items-end justify-between">
          <div className="flex items-center gap-2 bg-white/15 backdrop-blur-xl rounded-xl px-4 py-3 border border-white/30 shadow-lg">
            <Sparkles className="w-5 h-5" />
            <span className="text-sm font-bold">Plan Your Month</span>
          </div>
          <div className="text-right text-sm opacity-85 font-medium drop-shadow">
            <div>📱 Responsive Calendar</div>
            <div className="text-xs opacity-75">Select • Note • Organize</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroImage;
