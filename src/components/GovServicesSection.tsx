
import React, { useState, useRef, useEffect } from 'react';
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { BanknoteIcon, HospitalIcon, ShoppingBasketIcon, IdCardIcon, CircleArrowDownIcon } from "lucide-react";

const GovServicesSection: React.FC = () => {
  const [cardActive, setCardActive] = useState(false);
  const [activeTerminal, setActiveTerminal] = useState<string | null>(null);
  const [audioEnabled, setAudioEnabled] = useState(true);
  const beepSoundRef = useRef<HTMLAudioElement | null>(null);
  const { toast } = useToast();
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const elementsRef = useRef<(HTMLDivElement | null)[]>([]);

  // Initialize intersection observer for animations
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

    return () => observer.disconnect();
  }, []);

  const addToRefs = (el: HTMLDivElement | null, index: number) => {
    if (el && !elementsRef.current.includes(el)) {
      elementsRef.current[index] = el;
    }
  };

  // Function to play beep sound
  const playBeepSound = () => {
    if (!audioEnabled) return;
    
    if (!beepSoundRef.current) {
      beepSoundRef.current = new Audio("data:audio/wav;base64,//uQRAAAAWMSLwUIYAAsYkXgoQwAEaYLWfkWgAI0wWs/ItAAAGDgYtAgAyN+QWaAAihwMWm4G8QQRDiMcCBcH3Cc+CDv/7xA4Tvh9Rz/y8QADBwMWgQAZG/ILNAARQ4GLTcDeIIIhxGOBAuD7hOfBB3/94gcJ3w+o5/5eIAIAAAVwWgQAVQ2ORaIQwEMAJiDg95G4nQL7mQVWI6GwRcfsZAcsKkJvxgxEjzFUgfHoSQ9Qq7KNwqHwuB13MA4a1q/DmBrHgPcmjiGoh//EwC5nGPEmS4RcfkVKOhJf+WOgoxJclFz3kgn//dBA+ya1GhurNn8zb//9NNutNuhz31f////9vt///z+IdAEAAAK4LQIAKobHItEIYCGAExBwe8jcToF9zIKrEdDYIuP2MgOWFSE34wYiR5iqQPj0JIeoVdlG4VD4XA67mAcNa1fhzA1jwHuTRxDUQ//iYBczjHiTJcIuPyKlHQkv/LHQUYkuSi57yQT//uggfZNajQ3Vmz+Zt//+mm3Wm3Q576v////+32///5/EOgAAADVghQAAAAA//uQZAUAB1WI0PZugAAAAAoQwAAAEk3nRd2qAAAAACiDgAAAAAAABCqEEQRLCgwpBGMlJkIz8jKhGvj4k6jzRnqasNKIeoh5gI7BJaC1A1AoNBjJgbyApVS4IDlZgDU5WUAxEKDNmmALHzZp0Fkz1FMTmGFl1FMEyodIavcCAUHDWrKAIA4aa2oCgILEBupZgHvAhEBcZ6joQBxS76AgccrFlczBvKLC0QI2cBoCFvfTDAo7eoOQInqDPBtvrDEZBNYN5xwNwxQRfw8ZQ5wQVLvO8OYU+mHvFLlDh05Mdg7BT6YrRPpCBznMB2r//xKJjyyOh+cImr2/4doscwD6neZjuZR4AgAABYAAAABy1xcdQtxYBYYZdifkUDgzzXaXn98Z0oi9ILU5mBjFANmRwlVJ3/6jYDAmxaiDG3/6xjQQCCKkRb/6kg/wW+kSJ5//rLobkLSiKmqP/0ikJuDaSaSf/6JiLYLEYnW/+kXg1WRVJL/9EmQ1YZIsv/6Qzwy5qk7/+tEU0nkls3/zIUMPKNX/6yZLf+kFgAfgGyLFAUwY//uQZAUABcd5UiNPVXAAAApAAAAAE0VZQKw9ISAAACgAAAAAVQIygIElVrFkBS+Jhi+EAuu+lKAkYUEIsmEAEoMeDmCETMvfSHTGkF5RWH7kz/ESHWPAq/kcCRhqBtMdokPdM7vil7RG98A2sc7zO6ZvTdM7pmOUAZTnJW+NXxqmd41dqJ6mLTXxrPpnV8yrug+W4OXc2e8vXxLGPMrN3pe/We0I++WpQwX94hjo9IsG8jxa2SuKZFwsQQMqn7K05W17YSWAGxAr76p1lQ+wFz3+S2HM2YNix4LVmgO8O9i9cAAAjA1IAAAAAtIAAAAAIADAAAAAAoAAIAAAAACQAAQAAAAEGAIAAAAACsAAAAGGqkFvNAAAAAMNUFv/9kQyAAAAAAZUgV//ZJMC9AAAAAGVAM/zTJm/9k=");
    }

    if (beepSoundRef.current) {
      beepSoundRef.current.currentTime = 0;
      beepSoundRef.current.play().catch(error => {
        // Silent fallback for browsers that require user interaction
      });
    }
  };

  // Handle NFC card activation
  const handleCardTap = () => {
    if (!cardActive) {
      setCardActive(true);
      toast({
        title: "NFC Card Activated",
        description: "Tap on a government service to access your details.",
        duration: 3000,
      });
      playBeepSound();
    }
  };

  // Handle terminal interaction
  const handleTerminalInteraction = (terminal: string) => {
    if (!cardActive) {
      toast({
        title: "Card Not Activated",
        description: "Please tap your NFC card first.",
        duration: 3000,
      });
      return;
    }

    setActiveTerminal(terminal);
    playBeepSound();
  };

  // Function to go to voting demo
  const goToVotingDemo = () => {
    const demoSection = document.getElementById('demo');
    if (demoSection) {
      demoSection.scrollIntoView({ behavior: 'smooth' });
    }
    toast({
      title: "Redirecting",
      description: "Taking you to the voting verification demo.",
      duration: 3000,
    });
  };

  // Toggle audio
  const toggleAudio = () => {
    setAudioEnabled(!audioEnabled);
    toast({
      title: `Sound ${!audioEnabled ? 'Enabled' : 'Disabled'}`,
      description: `Demo sound effects are now ${!audioEnabled ? 'enabled' : 'disabled'}.`,
      duration: 2000,
    });
  };

  return (
    <section id="gov-services" ref={sectionRef} className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 grid-background opacity-20"></div>
      <div className="absolute top-1/3 -left-36 w-72 h-72 bg-ncrypt-blue/10 rounded-full filter blur-[100px]"></div>
      <div className="absolute bottom-1/3 -right-36 w-72 h-72 bg-ncrypt-cyan/10 rounded-full filter blur-[100px]"></div>
      
      <div className="section-container relative z-10">
        <div
          ref={(el) => addToRefs(el, 0)}
          className="appear-animate text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="section-heading">Government <span className="text-ncrypt-blue">Services</span></h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Project Ncrypt's identity verification system extends beyond voting to secure access to essential government services.
          </p>
          
          {/* Audio toggle button */}
          <button
            onClick={toggleAudio}
            className="mt-4 px-3 py-1.5 bg-muted/30 hover:bg-muted/50 rounded-md text-sm flex items-center gap-2 mx-auto"
          >
            {audioEnabled ? (
              <>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"></path>
                </svg>
                Sound On
              </>
            ) : (
              <>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"></path>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2"></path>
                </svg>
                Sound Off
              </>
            )}
          </button>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <div
            ref={(el) => addToRefs(el, 1)}
            className="appear-animate cyberpunk-card p-6 md:p-10"
            style={{ transitionDelay: '100ms' }}
          >
            {/* NFC Card Display */}
            <div className="mb-10 flex justify-center">
              <div
                ref={cardRef}
                className={`relative w-64 h-40 rounded-xl cursor-pointer transition-all duration-500 transform ${
                  cardActive ? 'scale-105 shadow-[0_0_25px_rgba(0,194,255,0.6)]' : 'hover:scale-105'
                }`}
                onClick={handleCardTap}
                style={{
                  background: "linear-gradient(135deg, rgba(10, 16, 31, 0.8) 0%, rgba(5, 10, 21, 0.9) 100%)",
                  border: cardActive ? "2px solid rgba(0, 194, 255, 0.8)" : "1px solid rgba(0, 194, 255, 0.3)",
                }}
              >
                {/* Card Chip */}
                <div className="absolute top-4 left-4 w-10 h-8 rounded-md bg-yellow-300/80"></div>
                
                {/* NFC Symbol */}
                <div className={`absolute right-4 top-4 ${cardActive ? 'animate-pulse' : ''}`}>
                  <svg className="w-6 h-6 text-ncrypt-blue" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M6 8.6C6 8.04 6 7.76 6.109 7.546C6.205 7.356 6.356 7.205 6.546 7.109C6.76 7 7.04 7 7.6 7H9.4C9.96 7 10.24 7 10.454 7.109C10.644 7.205 10.795 7.356 10.891 7.546C11 7.76 11 8.04 11 8.6V9.4C11 9.96 11 10.24 10.891 10.454C10.795 10.644 10.644 10.795 10.454 10.891C10.24 11 9.96 11 9.4 11H7.6C7.04 11 6.76 11 6.546 10.891C6.356 10.795 6.205 10.644 6.109 10.454C6 10.24 6 9.96 6 9.4V8.6Z"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                    <path
                      d="M6 15.6C6 15.04 6 14.76 6.109 14.546C6.205 14.356 6.356 14.205 6.546 14.109C6.76 14 7.04 14 7.6 14H9.4C9.96 14 10.24 14 10.454 14.109C10.644 14.205 10.795 14.356 10.891 14.546C11 14.76 11 15.04 11 15.6V16.4C11 16.96 11 17.24 10.891 17.454C10.795 17.644 10.644 17.795 10.454 17.891C10.24 18 9.96 18 9.4 18H7.6C7.04 18 6.76 18 6.546 17.891C6.356 17.795 6.205 17.644 6.109 17.454C6 17.24 6 16.96 6 16.4V15.6Z"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                    <path
                      d="M13 8.6C13 8.04 13 7.76 13.109 7.546C13.205 7.356 13.356 7.205 13.546 7.109C13.76 7 14.04 7 14.6 7H16.4C16.96 7 17.24 7 17.454 7.109C17.644 7.205 17.795 7.356 17.891 7.546C18 7.76 18 8.04 18 8.6V16.4C18 16.96 18 17.24 17.891 17.454C17.795 17.644 17.644 17.795 17.454 17.891C17.24 18 16.96 18 16.4 18H14.6C14.04 18 13.76 18 13.546 17.891C13.356 17.795 13.205 17.644 13.109 17.454C13 17.24 13 16.96 13 16.4V8.6Z"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                  </svg>
                </div>
                
                {/* Card Info */}
                <div className="absolute bottom-4 left-4 right-4 text-left">
                  <p className="text-ncrypt-blue font-mono text-sm mb-1">Arjun Kumar</p>
                  <div className="flex items-center justify-between">
                    <p className="text-white/80 font-mono text-xs">ID: NCR-7788945</p>
                    <p className="text-white/80 font-mono text-xs">04/28</p>
                  </div>
                </div>
                
                {/* Animation indicator */}
                {!cardActive && (
                  <div className="absolute inset-0 flex items-center justify-center flex-col">
                    <div className="w-8 h-8 rounded-full border-2 border-ncrypt-blue/60 flex items-center justify-center animate-pulse">
                      <div className="w-6 h-6 rounded-full border-2 border-ncrypt-blue/80"></div>
                    </div>
                    <p className="text-sm text-white/70 mt-2">Tap to activate</p>
                  </div>
                )}
                
                {/* Glow effect */}
                {cardActive && (
                  <div className="absolute -inset-2 bg-ncrypt-blue/20 rounded-xl blur-md -z-10"></div>
                )}
              </div>
            </div>
            
            {/* Service Terminals */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-4">
              {/* Ration Center Terminal */}
              <HoverCard open={activeTerminal === 'ration'} onOpenChange={() => activeTerminal === 'ration' && setActiveTerminal(null)}>
                <HoverCardTrigger asChild>
                  <Card
                    ref={(el) => addToRefs(el, 2)} 
                    className={`appear-animate cursor-pointer transition-all duration-300 ${
                      activeTerminal === 'ration'
                        ? 'bg-gradient-to-br from-ncrypt-dark-blue to-ncrypt-dark border-ncrypt-blue shadow-lg shadow-ncrypt-blue/30'
                        : 'bg-muted/20 hover:bg-muted/30 border-white/10'
                    }`}
                    onClick={() => handleTerminalInteraction('ration')}
                    style={{ transitionDelay: '200ms' }}
                  >
                    <CardContent className="p-6 flex flex-col items-center gap-4">
                      <div className={`p-4 rounded-full ${activeTerminal === 'ration' ? 'bg-ncrypt-blue/20' : 'bg-white/5'}`}>
                        <ShoppingBasketIcon className={`w-8 h-8 ${activeTerminal === 'ration' ? 'text-ncrypt-blue' : 'text-white/70'}`} />
                      </div>
                      <div className="text-center">
                        <h3 className="text-xl font-semibold mb-1">Ration Center</h3>
                        <p className="text-sm text-white/60">Public Distribution System</p>
                      </div>
                      <div className={`w-full h-1 mt-2 rounded-full overflow-hidden ${activeTerminal === 'ration' ? 'bg-ncrypt-dark-blue' : 'bg-white/10'}`}>
                        {activeTerminal === 'ration' && (
                          <div className="h-full bg-ncrypt-blue" style={{ width: '100%', animation: 'pulse 2s infinite' }}></div>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </HoverCardTrigger>
                <HoverCardContent 
                  className="w-80 bg-gradient-to-br from-ncrypt-dark-blue to-ncrypt-dark border border-ncrypt-blue/40 shadow-lg shadow-ncrypt-blue/20 text-white"
                  align="center"
                >
                  <div className="p-2">
                    <div className="flex items-center space-x-2 mb-4">
                      <IdCardIcon className="w-5 h-5 text-ncrypt-blue" />
                      <h4 className="font-semibold">Ration Card Details</h4>
                    </div>
                    <div className="space-y-2 mb-4">
                      <div className="flex justify-between">
                        <span className="text-white/70 text-sm">Name:</span>
                        <span className="font-medium">Arjun Kumar</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-white/70 text-sm">Age:</span>
                        <span className="font-medium">36</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-white/70 text-sm">Ration Card ID:</span>
                        <span className="font-mono text-sm">RCT-9001</span>
                      </div>
                    </div>
                    <div className="pt-3 border-t border-white/10">
                      <h5 className="text-sm font-medium mb-2">Eligible Items:</h5>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-2 py-1 bg-ncrypt-blue/20 rounded-md text-xs">Wheat</span>
                        <span className="px-2 py-1 bg-ncrypt-blue/20 rounded-md text-xs">Rice</span>
                        <span className="px-2 py-1 bg-ncrypt-blue/20 rounded-md text-xs">Cooking Oil</span>
                        <span className="px-2 py-1 bg-ncrypt-blue/20 rounded-md text-xs">Sugar</span>
                      </div>
                    </div>
                    <div className="mt-3 flex justify-between items-center pt-2 border-t border-white/10">
                      <span className="text-white/70 text-sm">Next Delivery:</span>
                      <span className="font-medium text-ncrypt-blue">10th April 2025</span>
                    </div>
                  </div>
                </HoverCardContent>
              </HoverCard>

              {/* Hospital Terminal */}
              <HoverCard open={activeTerminal === 'hospital'} onOpenChange={() => activeTerminal === 'hospital' && setActiveTerminal(null)}>
                <HoverCardTrigger asChild>
                  <Card 
                    ref={(el) => addToRefs(el, 3)}
                    className={`appear-animate cursor-pointer transition-all duration-300 ${
                      activeTerminal === 'hospital'
                        ? 'bg-gradient-to-br from-ncrypt-dark-blue to-ncrypt-dark border-ncrypt-blue shadow-lg shadow-ncrypt-blue/30'
                        : 'bg-muted/20 hover:bg-muted/30 border-white/10'
                    }`}
                    onClick={() => handleTerminalInteraction('hospital')}
                    style={{ transitionDelay: '300ms' }}
                  >
                    <CardContent className="p-6 flex flex-col items-center gap-4">
                      <div className={`p-4 rounded-full ${activeTerminal === 'hospital' ? 'bg-ncrypt-blue/20' : 'bg-white/5'}`}>
                        <HospitalIcon className={`w-8 h-8 ${activeTerminal === 'hospital' ? 'text-ncrypt-blue' : 'text-white/70'}`} />
                      </div>
                      <div className="text-center">
                        <h3 className="text-xl font-semibold mb-1">Health Hospital</h3>
                        <p className="text-sm text-white/60">Government Medical Services</p>
                      </div>
                      <div className={`w-full h-1 mt-2 rounded-full overflow-hidden ${activeTerminal === 'hospital' ? 'bg-ncrypt-dark-blue' : 'bg-white/10'}`}>
                        {activeTerminal === 'hospital' && (
                          <div className="h-full bg-ncrypt-blue" style={{ width: '100%', animation: 'pulse 2s infinite' }}></div>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </HoverCardTrigger>
                <HoverCardContent 
                  className="w-80 bg-gradient-to-br from-ncrypt-dark-blue to-ncrypt-dark border border-ncrypt-blue/40 shadow-lg shadow-ncrypt-blue/20 text-white"
                  align="center"
                >
                  <div className="p-2">
                    <div className="flex items-center space-x-2 mb-4">
                      <IdCardIcon className="w-5 h-5 text-ncrypt-blue" />
                      <h4 className="font-semibold">Health Card Details</h4>
                    </div>
                    <div className="space-y-2 mb-4">
                      <div className="flex justify-between">
                        <span className="text-white/70 text-sm">Name:</span>
                        <span className="font-medium">Arjun Kumar</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-white/70 text-sm">Age:</span>
                        <span className="font-medium">36</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-white/70 text-sm">Blood Group:</span>
                        <span className="font-medium">B+</span>
                      </div>
                    </div>
                    <div className="pt-3 border-t border-white/10">
                      <div className="flex justify-between">
                        <span className="text-white/70 text-sm">Health Card Balance:</span>
                        <span className="font-medium text-ncrypt-blue">₹18,000</span>
                      </div>
                    </div>
                    <div className="mt-3 flex flex-col gap-1 pt-2 border-t border-white/10">
                      <div className="text-white/70 text-sm">Recent Claim:</div>
                      <div className="bg-ncrypt-blue/10 p-2 rounded-md">
                        <div className="text-sm font-medium">₹2,000 - Diagnostic Tests</div>
                        <div className="text-xs text-white/70">February 2025</div>
                      </div>
                    </div>
                  </div>
                </HoverCardContent>
              </HoverCard>

              {/* Pension Terminal */}
              <HoverCard open={activeTerminal === 'pension'} onOpenChange={() => activeTerminal === 'pension' && setActiveTerminal(null)}>
                <HoverCardTrigger asChild>
                  <Card 
                    ref={(el) => addToRefs(el, 4)}
                    className={`appear-animate cursor-pointer transition-all duration-300 ${
                      activeTerminal === 'pension'
                        ? 'bg-gradient-to-br from-ncrypt-dark-blue to-ncrypt-dark border-ncrypt-blue shadow-lg shadow-ncrypt-blue/30'
                        : 'bg-muted/20 hover:bg-muted/30 border-white/10'
                    }`}
                    onClick={() => handleTerminalInteraction('pension')}
                    style={{ transitionDelay: '400ms' }}
                  >
                    <CardContent className="p-6 flex flex-col items-center gap-4">
                      <div className={`p-4 rounded-full ${activeTerminal === 'pension' ? 'bg-ncrypt-blue/20' : 'bg-white/5'}`}>
                        <BanknoteIcon className={`w-8 h-8 ${activeTerminal === 'pension' ? 'text-ncrypt-blue' : 'text-white/70'}`} />
                      </div>
                      <div className="text-center">
                        <h3 className="text-xl font-semibold mb-1">Pension Centre</h3>
                        <p className="text-sm text-white/60">Government Pension Scheme</p>
                      </div>
                      <div className={`w-full h-1 mt-2 rounded-full overflow-hidden ${activeTerminal === 'pension' ? 'bg-ncrypt-dark-blue' : 'bg-white/10'}`}>
                        {activeTerminal === 'pension' && (
                          <div className="h-full bg-ncrypt-blue" style={{ width: '100%', animation: 'pulse 2s infinite' }}></div>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </HoverCardTrigger>
                <HoverCardContent 
                  className="w-80 bg-gradient-to-br from-ncrypt-dark-blue to-ncrypt-dark border border-ncrypt-blue/40 shadow-lg shadow-ncrypt-blue/20 text-white"
                  align="center"
                >
                  <div className="p-2">
                    <div className="flex items-center space-x-2 mb-4">
                      <IdCardIcon className="w-5 h-5 text-ncrypt-blue" />
                      <h4 className="font-semibold">Pension Account Details</h4>
                    </div>
                    <div className="space-y-2 mb-4">
                      <div className="flex justify-between">
                        <span className="text-white/70 text-sm">Name:</span>
                        <span className="font-medium">Arjun Kumar</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-white/70 text-sm">Age:</span>
                        <span className="font-medium">60</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-white/70 text-sm">Pension Account ID:</span>
                        <span className="font-mono text-sm">PCT-7788</span>
                      </div>
                    </div>
                    <div className="pt-3 border-t border-white/10">
                      <div className="flex justify-between">
                        <span className="text-white/70 text-sm">Monthly Pension:</span>
                        <span className="font-medium text-ncrypt-blue">₹3,000</span>
                      </div>
                    </div>
                    <div className="mt-3 flex justify-between items-center pt-2 border-t border-white/10">
                      <span className="text-white/70 text-sm">Last Payout:</span>
                      <span className="font-medium">1st April 2025</span>
                    </div>
                  </div>
                </HoverCardContent>
              </HoverCard>
            </div>
            
            {/* Go to voting demo section */}
            <div
              ref={(el) => addToRefs(el, 5)}
              className="appear-animate mt-16 text-center"
              style={{ transitionDelay: '500ms' }}
            >
              <Button 
                onClick={goToVotingDemo} 
                className="neo-button group flex items-center gap-2"
              >
                Explore Voting Verification
                <CircleArrowDownIcon className="w-4 h-4 transition-transform group-hover:translate-y-1" />
              </Button>
              <p className="mt-4 text-sm text-white/50">Experience our secure voting verification system demo.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GovServicesSection;
