import React from 'react';

export default function BottomBanner() {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#0b1a2e] rounded-xl overflow-hidden relative shadow-lg">
          
          {/* Background decoration */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0b1a2e] via-[#0b1a2e]/90 to-transparent z-10" />
          
          {/* The soccer ball in bottom right could go here if we had the image. Using a subtle gradient instead */}
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl transform translate-x-1/4 translate-y-1/4 z-0"></div>
          
          <div className="relative z-20 py-12 px-8 sm:px-12 lg:px-16 flex flex-col md:flex-row items-center justify-between">
            <div className="text-center md:text-left mb-8 md:mb-0">
              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-wide leading-tight">
                <span className="block">One Team. One Tournament.</span>
                <span className="block mt-1">One Chance to <span style={{color: '#F88379'}}>Win Big.</span></span>
              </h2>
              <p className="mt-3 text-gray-400 text-sm sm:text-base font-medium">
                Join Early. Build Early. Win Bigger.
              </p>
            </div>
            
            <div className="flex-shrink-0">
              <a
                href="https://deal360.ae/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-red-400 hover:bg-red-500 text-white font-bold py-4 px-8 rounded-md transition duration-300 shadow-lg whitespace-nowrap"
              >
                Join Deal 360 Today
              </a>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
