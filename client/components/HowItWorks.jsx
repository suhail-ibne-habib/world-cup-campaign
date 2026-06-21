import React from 'react';

export default function HowItWorks() {
  const steps = [
    {
      id: 1,
      title: '1. Join Deal 360',
      description: 'Sign up for free or subscribe to a paid plan.',
      icon: (
        <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"></path>
        </svg>
      )
    },
    {
      id: 2,
      title: '2. Get Your Team(s)',
      description: 'Free members get 1 random team. Paid members get 1 random team + 1 team of choice.',
      icon: (
        <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 512 512">
          <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm-53.7-278.4l24.4 75.2-43.7 60.9-52.2-6.4c-6.1-8.4-12.1-16.9-16.8-26.2-14.3-28.1-21.5-58.5-21.7-89.2l38.9-36.4 71.1 22.1zm84.5-55.8c12.2 0 24.3 1.8 36 5.5l26.2 80.6-50.5 73.4H199.5l-50.5-73.4 26.2-80.6c11.7-3.7 23.8-5.5 36-5.5zm115 55.8l71.1-22.1 38.9 36.4c-.2 30.7-7.4 61.1-21.7 89.2-4.7 9.3-10.7 17.8-16.8 26.2l-52.2 6.4-43.7-60.9 24.4-75.2zm-222.8 190l10.9-33.5h184.2l10.9 33.5-31.9 44c-35.4 15-74.8 23.3-115.3 23.3s-79.9-8.3-115.3-23.3l-31.9-44l10.9-33.5z"/>
        </svg>
      )
    },
    {
      id: 3,
      title: '3. Follow the World Cup',
      description: 'Enjoy the tournament and cheer for your teams.',
      icon: (
        <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
        </svg>
      )
    },
    {
      id: 4,
      title: '4. Win Big',
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
             <span className="px-6 bg-white text-lg font-bold text-gray-800 tracking-wider">
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
