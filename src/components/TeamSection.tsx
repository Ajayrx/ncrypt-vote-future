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
      name: "Ajay Bala",
      role: "Project Lead",
      image: "/team/ajay.jpeg",
      bio: "Software Developer with a passion for building secure systems.",
      delay: 100,
      github: "https://github.com/Ajayrx",
      linkedin: "https://linkedin.com/in/ajaybala",
      email: "mailto:ajay0i0know@gmail.com",
      expertise: ["Backend", "Web-Devloper", "System Architecture"]
    },
    {
      id: 2,
      name: "Nilanjan Saha",
      role: "AI/ML Engineer",
      image: "/team/nil.jpeg",
      bio: "DevOps & AWS || GenAI || Artificial Intelligence & Machine Learning",
      delay: 200,
      github: "https://github.com/Devnil434",
      linkedin: "https://www.linkedin.com/in/devnil-674580189",
      email: "mailto:nilanjans434@gmail.com",
      expertise: ["AI/ML", "Data Science", "Fingerprint Matching"]
    },
    {
      id: 3,
      name: "Meghali Dutta",
      role: "UI/UX Designer",
      image: "/team/meg.jpeg",
      bio: "SDE Intern @ Coincent.ai | SWOC- contributor | Skilled in Full stack web development",
      delay: 300,
      github: "https://github.com/Meghali54",
      linkedin: "https://www.linkedin.com/in/meghali-dutta",
      email: "mailto:meghali@example.com",
      expertise: ["UI/UX", "Figma", "Responsive Design"]
    }
  ];

  return (
    <section id="team" ref={sectionRef} className="py-16 relative overflow-hidden bg-ncrypt-dark-blue/30">
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
          <p className="text-lg text-white/80 max-w-2xl mx-auto mb-4">
            We're a passionate team of new developers, and hardware engineers dedicated to creating secure digital identity solutions.
          </p>
          <p className="text-sm text-white/60">
            Interested in joining our mission? Reach out to any team member above.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {teamMembers.map((member, index) => (
            <div
              key={member.id}
              ref={(el) => addToRefs(el, index + 1)}
              className="appear-animate cyberpunk-card p-6 text-center flex flex-col"
              style={{ transitionDelay: `${member.delay}ms` }}
            >
              <div className="w-28 h-28 rounded-full mx-auto mb-4 overflow-hidden border border-ncrypt-blue/30 shadow-lg">
                <img
                  src={member.image}
                  alt={member.name}
                  className="object-cover w-full h-full"
                />
              </div>

              <h3 className="text-xl font-bold mb-1">{member.name}</h3>
              <p className="text-ncrypt-blue font-medium text-sm mb-2">{member.role}</p>
              <p className="text-white/70 text-sm mb-4">{member.bio}</p>

              <div className="mb-4">
                <h4 className="text-sm font-bold mb-1">Expertise</h4>
                <div className="flex flex-wrap gap-2 justify-center">
                  {member.expertise.map((skill, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 text-xs bg-ncrypt-blue/10 rounded-full text-ncrypt-blue"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-auto">
                <h4 className="text-sm font-bold mb-2">Connect</h4>
                <div className="flex justify-center space-x-4">
                  <a href={member.github} target="_blank" rel="noopener noreferrer" className="p-2 bg-ncrypt-blue/10 rounded-full text-ncrypt-blue hover:bg-ncrypt-blue/20 transition-colors">
                    <Github size={18} />
                  </a>
                  <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="p-2 bg-ncrypt-blue/10 rounded-full text-ncrypt-blue hover:bg-ncrypt-blue/20 transition-colors">
                    <Linkedin size={18} />
                  </a>
                  <a href={member.email} className="p-2 bg-ncrypt-blue/10 rounded-full text-ncrypt-blue hover:bg-ncrypt-blue/20 transition-colors">
                    <Mail size={18} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
