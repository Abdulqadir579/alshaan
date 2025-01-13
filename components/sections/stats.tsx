import { Calendar, Users, Trophy } from "lucide-react";
import { Card } from "@/components/ui/card";

const stats = [
  {
    icon: Calendar,
    count: "1000+",
    label: "Events Managed",
    gradient: "from-primary/20 via-primary/10 to-transparent"
  },
  {
    icon: Users,
    count: "50,000+",
    label: "Happy Attendees",
    gradient: "from-secondary/20 via-secondary/10 to-transparent"
  },
  {
    icon: Trophy,
    count: "15+",
    label: "Years Experience",
    gradient: "from-accent/20 via-accent/10 to-transparent"
  }
];

export default function StatsSection() {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background"></div>

      <div className="container mx-auto px-4 relative">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <Card 
              key={index} 
              className="group relative p-8 overflow-hidden bg-gradient-to-br from-background to-background/80 hover:shadow-2xl transition-all duration-500 backdrop-blur-sm"
            >
              {/* Gradient background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              {/* Content */}
              <div className="relative z-10">
                <div className="flex items-center justify-center mb-6">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-background to-background/80 shadow-xl">
                    <stat.icon className="w-8 h-8 text-primary" />
                  </div>
                </div>
                <h3 className="text-4xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-accent">
                  {stat.count}
                </h3>
                <p className="text-muted-foreground font-medium">{stat.label}</p>
              </div>

              {/* Decorative elements */}
              <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-gradient-to-br from-primary/10 to-transparent rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500" />
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
