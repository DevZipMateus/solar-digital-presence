
import { Sun, Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background py-8 sm:py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* Company Info */}
          <div className="space-y-3 sm:space-y-4 sm:col-span-2 lg:col-span-1">
            <div className="flex items-center space-x-3">
              <img 
                src="/lovable-uploads/271fef4d-b699-479b-9aa3-cce029e539b7.png" 
                alt="Solares Energia Solar"
                className="h-8 sm:h-10 w-auto brightness-0 invert"
              />
            </div>
            <p className="text-xs sm:text-sm text-background/80 leading-relaxed">
              Especialistas em energia solar oferecendo soluções completas 
              para residências e empresas em Simplício Mendes - PI.
            </p>
            <div className="flex items-center space-x-2">
              <Sun className="h-3 w-3 sm:h-4 sm:w-4 text-orange-400 flex-shrink-0" />
              <span className="text-xs sm:text-sm">Energia limpa para um futuro sustentável</span>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-3 sm:space-y-4">
            <h3 className="text-base sm:text-lg font-semibold">Nossos Serviços</h3>
            <ul className="space-y-1 sm:space-y-2 text-xs sm:text-sm text-background/80">
              <li>• Sistemas On-Grid</li>
              <li>• Sistemas Off-Grid</li>
              <li>• Manutenção Especializada</li>
              <li>• Consultoria Técnica</li>
              <li>• Projetos Residenciais</li>
              <li>• Projetos Comerciais</li>
            </ul>
          </div>

          {/* Financing */}
          <div className="space-y-3 sm:space-y-4">
            <h3 className="text-base sm:text-lg font-semibold">Financiamento</h3>
            <ul className="space-y-1 sm:space-y-2 text-xs sm:text-sm text-background/80">
              <li>• BNB - Banco do Nordeste</li>
              <li>• Banco do Brasil</li>
              <li>• Sol Fácil</li>
              <li>• Sol Agora</li>
              <li>• BV Financeira</li>
              <li>• Santander</li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-3 sm:space-y-4">
            <h3 className="text-base sm:text-lg font-semibold">Contato</h3>
            <div className="space-y-2 sm:space-y-3 text-xs sm:text-sm">
              <div className="flex items-start space-x-2">
                <Phone className="h-3 w-3 sm:h-4 sm:w-4 mt-0.5 text-primary flex-shrink-0" />
                <div>
                  <p>(89) 99977-9246</p>
                  <p>(89) 99981-6228</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-2">
                <Mail className="h-3 w-3 sm:h-4 sm:w-4 text-primary flex-shrink-0" />
                <span className="break-all">pasjunior2@hotmail.com</span>
              </div>
              
              <div className="flex items-start space-x-2">
                <MapPin className="h-3 w-3 sm:h-4 sm:w-4 mt-0.5 text-primary flex-shrink-0" />
                <div>
                  <p>Rua Sérgio Ferreira, 434</p>
                  <p>Nova Cidade, Simplício Mendes - PI</p>
                  <p>CEP: 64700-000</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-background/20">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-3 sm:space-y-4 md:space-y-0">
            <div className="text-xs sm:text-sm text-background/80 text-center md:text-left">
              © {currentYear} Solares Energia Solar LTDA. Todos os direitos reservados.
            </div>
            <div className="text-xs sm:text-sm text-background/80 text-center md:text-right">
              <span>Responsáveis: </span>
              <span className="font-medium">Pascoal Rodrigues de Alencar Junior</span>
              <span> e </span>
              <span className="font-medium">Francisco da Costa Passos</span>
            </div>
          </div>
          
          <div className="mt-3 sm:mt-4 text-center">
            <p className="text-xs text-background/60">
              Atendimento remoto com visitas no local da instalação • 
              Consultoria gratuita • Financiamento facilitado
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
