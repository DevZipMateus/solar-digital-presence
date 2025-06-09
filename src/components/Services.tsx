
import { Sun, Battery, Wrench, Home, Building, Zap } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Services = () => {
  const services = [
    {
      icon: Sun,
      title: 'Sistemas On-Grid',
      description: 'Sistemas conectados à rede elétrica para máxima economia na sua conta de luz.',
      features: ['Compensação de energia', 'Redução até 95% na conta', 'Monitoramento remoto']
    },
    {
      icon: Battery,
      title: 'Sistemas Off-Grid',
      description: 'Sistemas independentes ideais para locais sem acesso à rede elétrica.',
      features: ['Total autonomia energética', 'Backup de energia', 'Sustentabilidade completa']
    },
    {
      icon: Wrench,
      title: 'Manutenção Especializada',
      description: 'Manutenção preventiva e corretiva para garantir máximo desempenho.',
      features: ['Limpeza profissional', 'Diagnóstico técnico', 'Peças originais']
    },
    {
      icon: Home,
      title: 'Residencial',
      description: 'Soluções personalizadas para residências de todos os tamanhos.',
      features: ['Projeto personalizado', 'Instalação rápida', 'Garantia estendida']
    },
    {
      icon: Building,
      title: 'Comercial',
      description: 'Sistemas de grande porte para empresas e indústrias.',
      features: ['ROI otimizado', 'Escalabilidade', 'Suporte técnico 24h']
    },
    {
      icon: Zap,
      title: 'Consultoria Técnica',
      description: 'Análise completa do seu consumo para a melhor solução.',
      features: ['Estudo de viabilidade', 'Dimensionamento correto', 'Acompanhamento pós-venda']
    }
  ];

  return (
    <section id="servicos" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Nossos <span className="text-primary">Serviços</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Oferecemos soluções completas em energia solar com tecnologia de ponta 
            e equipe altamente qualificada.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-xl transition-all duration-300 border-border/50 hover:border-primary/50 bg-card animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="text-center pb-4">
                <div className="mx-auto mb-4 w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                  <service.icon className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-2 h-2 bg-secondary rounded-full mr-3 flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
