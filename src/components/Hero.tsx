
import { ArrowRight, Sun, Zap, Leaf } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.querySelector('#contato');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/lovable-uploads/198668c6-e4af-48c6-aac2-e5c399ea9e6c.png)'
        }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-background/80"></div>
      
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-60 h-60 sm:w-80 sm:h-80 bg-solar-orange/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute -bottom-40 -left-40 w-60 h-60 sm:w-80 sm:h-80 bg-primary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 relative z-10">
        <div className="max-w-5xl mx-auto text-center space-y-6 sm:space-y-8 animate-fade-in-up">
          {/* Main heading */}
          <div className="space-y-3 sm:space-y-4">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground leading-tight">
              <span className="text-primary">Energia Solar</span> para seu
              <span className="block text-secondary"> Futuro Sustentável</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed px-4 sm:px-0">
              Especialistas em instalação e manutenção de sistemas solares on-grid e off-grid. 
              Atendimento remoto com visitas no local da instalação em Simplício Mendes - PI.
            </p>
          </div>

          {/* Features */}
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 md:gap-6 my-8 sm:my-12 px-4 sm:px-0">
            <div className="flex items-center space-x-2 bg-card rounded-full px-3 sm:px-4 md:px-6 py-2 sm:py-3 shadow-sm border text-xs sm:text-sm">
              <Sun className="h-4 w-4 sm:h-5 sm:w-5 text-secondary flex-shrink-0" />
              <span className="font-medium whitespace-nowrap">Instalação Profissional</span>
            </div>
            <div className="flex items-center space-x-2 bg-card rounded-full px-3 sm:px-4 md:px-6 py-2 sm:py-3 shadow-sm border text-xs sm:text-sm">
              <Zap className="h-4 w-4 sm:h-5 sm:w-5 text-primary flex-shrink-0" />
              <span className="font-medium whitespace-nowrap">Manutenção Especializada</span>
            </div>
            <div className="flex items-center space-x-2 bg-card rounded-full px-3 sm:px-4 md:px-6 py-2 sm:py-3 shadow-sm border text-xs sm:text-sm">
              <Leaf className="h-4 w-4 sm:h-5 sm:w-5 text-green-600 flex-shrink-0" />
              <span className="font-medium whitespace-nowrap">100% Sustentável</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4 sm:px-0">
            <Button 
              size="lg" 
              onClick={scrollToContact}
              className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              Solicitar Orçamento Grátis
              <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => {
                const element = document.querySelector('#servicos');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="w-full sm:w-auto border-primary text-primary hover:bg-primary/10 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold rounded-full"
            >
              Conheça Nossos Serviços
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="pt-8 sm:pt-12 border-t border-border/50">
            <p className="text-xs sm:text-sm text-muted-foreground mb-3 sm:mb-4">Financiamento disponível com:</p>
            <div className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 text-xs text-muted-foreground px-4 sm:px-0">
              <span className="bg-muted rounded px-2 sm:px-3 py-1">BNB</span>
              <span className="bg-muted rounded px-2 sm:px-3 py-1">Banco do Brasil</span>
              <span className="bg-muted rounded px-2 sm:px-3 py-1">Sol Fácil</span>
              <span className="bg-muted rounded px-2 sm:px-3 py-1">Sol Agora</span>
              <span className="bg-muted rounded px-2 sm:px-3 py-1">BV Financeira</span>
              <span className="bg-muted rounded px-2 sm:px-3 py-1">Santander</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
