
import { CreditCard, Calculator, CheckCircle, Clock } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Financing = () => {
  const financingOptions = [
    {
      name: 'BNB - Banco do Nordeste',
      description: 'Financiamento especial para energia solar',
      features: ['Taxa reduzida', 'Até 96 meses', 'Aprovação rápida'],
      highlight: false
    },
    {
      name: 'Sol Fácil',
      description: 'Linha de crédito especializada em energia solar',
      features: ['Sem entrada', 'Até 120 meses', 'Processo 100% digital'],
      highlight: true
    },
    {
      name: 'Banco do Brasil',
      description: 'Crédito sustentável para pessoas físicas e jurídicas',
      features: ['Condições especiais', 'Até 84 meses', 'Taxas competitivas'],
      highlight: false
    },
    {
      name: 'Sol Agora',
      description: 'Financiamento rápido e descomplicado',
      features: ['Aprovação em 24h', 'Até 144 meses', 'Sem burocracia'],
      highlight: false
    }
  ];

  const benefits = [
    {
      icon: Calculator,
      title: 'Economia Imediata',
      description: 'Parcela menor que a conta de luz atual'
    },
    {
      icon: Clock,
      title: 'Aprovação Rápida',
      description: 'Processo otimizado em até 48 horas'
    },
    {
      icon: CheckCircle,
      title: 'Sem Entrada',
      description: 'Financiamento de até 100% do projeto'
    },
    {
      icon: CreditCard,
      title: 'Condições Especiais',
      description: 'Taxas reduzidas para energia solar'
    }
  ];

  const scrollToContact = () => {
    const element = document.querySelector('#contato');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="financiamento" className="py-20 bg-muted/30 relative overflow-hidden">
      {/* Background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-5"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1592833159057-6faf163494a9?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)'
        }}
      />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center space-y-4 mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            <span className="text-primary">Financiamento</span> Facilitado
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Parcerias com as principais instituições financeiras para tornar 
            seu sistema solar acessível e vantajoso.
          </p>
        </div>

        {/* Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {benefits.map((benefit, index) => (
            <Card 
              key={index} 
              className="text-center p-6 hover:shadow-lg transition-shadow duration-300 border-border/50 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="space-y-4">
                <div className="mx-auto w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center">
                  <benefit.icon className="h-6 w-6 text-secondary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground">{benefit.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Financing Options */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {financingOptions.map((option, index) => (
            <Card 
              key={index} 
              className={`relative overflow-hidden hover:shadow-xl transition-all duration-300 animate-fade-in-up ${
                option.highlight 
                  ? 'border-primary shadow-lg scale-105' 
                  : 'border-border/50 hover:border-primary/50'
              }`}
              style={{ animationDelay: `${index * 0.1 + 0.4}s` }}
            >
              {option.highlight && (
                <div className="absolute top-0 left-0 right-0 bg-primary text-primary-foreground text-xs text-center py-1 font-medium">
                  Mais Popular
                </div>
              )}
              <CardHeader className={`pb-4 ${option.highlight ? 'pt-8' : ''}`}>
                <CardTitle className="text-lg font-bold text-foreground">
                  {option.name}
                </CardTitle>
                <CardDescription className="text-muted-foreground text-sm">
                  {option.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {option.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                      <CheckCircle className="h-4 w-4 text-green-600 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional financing partners */}
        <div className="text-center space-y-6">
          <h3 className="text-xl font-semibold text-foreground">Outras Parcerias</h3>
          <div className="flex flex-wrap justify-center gap-4">
            <span className="bg-card border border-border/50 rounded-lg px-4 py-2 text-sm text-muted-foreground">
              BV Financeira
            </span>
            <span className="bg-card border border-border/50 rounded-lg px-4 py-2 text-sm text-muted-foreground">
              Credsolaris
            </span>
            <span className="bg-card border border-border/50 rounded-lg px-4 py-2 text-sm text-muted-foreground">
              BTG Pactual
            </span>
            <span className="bg-card border border-border/50 rounded-lg px-4 py-2 text-sm text-muted-foreground">
              Santander
            </span>
          </div>
          <Button 
            onClick={scrollToContact}
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3"
          >
            Simular Financiamento
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Financing;

