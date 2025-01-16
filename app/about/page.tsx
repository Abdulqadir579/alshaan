"use client";

import { Users2, Heart, Calendar } from "lucide-react";
import { Card } from "@/components/ui/card";

export default function AboutUs() {
  return (
    <div className="min-h-screen">
      {/* Hero Section with Event Image */}
      <section className="relative h-[60vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <div 
            className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3')] bg-cover bg-center"
            style={{
              backgroundPosition: "50% 30%"
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/50 to-background" />
        </div>
        <div className="relative z-10 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Creating Memorable Experiences</h1>
          <p className="text-xl md:text-2xl text-gray-200">Your Vision, Our Expertise</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 -mt-20 relative z-10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="p-8 md:p-12 space-y-8 bg-gradient-to-br from-white to-primary/5 shadow-xl">
              <div className="flex items-center gap-4 text-[#C5A47E]">
                <Heart className="w-8 h-8" />
                <h2 className="text-2xl font-semibold">Our Passion</h2>
              </div>
              <p className="text-lg leading-relaxed text-muted-foreground">
                At Alshaan Events, we're passionate about creating events that bring people together. Our expertise spans across various domains, from corporate meetings and seminars to formal business gatherings. We take pride in our achievements in delivering exceptional experiences for weddings, personal celebrations, and professional conferences. Whether it's a formal business meeting that demands precision and professionalism, or a grand celebration that requires creative flair, our goal is to make the planning process seamless and the event truly memorable.
              </p>

              <div className="flex items-center gap-4 text-[#C5A47E]">
                <Users2 className="w-8 h-8" />
                <h2 className="text-2xl font-semibold">Our Approach</h2>
              </div>
              <p className="text-lg leading-relaxed text-muted-foreground">
                Our goal is to understand the client's perspective and make the planning process easy and event memorable. With a focus on understanding your needs, we handle the details so you can focus on enjoying the moment. From venue selection to final touches, we're here to help every step of the way.
              </p>

              <div className="flex items-center gap-4 text-[#C5A47E]">
                <Calendar className="w-8 h-8" />
                <h2 className="text-2xl font-semibold">Your Next Event</h2>
              </div>
              <p className="text-lg leading-relaxed text-muted-foreground">
                Let us know how we can make your next event special.
              </p>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
