import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative bg-[#0b1a2e] overflow-hidden">
      {/* Background overlay for texture/gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0b1a2e] via-[#0b1a2e]/90 to-transparent z-10" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 pt-16 pb-20 lg:pt-24 lg:pb-28">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          
          {/* Left Content */}
          <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
            <div className="mb-4">
              <Image src="/logo.svg" alt="Deal 360 Logo" width={160} height={48} className="object-contain brightness-0 invert" priority />
            </div>
            <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl lg:text-7xl">
              <span className="block">WORLD CUP</span>
              <span className="block" style={{color: '#F88379'}}>CHALLENGE</span>
            </h1>
            <p className="mt-6 text-xl text-gray-300 sm:text-2xl font-light">
              <span className="font-bold" style={{color: '#7FFFD4'}}>Win 12 months free</span><br/>
              <span className="text-gray-300">If your team win the World Cup , you win a prize. We also have prizes for 2nd place and 3rd place too.</span>
            </p>
            <div className="mt-8 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left lg:mx-0 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="https://deal360.ae/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-center bg-red-400 hover:bg-red-500 text-white font-bold py-4 px-8 rounded-md transition duration-300 shadow-lg text-sm sm:text-base tracking-wide"
              >
                JOIN FOR FREE
              </a>
              <a href="https://deal360.ae/en#plan" target="_blank" rel="noopener noreferrer" className="bg-transparent border-2 border-gray-600 text-white hover:bg-gray-800 font-bold py-4 px-8 rounded-md transition duration-300 text-sm sm:text-base tracking-wide text-center">
                VIEW PLANS
              </a>
            </div>
            
            {/* Small info text */}
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6 text-sm text-gray-400">
              <div className="flex items-center">
                <svg className="w-5 h-5 mr-2" style={{color: '#7FFFD4'}} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
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
                <div className="bg-[#112240] rounded-xl border border-gray-700 shadow-2xl overflow-hidden w-full max-w-md mx-auto relative z-20">
                  <div className="flex flex-col p-6 gap-6">
                    <div className="flex items-center">
                      <span className="text-3xl mr-4">🏆</span>
                      <span className="text-white text-lg"><span className="font-bold">World Cup Winner</span> = 12 Months FREE</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-3xl mr-4">🥈</span>
                      <span className="text-white text-lg"><span className="font-bold">Runner-Up</span> = 6 Months FREE</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-3xl mr-4">🥉</span>
                      <span className="text-white text-lg"><span className="font-bold">Third Place</span> = 3 Months FREE</span>
                    </div>
                    <div className="mt-2 text-sm text-gray-400">
                      * <span className="font-bold">Eligibility</span> You must have joined before the knockout stages.
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
