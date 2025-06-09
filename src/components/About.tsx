
import { Users, MapPin, Phone, Award } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const stats = [
    {
      icon: Users,
      label: 'Clientes Satisfeitos',
      value: '500+'
    },
    {
      icon: MapPin,
      label: 'Projetos Concluídos',
      value: '200+'
    },
    {
      icon: Phone,
      label: 'Atendimento',
      value: '24/7'
    },
    {
      icon: Award,
      label: 'Anos de Experiência',
      value: '5+'
    }
  ];

  const projectImages = [
    {
      src: '/lovable-uploads/solares/611543931318954.jpeg',
      alt: 'Projeto de energia solar residencial'
    },
    {
      src: '/lovable-uploads/solares/1053743396186983.jpeg',
      alt: 'Instalação de painéis solares'
    },
    {
      src: '/lovable-uploads/solares/1339125300483984.jpeg',
      alt: 'Sistema solar fotovoltaico'
    },
    {
      src: '/lovable-uploads/solares/2031063234387313.jpeg',
      alt: 'Projeto solar comercial'
    },
    {
      src: '/lovable-uploads/solares/10065743450150893.jpeg',
      alt: 'Instalação de energia solar'
    },
    {
      src: '/lovable-uploads/solares/1270759071059361.jpeg',
      alt: 'Sistema fotovoltaico residencial'
    },
    {
      src: '/lovable-uploads/solares/1508295513480938.jpeg',
      alt: 'Projeto de energia limpa'
    },
    {
      src: '/lovable-uploads/solares/1244823603224215.jpeg',
      alt: 'Instalação solar profissional'
    },
    {
      src: '/lovable-uploads/solares/29741278992186129.jpeg',
      alt: 'Sistema de energia renovável'
    },
    {
      src: '/lovable-uploads/solares/1224257562504343.jpeg',
      alt: 'Projeto solar sustentável'
    },
    {
      src: '/lovable-uploads/solares/573708055777109.jpeg',
      alt: 'Instalação de painéis fotovoltaicos'
    },
    {
      src: '/lovable-uploads/solares/2597798240563621.jpeg',
      alt: 'Sistema de energia solar completo'
    }
  ];

  return (
    <section id="sobre" className="py-20 bg-background relative overflow-hidden">
      {/* Background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-5" 
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1615630859219-0459703c34e6?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)'
        }} 
      />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
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

        {/* Projects Gallery */}
        <div className="space-y-8">
          <div className="text-center space-y-4 animate-fade-in-up">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground">
              Nossos <span className="text-primary">Projetos</span>
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Confira alguns dos nossos projetos de energia solar já instalados, 
              demonstrando nossa expertise e qualidade na execução.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {projectImages.map((image, index) => (
              <Card 
                key={index} 
                className="overflow-hidden hover:shadow-xl transition-all duration-300 animate-fade-in-up group" 
                style={{ animationDelay: `${index * 0.1 + 0.4}s` }}
              >
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={image.src} 
                    alt={image.alt} 
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" 
                  />
                  <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
