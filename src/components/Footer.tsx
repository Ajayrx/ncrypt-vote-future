
import React from 'react';
import { Github, Mail, Linkedin, Twitter, ExternalLink, Users } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-16 relative overflow-hidden bg-ncrypt-dark border-t border-ncrypt-blue/10">
      {/* Background Elements */}
      <div className="absolute inset-0 grid-background opacity-10"></div>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-ncrypt-blue/50 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Logo and About */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="h-10 w-10 bg-gradient-to-tr from-ncrypt-blue to-ncrypt-cyan rounded-lg"></div>
              <span className="font-space font-bold text-2xl text-white">
                Project <span className="text-ncrypt-blue">Ncrypt</span>
              </span>
            </div>
            
            <p className="text-white/70 mb-6">
              The future of secure, efficient voter verification and government service access through NFC technology and biometric security.
            </p>
            
            <div className="flex space-x-4">
              <a href="https://github.com/Ajayrx/ncrypt-vote-future" className="p-2 bg-ncrypt-blue/10 rounded-full text-ncrypt-blue hover:bg-ncrypt-blue/20 transition-colors" aria-label="GitHub">
                <Github size={20} />
              </a>
              <a href="#" className="p-2 bg-ncrypt-blue/10 rounded-full text-ncrypt-blue hover:bg-ncrypt-blue/20 transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="https://linkedin.com/in/ajaybala" className="p-2 bg-ncrypt-blue/10 rounded-full text-ncrypt-blue hover:bg-ncrypt-blue/20 transition-colors" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
              <a href="mailto:contact@projectncrypt.com" className="p-2 bg-ncrypt-blue/10 rounded-full text-ncrypt-blue hover:bg-ncrypt-blue/20 transition-colors" aria-label="Email">
                <Mail size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="#problem" className="text-white/70 hover:text-ncrypt-blue transition-colors">
                  Why Change
                </a>
              </li>
              <li>
                <a href="#solution" className="text-white/70 hover:text-ncrypt-blue transition-colors">
                  Our Solution
                </a>
              </li>
              <li>
                <a href="#demo" className="text-white/70 hover:text-ncrypt-blue transition-colors">
                  Live Demo
                </a>
              </li>
              <li>
                <a href="#technologies" className="text-white/70 hover:text-ncrypt-blue transition-colors">
                  Technologies
                </a>
              </li>
              <li>
                <a href="#security" className="text-white/70 hover:text-ncrypt-blue transition-colors">
                  Security
                </a>
              </li>
              <li>
                <a href="#team" className="text-white/70 hover:text-ncrypt-blue transition-colors">
                  Our Team
                </a>
              </li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-6">Contact Us</h3>
            <p className="text-white/70 mb-6">
              Have questions about Project Ncrypt or interested in implementing our system?
            </p>
            
            <a href="mailto:contact@projectncrypt.com" className="neo-button inline-flex">
              <Mail className="mr-2" size={18} /> Get in Touch
            </a>
            
            <div className="mt-6 text-sm text-white/50">
              <p>Email: ajay0i0know@gmail.com</p>
              <p>LinkedIn: <a href="https://linkedin.com/in/ajaybala" className="text-ncrypt-blue hover:underline">Ajay Bala</a></p>
              <p>Team Mango Labs, India</p>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-ncrypt-blue/10 flex flex-col md:flex-row justify-between items-center">
          <div className="text-white/50 text-sm mb-4 md:mb-0">
            © {currentYear} Project Ncrypt. All rights reserved.
          </div>
          
          <div className="flex flex-wrap justify-center space-x-4 text-sm">
            <a href="#" className="text-white/50 hover:text-ncrypt-blue transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-white/50 hover:text-ncrypt-blue transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-white/50 hover:text-ncrypt-blue transition-colors">
              Security
            </a>
            <div className="text-white/50">
              <span className="text-ncrypt-blue">Powered by:</span> Mango Ai
            </div>
          </div>
        </div>
        
        {/* Join Our Team Section - Enhanced with tooltips */}
        <div className="mt-12 pt-8 border-t border-ncrypt-blue/10">
          <div className="bg-ncrypt-blue/10 rounded-xl p-6 flex flex-col md:flex-row items-center justify-between">
            <div className="mb-4 md:mb-0 text-center md:text-left">
              <h3 className="text-xl font-bold mb-2 text-white">Join Our Team</h3>
              <p className="text-white/70 max-w-md">
                We're looking for talented individuals passionate about secure digital identity and blockchain technology.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <a 
                      href="https://forms.gle/cXHnq1JzXgGu7Dt76" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="neo-button inline-flex items-center"
                    >
                      <Users className="mr-2" size={18} /> Join Our Team
                    </a>
                  </TooltipTrigger>
                  <TooltipContent side="bottom" className="bg-ncrypt-dark-blue text-white border border-ncrypt-blue/30">
                    Submit your application
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <a 
                      href="https://github.com/Ajayrx/ncrypt-vote-future" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="bg-ncrypt-dark-blue/60 hover:bg-ncrypt-dark-blue/80 text-white py-2 px-4 rounded-md flex items-center justify-center border border-ncrypt-blue/30 transition-all"
                    >
                      <ExternalLink className="mr-2" size={18} /> Learn More
                    </a>
                  </TooltipTrigger>
                  <TooltipContent side="bottom" className="bg-ncrypt-dark-blue text-white border border-ncrypt-blue/30">
                    Visit our GitHub for project details
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
