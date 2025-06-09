
import { Users, MapPin, Phone, Award } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

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
    <section id="sobre" className="py-16 sm:py-20 lg:py-24 bg-background relative overflow-hidden">
      {/* Background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-5" 
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1615630859219-0459703c34e6?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)'
        }} 
      />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center mb-12 sm:mb-16 lg:mb-20">
          {/* Content */}
          <div className="space-y-4 sm:space-y-6 animate-fade-in-up order-2 lg:order-1">
            <div className="space-y-3 sm:space-y-4">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
                Sobre a <span className="text-primary">Solares</span>
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                A Solares Energia Solar é uma empresa especializada em soluções completas 
                de energia solar, oferecendo atendimento remoto com visitas no local da instalação.
              </p>
            </div>

            <div className="space-y-3 sm:space-y-4">
              <h3 className="text-lg sm:text-xl font-semibold text-foreground">Nossa Missão</h3>
              <p className="text-sm sm:text-base text-muted-foreground">
                Democratizar o acesso à energia solar limpa e renovável, proporcionando 
                economia significativa na conta de luz e contribuindo para um futuro mais sustentável.
              </p>
            </div>

            <div className="space-y-3 sm:space-y-4">
              <h3 className="text-lg sm:text-xl font-semibold text-foreground">Nossos Diferenciais</h3>
              <ul className="space-y-2 sm:space-y-3">
                <li className="flex items-start text-sm sm:text-base text-muted-foreground">
                  <div className="w-2 h-2 bg-secondary rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  <span>Atendimento personalizado e consultoria técnica especializada</span>
                </li>
                <li className="flex items-start text-sm sm:text-base text-muted-foreground">
                  <div className="w-2 h-2 bg-secondary rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  <span>Financiamento facilitado com as principais instituições</span>
                </li>
                <li className="flex items-start text-sm sm:text-base text-muted-foreground">
                  <div className="w-2 h-2 bg-secondary rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  <span>Garantia estendida e suporte técnico contínuo</span>
                </li>
                <li className="flex items-start text-sm sm:text-base text-muted-foreground">
                  <div className="w-2 h-2 bg-secondary rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  <span>Equipe certificada e experiente</span>
                </li>
              </ul>
            </div>

            <div className="bg-muted/50 rounded-lg p-4 sm:p-6 border border-border/50">
              <h4 className="font-semibold text-foreground mb-2 text-sm sm:text-base">Responsáveis Técnicos</h4>
              <p className="text-xs sm:text-sm text-muted-foreground">
                <strong>Pascoal Rodrigues de Alencar Junior</strong> e <strong>Francisco da Costa Passos</strong>
              </p>
              <p className="text-xs sm:text-sm text-muted-foreground mt-2">
                Profissionais com vasta experiência em energia solar e comprometidos 
                com a excelência no atendimento.
              </p>
            </div>
          </div>

          {/* Stats */}
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
        </div>

        {/* Projects Gallery */}
        <div className="space-y-6 sm:space-y-8">
          <div className="text-center space-y-3 sm:space-y-4 animate-fade-in-up">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground">
              Nossos <span className="text-primary">Projetos</span>
            </h3>
            <p className="text-sm sm:text-base text-muted-foreground max-w-3xl mx-auto px-4 sm:px-0">
              Confira alguns dos nossos projetos de energia solar já instalados, 
              demonstrando nossa expertise e qualidade na execução.
            </p>
          </div>

          <div className="max-w-7xl mx-auto">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent className="-ml-2 md:-ml-4">
                {projectImages.map((image, index) => (
                  <CarouselItem key={index} className="pl-2 md:pl-4 basis-full sm:basis-1/2 lg:basis-1/3 xl:basis-1/4">
                    <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 group h-full">
                      <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden">
                        <img 
                          src={image.src} 
                          alt={image.alt} 
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" 
                        />
                        <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </div>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="hidden sm:flex" />
              <CarouselNext className="hidden sm:flex" />
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
