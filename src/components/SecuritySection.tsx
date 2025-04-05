
import React, { useEffect, useRef } from 'react';
import { Shield, ShieldCheck, LockKeyhole, UserCheck } from 'lucide-react';

const SecuritySection: React.FC = () => {
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

  const securityFeatures = [
    {
      id: 1,
      title: "Offline Verification",
      description: "No internet connection needed for identity verification, eliminating network-related vulnerabilities",
      icon: <Shield className="w-10 h-10 text-ncrypt-blue" />,
      delay: 100
    },
    {
      id: 2,
      title: "Tamper-Proof Signatures",
      description: "Cryptographic signatures on all cards ensure any physical tampering is immediately detected",
      icon: <ShieldCheck className="w-10 h-10 text-ncrypt-blue" />,
      delay: 200
    },
    {
      id: 3,
      title: "Biometric Protection",
      description: "Fingerprint verification ensures only the authorized person can use their own card",
      icon: <UserCheck className="w-10 h-10 text-ncrypt-blue" />,
      delay: 300
    },
    {
      id: 4,
      title: "Military-Grade Encryption",
      description: "Advanced RSA encryption with 2048-bit keys protects all sensitive personal data",
      icon: <LockKeyhole className="w-10 h-10 text-ncrypt-blue" />,
      delay: 400
    },
  ];

  return (
    <section id="security" ref={sectionRef} className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 grid-background opacity-20"></div>
      <div className="absolute top-1/3 -left-36 w-72 h-72 bg-ncrypt-blue/10 rounded-full filter blur-[100px]"></div>
      <div className="absolute bottom-1/3 -right-36 w-72 h-72 bg-ncrypt-cyan/10 rounded-full filter blur-[100px]"></div>
      
      <div className="section-container relative z-10">
        <div
          ref={(el) => addToRefs(el, 0)}
          className="appear-animate text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="section-heading">
            Security & <span className="text-ncrypt-blue">Privacy</span>
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Project Ncrypt prioritizes security and privacy at every level, combining hardware security, cryptography, and biometric verification.
          </p>
        </div>
        
        {/* Main Security Visualization */}
        <div 
          ref={(el) => addToRefs(el, 1)}
          className="appear-animate mb-16"
          style={{ transitionDelay: '100ms' }}
        >
          <div className="max-w-4xl mx-auto relative">
            <div className="cyberpunk-card p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
              {/* Security Shield Visualization */}
              <div className="relative flex-shrink-0">
                <div className="w-48 h-48 mx-auto relative">
                  {/* Main shield */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-40 h-40 bg-gradient-to-br from-ncrypt-blue/30 to-ncrypt-cyan/20 rounded-full border border-ncrypt-blue/40"></div>
                  </div>
                  
                  {/* Animated security rings */}
                  <div className="absolute inset-0 flex items-center justify-center animate-slow-spin" style={{ animationDuration: '20s' }}>
                    <div className="w-44 h-44 border border-dashed border-ncrypt-blue/40 rounded-full"></div>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center animate-slow-spin" style={{ animationDuration: '25s', animationDirection: 'reverse' }}>
                    <div className="w-36 h-36 border border-dashed border-ncrypt-blue/60 rounded-full"></div>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center animate-slow-spin" style={{ animationDuration: '15s' }}>
                    <div className="w-30 h-30 border border-dashed border-ncrypt-cyan/40 rounded-full"></div>
                  </div>
                  
                  {/* Shield icon */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <ShieldCheck className="w-24 h-24 text-ncrypt-blue animate-pulse-glow" />
                  </div>
                  
                  {/* Particle dots */}
                  <div className="absolute top-8 right-8 w-3 h-3 bg-ncrypt-blue rounded-full animate-pulse-glow"></div>
                  <div className="absolute top-12 left-8 w-2 h-2 bg-ncrypt-cyan rounded-full animate-pulse-glow" style={{ animationDelay: '0.5s' }}></div>
                  <div className="absolute bottom-12 left-10 w-3 h-3 bg-ncrypt-blue rounded-full animate-pulse-glow" style={{ animationDelay: '1s' }}></div>
                  <div className="absolute bottom-8 right-10 w-2 h-2 bg-ncrypt-cyan rounded-full animate-pulse-glow" style={{ animationDelay: '1.5s' }}></div>
                </div>
              </div>
              
              {/* Security Description */}
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-4">Multilayered Security</h3>
                <p className="text-white/80 mb-6">
                  Project Ncrypt implements a comprehensive security approach that combines physical, digital, and biometric protection:
                </p>
                
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="mr-3 p-1 bg-ncrypt-blue/20 rounded-full mt-0.5">
                      <div className="w-3 h-3 bg-ncrypt-blue rounded-full"></div>
                    </div>
                    <div className="text-sm text-white/70">
                      <span className="font-bold text-white">End-to-end encryption</span> protects all data transmission
                    </div>
                  </li>
                  
                  <li className="flex items-start">
                    <div className="mr-3 p-1 bg-ncrypt-blue/20 rounded-full mt-0.5">
                      <div className="w-3 h-3 bg-ncrypt-blue rounded-full"></div>
                    </div>
                    <div className="text-sm text-white/70">
                      <span className="font-bold text-white">Secure element chip</span> physically protects cryptographic keys
                    </div>
                  </li>
                  
                  <li className="flex items-start">
                    <div className="mr-3 p-1 bg-ncrypt-blue/20 rounded-full mt-0.5">
                      <div className="w-3 h-3 bg-ncrypt-blue rounded-full"></div>
                    </div>
                    <div className="text-sm text-white/70">
                      <span className="font-bold text-white">Offline verification</span> works even without internet connectivity
                    </div>
                  </li>
                  
                  <li className="flex items-start">
                    <div className="mr-3 p-1 bg-ncrypt-blue/20 rounded-full mt-0.5">
                      <div className="w-3 h-3 bg-ncrypt-blue rounded-full"></div>
                    </div>
                    <div className="text-sm text-white/70">
                      <span className="font-bold text-white">Immutable audit logs</span> track every authentication attempt
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        {/* Security Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {securityFeatures.map((feature, index) => (
            <div
              key={feature.id}
              ref={(el) => addToRefs(el, index + 2)}
              className="appear-animate cyberpunk-card p-6"
              style={{ transitionDelay: `${feature.delay}ms` }}
            >
              <div className="flex items-start">
                <div className="p-2 bg-ncrypt-blue/10 rounded-lg mr-4">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-white/70 text-sm">{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Privacy Commitment */}
        <div
          ref={(el) => addToRefs(el, securityFeatures.length + 2)}
          className="appear-animate mt-16 max-w-2xl mx-auto text-center"
          style={{ transitionDelay: '500ms' }}
        >
          <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br from-ncrypt-blue/20 to-ncrypt-cyan/10 flex items-center justify-center border border-ncrypt-blue/30">
            <UserCheck className="w-8 h-8 text-ncrypt-blue" />
          </div>
          <h3 className="text-2xl font-bold mb-4">Privacy By Design</h3>
          <p className="text-white/80">
            Project Ncrypt is built with privacy at its core. The system stores minimal personal data and processes biometric information locally, never sharing it with external servers.
          </p>
          <div className="mt-8 mx-auto w-24 h-1 bg-gradient-to-r from-ncrypt-blue to-ncrypt-cyan"></div>
        </div>
      </div>
    </section>
  );
};

export default SecuritySection;
