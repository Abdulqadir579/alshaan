"use client";

import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { memo } from 'react';

const HeroSection = memo(function HeroSection() {
  const handleWhatsAppRedirect = () => {
    window.open('https://wa.me/971562145901', '_blank');
  };

  const scrollToServices = () => {
    const servicesSection = document.getElementById('services');
    servicesSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative h-[90vh] flex items-center justify-center bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20">
      <div 
        className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1511578314322-379afb476865?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center opacity-10"
      />
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-accent mb-6">
            Crafting Magical Moments
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8">
            Where Dreams Transform into Extraordinary Celebrations
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="text-lg bg-primary hover:bg-primary/90"
              onClick={handleWhatsAppRedirect}
            >
              Plan Your Event <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="text-lg border-primary text-primary hover:bg-primary/10"
              onClick={scrollToServices}
            >
              Explore Services
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
});

export default HeroSection;
