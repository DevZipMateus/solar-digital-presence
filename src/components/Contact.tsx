
import { Phone, Mail, MapPin, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    nome: '',
    telefone: '',
    email: '',
    mensagem: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create WhatsApp message with form data
    const phone = "5589999779246";
    let message = `Olá! Gostaria de solicitar um orçamento para energia solar.\n\n`;
    message += `*Nome:* ${formData.nome}\n`;
    message += `*Telefone:* ${formData.telefone}\n`;
    message += `*E-mail:* ${formData.email}\n`;
    
    if (formData.mensagem.trim()) {
      message += `*Mensagem:* ${formData.mensagem}\n`;
    }
    
    message += `\nAguardo retorno para elaboração do orçamento. Obrigado!`;
    
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phone}?text=${encodedMessage}`;
    
    // Open WhatsApp
    window.open(whatsappUrl, '_blank');
    
    // Show success message
    toast({
      title: "Redirecionando para WhatsApp!",
      description: "Você será direcionado para o WhatsApp com sua solicitação preenchida.",
    });
    
    // Reset form
    setFormData({ nome: '', telefone: '', email: '', mensagem: '' });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Telefones',
      details: ['(89) 99977-9246', '(89) 99981-6228'],
      action: 'tel:+5589999779246'
    },
    {
      icon: Mail,
      title: 'E-mail',
      details: ['pasjunior2@hotmail.com'],
      action: 'mailto:pasjunior2@hotmail.com'
    },
    {
      icon: MapPin,
      title: 'Endereço',
      details: ['Rua Sérgio Ferreira, 434', 'Nova Cidade, Simplício Mendes - PI'],
      action: 'https://maps.google.com/?q=Rua+Sérgio+Ferreira,+434+Nova+Cidade+Simplício+Mendes+PI'
    }
  ];

  return (
    <section id="contato" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Entre em <span className="text-primary">Contato</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Solicite seu orçamento gratuito e descubra como economizar 
            na sua conta de luz com energia solar.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="animate-fade-in-up">
            <CardHeader>
              <CardTitle className="text-2xl text-foreground">Solicitar Orçamento</CardTitle>
              <CardDescription>
                Preencha o formulário e receba uma proposta personalizada via WhatsApp
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="nome" className="block text-sm font-medium text-foreground mb-2">
                      Nome Completo *
                    </label>
                    <Input
                      id="nome"
                      name="nome"
                      type="text"
                      required
                      value={formData.nome}
                      onChange={handleInputChange}
                      placeholder="Seu nome completo"
                      className="border-border/50 focus:border-primary"
                    />
                  </div>
                  <div>
                    <label htmlFor="telefone" className="block text-sm font-medium text-foreground mb-2">
                      Telefone *
                    </label>
                    <Input
                      id="telefone"
                      name="telefone"
                      type="tel"
                      required
                      value={formData.telefone}
                      onChange={handleInputChange}
                      placeholder="(00) 00000-0000"
                      className="border-border/50 focus:border-primary"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    E-mail *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="seu@email.com"
                    className="border-border/50 focus:border-primary"
                  />
                </div>
                
                <div>
                  <label htmlFor="mensagem" className="block text-sm font-medium text-foreground mb-2">
                    Mensagem
                  </label>
                  <Textarea
                    id="mensagem"
                    name="mensagem"
                    rows={4}
                    value={formData.mensagem}
                    onChange={handleInputChange}
                    placeholder="Conte-nos sobre seu projeto ou dúvidas..."
                    className="border-border/50 focus:border-primary resize-none"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-3 text-lg font-semibold"
                >
                  <Send className="h-5 w-5 mr-2" />
                  Enviar via WhatsApp
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Fale <span className="text-primary">Conosco</span>
              </h3>
              <p className="text-muted-foreground mb-8">
                Nossa equipe está pronta para atendê-lo e criar a solução 
                ideal para suas necessidades energéticas.
              </p>
            </div>

            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <Card key={index} className="p-6 hover:shadow-lg transition-shadow duration-300 border-border/50">
                  <CardContent className="flex items-start space-x-4 p-0">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <info.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-foreground mb-2">{info.title}</h4>
                      {info.details.map((detail, detailIndex) => (
                        <p key={detailIndex} className="text-sm text-muted-foreground">
                          {detail}
                        </p>
                      ))}
                      <Button 
                        variant="link" 
                        className="p-0 h-auto mt-2 text-primary hover:text-primary/80"
                        onClick={() => window.open(info.action, '_blank')}
                      >
                        {info.title === 'Telefones' ? 'Ligar agora' : 
                         info.title === 'E-mail' ? 'Enviar e-mail' : 'Ver no mapa'}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="p-6 bg-primary/5 border-primary/20">
              <CardContent className="p-0">
                <h4 className="font-semibold text-foreground mb-2">Atendimento Especializado</h4>
                <p className="text-sm text-muted-foreground mb-4">
                  Realizamos atendimento remoto e visitas no local da instalação 
                  para garantir o melhor projeto para você.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-primary/10 text-primary text-xs px-2 py-1 rounded">
                    Consultoria Gratuita
                  </span>
                  <span className="bg-secondary/10 text-secondary text-xs px-2 py-1 rounded">
                    Visita Técnica
                  </span>
                  <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">
                    Orçamento Sem Compromisso
                  </span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
