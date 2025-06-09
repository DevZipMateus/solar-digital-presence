
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
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-solar-orange/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in-up">
          {/* Main heading */}
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight">
              <span className="text-primary">Energia Solar</span> para seu
              <span className="block text-secondary"> Futuro Sustentável</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Especialistas em instalação e manutenção de sistemas solares on-grid e off-grid. 
              Atendimento remoto com visitas no local da instalação em Simplício Mendes - PI.
            </p>
          </div>

          {/* Features */}
          <div className="flex flex-wrap justify-center gap-6 my-12">
            <div className="flex items-center space-x-2 bg-card rounded-full px-6 py-3 shadow-sm border">
              <Sun className="h-5 w-5 text-secondary" />
              <span className="text-sm font-medium">Instalação Profissional</span>
            </div>
            <div className="flex items-center space-x-2 bg-card rounded-full px-6 py-3 shadow-sm border">
              <Zap className="h-5 w-5 text-primary" />
              <span className="text-sm font-medium">Manutenção Especializada</span>
            </div>
            <div className="flex items-center space-x-2 bg-card rounded-full px-6 py-3 shadow-sm border">
              <Leaf className="h-5 w-5 text-green-600" />
              <span className="text-sm font-medium">100% Sustentável</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              onClick={scrollToContact}
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              Solicitar Orçamento Grátis
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => {
                const element = document.querySelector('#servicos');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="border-primary text-primary hover:bg-primary/10 px-8 py-4 text-lg font-semibold rounded-full"
            >
              Conheça Nossos Serviços
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="pt-12 border-t border-border/50">
            <p className="text-sm text-muted-foreground mb-4">Financiamento disponível com:</p>
            <div className="flex flex-wrap justify-center gap-4 text-xs text-muted-foreground">
              <span className="bg-muted rounded px-3 py-1">BNB</span>
              <span className="bg-muted rounded px-3 py-1">Banco do Brasil</span>
              <span className="bg-muted rounded px-3 py-1">Sol Fácil</span>
              <span className="bg-muted rounded px-3 py-1">Sol Agora</span>
              <span className="bg-muted rounded px-3 py-1">BV Financeira</span>
              <span className="bg-muted rounded px-3 py-1">Santander</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
