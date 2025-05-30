
import React, { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BanknoteIcon, HospitalIcon, ShoppingBasketIcon, CheckCircle, User } from "lucide-react";

const userProfiles = [
  {
    id: 'user1',
    name: 'Arjun Kumar',
    age: 36,
    avatar: '👨‍💼',
    services: {
      ration: { cardId: 'RCT-9001', items: ['Wheat', 'Rice', 'Oil'], nextDelivery: '10th April 2025' },
      health: { balance: '₹18,000', lastClaim: '₹2,000 - Tests', bloodGroup: 'B+' },
      pension: { amount: '₹3,000', nextPayment: '1st April 2025', id: 'PCT-7788' }
    }
  },
  {
    id: 'user2',
    name: 'Priya Sharma',
    age: 29,
    avatar: '👩‍💼',
    services: {
      ration: { cardId: 'RCT-5432', items: ['Rice', 'Wheat', 'Sugar'], nextDelivery: '15th April 2025' },
      health: { balance: '₹24,500', lastClaim: '₹3,500 - Medicine', bloodGroup: 'A+' },
      pension: { amount: '₹3,200', nextPayment: '1st April 2025', id: 'PCT-6543' }
    }
  },
  {
    id: 'user3',
    name: 'Rahul Singh',
    age: 42,
    avatar: '👨‍🔧',
    services: {
      ration: { cardId: 'RCT-7754', items: ['Wheat', 'Rice', 'Oil', 'Pulses'], nextDelivery: '8th April 2025' },
      health: { balance: '₹9,800', lastClaim: '₹5,200 - Surgery', bloodGroup: 'O+' },
      pension: { amount: '₹3,500', nextPayment: '1st April 2025', id: 'PCT-8932' }
    }
  }
];

