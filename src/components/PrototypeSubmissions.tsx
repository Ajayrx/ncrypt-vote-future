
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
  ChevronUp
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
      description: 'Live demo link',
      icon: <LinkIcon className="w-4 h-4" />,
      redirectIcon: <ExternalLink className="w-3 h-3" />,
      action: () => handleSectionClick('prototype-link')
    },
    {
      id: 'video-demo',
      title: 'Video Demo',
      description: 'YouTube showcase',
      icon: <Youtube className="w-4 h-4" />,
      redirectIcon: <Youtube className="w-3 h-3" />,
      action: () => handleSectionClick('video-demo')
    },
    {
      id: 'pitch-deck',
      title: 'Pitch Deck',
      description: 'PDF presentation',
      icon: <Presentation className="w-4 h-4" />,
      redirectIcon: <ExternalLink className="w-3 h-3" />,
      action: () => handleSectionClick('pitch-deck')
    },
    {
      id: 'github-repo',
      title: 'GitHub Repository',
      description: 'Source code',
      icon: <Github className="w-4 h-4" />,
      redirectIcon: <Github className="w-3 h-3" />,
      action: () => handleSectionClick('github-repo')
    }
  ];

  return (
    <section id="submissions" className="py-16 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 grid-background opacity-20"></div>
      <div className="absolute top-1/4 -left-40 w-80 h-80 bg-ncrypt-blue/10 rounded-full filter blur-[120px]"></div>
      <div className="absolute bottom-1/4 -right-40 w-80 h-80 bg-ncrypt-cyan/10 rounded-full filter blur-[120px]"></div>
      
      <div className="section-container relative z-10">
        <div className="text-center max-w-4xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            NFC <span className="text-ncrypt-blue">Prototype</span>
          </h2>
          <p className="text-base text-white/80 mb-6">
            Challenge: Revolutionizing Voting with Faster and Secure Automated Verification
          </p>
        </div>

        {/* Compact Submission Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-8">
          {submissions.map((submission) => (
            <Card 
              key={submission.id}
              className="bg-gradient-to-br from-muted/20 to-muted/10 border-white/10 hover:border-ncrypt-blue/40 transition-all duration-300 cursor-pointer group hover:shadow-lg hover:shadow-ncrypt-blue/20"
              onClick={submission.action}
            >
              <CardContent className="p-4">
                <div className="flex flex-col items-center text-center gap-3">
                  <div className="p-2 rounded-lg bg-ncrypt-blue/20 group-hover:bg-ncrypt-blue/30 transition-colors">
                    {submission.icon}
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-white mb-1 group-hover:text-ncrypt-blue transition-colors">
                      {submission.title}
                    </h3>
                    <p className="text-xs text-white/70 mb-2">
                      {submission.description}
                    </p>
                    <div className="flex items-center justify-center gap-1">
                      <Badge variant="secondary" className="bg-ncrypt-dark-blue/50 text-white text-xs px-2 py-1">
                        Required
                      </Badge>
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity">
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
        <div className="max-w-4xl mx-auto">
          <Collapsible open={isExpanded} onOpenChange={setIsExpanded}>
            <div className="text-center mb-4">
              <CollapsibleTrigger asChild>
                <Button 
                  variant="outline" 
                  className="bg-gradient-to-r from-ncrypt-blue/20 to-ncrypt-cyan/20 border-ncrypt-blue/40 hover:bg-ncrypt-blue/30 text-white"
                >
                  <FileText className="w-4 h-4 mr-2" />
                  Learn More About NFC Voting Project
                  {isExpanded ? <ChevronUp className="w-4 h-4 ml-2" /> : <ChevronDown className="w-4 h-4 ml-2" />}
                </Button>
              </CollapsibleTrigger>
            </div>
            
            <CollapsibleContent className="space-y-0">
              <Card className="bg-gradient-to-br from-ncrypt-dark-blue/30 to-ncrypt-dark/30 border-ncrypt-cyan/30 animate-accordion-down">
                <CardHeader>
                  <CardTitle className="text-center text-ncrypt-blue flex items-center justify-center gap-2">
                    <FileText className="w-5 h-5" />
                    Project Ncrypt: NFC Voting Revolution
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="prose prose-invert max-w-none">
                    <p className="text-white/90 text-base mb-4 leading-relaxed">
                      Project Ncrypt represents a groundbreaking advancement in electoral technology, leveraging Near Field Communication (NFC) to create a seamless, secure, and efficient voting experience. Our innovative system addresses the critical challenges of modern democracy by eliminating traditional voting bottlenecks while maintaining the highest standards of security and transparency.
                    </p>
                    
                    <p className="text-white/90 text-base mb-4 leading-relaxed">
                      At its core, the NFC voting prototype utilizes encrypted digital identity verification, enabling voters to authenticate themselves instantly through a simple tap of their NFC-enabled device or card. This revolutionary approach reduces voting time from minutes to seconds, significantly improving voter turnout and reducing queue times at polling stations.
                    </p>
                    
                    <p className="text-white/90 text-base mb-4 leading-relaxed">
                      The system integrates advanced cryptographic protocols, biometric verification, and blockchain technology to ensure vote integrity while maintaining voter anonymity. Each vote is encrypted end-to-end, creating an immutable audit trail that enhances public trust in the electoral process.
                    </p>
                    
                    <p className="text-white/90 text-base leading-relaxed">
                      Beyond voting, Project Ncrypt extends to comprehensive government service integration, allowing citizens to access healthcare, ration distribution, pension services, and other public benefits through the same secure NFC infrastructure, creating a unified digital governance ecosystem.
                    </p>
                  </div>
                  
                  <div className="mt-6 text-center">
                    <Button 
                      onClick={() => handleSectionClick('learn-more')}
                      className="bg-gradient-to-r from-ncrypt-blue to-ncrypt-cyan hover:shadow-lg hover:shadow-ncrypt-blue/40 transition-all"
                    >
                      Explore Our Technology Stack
                      <ExternalLink className="w-4 h-4 ml-2" />
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
