
import React, { useState, useEffect, useRef } from 'react';
import { useToast } from '@/hooks/use-toast';

const DemoSection: React.FC = () => {
  const [cardType, setCardType] = useState<'real' | 'fake'>('real');
  const [scanning, setScanning] = useState(false);
  const [verified, setVerified] = useState<boolean | null>(null);
  const [fingerprint, setFingerprint] = useState(false);
  const [progress, setProgress] = useState(0);
  const { toast } = useToast();
  
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

  // Handle card scan
  const handleScan = () => {
    if (scanning) return;
    
    setScanning(true);
    setVerified(null);
    setFingerprint(false);
    setProgress(0);
    
    // Card scan animation
    toast({
      title: "Card detected",
      description: "Scanning NFC data...",
      duration: 3000,
    });
    
    // Progress animation
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setScanning(false);
          setFingerprint(true);
          toast({
            title: "Card scan complete",
            description: "Please scan your fingerprint",
            duration: 3000,
          });
          return 100;
        }
        return prev + 5;
      });
    }, 150);
  };
  
  // Handle fingerprint scan
  const handleFingerprintScan = () => {
    if (!fingerprint || verified !== null) return;
    
    toast({
      title: "Scanning fingerprint",
      description: "Verifying biometrics...",
      duration: 3000,
    });
    
    // Simulate fingerprint verification
    setTimeout(() => {
      if (cardType === 'real') {
        setVerified(true);
        toast({
          title: "Access Granted",
          description: "Identity verification successful",
          variant: "default",
        });
      } else {
        setVerified(false);
        toast({
          title: "Access Denied",
          description: "Invalid fingerprint or card data",
          variant: "destructive",
        });
      }
    }, 2000);
  };
  
  // Reset the demo
  const resetDemo = () => {
    setScanning(false);
    setVerified(null);
    setFingerprint(false);
    setProgress(0);
  };

  return (
    <section id="demo" ref={sectionRef} className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 grid-background opacity-20"></div>
      <div className="absolute top-1/3 -left-36 w-72 h-72 bg-ncrypt-blue/10 rounded-full filter blur-[100px]"></div>
      <div className="absolute bottom-1/3 -right-36 w-72 h-72 bg-ncrypt-cyan/10 rounded-full filter blur-[100px]"></div>
      
      <div className="section-container relative z-10">
        <div
          ref={(el) => addToRefs(el, 0)}
          className="appear-animate text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="section-heading">Live Demo <span className="text-ncrypt-blue">Simulation</span></h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Experience Project Ncrypt's verification process in action. Select a card type and follow the steps to see how it works.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div
            ref={(el) => addToRefs(el, 1)} 
            className="appear-animate cyberpunk-card p-6 md:p-10"
            style={{ transitionDelay: '100ms' }}
          >
            {/* Card Type Selection */}
            <div className="mb-10">
              <h3 className="text-xl font-bold mb-4 text-center">Select Card Type</h3>
              <div className="flex justify-center space-x-6">
                <button
                  onClick={() => {
                    setCardType('real');
                    resetDemo();
                  }}
                  className={`flex flex-col items-center p-4 rounded-lg transition-all ${
                    cardType === 'real'
                      ? 'bg-ncrypt-blue/20 border border-ncrypt-blue shadow-lg shadow-ncrypt-blue/20'
                      : 'bg-muted/30 hover:bg-muted/40'
                  }`}
                >
                  <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-ncrypt-blue/50 to-ncrypt-cyan/50 mb-2 flex items-center justify-center">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                    </svg>
                  </div>
                  <span className="font-medium">Real Card</span>
                </button>
                
                <button
                  onClick={() => {
                    setCardType('fake');
                    resetDemo();
                  }}
                  className={`flex flex-col items-center p-4 rounded-lg transition-all ${
                    cardType === 'fake'
                      ? 'bg-destructive/20 border border-destructive/70 shadow-lg shadow-destructive/20'
                      : 'bg-muted/30 hover:bg-muted/40'
                  }`}
                >
                  <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-destructive/50 to-destructive/30 mb-2 flex items-center justify-center">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <span className="font-medium">Fake Card</span>
                </button>
              </div>
            </div>
            
            {/* Card Scan Interface */}
            <div
              ref={(el) => addToRefs(el, 2)}
              className="appear-animate grid grid-cols-1 md:grid-cols-2 gap-8"
              style={{ transitionDelay: '200ms' }}
            >
              {/* NFC Reader */}
              <div className="flex flex-col items-center">
                <h3 className="text-lg font-semibold mb-4">1. Tap Your Card</h3>
                
                <div className="relative">
                  {/* NFC Reader Device */}
                  <div className="w-52 h-64 bg-gradient-to-b from-slate-800 to-slate-900 rounded-md border border-slate-700 flex items-center justify-center shadow-lg shadow-black/30">
                    {/* Reader screen */}
                    <div className="w-40 h-32 bg-ncrypt-dark-blue border border-slate-700 rounded-md flex flex-col items-center justify-center p-3 relative overflow-hidden">
                      {/* Status Indicators */}
                      <div className="absolute top-2 right-2 flex space-x-1">
                        <div className={`w-2 h-2 rounded-full ${scanning ? 'bg-yellow-500 animate-pulse' : verified === true ? 'bg-green-500' : verified === false ? 'bg-red-500' : 'bg-blue-500'}`}></div>
                      </div>
                      
                      {/* NFC Symbol */}
                      <div className={`mb-2 ${scanning ? 'animate-pulse' : ''}`}>
                        <div className="w-14 h-14 relative flex items-center justify-center">
                          <div className="absolute w-full h-full border-2 border-ncrypt-blue rounded-full opacity-80"></div>
                          <div className="absolute w-10 h-10 border-2 border-ncrypt-blue rounded-full opacity-60"></div>
                          <div className="absolute w-6 h-6 border-2 border-ncrypt-blue rounded-full opacity-40"></div>
                          
                          {verified === true && (
                            <svg className="absolute w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                            </svg>
                          )}
                          
                          {verified === false && (
                            <svg className="absolute w-8 h-8 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                          )}
                        </div>
                      </div>
                      
                      {/* Status Text */}
                      <div className="text-center text-sm mt-1">
                        {scanning ? (
                          <span className="text-yellow-400">Scanning...</span>
                        ) : verified === true ? (
                          <span className="text-green-400">Access Granted</span>
                        ) : verified === false ? (
                          <span className="text-red-400">Access Denied</span>
                        ) : (
                          <span className="text-gray-400">Ready</span>
                        )}
                      </div>
                      
                      {/* Progress Bar */}
                      {scanning && (
                        <div className="w-full mt-2 bg-gray-800 rounded-full h-1.5">
                          <div 
                            className="bg-ncrypt-blue h-1.5 rounded-full" 
                            style={{ width: `${progress}%` }}
                          ></div>
                        </div>
                      )}
                      
                      {/* Animated background elements */}
                      <div className="absolute -bottom-8 -left-8 w-16 h-16 bg-ncrypt-blue/30 rounded-full filter blur-xl animate-slow-spin"></div>
                    </div>
                  </div>
                  
                  {/* Card animation */}
                  <div 
                    className={`absolute bottom-5 left-1/2 transform -translate-x-1/2 transition-all duration-500 cursor-pointer ${scanning ? 'translate-y-0 opacity-70' : 'translate-y-20 hover:-translate-y-2 opacity-100'}`}
                    onClick={handleScan}
                  >
                    <div className="w-36 h-24 rounded-lg bg-gradient-to-r from-slate-800 to-slate-900 border border-ncrypt-blue/40 flex items-center justify-center shadow-lg shadow-black/30 relative overflow-hidden">
                      <div className="absolute top-2 left-2 w-5 h-4 bg-yellow-300/80 rounded-sm"></div>
                      <div className="absolute inset-0 opacity-30">
                        <div className="w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTAgMTBoODB2MTBIMzB2NTBoNjB2MTBIMTB2LTcweiIgc3Ryb2tlPSIjMDBDMkZGIiBzdHJva2Utd2lkdGg9IjAuNSIgZmlsbD0ibm9uZSIvPjwvc3ZnPg==')]"></div>
                      </div>
                      <div className={`text-xs text-ncrypt-blue font-mono ${cardType === 'fake' ? 'text-red-400' : ''}`}>
                        {cardType === 'real' ? 'VALID' : 'FAKE'}
                      </div>
                    </div>
                  </div>
                </div>
                
                {!scanning && verified === null && (
                  <p className="text-sm text-white/60 mt-4 text-center">
                    Click/tap the card to start scanning
                  </p>
                )}
              </div>
              
              {/* Fingerprint Scanner */}
              <div className="flex flex-col items-center">
                <h3 className="text-lg font-semibold mb-4">2. Scan Your Fingerprint</h3>
                
                <div 
                  className={`w-52 h-52 bg-gradient-to-b from-slate-800 to-slate-900 rounded-md border border-slate-700 flex items-center justify-center cursor-pointer transition-all duration-300 ${fingerprint ? 'shadow-lg shadow-ncrypt-blue/30' : 'opacity-50'}`}
                  onClick={handleFingerprintScan}
                >
                  <div className={`w-32 h-32 rounded-full flex items-center justify-center relative ${fingerprint ? 'bg-ncrypt-blue/20' : 'bg-gray-900'}`}>
                    {/* Fingerprint graphic */}
                    <svg 
                      className={`w-24 h-24 ${fingerprint ? 'text-ncrypt-blue' : 'text-gray-700'} ${verified !== null ? 'opacity-0' : ''} transition-opacity duration-300`} 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24" 
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth="1.5" 
                        d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" 
                      />
                    </svg>
                    
                    {/* Success/Failure Icons */}
                    {verified === true && (
                      <svg 
                        className="absolute w-24 h-24 text-green-500 animate-fade-in" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24" 
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          strokeWidth="2" 
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" 
                        />
                      </svg>
                    )}
                    
                    {verified === false && (
                      <svg 
                        className="absolute w-24 h-24 text-red-500 animate-fade-in" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24" 
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          strokeWidth="2" 
                          d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" 
                        />
                      </svg>
                    )}
                    
                    {/* Scan effect */}
                    {fingerprint && verified === null && (
                      <div className="absolute inset-0 overflow-hidden">
                        <div className="h-1 bg-ncrypt-blue/60 w-full absolute top-0 animate-scan"></div>
                      </div>
                    )}
                  </div>
                </div>
                
                {fingerprint && verified === null && (
                  <p className="text-sm text-white/60 mt-4 text-center">
                    Click/tap the scanner to verify
                  </p>
                )}
                
                {verified !== null && (
                  <button 
                    onClick={resetDemo}
                    className="mt-8 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-md text-sm transition-colors"
                  >
                    Reset Demo
                  </button>
                )}
              </div>
            </div>
            
            {/* Results Display */}
            <div
              ref={(el) => addToRefs(el, 3)}
              className="appear-animate mt-12 p-6 rounded-lg bg-ncrypt-dark-blue/50 border border-ncrypt-blue/20"
              style={{ transitionDelay: '300ms' }}
            >
              <h3 className="text-lg font-semibold mb-3">System Status</h3>
              
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-white/70">Card Detection:</span>
                  <span className={scanning || verified !== null ? 'text-ncrypt-blue' : 'text-white/50'}>
                    {scanning || verified !== null ? 'Complete' : 'Waiting'}
                  </span>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-white/70">Fingerprint Verification:</span>
                  <span className={verified !== null ? (verified ? 'text-green-500' : 'text-red-500') : 'text-white/50'}>
                    {verified === true ? 'Verified' : verified === false ? 'Failed' : 'Waiting'}
                  </span>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-white/70">Access Status:</span>
                  <span className={verified ? 'text-green-500' : verified === false ? 'text-red-500' : 'text-white/50'}>
                    {verified === true ? 'Granted' : verified === false ? 'Denied' : 'Pending'}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DemoSection;
