import React from 'react';

export default function MembersInfo() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8 items-start">
          
          {/* Left Side: Cards */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12 lg:mb-0">
            
            {/* Free Members Card */}
            <div className="bg-white rounded-xl p-8 text-center shadow-sm border border-gray-100 flex flex-col h-full">
              <h3 className="text-gray-800 font-bold uppercase tracking-wider mb-8 text-sm">Free Members</h3>
              <div className="flex-grow flex flex-col items-center justify-center">
                {/* Random team icon - lottery/draw bowl */}
                <div className="w-24 h-24 bg-[#7FFFD4] rounded-full flex items-center justify-center mb-6">
                  <svg className="w-12 h-12 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2C9 2 6 4 6 7c0 1.5.6 2.8 1.5 3.8L12 22l4.5-11.2C17.4 9.8 18 8.5 18 7c0-3-3-5-6-5z"/>
                    <circle cx="12" cy="7" r="2"/>
                  </svg>
                </div>
                <p className="text-gray-800 font-bold text-lg mb-8">1 Random Team</p>
              </div>
              <button className="w-full bg-[#7FFFD4] hover:bg-teal-500 text-white font-bold py-3 px-4 rounded transition duration-300">
                JOIN FOR FREE
              </button>
            </div>

            {/* Paid Members Card */}
            <div className="bg-red-50 rounded-xl p-8 text-center shadow-sm border border-red-100 flex flex-col h-full">
              <h3 className="text-red-400 font-bold uppercase tracking-wider mb-8 text-sm">Paid Members</h3>
              <div className="flex-grow flex flex-col items-center justify-center">
                <div className="flex items-center justify-center space-x-2 mb-6">
                  {/* Random team icon */}
                  <div className="w-16 h-16 bg-red-400 rounded-full flex items-center justify-center">
                    <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 2C9 2 6 4 6 7c0 1.5.6 2.8 1.5 3.8L12 22l4.5-11.2C17.4 9.8 18 8.5 18 7c0-3-3-5-6-5z"/>
                      <circle cx="12" cy="7" r="2"/>
                    </svg>
                  </div>
                  <span className="text-gray-400 text-2xl font-light">+</span>
                  {/* Select team of choice icon - hand pointing/selecting */}
                  <div className="w-16 h-16 bg-red-400 rounded-full flex items-center justify-center">
                    <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M9 11V6a2 2 0 014 0v5"/>
                      <path d="M13 10a2 2 0 014 0v3"/>
                      <path d="M5 13a2 2 0 014 0v3a4 4 0 004 4h2a4 4 0 004-4v-2"/>
                      <path d="M9 13v-2"/>
                    </svg>
                  </div>
                </div>
                <p className="text-gray-800 font-bold text-lg leading-tight mb-8">
                  1 Random Team<br/>
                  <span className="text-sm font-normal text-gray-600">+ 1 Team of Your Choice</span>
                </p>
              </div>
              <a href="https://deal360.ae/en#plan" target="_blank" rel="noopener noreferrer" className="block text-center w-full bg-red-400 hover:bg-red-500 text-white font-bold py-3 px-4 rounded transition duration-300 shadow-sm">
                VIEW PLANS
              </a>
            </div>

          </div>

          {/* Right Side: Prize Table */}
          <div className="lg:col-span-6 lg:pl-10">
            <h3 className="text-center text-xl font-bold text-gray-900 mb-8 uppercase">Prize Structure</h3>
            
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="divide-y divide-gray-100">
                {/* Row 1 - World Cup Winner */}
                <div className="flex items-center justify-between p-4 bg-white">
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-red-50 flex items-center justify-center mr-3">🏆</div>
                    <span className="font-medium text-gray-700">World Cup Winner</span>
                  </div>
                  <div className="bg-red-400 text-white font-bold py-2 px-6 rounded-sm w-48 text-center text-sm shadow-sm">
                    12 Months FREE
                  </div>
                </div>
                
                {/* Row 2 - Runner-Up */}
                <div className="flex items-center justify-between p-4 bg-white">
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center mr-3">🥈</div>
                    <span className="font-medium text-gray-700">Runner-Up</span>
                  </div>
                  <div className="bg-teal-400 text-white font-bold py-2 px-6 rounded-sm w-48 text-center text-sm shadow-sm">
                    6 Months FREE
                  </div>
                </div>
                
                {/* Row 3 - Third Place */}
                <div className="flex items-center justify-between p-4 bg-white">
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-orange-50 flex items-center justify-center mr-3">🥉</div>
                    <span className="font-medium text-gray-700">Third Place</span>
                  </div>
                  <div className="bg-red-400 text-white font-bold py-2 px-6 rounded-sm w-48 text-center text-sm shadow-sm">
                    3 Months FREE
                  </div>
                </div>
              </div>
            </div>
            
          </div>

        </div>
      </div>
    </section>
  );
}
