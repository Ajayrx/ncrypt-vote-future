
import React, { useState, useRef, useEffect } from 'react';
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { BanknoteIcon, HospitalIcon, ShoppingBasketIcon, IdCardIcon, CircleArrowDownIcon, UsersIcon, CheckCircle } from "lucide-react";
import { Badge } from "@/components/ui/badge";

// User profiles for different cards
const userProfiles = [
  {
    id: 'user1',
    name: 'Arjun Kumar',
    cardId: 'NCR-7788945',
    expiryDate: '04/28',
    age: 36,
    rationCardId: 'RCT-9001',
    bloodGroup: 'B+',
    healthBalance: '₹18,000',
    recentClaim: '₹2,000 - Diagnostic Tests',
    recentClaimDate: 'February 2025',
    pensionAge: 60,
    pensionId: 'PCT-7788',
    pensionAmount: '₹3,000',
    pensionDate: '1st April 2025',
    rationItems: ['Wheat', 'Rice', 'Cooking Oil', 'Sugar'],
    nextDelivery: '10th April 2025',
    avatar: '👨‍💼'
  },
  {
    id: 'user2',
    name: 'Priya Sharma',
    cardId: 'NCR-6645278',
    expiryDate: '07/27',
    age: 29,
    rationCardId: 'RCT-5432',
    bloodGroup: 'A+',
    healthBalance: '₹24,500',
    recentClaim: '₹3,500 - Medicine',
    recentClaimDate: 'March 2025',
    pensionAge: 62,
    pensionId: 'PCT-6543',
    pensionAmount: '₹3,200',
    pensionDate: '1st April 2025',
    rationItems: ['Rice', 'Wheat', 'Sugar', 'Pulses'],
    nextDelivery: '15th April 2025',
    avatar: '👩‍💼'
  },
  {
    id: 'user3',
    name: 'Rahul Singh',
    cardId: 'NCR-9902456',
    expiryDate: '11/26',
    age: 42,
    rationCardId: 'RCT-7754',
    bloodGroup: 'O+',
    healthBalance: '₹9,800',
    recentClaim: '₹5,200 - Surgery',
    recentClaimDate: 'January 2025',
    pensionAge: 65,
    pensionId: 'PCT-8932',
    pensionAmount: '₹3,500',
    pensionDate: '1st April 2025',
    rationItems: ['Wheat', 'Rice', 'Cooking Oil', 'Sugar', 'Pulses'],
    nextDelivery: '8th April 2025',
    avatar: '👨‍🔧'
  }
];

