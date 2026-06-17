import React from 'react';

export default function HowItWorks() {
  const steps = [
    {
      id: 1,
      title: '1. JOIN DEAL 360',
      description: 'Sign up for free or subscribe to a paid plan.',
      icon: (
        <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"></path>
        </svg>
      )
    },
    {
      id: 2,
      title: '2. GET YOUR TEAM(S)',
      description: 'Free members get 1 random team. Paid members get 1 random team + 1 team of choice.',
      icon: (
        <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 10l-4.5-2.5M15 10l4.5-2.5M12 15v5.5M9 10L12 15M15 10L12 15M9 10h6"></path>
        </svg>
      )
    },
    {
      id: 3,
      title: '3. FOLLOW THE WORLD CUP',
      description: 'Enjoy the tournament and cheer for your teams.',
      icon: (
        <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
        </svg>
      )
    },
    {
      id: 4,
      title: '4. WIN BIG',
      description: 'If one of your teams wins, you can win up to 12 months FREE Deal 360!',
      icon: (
        <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path>
        </svg>
      )
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center mb-16 relative">
           <div className="absolute inset-0 flex items-center" aria-hidden="true">
             <div className="w-full border-t border-gray-200"></div>
           </div>
           <div className="relative flex justify-center">
             <span className="px-6 bg-white text-lg font-bold text-gray-800 tracking-wider uppercase">
               How It Works
             </span>
           </div>
        </div>

        {/* Steps Grid */}
        <div className="relative">
          {/* Connecting line for desktop */}
          <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-gray-100" aria-hidden="true"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 relative">
            {steps.map((step, index) => (
              <div key={step.id} className="relative text-center flex flex-col items-center">
                
                {/* Icon Circle */}
                <div className="w-24 h-24 mx-auto rounded-full flex items-center justify-center relative z-10 shadow-sm border-4 border-white" style={{backgroundColor: '#f9b0aa'}}>
                   <div className="w-16 h-16 rounded-full flex items-center justify-center shadow-inner" style={{backgroundColor: '#F88379'}}>
                      {step.icon}
                   </div>
                </div>
                
                {/* Arrow between steps (desktop only) */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-12 -right-5 transform -translate-y-1/2 z-20 text-gray-300">
                     <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                  </div>
                )}
                
                {/* Text Content */}
                <div className="mt-8">
                  <h3 className="text-sm font-bold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed max-w-[200px] mx-auto">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
