import { Calendar, Users, Award } from "lucide-react";
import { Card } from "@/components/ui/card";

const stats = [
  {
    icon: Calendar,
    count: "1000+",
    label: "Events Managed",
    borderColor: "border-primary",
    iconColor: "text-primary"
  },
  {
    icon: Users,
    count: "50,000+",
    label: "Happy Attendees",
    borderColor: "border-secondary",
    iconColor: "text-secondary"
  },
  {
    icon: Award,
    count: "25+",
    label: "Industry Awards",
    borderColor: "border-accent",
    iconColor: "text-accent"
  }
];

export default function StatsSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-accent/5">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <Card 
              key={index} 
              className={`p-8 text-center hover:shadow-xl transition-all duration-300 border-t-4 ${stat.borderColor}`}
            >
              <stat.icon className={`w-12 h-12 mx-auto mb-4 ${stat.iconColor}`} />
              <h3 className="text-3xl font-bold mb-2">{stat.count}</h3>
              <p className="text-muted-foreground">{stat.label}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}