const GovServicesSection: React.FC = () => {
  const [cardActive, setCardActive] = useState(false);
  const [activeTerminal, setActiveTerminal] = useState<string | null>(null);
  const [audioEnabled, setAudioEnabled] = useState(true);
  const [selectedUser, setSelectedUser] = useState(userProfiles[0]);
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
      beepSoundRef.current = new Audio("data:audio/wav;base64,//uQRAAAAWMSLwUIYAAsYkXgoQwAEaYLWfkWgAI0wWs/ItAAAGDgYtAgAyN+QWaAAihwMWm4G8QQRDiMcCBcH3Cc+CDv/7xA4Tvh9Rz/y8QADBwMWgQAZG/ILNAARQ4GLTcDeIIIhxGOBAuD7hOfBB3/94gcJ3w+o5/5eIAIAAAVwWgQAVQ2ORaIQwEMAJiDg95G4nQL7mQVWI6GwRcfsZAcsKkJvxgxEjzFUgfHoSQ9Qq7KNwqHwuB13MA4a1q/DmBrHgPcmjiGoh//EwC5nGPEmS4RcfkVKOhJf+WOgoxJclFz3kgn//dBA+ya1GhurNn8zb//9NNutNuhz31f////9vt///z+IdAEAAAK4LQIAKobHItEIYCGAExBwe8jcToF9zIKrEdDYIuP2MgOWFSE34wYiR5iqQPj0JIeoVdlG4VD4XA67mAcNa1fhzA1jwHuTRxDUQ//iYBczjHiTJcIuPyKlHQkv/LHQUYkuSi57yQT//uggfZNajQ3Vmz+Zt//+mm3Wm3Q576v////+32///5/EOgAAADVghQAAAAA//uQZAUAB1WI0PZugAAAAAoQwAAAEk3nRd2qAAAAACiDgAAAAAAABCqEEQRLCgwpBGMlJkIz8jKhGvj4k6jzRnqasNKIeoh5gI7BJaC1A1AoNBjJgbyApVS4IDlZgDU5WUAxEKDNmmALHzZp0Fkz1FMTmGFl1FMEyodIavcCAUHDWrKAIA4aa2oCgILEBupZgHvAhEBcZ6joQBxS76AgccrFlczBvKLC0QI2cBoCFvfTDAo7eoOQInqDPBtvrDEZBNYN5xwNwxQRfw8ZQ5wQVLvO8OYU+mHvFLlDh05Mdg7BT6YrRPpCBznMB2r//xKJjyyOh+cImr2/4doscwD6neZjuZR4AgAABYAAAABy1xcdQtxYBYYZdifkUDgzzXaXn98Z0oi9ILU5mBjFANmRwlVJ3/6jYDAmxaiDG3/6xjQQCCKkRb/6kg/wW+kSJ5//rLobkLSiKmqP/0ikJuDaSaSf/6JiLYLEYnW/+kXg1WRVJL/9EmQ1YZIsv/6Qzwy5qk7/+tEU0nkls3/zIUMPKNX/6yZLf+kFgAfgGyLFAUwY//uQZAUABcd5UiNPVXAAAApAAAAAE0VZQKw9ISAAACgAAAAAVQIygIElVrFkBS+Jhi+EAuu+lKAkYUEIsmEAEoMeDmCETMvfSHTGkF5RWH7kz/ESHWPAq/kcCRhqBtMdokPdM7vil7RG98A2sc7zO6ZvTdM7pmOUAZTnJW+NXxqmd41dqJ6mLTXxrPpnV8yrug+W4OXc2e8vXxLGPMrN3pe/We0I++WpQwX94hjo9IsG8jxa2SuKZFwsQQMqn7K05W17YSWAGxAr76p1lQ+wFz3+S2HM2YNix4LVmgO8O9i9cAAAjA1IAAAAAtIAAAAAIADAAAAAAoAAIAAAAACQAAQAAAAEGAIAAAAACsAAAAGGqkFvNAAAAAMNUFv/9k=");
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
        description: "Select a government service to access your details.",
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

    setActiveTerminal(terminal === activeTerminal ? null : terminal);
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

  // Change user card
  const changeUser = (userId: string) => {
    setCardActive(false);
    setActiveTerminal(null);
    
    const user = userProfiles.find(u => u.id === userId);
    if (user) {
      setSelectedUser(user);
      toast({
        title: "User Changed",
        description: `Switched to ${user.name}'s card.`,
        duration: 2000,
      });
    }
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
        
        <div className="max-w-6xl mx-auto">
          <div
            ref={(el) => addToRefs(el, 1)}
            className="appear-animate cyberpunk-card p-8 md:p-12"
            style={{ transitionDelay: '100ms' }}
          >
            {/* New User Selection Design */}
            <div className="mb-12">
              <h3 className="text-2xl font-semibold mb-8 text-center text-white">Select User Profile</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {userProfiles.map((user) => (
                  <Card 
                    key={user.id}
                    className={`cursor-pointer transition-all duration-300 transform hover:scale-105 ${
                      selectedUser.id === user.id 
                        ? 'bg-gradient-to-br from-ncrypt-blue/30 to-ncrypt-cyan/20 border-ncrypt-blue shadow-lg shadow-ncrypt-blue/30' 
                        : 'bg-muted/20 hover:bg-muted/30 border-white/20'
                    }`}
                    onClick={() => changeUser(user.id)}
                  >
                    <CardContent className="p-6">
                      <div className="flex flex-col items-center text-center gap-4">
                        <div className="text-4xl mb-2">{user.avatar}</div>
                        <div>
                          <h4 className="text-lg font-semibold text-white mb-1">{user.name}</h4>
                          <p className="text-sm text-white/70 mb-2">Age: {user.age}</p>
                          <p className="text-xs text-white/60 font-mono">{user.cardId}</p>
                        </div>
                        {selectedUser.id === user.id && (
                          <div className="flex items-center gap-1 text-ncrypt-blue">
                            <CheckCircle className="w-4 h-4" />
                            <span className="text-sm">Selected</span>
                          </div>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
            
            {/* NFC Card Display */}
            <div className="mb-12 flex justify-center">
              <div
                ref={cardRef}
                className={`relative w-80 h-48 rounded-2xl cursor-pointer transition-all duration-500 transform ${
                  cardActive ? 'scale-105 shadow-[0_0_30px_rgba(0,194,255,0.6)]' : 'hover:scale-105'
                }`}
                onClick={handleCardTap}
                style={{
                  background: "linear-gradient(135deg, rgba(10, 16, 31, 0.9) 0%, rgba(5, 10, 21, 0.95) 100%)",
                  border: cardActive ? "2px solid rgba(0, 194, 255, 0.8)" : "1px solid rgba(0, 194, 255, 0.3)",
                }}
              >
                {/* Card Chip */}
                <div className="absolute top-6 left-6 w-12 h-10 rounded-lg bg-yellow-300/90 shadow-lg"></div>
                
                {/* NFC Symbol */}
                <div className={`absolute right-6 top-6 ${cardActive ? 'animate-pulse' : ''}`}>
                  <svg className="w-8 h-8 text-ncrypt-blue" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
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
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="text-2xl">{selectedUser.avatar}</div>
                    <div>
                      <p className="text-ncrypt-blue font-semibold text-lg">{selectedUser.name}</p>
                      <p className="text-white/80 text-sm">Age: {selectedUser.age}</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <p className="text-white/80 font-mono text-sm">ID: {selectedUser.cardId}</p>
                    <p className="text-white/80 font-mono text-sm">{selectedUser.expiryDate}</p>
                  </div>
                </div>
                
                {/* Animation indicator */}
                {!cardActive && (
                  <div className="absolute inset-0 flex items-center justify-center flex-col bg-black/20 rounded-2xl">
                    <div className="w-12 h-12 rounded-full border-2 border-ncrypt-blue/60 flex items-center justify-center animate-pulse">
                      <div className="w-8 h-8 rounded-full border-2 border-ncrypt-blue/80"></div>
                    </div>
                    <p className="text-lg text-white/80 mt-3 font-medium">Tap to activate</p>
                  </div>
                )}
                
                {/* Glow effect */}
                {cardActive && (
                  <div className="absolute -inset-3 bg-ncrypt-blue/20 rounded-2xl blur-lg -z-10"></div>
                )}
              </div>
            </div>
            
            {/* Service Terminals */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {/* Ration Center Terminal */}
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
                <CardContent className="p-8 text-center">
                  <div className={`p-6 rounded-full mx-auto mb-6 w-20 h-20 flex items-center justify-center ${
                    activeTerminal === 'ration' ? 'bg-ncrypt-blue/20' : 'bg-white/5'
                  }`}>
                    <ShoppingBasketIcon className={`w-10 h-10 ${
                      activeTerminal === 'ration' ? 'text-ncrypt-blue' : 'text-white/70'
                    }`} />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Ration Center</h3>
                  <p className="text-sm text-white/60 mb-4">Public Distribution System</p>
                  
                  {activeTerminal === 'ration' && (
                    <div className="mt-6 p-4 bg-ncrypt-blue/10 rounded-lg">
                      <div className="space-y-2 text-left">
                        <div className="flex justify-between">
                          <span className="text-white/70 text-sm">Ration Card ID:</span>
                          <span className="font-mono text-sm">{selectedUser.rationCardId}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-white/70 text-sm">Next Delivery:</span>
                          <span className="text-ncrypt-blue text-sm">{selectedUser.nextDelivery}</span>
                        </div>
                        <div className="mt-3">
                          <p className="text-white/70 text-sm mb-2">Eligible Items:</p>
                          <div className="flex flex-wrap gap-1">
                            {selectedUser.rationItems.map((item, index) => (
                              <Badge key={index} variant="secondary" className="bg-ncrypt-blue/20 text-white text-xs">
                                {item}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>

              {/* Hospital Terminal */}
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
                <CardContent className="p-8 text-center">
                  <div className={`p-6 rounded-full mx-auto mb-6 w-20 h-20 flex items-center justify-center ${
                    activeTerminal === 'hospital' ? 'bg-ncrypt-blue/20' : 'bg-white/5'
                  }`}>
                    <HospitalIcon className={`w-10 h-10 ${
                      activeTerminal === 'hospital' ? 'text-ncrypt-blue' : 'text-white/70'
                    }`} />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Health Hospital</h3>
                  <p className="text-sm text-white/60 mb-4">Government Medical Services</p>
                  
                  {activeTerminal === 'hospital' && (
                    <div className="mt-6 p-4 bg-ncrypt-blue/10 rounded-lg">
                      <div className="space-y-2 text-left">
                        <div className="flex justify-between">
                          <span className="text-white/70 text-sm">Blood Group:</span>
                          <span className="font-medium">{selectedUser.bloodGroup}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-white/70 text-sm">Health Balance:</span>
                          <span className="text-ncrypt-blue font-medium">{selectedUser.healthBalance}</span>
                        </div>
                        <div className="mt-3 p-2 bg-ncrypt-blue/10 rounded-md">
                          <div className="text-sm font-medium">{selectedUser.recentClaim}</div>
                          <div className="text-xs text-white/70">{selectedUser.recentClaimDate}</div>
                        </div>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
              
              {/* Pension Terminal */}
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
                <CardContent className="p-8 text-center">
                  <div className={`p-6 rounded-full mx-auto mb-6 w-20 h-20 flex items-center justify-center ${
                    activeTerminal === 'pension' ? 'bg-ncrypt-blue/20' : 'bg-white/5'
                  }`}>
                    <BanknoteIcon className={`w-10 h-10 ${
                      activeTerminal === 'pension' ? 'text-ncrypt-blue' : 'text-white/70'
                    }`} />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Pension Center</h3>
                  <p className="text-sm text-white/60 mb-4">Senior Citizen Benefits</p>
                  
                  {activeTerminal === 'pension' && (
                    <div className="mt-6 p-4 bg-ncrypt-blue/10 rounded-lg">
                      <div className="space-y-2 text-left">
                        <div className="flex justify-between">
                          <span className="text-white/70 text-sm">Pension ID:</span>
                          <span className="font-mono text-sm">{selectedUser.pensionId}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-white/70 text-sm">Amount:</span>
                          <span className="text-ncrypt-blue font-medium">{selectedUser.pensionAmount}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-white/70 text-sm">Next Payment:</span>
                          <span className="text-sm">{selectedUser.pensionDate}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-white/70 text-sm">Pension Age:</span>
                          <span className="text-sm">{selectedUser.pensionAge} years</span>
                        </div>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
            
            {/* Demo Link Button */}
            <div className="text-center">
              <Button 
                onClick={goToVotingDemo} 
                className="bg-ncrypt-blue hover:bg-ncrypt-blue/80 text-white font-medium px-8 py-3"
              >
                <CircleArrowDownIcon className="w-5 h-5 mr-2" />
                Go to Voting Verification Demo
              </Button>
              <p className="text-sm text-white/60 mt-3">See how the same identity verification works for voting</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GovServicesSection;
