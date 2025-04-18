import React, { useEffect, useRef } from 'react';
const TechnologiesSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const elementsRef = useRef<(HTMLDivElement | null)[]>([]);
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    }, {
      threshold: 0.1
    });
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    elementsRef.current.forEach(el => {
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
  const technologies = [{
    name: "NFC Reader",
    description: "High-precision contactless card scanning",
    icon: <svg className="w-12 h-12 text-ncrypt-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="10" strokeWidth="1.5" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12a3 3 0 106 0 3 3 0 00-6 0" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6 12a6 6 0 1012 0 6 6 0 00-12 0" />
        </svg>,
    delay: 100
  }, {
    name: "Edge TPU",
    description: "On-device machine learning acceleration",
    icon: <svg className="w-12 h-12 text-ncrypt-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
        </svg>,
    delay: 150
  }, {
    name: "Fingerprint Sensor",
    description: "Biometric authentication for secure verification",
    icon: <svg className="w-12 h-12 text-ncrypt-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" />
        </svg>,
    delay: 200
  }, {
    name: "React",
    description: "Modern front-end interface development",
    icon: <svg className="w-12 h-12 text-ncrypt-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="3" strokeWidth="1.5" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 3.5c-1.73 0-3.295.407-4.585 1.072C6.126 5.236 5.18 6.185 4.5 7.304 3.82 8.422 3.5 9.71 3.5 11v.5c0 1.29.32 2.578 1 3.696.68 1.12 1.626 2.069 2.915 2.732C8.705 18.593 10.27 19 12 19c1.73 0 3.295-.407 4.585-1.072 1.289-.663 2.235-1.612 2.915-2.732.68-1.118 1-2.406 1-3.696V11c0-1.29-.32-2.578-1-3.696-.68-1.12-1.626-2.068-2.915-2.732C15.295 3.907 13.73 3.5 12 3.5z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M5.5 7c1.289-.663 2.235-1.612 2.915-2.732.68-1.118 1-2.406 1-3.696V0" transform="rotate(60 12 12)" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M5.5 7c1.289-.663 2.235-1.612 2.915-2.732.68-1.118 1-2.406 1-3.696V0" transform="rotate(120 12 12)" />
        </svg>,
    delay: 250
  }, {
    name: "Python",
    description: "Backend processing and ML model integration",
    icon: <svg className="w-12 h-12 text-ncrypt-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 7v10c0 1.1.9 2 2 2h12a2 2 0 002-2V7a2 2 0 00-2-2H6a2 2 0 00-2 2z" />
        </svg>,
    delay: 300
  }, {
    name: "RSA Encryption",
    description: "Military-grade data protection and integrity",
    icon: <svg className="w-12 h-12 text-ncrypt-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>,
    delay: 350
  }, {
    name: "Blockchain Verification",
    description: "Tamper-proof record of all transactions",
    icon: <svg className="w-12 h-12 text-ncrypt-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>,
    delay: 400
  }, {
    name: "Secure Element",
    description: "Hardware-level protection against tampering",
    icon: <svg className="w-12 h-12 text-ncrypt-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>,
    delay: 450
  }];
  return <section id="technologies" ref={sectionRef} className="py-24 relative overflow-hidden bg-ncrypt-dark-blue/30">
      {/* Background Elements */}
      <div className="absolute inset-0 grid-background opacity-20"></div>
      <div className="absolute top-1/3 -right-36 w-72 h-72 bg-ncrypt-blue/10 rounded-full filter blur-[100px]"></div>
      <div className="absolute bottom-1/3 -left-36 w-72 h-72 bg-ncrypt-cyan/10 rounded-full filter blur-[100px]"></div>
      
      <div className="section-container relative z-10">
        <div ref={el => addToRefs(el, 0)} className="appear-animate text-center max-w-3xl mx-auto mb-16">
          <h2 className="section-heading">
            <span className="text-ncrypt-blue">Technologies</span> Used
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Project Ncrypt combines cutting-edge hardware and software technologies to deliver a secure, efficient verification system.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {technologies.map((tech, index) => <div key={tech.name} ref={el => addToRefs(el, index + 1)} className="appear-animate cyberpunk-card p-6 transition-all duration-300 group hover:scale-[1.02]" style={{
          transitionDelay: `${tech.delay}ms`
        }}>
              <div className="mb-4 p-3 bg-ncrypt-dark-blue/50 rounded-full w-20 h-20 flex items-center justify-center mx-auto group-hover:bg-ncrypt-blue/20 transition-colors duration-300">
                {tech.icon}
              </div>
              <h3 className="text-xl font-bold mb-2 text-center group-hover:text-ncrypt-blue transition-colors duration-300">
                {tech.name}
              </h3>
              <p className="text-white/70 text-center text-sm">
                {tech.description}
              </p>
            </div>)}
        </div>
        
        {/* Tech Architecture Diagram */}
        <div ref={el => addToRefs(el, technologies.length + 1)} className="appear-animate mt-16 max-w-4xl mx-auto" style={{
        transitionDelay: '500ms'
      }}>
          <div className="cyberpunk-card p-6">
            <h3 className="text-xl font-bold mb-6 text-center">System Architecture</h3>
            
            <div className="relative p-6 bg-ncrypt-dark/60 rounded-lg border border-ncrypt-blue/30">
              {/* Architecture diagram - simplified for this implementation */}
              <div className="flex flex-col items-center">
                <div className="flex flex-col md:flex-row gap-6 md:gap-12 items-center justify-center">
                  {/* User + Card */}
                  <div className="p-4 bg-ncrypt-dark border border-ncrypt-blue/40 rounded-lg flex flex-col items-center min-w-[140px]">
                    <svg className="w-8 h-8 text-ncrypt-blue mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    <span className="text-sm font-medium text-center">User + NFC Card</span>
                  </div>
                  
                  {/* Arrow */}
                  <div className="text-ncrypt-blue rotate-90 md:rotate-0">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>
                  
                  {/* Verification Device */}
                  <div className="p-4 bg-ncrypt-dark border border-ncrypt-blue/40 rounded-lg flex flex-col items-center min-w-[140px]">
                    <svg className="w-8 h-8 text-ncrypt-blue mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <rect x="2" y="6" width="20" height="12" rx="2" strokeWidth="1.5" />
                      <circle cx="12" cy="12" r="2" strokeWidth="1.5" />
                      <line x1="2" y1="12" x2="4" y2="12" strokeWidth="1.5" />
                      <line x1="20" y1="12" x2="22" y2="12" strokeWidth="1.5" />
                    </svg>
                    <span className="text-sm font-medium text-center">Verification Device</span>
                  </div>
                </div>
                
                {/* Down Arrow */}
                <div className="my-4 text-ncrypt-blue">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                </div>
                
                {/* Security Layer */}
                <div className="w-full p-4 bg-ncrypt-dark border border-ncrypt-cyan/40 rounded-lg flex flex-col items-center mb-4">
                  <svg className="w-8 h-8 text-ncrypt-cyan mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  <span className="text-sm font-medium text-center">Security & Encryption Layer</span>
                </div>
                
                {/* Down Arrow */}
                <div className="mb-4 text-ncrypt-blue">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                </div>
                
                {/* Databases */}
                <div className="flex flex-col md:flex-row gap-4 md:gap-8 justify-center w-full">
                  <div className="flex-1 p-4 bg-ncrypt-dark border border-ncrypt-blue/40 rounded-lg flex flex-col items-center">
                    <svg className="w-6 h-6 text-ncrypt-blue mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 7v10c0 2 1.5 4 6 4s6-2 6-4V7c0-2-1.5-4-6-4S4 5 4 7z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 11h12" />
                    </svg>
                    <span className="text-xs font-medium text-center">Voter's Data</span>
                  </div>
                  <div className="flex-1 p-4 bg-ncrypt-dark border border-ncrypt-blue/40 rounded-lg flex flex-col items-center">
                    <svg className="w-6 h-6 text-ncrypt-blue mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                    <span className="text-xs font-medium text-center">Valid Signature</span>
                  </div>
                  <div className="flex-1 p-4 bg-ncrypt-dark border border-ncrypt-blue/40 rounded-lg flex flex-col items-center">
                    <svg className="w-6 h-6 text-ncrypt-blue mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    <span className="text-xs font-medium text-center">Hash Matching</span>
                  </div>
                </div>
              </div>
              
              {/* Background design elements */}
              <div className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 opacity-10">
                <div className="w-full h-full border-2 border-ncrypt-blue rounded-full animate-slow-spin" style={{
                animationDuration: '40s'
              }}></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 border-2 border-ncrypt-blue rounded-full animate-slow-spin" style={{
                animationDuration: '30s',
                animationDirection: 'reverse'
              }}></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1/2 h-1/2 border-2 border-ncrypt-cyan rounded-full animate-slow-spin" style={{
                animationDuration: '20s'
              }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default TechnologiesSection;