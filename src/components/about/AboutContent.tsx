
const AboutContent = () => {
  return (
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
  );
};

export default AboutContent;