const GovServicesSection: React.FC = () => {
  const [selectedUser, setSelectedUser] = useState(userProfiles[0]);
  const [activeService, setActiveService] = useState<string | null>(null);

  const services = [
    {
      id: 'ration',
      title: 'Ration Center',
      icon: <ShoppingBasketIcon className="w-8 h-8" />,
      color: 'from-green-500/20 to-emerald-500/20'
    },
    {
      id: 'health',
      title: 'Health Services',
      icon: <HospitalIcon className="w-8 h-8" />,
      color: 'from-blue-500/20 to-cyan-500/20'
    },
    {
      id: 'pension',
      title: 'Pension Center',
      icon: <BanknoteIcon className="w-8 h-8" />,
      color: 'from-purple-500/20 to-pink-500/20'
    }
  ];

  return (
    <section id="gov-services" className="py-16 relative overflow-hidden">
      <div className="absolute inset-0 grid-background opacity-20"></div>
      
      <div className="section-container relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="section-heading">Government <span className="text-ncrypt-blue">Services</span></h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Secure NFC identity verification for essential government services.
          </p>
        </div>
        
        <div className="max-w-7xl mx-auto">
          {/* Main Horizontal Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* User Selection */}
            <div>
              <h3 className="text-xl font-semibold mb-4 text-center text-white">Select User Profile</h3>
              <div className="space-y-4">
                {userProfiles.map((user) => (
                  <Card 
                    key={user.id}
                    className={`cursor-pointer transition-all duration-300 ${
                      selectedUser.id === user.id 
                        ? 'bg-gradient-to-br from-ncrypt-blue/30 to-ncrypt-cyan/20 border-ncrypt-blue' 
                        : 'bg-muted/20 hover:bg-muted/30 border-white/20'
                    }`}
                    onClick={() => setSelectedUser(user)}
                  >
                    <CardContent className="p-4">
                      <div className="flex items-center gap-3">
                        <div className="text-2xl">{user.avatar}</div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-white">{user.name}</h4>
                          <p className="text-sm text-white/70">Age: {user.age}</p>
                        </div>
                        {selectedUser.id === user.id && (
                          <CheckCircle className="w-5 h-5 text-ncrypt-blue" />
                        )}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* NFC Card Display */}
              <div className="mt-6 flex justify-center">
                <div className="relative w-full max-w-sm h-36 rounded-2xl bg-gradient-to-br from-ncrypt-dark-blue/60 to-ncrypt-dark/60 border border-ncrypt-blue/40 p-4">
                  <div className="absolute top-3 left-3 w-8 h-6 rounded bg-yellow-300/90"></div>
                  <div className="absolute top-3 right-3">
                    <div className="w-5 h-5 border-2 border-white/80 rounded-full relative">
                      <div className="absolute inset-1 border border-white/60 rounded-full"></div>
                    </div>
                  </div>
                  <div className="absolute bottom-3 left-3 right-3">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-lg">{selectedUser.avatar}</span>
                      <div>
                        <p className="text-white font-semibold text-sm">{selectedUser.name}</p>
                        <p className="text-white/70 text-xs">Age: {selectedUser.age}</p>
                      </div>
                    </div>
                    <p className="text-white/80 font-mono text-xs">ID: NCR-{Math.random().toString().slice(2,8)}</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Service Cards */}
            <div className="lg:col-span-2">
              <h3 className="text-xl font-semibold mb-4 text-center text-white">Available Services</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {services.map((service) => (
                  <Card
                    key={service.id}
                    className={`cursor-pointer transition-all duration-300 h-full ${
                      activeService === service.id
                        ? 'bg-gradient-to-br from-ncrypt-blue/20 to-ncrypt-cyan/20 border-ncrypt-blue'
                        : 'bg-muted/20 hover:bg-muted/30 border-white/20'
                    }`}
                    onClick={() => setActiveService(activeService === service.id ? null : service.id)}
                  >
                    <CardContent className="p-6">
                      <div className="text-center mb-4">
                        <div className={`p-4 rounded-full mx-auto mb-3 w-16 h-16 flex items-center justify-center bg-gradient-to-br ${service.color}`}>
                          {service.icon}
                        </div>
                        <h3 className="text-lg font-semibold text-white">{service.title}</h3>
                      </div>
                      
                      {activeService === service.id && (
                        <div className="mt-4 p-4 bg-ncrypt-blue/10 rounded-lg space-y-2">
                          {service.id === 'ration' && (
                            <>
                              <div className="flex justify-between text-sm">
                                <span className="text-white/70">Card ID:</span>
                                <span className="font-mono">{selectedUser.services.ration.cardId}</span>
                              </div>
                              <div className="flex justify-between text-sm">
                                <span className="text-white/70">Next Delivery:</span>
                                <span className="text-ncrypt-blue">{selectedUser.services.ration.nextDelivery}</span>
                              </div>
                              <div className="mt-2">
                                <p className="text-white/70 text-sm mb-1">Items:</p>
                                <div className="flex flex-wrap gap-1">
                                  {selectedUser.services.ration.items.map((item, index) => (
                                    <Badge key={index} variant="secondary" className="bg-ncrypt-blue/20 text-white text-xs">
                                      {item}
                                    </Badge>
                                  ))}
                                </div>
                              </div>
                            </>
                          )}
                          
                          {service.id === 'health' && (
                            <>
                              <div className="flex justify-between text-sm">
                                <span className="text-white/70">Balance:</span>
                                <span className="text-ncrypt-blue font-semibold">{selectedUser.services.health.balance}</span>
                              </div>
                              <div className="flex justify-between text-sm">
                                <span className="text-white/70">Blood Group:</span>
                                <span>{selectedUser.services.health.bloodGroup}</span>
                              </div>
                              <div className="mt-2 p-2 bg-ncrypt-blue/10 rounded text-sm">
                                <span className="font-medium">{selectedUser.services.health.lastClaim}</span>
                              </div>
                            </>
                          )}
                          
                          {service.id === 'pension' && (
                            <>
                              <div className="flex justify-between text-sm">
                                <span className="text-white/70">Amount:</span>
                                <span className="text-ncrypt-blue font-semibold">{selectedUser.services.pension.amount}</span>
                              </div>
                              <div className="flex justify-between text-sm">
                                <span className="text-white/70">Next Payment:</span>
                                <span>{selectedUser.services.pension.nextPayment}</span>
                              </div>
                              <div className="flex justify-between text-sm">
                                <span className="text-white/70">Pension ID:</span>
                                <span className="font-mono">{selectedUser.services.pension.id}</span>
                              </div>
                            </>
                          )}
                        </div>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GovServicesSection;
