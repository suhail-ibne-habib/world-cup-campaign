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
                <div className="w-24 h-24 bg-[#2DD4BF] rounded-full flex items-center justify-center mb-6">
                   <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path></svg>
                </div>
                <p className="text-gray-800 font-bold text-lg mb-8">1 Random Team</p>
              </div>
              <button className="w-full bg-[#2DD4BF] hover:bg-teal-500 text-white font-bold py-3 px-4 rounded transition duration-300">
                JOIN FOR FREE
              </button>
            </div>

            {/* Paid Members Card */}
            <div className="bg-red-50 rounded-xl p-8 text-center shadow-sm border border-red-100 flex flex-col h-full">
              <h3 className="text-red-400 font-bold uppercase tracking-wider mb-8 text-sm">Paid Members</h3>
              <div className="flex-grow flex flex-col items-center justify-center">
                <div className="flex items-center justify-center space-x-2 mb-6">
                  <div className="w-16 h-16 bg-red-400 rounded-full flex items-center justify-center">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path></svg>
                  </div>
                  <span className="text-gray-400 text-2xl font-light">+</span>
                  <div className="w-16 h-16 bg-red-400 rounded-full flex items-center justify-center">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 10l-4.5-2.5M15 10l4.5-2.5M12 15v5.5M9 10L12 15M15 10L12 15M9 10h6"></path></svg>
                  </div>
                </div>
                <p className="text-gray-800 font-bold text-lg leading-tight mb-8">
                  1 Random Team<br/>
                  <span className="text-sm font-normal text-gray-600">+ 1 Team of Your Choice</span>
                </p>
              </div>
              <button className="w-full bg-red-400 hover:bg-red-500 text-white font-bold py-3 px-4 rounded transition duration-300 shadow-sm">
                VIEW PLANS
              </button>
            </div>

          </div>

          {/* Right Side: Prize Table */}
          <div className="lg:col-span-6 lg:pl-10">
            <h3 className="text-center text-xl font-bold text-gray-900 mb-8 uppercase">Join Early. Win Bigger.</h3>
            
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="grid grid-cols-2 text-sm font-semibold text-gray-500 uppercase tracking-wider p-4 border-b border-gray-100">
                <div>Join Period</div>
                <div className="text-right pr-4">Prize</div>
              </div>
              
              <div className="divide-y divide-gray-100">
                {/* Row 1 */}
                <div className="flex items-center justify-between p-4 bg-white">
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-red-50 flex items-center justify-center text-red-400 mr-3">🏆</div>
                    <span className="font-medium text-gray-700">Before Kick-Off</span>
                  </div>
                  <div className="bg-red-400 text-white font-bold py-2 px-6 rounded-sm w-48 text-center text-sm shadow-sm">
                    12 Months FREE
                  </div>
                </div>
                
                {/* Row 2 */}
                <div className="flex items-center justify-between p-4 bg-white">
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-teal-50 flex items-center justify-center text-[#2DD4BF] mr-3">🏆</div>
                    <span className="font-medium text-gray-700">Group Stage</span>
                  </div>
                  <div className="bg-teal-400 text-white font-bold py-2 px-6 rounded-sm w-48 text-center text-sm shadow-sm">
                    6 Months FREE
                  </div>
                </div>
                
                {/* Row 3 */}
                <div className="flex items-center justify-between p-4 bg-white">
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-red-50 flex items-center justify-center text-red-400 mr-3">🏆</div>
                    <span className="font-medium text-gray-700">Quarter Finals</span>
                  </div>
                  <div className="bg-red-400 text-white font-bold py-2 px-6 rounded-sm w-48 text-center text-sm shadow-sm">
                    3 Months FREE
                  </div>
                </div>
                
                {/* Row 4 */}
                <div className="flex items-center justify-between p-4 bg-white">
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-indigo-50 flex items-center justify-center text-indigo-400 mr-3">🏆</div>
                    <span className="font-medium text-gray-700">Semi Finals</span>
                  </div>
                  <div className="bg-teal-400 text-white font-bold py-2 px-6 rounded-sm w-48 text-center text-sm shadow-sm">
                    1 Month FREE
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
