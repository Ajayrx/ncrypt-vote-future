
import React, { useEffect, useRef } from 'react';

const SolutionSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const elementsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    elementsRef.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  const addToRefs = (el: HTMLDivElement | null, index: number) => {
    if (el && !elementsRef.current.includes(el)) {
      elementsRef.current[index] = el;
    }
  };

  const steps = [
    {
      id: 1,
      title: "Tap your NFC card",
      description: "Simply hold your Ncrypt card to the reader for instant verification",
      delay: 100,
      icon: (
        <svg className="w-14 h-14 text-ncrypt-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="10" strokeWidth="1.5" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12a3 3 0 106 0 3 3 0 00-6 0" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6 12a6 6 0 1012 0 6 6 0 00-12 0" />
        </svg>
      ),
    },
    {
      id: 2,
      title: "Scan your fingerprint",
      description: "Biometric verification ensures only you can use your card",
      delay: 200,
      icon: (
        <svg className="w-14 h-14 text-ncrypt-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" />
        </svg>
      ),
    },
    {
      id: 3,
      title: "Verified to vote",
      description: "Secure authentication in seconds instead of minutes",
      delay: 300,
      icon: (
        <svg className="w-14 h-14 text-ncrypt-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      id: 4,
      title: "Access public services",
      description: "Use the same card for government services and benefits",
      delay: 400,
      icon: (
        <svg className="w-14 h-14 text-ncrypt-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
    },
  ];

  return (
    <section id="solution" ref={sectionRef} className="py-24 relative overflow-hidden bg-ncrypt-dark-blue/30">
      {/* Background Effects */}
      <div className="absolute inset-0 grid-background opacity-20"></div>
      <div className="absolute top-1/4 -right-48 w-96 h-96 rounded-full bg-ncrypt-blue/10 blur-[100px]"></div>
      <div className="absolute bottom-1/4 -left-48 w-96 h-96 rounded-full bg-ncrypt-cyan/10 blur-[100px]"></div>
      
      <div className="section-container relative z-10">
        <div
          ref={(el) => addToRefs(el, 0)}
          className="appear-animate text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="section-heading">
            The Solution – <span className="text-ncrypt-blue">Project Ncrypt</span>
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            A secure, NFC-based voter verification system that eliminates manual ID checks while providing a multipurpose card for accessing government services.
          </p>
        </div>
        
        {/* Visual diagram of the card */}
        <div 
          ref={(el) => addToRefs(el, 1)}
          className="appear-animate mb-20"
          style={{ transitionDelay: '100ms' }}
        >
          <div className="relative max-w-4xl mx-auto">
            {/* Ncrypt Card Illustration */}
            <div className="relative w-full h-48 sm:h-60 md:h-72 lg:h-80 rounded-xl bg-gradient-to-r from-ncrypt-dark-blue to-ncrypt-dark border border-ncrypt-blue/40 shadow-lg shadow-ncrypt-blue/10 overflow-hidden">
              {/* Circuit pattern */}
              <div className="absolute inset-0 opacity-20">
                <div className="w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTAgMTBoODB2MTBIMzB2NTBoNjB2MTBIMTB2LTcweiIgc3Ryb2tlPSIjMDBDMkZGIiBzdHJva2Utd2lkdGg9IjAuNSIgZmlsbD0ibm9uZSIvPjwvc3ZnPg==')]"></div>
              </div>
              
              {/* Card Content */}
              <div className="absolute inset-0 p-8 flex flex-col">
                <div className="flex justify-between">
                  <div>
                    <div className="text-ncrypt-blue font-bold text-xl md:text-2xl mb-1">NCRYPT</div>
                    <div className="text-white/70 text-xs md:text-sm">Secure Identity Card</div>
                  </div>
                  
                  {/* NFC Chip Illustration */}
                  <div className="w-10 h-10 md:w-14 md:h-14 relative">
                    <div className="absolute inset-0 border-2 border-ncrypt-blue/80 rounded-full animate-pulse-glow"></div>
                    <div className="absolute inset-[4px] border-2 border-ncrypt-blue/60 rounded-full"></div>
                    <div className="absolute inset-[8px] border-2 border-ncrypt-blue/40 rounded-full"></div>
                  </div>
                </div>
                
                <div className="mt-auto flex flex-col md:flex-row justify-between items-end gap-2">
                  <div>
                    <div className="text-white/90 text-xs md:text-sm mb-1">ID: 2405-7823-9284</div>
                    <div className="text-ncrypt-blue text-xs">SECURE · SMART · SEAMLESS</div>
                  </div>
                  
                  {/* Fingerprint Icon */}
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-ncrypt-blue/20 rounded-full flex items-center justify-center">
                      <svg className="w-5 h-5 text-ncrypt-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" />
                      </svg>
                    </div>
                    <div className="text-white/90 text-xs">Biometric<br/>Protected</div>
                  </div>
                </div>
              </div>
              
              {/* Animated glow elements */}
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-ncrypt-blue/20 rounded-full filter blur-xl animate-slow-spin" style={{ animationDuration: '15s' }}></div>
              <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-ncrypt-cyan/20 rounded-full filter blur-xl animate-slow-spin" style={{ animationDuration: '20s', animationDirection: 'reverse' }}></div>
            </div>
          </div>
        </div>
        
        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div
              key={step.id}
              ref={(el) => addToRefs(el, index + 2)}
              className="appear-animate cyberpunk-card p-6 text-center group"
              style={{ transitionDelay: `${step.delay}ms` }}
            >
              <div className="mb-6 mx-auto w-20 h-20 flex items-center justify-center rounded-full bg-gradient-to-br from-ncrypt-blue/20 to-ncrypt-cyan/10 border border-ncrypt-blue/40 group-hover:border-ncrypt-cyan transition-colors duration-300">
                <div className="group-hover:scale-110 transition-transform duration-300">
                  {step.icon}
                </div>
              </div>
              
              <h3 className="text-lg md:text-xl font-bold mb-3 group-hover:text-ncrypt-blue transition-colors duration-300">
                {step.title}
              </h3>
              
              <p className="text-white/70 text-sm md:text-base">
                {step.description}
              </p>
            </div>
          ))}
        </div>
        
        {/* Benefits */}
        <div
          ref={(el) => addToRefs(el, 6)}
          className="appear-animate mt-20 max-w-3xl mx-auto"
          style={{ transitionDelay: '500ms' }}
        >
          <div className="cyberpunk-card p-6 md:p-8">
            <h3 className="text-xl md:text-2xl font-bold mb-6 text-center">Key Benefits</h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex items-start">
                <div className="mr-4 p-2 bg-ncrypt-blue/10 rounded-full">
                  <svg className="w-5 h-5 text-ncrypt-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold mb-1">90% Faster</h4>
                  <p className="text-sm text-white/70">Reduces verification time from minutes to seconds</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-4 p-2 bg-ncrypt-blue/10 rounded-full">
                  <svg className="w-5 h-5 text-ncrypt-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold mb-1">100% Secure</h4>
                  <p className="text-sm text-white/70">Tamper-proof technology eliminates fraud</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-4 p-2 bg-ncrypt-blue/10 rounded-full">
                  <svg className="w-5 h-5 text-ncrypt-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold mb-1">Universal Access</h4>
                  <p className="text-sm text-white/70">One card for all government services</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-4 p-2 bg-ncrypt-blue/10 rounded-full">
                  <svg className="w-5 h-5 text-ncrypt-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold mb-1">Easy Implementation</h4>
                  <p className="text-sm text-white/70">Works with existing government systems</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
