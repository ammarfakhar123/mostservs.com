import React from 'react';
import { Star } from 'lucide-react';

export default function FeefoValueRibbon() {
  return (
    <div
      className="w-full text-white py-2.5 sm:py-3 px-4 border-y border-white/10 select-none"
      style={{
        background: 'linear-gradient(90deg, #020A38 0%, #071C78 50%, #020A38 100%)',
      }}
    >
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3 text-xs font-bold tracking-wider">
        {/* Left: FLEXIBLE TRAINING SOLUTIONS */}
        <div className="text-white text-xs sm:text-[13px] font-bold tracking-[0.16em] uppercase">
          FLEXIBLE TRAINING SOLUTIONS
        </div>

        {/* Center: feefo Product Rating + 5 star tiles + EXCEPTIONAL */}
        <div className="flex items-center gap-3">
          <div className="flex flex-col text-left leading-none">
            <div className="flex items-center gap-0.5">
              <span className="font-extrabold text-[15px] tracking-tight text-white lowercase">feefo</span>
              <span className="text-[10px] text-white/80 font-bold -mt-1">°°</span>
            </div>
            <span className="text-[8.5px] font-medium text-slate-300 normal-case mt-0.5">Product Rating</span>
          </div>

          {/* 5 White Rounded Star Tiles (4 full, 5th 90% full matching Feefo's 4.8+ rating) */}
          <div className="flex items-center gap-1.5">
            {[0, 1, 2, 3].map((i) => (
              <div
                key={i}
                className="w-5 h-5 rounded-md bg-white flex items-center justify-center shadow-xs"
              >
                <Star className="w-3.5 h-3.5 text-[#071C78] fill-current" />
              </div>
            ))}
            {/* 5th Star: Half / 85% Fill Tile */}
            <div className="relative w-5 h-5 rounded-md bg-white overflow-hidden flex items-center justify-center shadow-xs">
              <Star className="w-3.5 h-3.5 text-[#071C78] fill-current" />
              {/* White right slice simulating 4.8 rating */}
              <div className="absolute right-0 top-0 bottom-0 w-[20%] bg-white/90" />
            </div>
          </div>

          <span className="font-extrabold text-xs sm:text-[13px] tracking-[0.16em] text-white uppercase ml-1">
            EXCEPTIONAL
          </span>
        </div>

        {/* Right: NO HIDDEN FEES */}
        <div className="text-white text-xs sm:text-[13px] font-bold tracking-[0.16em] uppercase">
          NO HIDDEN FEES
        </div>
      </div>
    </div>
  );
}
