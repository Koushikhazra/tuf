import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Calendar, Sparkles } from 'lucide-react';

const MonthDisplay = ({ month, year, onPrevMonth, onNextMonth, theme }) => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const monthName = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'][month];

  // Month themes with background images from Unsplash and fallback gradients
  const monthThemes = [
    { 
      name: 'Winter Wonderland', 
      emoji: '❄️', 
      gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)',
      bgImage: `url('https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=1600&h=400&fit=crop')`,
      accent: '#4c72e8'
    },
    { 
      name: 'Love Month', 
      emoji: '💕', 
      gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 50%, #ff6b9d 100%)',
      bgImage: `url('https://images.unsplash.com/photo-1518895949257-7621c3c786d7?w=1600&h=400&fit=crop')`,
      accent: '#ff1493'
    },
    { 
      name: 'Spring Awakening', 
      emoji: '🌸', 
      gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 50%, #43e97b 100%)',
      bgImage: `url('https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=1600&h=400&fit=crop')`,
      accent: '#00d4ff'
    },
    { 
      name: 'Spring Flowers', 
      emoji: '🌼', 
      gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 40%, #ffa502 100%)',
      bgImage: `url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1600&h=400&fit=crop')`,
      accent: '#ff69b4'
    },
    { 
      name: 'Summer Vibes', 
      emoji: '☀️', 
      gradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 50%, #30cfd0 100%)',
      bgImage: `url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1600&h=400&fit=crop')`,
      accent: '#ffd700'
    },
    { 
      name: 'Tropical Paradise', 
      emoji: '🌺', 
      gradient: 'linear-gradient(135deg, #30cfd0 0%, #330867 40%, #ff6b9d 100%)',
      bgImage: `url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1600&h=400&fit=crop')`,
      accent: '#ff1493'
    },
    { 
      name: 'Beach Days', 
      emoji: '🏖️', 
      gradient: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 50%, #ffd89b 100%)',
      bgImage: `url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1600&h=400&fit=crop')`,
      accent: '#ff69b4'
    },
    { 
      name: 'Golden Hour', 
      emoji: '🌅', 
      gradient: 'linear-gradient(135deg, #ff9a56 0%, #ff6a88 50%, #ffa502 100%)',
      bgImage: `url('https://images.unsplash.com/photo-1495567720989-cebdbdd97913?w=1600&h=400&fit=crop')`,
      accent: '#ff8c00'
    },
    { 
      name: 'Starry Night', 
      emoji: '⭐', 
      gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)',
      bgImage: `url('https://images.unsplash.com/photo-1526234603803-437b6cb73d7b?w=1600&h=400&fit=crop')`,
      accent: '#4169e1'
    },
    { 
      name: 'Autumn Gold', 
      emoji: '🍂', 
      gradient: 'linear-gradient(135deg, #f5af19 0%, #f12711 50%, #ff6a00 100%)',
      bgImage: `url('https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1600&h=400&fit=crop')`,
      accent: '#ff8c00'
    },
    { 
      name: 'Harvest Moon', 
      emoji: '🎃', 
      gradient: 'linear-gradient(135deg, #eb3349 0%, #f45c43 50%, #ffa500 100%)',
      bgImage: `url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1600&h=400&fit=crop')`,
      accent: '#ff6347'
    },
    { 
      name: 'Festive Cheer', 
      emoji: '🎄', 
      gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 40%, #f093fb 100%)',
      bgImage: `url('https://images.unsplash.com/photo-1512874691951-586e12c8ff0d?w=1600&h=400&fit=crop')`,
      accent: '#ff1493'
    },
  ];

  const currentTheme = monthThemes[month];
  const hours = String(time.getHours()).padStart(2, '0');
  const minutes = String(time.getMinutes()).padStart(2, '0');

  return (
    <div 
      className="relative w-full overflow-hidden rounded-3xl shadow-2xl mb-8 transform hover:shadow-3xl transition-all duration-300 animate-bounce-slow"
      style={{
        background: currentTheme.gradient,
        minHeight: '380px',
        boxShadow: '0 25px 60px rgba(0,0,0,0.3)',
        animation: 'slideInTop 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)'
      }}
    >
      {/* Background image with overlay */}
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: currentTheme.bgImage,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      />

      {/* Gradient overlays for depth */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/20 opacity-40" />
      <div className="absolute inset-0 backdrop-blur-[0.5px]" />

      {/* Main content */}
      <div className="relative h-full flex flex-col justify-between p-6 md:p-10 text-white">
        
        {/* Top Section - Month info and controls */}
        <div className="flex items-start justify-between mb-6">
          {/* Left - Month and Date info */}
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-6xl md:text-7xl filter drop-shadow-lg">{currentTheme.emoji}</span>
              <div>
                <h1 className="text-4xl md:text-5xl font-black filter drop-shadow-lg leading-tight">
                  {monthName}
                </h1>
                <p className="text-xl md:text-2xl font-bold opacity-90 filter drop-shadow-md">{year}</p>
              </div>
            </div>
            <p className="text-base md:text-lg font-semibold opacity-85 filter drop-shadow-md mt-1 max-w-xs">
              {currentTheme.name}
            </p>
          </div>

          {/* Right - Time display */}
          <div className="bg-white/20 backdrop-blur-xl rounded-2xl p-5 border-2 border-white/40 shadow-2xl text-right">
            <div className="flex items-center justify-end gap-2 mb-1">
              <Calendar className="w-6 h-6" />
              <span className="font-mono text-lg font-black">{hours}:{minutes}</span>
            </div>
            <div className="text-xs font-bold opacity-80">Current Time</div>
          </div>
        </div>

        {/* Bottom Section - Navigation and status */}
        <div className="flex items-end justify-between gap-4">
          
          {/* Left - Navigation buttons */}
          <div className="flex gap-3">
            <button
              onClick={onPrevMonth}
              className={`p-4 md:p-5 rounded-2xl font-bold transition-all duration-200 hover:scale-110 active:scale-95 transform shadow-2xl backdrop-blur-xl border-2 ${
                theme === 'dark'
                  ? 'bg-blue-500/40 border-blue-300/50 text-white hover:bg-blue-500/60 hover:shadow-blue-500/50'
                  : 'bg-white/20 border-white/40 text-white hover:bg-white/30 hover:shadow-white/50'
              }`}
              aria-label="Previous month"
              title="Previous month"
            >
              <ChevronLeft className="w-7 h-7" />
            </button>

            <button
              onClick={onNextMonth}
              className={`p-4 md:p-5 rounded-2xl font-bold transition-all duration-200 hover:scale-110 active:scale-95 transform shadow-2xl backdrop-blur-xl border-2 ${
                theme === 'dark'
                  ? 'bg-green-500/40 border-green-300/50 text-white hover:bg-green-500/60 hover:shadow-green-500/50'
                  : 'bg-white/20 border-white/40 text-white hover:bg-white/30 hover:shadow-white/50'
              }`}
              aria-label="Next month"
              title="Next month"
            >
              <ChevronRight className="w-7 h-7" />
            </button>
          </div>

          {/* Right - Info pills */}
          <div className="flex items-center gap-2 bg-white/15 backdrop-blur-xl rounded-2xl px-5 py-3 border-2 border-white/30 shadow-xl">
            <Sparkles className="w-6 h-6" />
            <span className="font-bold hidden sm:inline">Plan Your Month</span>
            <span className="font-bold sm:hidden">Plan</span>
          </div>
        </div>
      </div>

      {/* Animated shimmer effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-pulse rounded-3xl pointer-events-none" />
    </div>
  );
};

export default MonthDisplay;
