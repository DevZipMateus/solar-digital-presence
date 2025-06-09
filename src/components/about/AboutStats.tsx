
import { Card, CardContent } from '@/components/ui/card';
import { stats } from './aboutData';

const AboutStats = () => {
  return (
    <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:gap-6 animate-fade-in-up order-1 lg:order-2" style={{ animationDelay: '0.2s' }}>
      {stats.map((stat, index) => (
        <Card key={index} className="text-center p-3 sm:p-4 lg:p-6 hover:shadow-lg transition-shadow duration-300 border-border/50 h-full">
          <CardContent className="space-y-2 sm:space-y-3 lg:space-y-4 p-0">
            <div className="mx-auto w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-primary/10 rounded-full flex items-center justify-center">
              <stat.icon className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6 text-primary" />
            </div>
            <div>
              <div className="text-lg sm:text-xl lg:text-2xl font-bold text-foreground">{stat.value}</div>
              <div className="text-xs sm:text-sm text-muted-foreground">{stat.label}</div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default AboutStats;
