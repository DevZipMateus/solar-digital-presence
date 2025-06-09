
import { Users, MapPin, Phone, Award } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const stats = [
    { icon: Users, label: 'Clientes Satisfeitos', value: '500+' },
    { icon: MapPin, label: 'Projetos Concluídos', value: '200+' },
    { icon: Phone, label: 'Atendimento', value: '24/7' },
    { icon: Award, label: 'Anos de Experiência', value: '5+' }
  ];

  return (
    <section id="sobre" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6 animate-fade-in-up">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
                Sobre a <span className="text-primary">Solares</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                A Solares Energia Solar é uma empresa especializada em soluções completas 
                de energia solar, oferecendo atendimento remoto com visitas no local da instalação.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-foreground">Nossa Missão</h3>
              <p className="text-muted-foreground">
                Democratizar o acesso à energia solar limpa e renovável, proporcionando 
                economia significativa na conta de luz e contribuindo para um futuro mais sustentável.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-foreground">Nossos Diferenciais</h3>
              <ul className="space-y-3">
                <li className="flex items-center text-muted-foreground">
                  <div className="w-2 h-2 bg-secondary rounded-full mr-3"></div>
                  Atendimento personalizado e consultoria técnica especializada
                </li>
                <li className="flex items-center text-muted-foreground">
                  <div className="w-2 h-2 bg-secondary rounded-full mr-3"></div>
                  Financiamento facilitado com as principais instituições
                </li>
                <li className="flex items-center text-muted-foreground">
                  <div className="w-2 h-2 bg-secondary rounded-full mr-3"></div>
                  Garantia estendida e suporte técnico contínuo
                </li>
                <li className="flex items-center text-muted-foreground">
                  <div className="w-2 h-2 bg-secondary rounded-full mr-3"></div>
                  Equipe certificada e experiente
                </li>
              </ul>
            </div>

            <div className="bg-muted/50 rounded-lg p-6 border border-border/50">
              <h4 className="font-semibold text-foreground mb-2">Responsáveis Técnicos</h4>
              <p className="text-sm text-muted-foreground">
                <strong>Pascoal Rodrigues de Alencar Junior</strong> e <strong>Francisco da Costa Passos</strong>
              </p>
              <p className="text-sm text-muted-foreground mt-2">
                Profissionais com vasta experiência em energia solar e comprometidos 
                com a excelência no atendimento.
              </p>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-6 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            {stats.map((stat, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow duration-300 border-border/50">
                <CardContent className="space-y-4">
                  <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <stat.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
