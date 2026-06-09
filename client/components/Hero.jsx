import React from 'react';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative bg-[#0b1a2e] overflow-hidden">
      {/* Background overlay for texture/gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0b1a2e] via-[#0b1a2e]/90 to-transparent z-10" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 pt-16 pb-20 lg:pt-24 lg:pb-28">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          
          {/* Left Content */}
          <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
            <h2 className="text-sm font-semibold text-red-400 tracking-wider uppercase mb-2">
              Deal360
            </h2>
            <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl lg:text-7xl">
              <span className="block">WORLD CUP</span>
              <span className="block text-red-400">CHALLENGE</span>
            </h1>
            <p className="mt-6 text-xl text-gray-300 sm:text-2xl font-light">
              One tournament. Two chances.<br/>
              Win up to <span className="font-bold text-[#2DD4BF]">12 months FREE</span> Deal360.
            </p>
            <div className="mt-8 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left lg:mx-0 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                href="/join"
                className="inline-block text-center bg-red-400 hover:bg-red-500 text-white font-bold py-4 px-8 rounded-md transition duration-300 shadow-lg text-sm sm:text-base tracking-wide"
              >
                JOIN NOW - IT&apos;S FREE
              </Link>
              <button className="bg-transparent border-2 border-gray-600 text-white hover:bg-gray-800 font-bold py-4 px-8 rounded-md transition duration-300 text-sm sm:text-base tracking-wide">
                VIEW PRIZES
              </button>
            </div>
            
            {/* Small info text */}
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6 text-sm text-gray-400">
              <div className="flex items-center">
                <svg className="w-5 h-5 text-[#2DD4BF] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                One prize per member
              </div>
              <div className="hidden sm:block text-gray-600">•</div>
              <div className="flex items-center">
                Teams are final
              </div>
              <div className="hidden sm:block text-gray-600">•</div>
              <div className="flex items-center">
                Prizes apply to your active plan
              </div>
            </div>
          </div>
          
          {/* Right Content - Trophy & Prize Box */}
          <div className="mt-16 sm:mt-24 lg:mt-0 lg:col-span-6 relative">
             <div className="flex flex-col items-center justify-center relative h-full">
                {/* We use a placeholder image or a trophy image if available. Since it's a mock, we can style the prize box prominently */}
                <div className="bg-[#112240] rounded-xl border border-gray-700 shadow-2xl overflow-hidden w-full max-w-md mx-auto relative z-20">
                  <div className="p-6 text-center border-b border-gray-700">
                    <h3 className="text-gray-300 text-sm font-semibold uppercase tracking-wider">The earlier you join,</h3>
                    <h2 className="text-[#2DD4BF] text-xl sm:text-2xl font-bold uppercase mt-1">The bigger the prize</h2>
                  </div>
                  <div className="flex flex-col">
                    {/* Tier 1 */}
                    <div className="flex items-center p-4 border-b border-gray-700 bg-gray-800/30">
                      <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-yellow-500/20 rounded-full">
                         🏆
                      </div>
                      <div className="ml-4">
                        <p className="text-xs text-gray-400 font-medium uppercase">Before Kick-Off</p>
                        <p className="text-yellow-500 font-bold text-lg">12 Months FREE</p>
                      </div>
                    </div>
                    {/* Tier 2 */}
                    <div className="flex items-center p-4 border-b border-gray-700 bg-blue-900/20">
                      <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-blue-500/20 rounded-full">
                         ⚽
                      </div>
                      <div className="ml-4">
                        <p className="text-xs text-gray-400 font-medium uppercase">Group Stage</p>
                        <p className="text-[#2DD4BF] font-bold text-lg">6 Months FREE</p>
                      </div>
                    </div>
                    {/* Tier 3 */}
                    <div className="flex items-center p-4 border-b border-gray-700 bg-green-900/20">
                      <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-green-500/20 rounded-full">
                         🥈
                      </div>
                      <div className="ml-4">
                        <p className="text-xs text-gray-400 font-medium uppercase">Quarter Finals</p>
                        <p className="text-green-400 font-bold text-lg">3 Months FREE</p>
                      </div>
                    </div>
                    {/* Tier 4 */}
                    <div className="flex items-center p-4 bg-purple-900/20">
                      <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-purple-500/20 rounded-full">
                         🥉
                      </div>
                      <div className="ml-4">
                        <p className="text-xs text-gray-400 font-medium uppercase">Semi Finals</p>
                        <p className="text-purple-400 font-bold text-lg">1 Month FREE</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Trophy image behind */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -z-10 w-[120%] opacity-30 pointer-events-none">
                  {/* Using the provided reference image as a decorative background */}
                  <img src="/references/WhatsApp Image 2026-06-08 at 11.56.24 PM.jpeg" alt="Trophy" className="w-full h-auto object-cover blur-sm" />
                </div>
             </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
