import React from 'react';

export default function TeamSelection() {
  const teams = [
    { name: 'Brazil', flag: '🇧🇷' },
    { name: 'Argentina', flag: '🇦🇷' },
    { name: 'France', flag: '🇫🇷' },
    { name: 'England', flag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿' },
    { name: 'Spain', flag: '🇪🇸' },
    { name: 'Germany', flag: '🇩🇪' },
    { name: 'Portugal', flag: '🇵🇹' },
    { name: 'Netherlands', flag: '🇳🇱' },
    { name: 'Japan', flag: '🇯🇵' },
    { name: 'Morocco', flag: '🇲🇦' },
    { name: 'Uruguay', flag: '🇺🇾' }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center mb-10 relative">
           <div className="absolute inset-0 flex items-center" aria-hidden="true">
             <div className="w-full border-t border-gray-200"></div>
           </div>
           <div className="relative flex justify-center">
             <span className="px-6 bg-white text-lg font-bold text-gray-800 tracking-wider uppercase">
               Choose Your Team
             </span>
           </div>
           <p className="mt-4 text-sm text-gray-500 relative z-10">
             Available teams are updated in real time. Choose your team of choice (Paid members only).
           </p>
        </div>

        {/* Teams Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {teams.map((team, index) => (
            <div key={index} className="border border-gray-200 rounded-md p-4 flex items-center justify-start hover:border-[#2DD4BF] hover:shadow-sm transition cursor-pointer bg-white">
              <span className="text-2xl mr-3" role="img" aria-label={`${team.name} flag`}>{team.flag}</span>
              <span className="text-sm font-medium text-gray-700">{team.name}</span>
            </div>
          ))}
          {/* View All Teams Button */}
          <div className="border border-gray-200 rounded-md p-4 flex items-center justify-start hover:bg-gray-50 transition cursor-pointer bg-gray-50/50">
             <div className="flex -space-x-2 mr-3">
               <div className="w-6 h-6 rounded-full bg-teal-200 border-2 border-white flex items-center justify-center"></div>
               <div className="w-6 h-6 rounded-full bg-teal-400 border-2 border-white flex items-center justify-center"></div>
             </div>
             <div className="flex flex-col">
               <span className="text-xs font-semibold text-gray-800 leading-tight">View All</span>
               <span className="text-xs font-semibold text-gray-800 leading-tight">Teams</span>
             </div>
          </div>
        </div>

        {/* Info Icons Below Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-8 border-t border-gray-100 pt-10">
          <div className="flex items-center justify-center md:justify-start">
            <div className="w-10 h-10 rounded-full bg-teal-50 flex items-center justify-center mr-4">
              <svg className="w-5 h-5 text-[#2DD4BF]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            </div>
            <span className="text-sm text-gray-600 font-medium">One prize<br/>per member</span>
          </div>
          <div className="flex items-center justify-center md:justify-start">
            <div className="w-10 h-10 rounded-full bg-teal-50 flex items-center justify-center mr-4">
               <svg className="w-5 h-5 text-[#2DD4BF]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
            </div>
            <span className="text-sm text-gray-600 font-medium">Teams are<br/>final</span>
          </div>
          <div className="flex items-center justify-center md:justify-start">
            <div className="w-10 h-10 rounded-full bg-teal-50 flex items-center justify-center mr-4">
              <svg className="w-5 h-5 text-[#2DD4BF]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"></path></svg>
            </div>
            <span className="text-sm text-gray-600 font-medium">Prizes apply to<br/>your active plan</span>
          </div>
          <div className="flex items-center justify-center md:justify-start">
            <div className="w-10 h-10 rounded-full bg-teal-50 flex items-center justify-center mr-4">
              <svg className="w-5 h-5 text-[#2DD4BF]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path></svg>
            </div>
            <span className="text-sm text-gray-600 font-medium">Upgrade anytime<br/>Keep your teams</span>
          </div>
        </div>

      </div>
    </section>
  );
}
