
import React, { useEffect, useRef } from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const TeamSection: React.FC = () => {
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

  const teamMembers = [
    {
      id: 1,
      name: "Alex Chen",
      role: "Project Lead / Hardware Design",
      bio: "Cybersecurity expert with 5+ years experience in secure hardware development",
      delay: 100
    },
    {
      id: 2,
      name: "Morgan Taylor",
      role: "Front-end Developer",
      bio: "Specialized in creating intuitive, accessible UI/UX for security applications",
      delay: 200
    },
    {
      id: 3,
      name: "Jamie Rodriguez",
      role: "Cryptography Specialist",
      bio: "Researcher focused on post-quantum cryptographic methods and secure protocols",
      delay: 300
    },
    {
      id: 4,
      name: "Sam Washington",
      role: "ML Engineer",
      bio: "Expert in biometric verification systems and privacy-preserving ML techniques",
      delay: 400
    }
  ];

  return (
    <section id="team" ref={sectionRef} className="py-24 relative overflow-hidden bg-ncrypt-dark-blue/30">
      {/* Background Elements */}
      <div className="absolute inset-0 grid-background opacity-20"></div>
      <div className="absolute top-1/3 -right-36 w-72 h-72 bg-ncrypt-blue/10 rounded-full filter blur-[100px]"></div>
      <div className="absolute bottom-1/3 -left-36 w-72 h-72 bg-ncrypt-cyan/10 rounded-full filter blur-[100px]"></div>
      
      <div className="section-container relative z-10">
        <div
          ref={(el) => addToRefs(el, 0)}
          className="appear-animate text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="section-heading">
            Meet the <span className="text-ncrypt-blue">Team</span>
          </h2>
          <div className="flex items-center justify-center space-x-2 mb-6">
            <div className="w-2 h-2 rounded-full bg-ncrypt-blue"></div>
            <h3 className="text-xl font-bold">Team Mango</h3>
            <div className="w-2 h-2 rounded-full bg-ncrypt-blue"></div>
          </div>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            We're a passionate team of cybersecurity experts, developers, and hardware engineers dedicated to creating secure digital identity solutions.
          </p>
        </div>
        
        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member, index) => (
            <div
              key={member.id}
              ref={(el) => addToRefs(el, index + 1)}
              className="appear-animate relative group"
              style={{ transitionDelay: `${member.delay}ms` }}
            >
              {/* Card Front */}
              <div className="cyberpunk-card p-6 text-center h-[320px] flex flex-col group-hover:opacity-0 transition-opacity duration-500">
                {/* Avatar Circle */}
                <div className="w-28 h-28 rounded-full mx-auto mb-4 bg-gradient-to-br from-ncrypt-dark-blue to-ncrypt-dark border border-ncrypt-blue/30 flex items-center justify-center overflow-hidden">
                  <svg className="w-16 h-16 text-ncrypt-blue/60" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                
                <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                <p className="text-ncrypt-blue font-medium text-sm mb-4">{member.role}</p>
                <p className="text-white/70 text-sm">{member.bio}</p>
                
                {/* Hover Instruction */}
                <div className="mt-auto pt-4">
                  <p className="text-white/40 text-xs">Hover to learn more</p>
                </div>
              </div>
              
              {/* Card Back */}
              <div className="cyberpunk-card absolute inset-0 p-6 bg-gradient-to-br from-ncrypt-dark-blue to-ncrypt-dark border border-ncrypt-blue flex flex-col opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                <p className="text-ncrypt-blue font-medium text-sm mb-4">{member.role}</p>
                
                <div className="space-y-3 mb-6">
                  <div>
                    <h4 className="text-sm font-bold mb-1">Expertise</h4>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-2 py-1 text-xs bg-ncrypt-blue/10 rounded-full text-ncrypt-blue">Cybersecurity</span>
                      <span className="px-2 py-1 text-xs bg-ncrypt-blue/10 rounded-full text-ncrypt-blue">NFC Technology</span>
                      <span className="px-2 py-1 text-xs bg-ncrypt-blue/10 rounded-full text-ncrypt-blue">Encryption</span>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-bold mb-1">Education</h4>
                    <p className="text-white/70 text-sm">MS in Cybersecurity, Stanford University</p>
                  </div>
                </div>
                
                <div className="mt-auto">
                  <h4 className="text-sm font-bold mb-2">Connect</h4>
                  <div className="flex space-x-4">
                    <a href="#" className="p-2 bg-ncrypt-blue/10 rounded-full text-ncrypt-blue hover:bg-ncrypt-blue/20 transition-colors">
                      <Github size={18} />
                    </a>
                    <a href="#" className="p-2 bg-ncrypt-blue/10 rounded-full text-ncrypt-blue hover:bg-ncrypt-blue/20 transition-colors">
                      <Linkedin size={18} />
                    </a>
                    <a href="#" className="p-2 bg-ncrypt-blue/10 rounded-full text-ncrypt-blue hover:bg-ncrypt-blue/20 transition-colors">
                      <Mail size={18} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Join the Team */}
        <div
          ref={(el) => addToRefs(el, teamMembers.length + 1)}
          className="appear-animate mt-16 max-w-xl mx-auto"
          style={{ transitionDelay: '500ms' }}
        >
          <div className="cyberpunk-card p-8 text-center">
            <h3 className="text-xl font-bold mb-4">Join Our Team</h3>
            <p className="text-white/80 mb-6">
              Passionate about security, privacy, and creating technology for social good? We're looking for talented individuals to join Team Mango.
            </p>
            <button className="neo-button">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
