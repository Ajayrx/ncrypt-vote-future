
import React, { useEffect, useRef } from 'react';

const HeroSection: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
    
    // Particle class
    class Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      color: string;
      
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 3 + 1; // Size between 1-4
        this.speedX = Math.random() * 1 - 0.5;
        this.speedY = Math.random() * 1 - 0.5;
        
        // Colors: blue, cyan, white (mostly blue)
        const colors = ['#00C2FF', '#00FFEA', '#FFFFFF'];
        const weights = [0.7, 0.2, 0.1]; // 70% blue, 20% cyan, 10% white
        
        const random = Math.random();
        let sum = 0;
        for (let i = 0; i < weights.length; i++) {
          sum += weights[i];
          if (random < sum) {
            this.color = colors[i];
            break;
          }
        }
      }
      
      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        
        // Loop particles around edges
        if (this.x > canvas.width) this.x = 0;
        else if (this.x < 0) this.x = canvas.width;
        if (this.y > canvas.height) this.y = 0;
        else if (this.y < 0) this.y = canvas.height;
      }
      
      draw() {
        if (!ctx) return;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
        
        // Add glow effect
        ctx.shadowBlur = 10;
        ctx.shadowColor = this.color;
      }
    }
    
    // Create particles
    const particlesArray: Particle[] = [];
    const NUMBER_OF_PARTICLES = 30;
    
    for (let i = 0; i < NUMBER_OF_PARTICLES; i++) {
      particlesArray.push(new Particle());
    }
    
    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update();
        particlesArray[i].draw();
      }
      
      // Draw connecting lines between close particles
      for (let a = 0; a < particlesArray.length; a++) {
        for (let b = a; b < particlesArray.length; b++) {
          const dx = particlesArray[a].x - particlesArray[b].x;
          const dy = particlesArray[a].y - particlesArray[b].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 150) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(0, 194, 255, ${1 - distance / 150}`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
            ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
            ctx.stroke();
          }
        }
      }
      
      requestAnimationFrame(animate);
    };
    
    animate();
    
    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  const scrollToDemo = () => {
    const element = document.getElementById('demo');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToPrototype = () => {
    const element = document.getElementById('submissions');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Canvas background */}
      <canvas 
        ref={canvasRef} 
        className="absolute top-0 left-0 w-full h-full"
        style={{ opacity: 0.7 }}
      />
      
      {/* Grid background */}
      <div className="absolute inset-0 grid-background opacity-30" />
      
      {/* Content */}
      <div className="section-container relative z-10 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 animate-fade-in">
            Project <span className="glowing-text">Ncrypt</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Secure. Smart. Seamless Voting.
          </p>
          
          <p className="text-lg md:text-xl text-white/70 mb-12 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.4s' }}>
            The future of NFC-based voter verification and government services access
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <button 
              onClick={scrollToDemo}
              className="neo-button"
            >
              Explore Demo
            </button>
            <button 
              onClick={scrollToPrototype}
              className="px-8 py-3 rounded-full bg-gradient-to-r from-ncrypt-blue/20 to-ncrypt-cyan/20 border border-ncrypt-blue/40 text-white font-medium transition-all hover:shadow-[0_0_15px_rgba(0,194,255,0.4)] hover:scale-105"
            >
              Prototype
            </button>
          </div>
        </div>
        
        {/* Animated NFC card illustration */}
        <div className="mt-20 lg:mt-24 animate-fade-in" style={{ animationDelay: '0.8s' }}>
          <div className="relative w-64 h-40 mx-auto rounded-xl bg-gradient-to-r from-ncrypt-blue/30 to-ncrypt-cyan/30 backdrop-blur-sm border border-white/10 overflow-hidden shadow-lg shadow-ncrypt-blue/20 animate-float">
            {/* Card chip */}
            <div className="absolute top-6 left-6 w-10 h-8 bg-gradient-to-br from-yellow-500/80 to-yellow-300/80 rounded-md"></div>
            
            {/* NFC symbol */}
            <div className="absolute top-6 right-6 w-8 h-8 flex items-center justify-center">
              <div className="w-full h-full border-2 border-white/80 rounded-full"></div>
              <div className="absolute w-3/4 h-3/4 border-2 border-white/80 rounded-full"></div>
              <div className="absolute w-1/2 h-1/2 border-2 border-white/80 rounded-full"></div>
            </div>
            
            {/* Card text/numbers */}
            <div className="absolute bottom-6 left-6 right-6">
              <div className="flex justify-between">
                <div className="text-xs text-white/80">ID: 10284756</div>
                <div className="text-xs text-white/80">2025-04</div>
              </div>
              <div className="mt-2 text-sm font-mono tracking-wider text-white/90">NCRYPT ••••••</div>
            </div>
            
            {/* Animated glow effect */}
            <div className="absolute -top-10 -left-10 w-20 h-20 bg-ncrypt-blue/30 rounded-full filter blur-xl animate-slow-spin" style={{ animationDuration: '8s' }}></div>
            <div className="absolute -bottom-10 -right-10 w-20 h-20 bg-ncrypt-cyan/30 rounded-full filter blur-xl animate-slow-spin" style={{ animationDuration: '12s', animationDirection: 'reverse' }}></div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <div className="text-ncrypt-blue text-sm mb-2">Scroll Down</div>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 5V19M12 19L5 12M12 19L19 12" stroke="#00C2FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
