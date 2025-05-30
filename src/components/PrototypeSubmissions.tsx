
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { 
  ExternalLink, 
  Github, 
  Youtube, 
  Link as LinkIcon,
  Presentation,
  FileText,
  ChevronDown,
  ChevronUp,
  Play,
  Code,
  Monitor
} from 'lucide-react';

const PrototypeSubmissions = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleSectionClick = (section: string) => {
    console.log(`Clicked on ${section} section`);
    // You can add specific redirects here later
    // For example: window.open('https://example.com', '_blank');
  };

  const submissions = [
    {
      id: 'prototype-link',
      title: 'Working Prototype',
      description: 'Live demo application',
      icon: <Monitor className="w-6 h-6" />,
      redirectIcon: <ExternalLink className="w-4 h-4" />,
      action: () => handleSectionClick('prototype-link'),
      gradient: 'from-blue-500/20 to-cyan-500/20',
      hoverGradient: 'from-blue-500/30 to-cyan-500/30',
      linkText: 'Visit Live Demo'
    },
    {
      id: 'video-demo',
      title: 'Video Demo',
      description: 'Complete walkthrough',
      icon: <Play className="w-6 h-6" />,
      redirectIcon: <Youtube className="w-4 h-4" />,
      action: () => handleSectionClick('video-demo'),
      gradient: 'from-red-500/20 to-orange-500/20',
      hoverGradient: 'from-red-500/30 to-orange-500/30',
      linkText: 'Watch on YouTube'
    },
    {
      id: 'pitch-deck',
      title: 'Pitch Deck',
      description: 'Project presentation',
      icon: <Presentation className="w-6 h-6" />,
      redirectIcon: <ExternalLink className="w-4 h-4" />,
      action: () => handleSectionClick('pitch-deck'),
      gradient: 'from-purple-500/20 to-pink-500/20',
      hoverGradient: 'from-purple-500/30 to-pink-500/30',
      linkText: 'View Presentation'
    },
    {
      id: 'github-repo',
      title: 'Source Code',
      description: 'GitHub repository',
      icon: <Code className="w-6 h-6" />,
      redirectIcon: <Github className="w-4 h-4" />,
      action: () => handleSectionClick('github-repo'),
      gradient: 'from-green-500/20 to-emerald-500/20',
      hoverGradient: 'from-green-500/30 to-emerald-500/30',
      linkText: 'View Source Code'
    }
  ];

  return (
    <section id="submissions" className="py-16 relative overflow-hidden min-h-screen flex items-center">
      {/* Background Elements */}
      <div className="absolute inset-0 grid-background opacity-20"></div>
      <div className="absolute top-1/4 -left-40 w-80 h-80 bg-ncrypt-blue/10 rounded-full filter blur-[120px]"></div>
      <div className="absolute bottom-1/4 -right-40 w-80 h-80 bg-ncrypt-cyan/10 rounded-full filter blur-[120px]"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-ncrypt-blue/5 rounded-full filter blur-[150px]"></div>
      
      <div className="section-container relative z-10 w-full">
        <div className="text-center max-w-6xl mx-auto mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-white">
            NFC <span className="text-ncrypt-blue">Prototype</span>
          </h2>
          <p className="text-xl md:text-2xl text-white/80 mb-8 max-w-4xl mx-auto leading-relaxed">
            Challenge: Revolutionizing Voting with Faster and Secure Automated Verification
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-ncrypt-blue to-ncrypt-cyan mx-auto rounded-full"></div>
        </div>

        {/* Enhanced Submission Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto mb-16">
          {submissions.map((submission, index) => (
            <Card 
              key={submission.id}
              className={`bg-gradient-to-br ${submission.gradient} border-white/20 hover:border-ncrypt-blue/60 transition-all duration-500 cursor-pointer group hover:shadow-2xl hover:shadow-ncrypt-blue/30 transform hover:scale-105 hover:-translate-y-2`}
              onClick={submission.action}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <CardContent className="p-8">
                <div className="flex flex-col items-center text-center gap-6">
                  <div className={`p-4 rounded-2xl bg-gradient-to-br ${submission.hoverGradient} group-hover:bg-gradient-to-br group-hover:${submission.hoverGradient} transition-all duration-300 transform group-hover:scale-110`}>
                    {submission.icon}
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-lg font-bold text-white group-hover:text-ncrypt-blue transition-colors">
                      {submission.title}
                    </h3>
                    <p className="text-sm text-white/70 leading-relaxed">
                      {submission.description}
                    </p>
                    <div className="flex items-center justify-center gap-2">
                      <Badge variant="secondary" className="bg-ncrypt-dark-blue/50 text-white text-xs px-3 py-1 rounded-full">
                        {submission.linkText}
                      </Badge>
                      <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-110">
                        {submission.redirectIcon}
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Expandable Project Information */}
        <div className="max-w-6xl mx-auto">
          <Collapsible open={isExpanded} onOpenChange={setIsExpanded}>
            <div className="text-center mb-6">
              <CollapsibleTrigger asChild>
                <Button 
                  variant="outline" 
                  className="bg-gradient-to-r from-ncrypt-blue/20 to-ncrypt-cyan/20 border-ncrypt-blue/40 hover:bg-ncrypt-blue/30 text-white px-8 py-4 text-lg rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-ncrypt-blue/40"
                >
                  <FileText className="w-5 h-5 mr-3" />
                  Learn More About NFC Voting Project
                  {isExpanded ? <ChevronUp className="w-5 h-5 ml-3" /> : <ChevronDown className="w-5 h-5 ml-3" />}
                </Button>
              </CollapsibleTrigger>
            </div>
            
            <CollapsibleContent className="space-y-0">
              <Card className="bg-gradient-to-br from-ncrypt-dark-blue/40 to-ncrypt-dark/40 border-ncrypt-cyan/40 animate-accordion-down shadow-2xl">
                <CardHeader className="pb-6">
                  <CardTitle className="text-center text-2xl text-ncrypt-blue flex items-center justify-center gap-3">
                    <FileText className="w-6 h-6" />
                    Project Ncrypt: NFC Voting Revolution
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-8">
                  <div className="prose prose-invert max-w-none">
                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <h4 className="text-xl font-semibold text-ncrypt-blue mb-4">Revolutionary Technology</h4>
                        <p className="text-white/90 text-base mb-4 leading-relaxed">
                          Project Ncrypt represents a groundbreaking advancement in electoral technology, leveraging Near Field Communication (NFC) to create a seamless, secure, and efficient voting experience. Our innovative system addresses the critical challenges of modern democracy by eliminating traditional voting bottlenecks while maintaining the highest standards of security and transparency.
                        </p>
                      </div>
                      <div>
                        <h4 className="text-xl font-semibold text-ncrypt-blue mb-4">Instant Verification</h4>
                        <p className="text-white/90 text-base mb-4 leading-relaxed">
                          At its core, the NFC voting prototype utilizes encrypted digital identity verification, enabling voters to authenticate themselves instantly through a simple tap of their NFC-enabled device or card. This revolutionary approach reduces voting time from minutes to seconds, significantly improving voter turnout and reducing queue times at polling stations.
                        </p>
                      </div>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-8 mt-8">
                      <div>
                        <h4 className="text-xl font-semibold text-ncrypt-blue mb-4">Security & Transparency</h4>
                        <p className="text-white/90 text-base mb-4 leading-relaxed">
                          The system integrates advanced cryptographic protocols, biometric verification, and blockchain technology to ensure vote integrity while maintaining voter anonymity. Each vote is encrypted end-to-end, creating an immutable audit trail that enhances public trust in the electoral process.
                        </p>
                      </div>
                      <div>
                        <h4 className="text-xl font-semibold text-ncrypt-blue mb-4">Beyond Voting</h4>
                        <p className="text-white/90 text-base leading-relaxed">
                          Beyond voting, Project Ncrypt extends to comprehensive government service integration, allowing citizens to access healthcare, ration distribution, pension services, and other public benefits through the same secure NFC infrastructure, creating a unified digital governance ecosystem.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-8 text-center">
                    <Button 
                      onClick={() => handleSectionClick('learn-more')}
                      className="bg-gradient-to-r from-ncrypt-blue to-ncrypt-cyan hover:shadow-lg hover:shadow-ncrypt-blue/40 transition-all px-8 py-3 text-lg rounded-full"
                    >
                      Explore Our Technology Stack
                      <ExternalLink className="w-5 h-5 ml-3" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </CollapsibleContent>
          </Collapsible>
        </div>
      </div>
    </section>
  );
};

export default PrototypeSubmissions;
