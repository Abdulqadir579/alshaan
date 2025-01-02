"use client";

import HeroSection from "@/components/sections/hero";
import StatsSection from "@/components/sections/stats";
import ServicesSection from "@/components/sections/services";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection />
      <StatsSection />
      <ServicesSection />
    </div>
  );
}