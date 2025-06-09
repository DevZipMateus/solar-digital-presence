
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
    <section id="servicos" className="py-16 sm:py-20 lg:py-24 bg-muted/30 relative overflow-hidden">
      {/* Background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-5"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)'
        }}
      />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center space-y-3 sm:space-y-4 mb-12 sm:mb-16 lg:mb-20 animate-fade-in-up">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Nossos <span className="text-primary">Serviços</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto px-4 sm:px-0">
            Oferecemos soluções completas em energia solar com tecnologia de ponta 
            e equipe altamente qualificada.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-xl transition-all duration-300 border-border/50 hover:border-primary/50 bg-card animate-fade-in-up h-full"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="text-center pb-3 sm:pb-4">
                <div className="mx-auto mb-3 sm:mb-4 w-12 h-12 sm:w-16 sm:h-16 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                  <service.icon className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />
                </div>
                <CardTitle className="text-lg sm:text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-sm sm:text-base text-muted-foreground">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start text-xs sm:text-sm text-muted-foreground">
                      <div className="w-2 h-2 bg-secondary rounded-full mr-3 flex-shrink-0 mt-1.5"></div>
                      <span>{feature}</span>
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
