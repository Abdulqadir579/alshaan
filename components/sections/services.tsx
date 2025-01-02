import { Globe, Users, Award } from "lucide-react";
import { Card } from "@/components/ui/card";

const services = [
  {
    icon: Globe,
    title: "Corporate Events",
    description: "From conferences to team building, we create impactful corporate experiences."
  },
  {
    icon: Users,
    title: "Social Gatherings",
    description: "Make your special moments memorable with our expert planning services."
  },
  {
    icon: Award,
    title: "Award Ceremonies",
    description: "Celebrate achievements with elegance and sophistication."
  }
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-gradient-to-t from-primary/5 to-transparent">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
          Our Signature Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="p-6 hover:shadow-xl transition-all duration-300 group">
              <service.icon className="w-10 h-10 text-primary group-hover:text-secondary transition-colors duration-300 mb-4" />
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-muted-foreground">{service.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}