
import React, { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

const ProblemStatement: React.FC = () => {
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

    // Observe the section
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    // Observe all animated elements
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

  const problems = [
    {
      id: 1,
      title: "Slow Process",
      description: "Long lines and manual verification add hours to voting time",
      delay: 100,
      icon: (
        <svg className="w-10 h-10 text-ncrypt-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      id: 2,
      title: "Human Error",
      description: "Manual ID matching leads to mistakes and rejected valid voters",
      delay: 200,
      icon: (
        <svg className="w-10 h-10 text-ncrypt-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
        </svg>
      ),
    },
    {
      id: 3,
      title: "Fraud Risk",
      description: "Current systems are vulnerable to identity theft and forgeries",
      delay: 300,
      icon: (
        <svg className="w-10 h-10 text-ncrypt-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      ),
    },
    {
      id: 4,
      title: "Limited Access",
      description: "Millions face difficulty accessing essential government services",
      delay: 400,
      icon: (
        <svg className="w-10 h-10 text-ncrypt-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
    },
  ];

  return (
    <section id="problem" ref={sectionRef} className="py-16 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 grid-background opacity-20"></div>
      <div className="absolute top-1/3 -left-36 w-72 h-72 bg-ncrypt-blue/10 rounded-full filter blur-[100px]"></div>
      <div className="absolute bottom-1/3 -right-36 w-72 h-72 bg-ncrypt-cyan/10 rounded-full filter blur-[100px]"></div>
      
      <div className="section-container relative z-10">
        <div 
          ref={(el) => addToRefs(el, 0)}
          className="appear-animate mb-12 text-center max-w-3xl mx-auto"
          style={{ transitionDelay: '100ms' }}
        >
          <h2 className="section-heading">
            Why Change the Way We <span className="text-ncrypt-blue">Vote?</span>
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Manual ID checks are slow, error-prone, and vulnerable to fraud. Millions face delays every election. The world needs a smarter way to verify identity.
          </p>
        </div>
        
        {/* Stats Bar */}
        <div 
          ref={(el) => addToRefs(el, 1)}
          className="appear-animate mb-12 grid grid-cols-1 md:grid-cols-3 gap-8"
          style={{ transitionDelay: '200ms' }}
        >
          <div className="flex flex-col items-center cyberpunk-card p-6">
            <div className="text-4xl font-bold text-ncrypt-blue mb-2">3+ Hours</div>
            <div className="text-white/70 text-center">Average wait time in busy polling stations</div>
          </div>
          
          <div className="flex flex-col items-center cyberpunk-card p-6">
            <div className="text-4xl font-bold text-ncrypt-blue mb-2">12%</div>
            <div className="text-white/70 text-center">Eligible voters turned away due to ID problems</div>
          </div>
          
          <div className="flex flex-col items-center cyberpunk-card p-6">
            <div className="text-4xl font-bold text-ncrypt-blue mb-2">100%</div>
            <div className="text-white/70 text-center">Offline Verification<br/>Prevents impersonation and fake voting without internet</div>
          </div>
        </div>
        
        {/* Problem Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {problems.map((problem, index) => (
            <div
              key={problem.id}
              ref={(el) => addToRefs(el, index + 2)}
              className="appear-animate cyberpunk-card p-6 flex flex-col items-center text-center"
              style={{ transitionDelay: `${problem.delay}ms` }}
            >
              <div className="mb-4 p-3 bg-ncrypt-dark-blue rounded-full border border-ncrypt-blue/30">
                {problem.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{problem.title}</h3>
              <p className="text-white/70">{problem.description}</p>
            </div>
          ))}
        </div>
        
        {/* Call to Action */}
        <div
          ref={(el) => addToRefs(el, 6)}
          className="appear-animate mt-12 text-center" 
          style={{ transitionDelay: '500ms' }}
        >
          <h3 className="text-2xl font-bold mb-4">The world deserves better.</h3>
          <div className="w-20 h-1 bg-gradient-to-r from-ncrypt-blue to-ncrypt-cyan mx-auto"></div>
        </div>
      </div>
    </section>
  );
};

export default ProblemStatement;
