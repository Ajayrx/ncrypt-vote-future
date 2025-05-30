
import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { Github } from "lucide-react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        scrolled ? "bg-ncrypt-dark/80 backdrop-blur-md shadow-lg shadow-ncrypt-blue/5" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <div className="h-8 w-8 bg-gradient-to-tr from-ncrypt-blue to-ncrypt-cyan rounded-lg animate-pulse-glow"></div>
            <span className="font-space font-bold text-xl text-white">
              Project <span className="text-ncrypt-blue">Ncrypt</span>
            </span>
          </div>
          
          <nav className="hidden md:flex space-x-8 text-sm font-medium">
            <button 
              onClick={() => scrollTo("problem")}
              className="text-white/80 hover:text-ncrypt-blue transition-colors"
            >
              Problem
            </button>
            <button 
              onClick={() => scrollTo("solution")}
              className="text-white/80 hover:text-ncrypt-blue transition-colors"
            >
              Solution
            </button>
            <button 
              onClick={() => scrollTo("demo")}
              className="text-white/80 hover:text-ncrypt-blue transition-colors"
            >
              Demo
            </button>
            <button 
              onClick={() => scrollTo("technologies")}
              className="text-white/80 hover:text-ncrypt-blue transition-colors"
            >
              Technologies
            </button>
            <button 
              onClick={() => scrollTo("security")}
              className="text-white/80 hover:text-ncrypt-blue transition-colors"
            >
              Security
            </button>
            <button 
              onClick={() => scrollTo("team")}
              className="text-white/80 hover:text-ncrypt-blue transition-colors"
            >
              Team
            </button>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-white/80 hover:text-ncrypt-blue transition-colors"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
          </div>
          
          {/* Mobile menu button */}
          <button className="md:hidden flex items-center p-2 rounded-md text-white hover:text-ncrypt-blue">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
