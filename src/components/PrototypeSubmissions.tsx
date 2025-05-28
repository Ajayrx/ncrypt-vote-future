
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Calendar, 
  Clock, 
  ExternalLink, 
  Github, 
  FileText, 
  Video, 
  Link as LinkIcon,
  Presentation,
  Brain
} from 'lucide-react';

const PrototypeSubmissions = () => {
  const handleSectionClick = (section: string) => {
    // Placeholder for future functionality
    console.log(`Clicked on ${section} section`);
    // You can add specific redirects here later
    // For example: window.open('https://example.com', '_blank');
  };

  const submissions = [
    {
      id: 'prototype-link',
      title: 'Working Prototype Link',
      description: 'Submit your updated working prototype link',
      icon: <LinkIcon className="w-5 h-5" />,
      action: () => handleSectionClick('prototype-link')
    },
    {
      id: 'video-demo',
      title: 'Video Demo',
      description: 'Upload your updated video demonstration',
      icon: <Video className="w-5 h-5" />,
      action: () => handleSectionClick('video-demo')
    },
    {
      id: 'pitch-deck',
      title: 'Pitch Deck',
      description: 'Upload your updated pitch deck (PDF)',
      icon: <Presentation className="w-5 h-5" />,
      action: () => handleSectionClick('pitch-deck')
    },
    {
      id: 'github-repo',
      title: 'GitHub Repository',
      description: 'Share your updated GitHub repository',
      icon: <Github className="w-5 h-5" />,
      action: () => handleSectionClick('github-repo')
    },
    {
      id: 'google-tech',
      title: 'Google Technologies',
      description: 'List the Google technologies used',
      icon: <FileText className="w-5 h-5" />,
      action: () => handleSectionClick('google-tech')
    },
    {
      id: 'ai-tools',
      title: 'Google AI Tools',
      description: 'Mention the Google AI tools integrated',
      icon: <Brain className="w-5 h-5" />,
      action: () => handleSectionClick('ai-tools')
    }
  ];

  return (
    <section id="submissions" className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 grid-background opacity-20"></div>
      <div className="absolute top-1/4 -left-40 w-80 h-80 bg-ncrypt-blue/10 rounded-full filter blur-[120px]"></div>
      <div className="absolute bottom-1/4 -right-40 w-80 h-80 bg-ncrypt-cyan/10 rounded-full filter blur-[120px]"></div>
      
      <div className="section-container relative z-10">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="section-heading">
            Prototype <span className="text-ncrypt-blue">Submissions</span>
          </h2>
          <p className="text-lg text-white/80 mb-8">
            Challenge: Revolutionizing Voting with Faster and Secure Automated Verification
          </p>
          
          {/* Countdown Timer */}
          <Card className="bg-gradient-to-br from-ncrypt-dark-blue/50 to-ncrypt-dark/50 border-ncrypt-blue/30 mb-8">
            <CardHeader>
              <CardTitle className="text-center text-ncrypt-blue flex items-center justify-center gap-2">
                <Clock className="w-5 h-5" />
                MODULE CLOSING IN
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-4">11d 22h 37m</div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center justify-center gap-2">
                    <Calendar className="w-4 h-4 text-ncrypt-cyan" />
                    <span className="text-white/70">Starting:</span>
                    <span className="text-white">17/05/2025 12:00 AM (IST)</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <Calendar className="w-4 h-4 text-ncrypt-cyan" />
                    <span className="text-white/70">Ending:</span>
                    <span className="text-white">09/06/2025 11:59 PM (IST)</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Submission Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {submissions.map((submission) => (
            <Card 
              key={submission.id}
              className="bg-gradient-to-br from-muted/20 to-muted/10 border-white/10 hover:border-ncrypt-blue/40 transition-all duration-300 cursor-pointer group hover:shadow-lg hover:shadow-ncrypt-blue/20"
              onClick={submission.action}
            >
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-ncrypt-blue/20 group-hover:bg-ncrypt-blue/30 transition-colors">
                    {submission.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-ncrypt-blue transition-colors">
                      {submission.title}
                    </h3>
                    <p className="text-sm text-white/70 mb-4">
                      {submission.description}
                    </p>
                    <div className="flex items-center gap-2">
                      <Badge variant="secondary" className="bg-ncrypt-dark-blue/50 text-white">
                        Required
                      </Badge>
                      <ExternalLink className="w-4 h-4 text-ncrypt-blue opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <Card className="bg-gradient-to-br from-ncrypt-dark-blue/30 to-ncrypt-dark/30 border-ncrypt-cyan/30 max-w-2xl mx-auto">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold text-white mb-4">
                Prototype Description
              </h3>
              <p className="text-white/80 text-sm mb-6">
                Write a brief description of your prototype (max 100 words)
              </p>
              <Button 
                onClick={() => handleSectionClick('description')}
                className="bg-gradient-to-r from-ncrypt-blue to-ncrypt-cyan hover:shadow-lg hover:shadow-ncrypt-blue/40 transition-all"
              >
                Add Description
                <ExternalLink className="w-4 h-4 ml-2" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default PrototypeSubmissions;
