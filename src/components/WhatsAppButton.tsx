
import { Button } from '@/components/ui/button';

const WhatsAppButton = () => {
  const handleWhatsAppClick = () => {
    const phone = "5589999779246";
    const message = "Olá! Gostaria de saber mais sobre sistemas de energia solar e solicitar um orçamento.";
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phone}?text=${encodedMessage}`;
    
    window.open(whatsappUrl, '_blank');
  };

  return (
    <Button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-green-500 hover:bg-green-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 whatsapp-pulse p-0 overflow-hidden"
      aria-label="Falar no WhatsApp"
    >
      <img 
        src="/lovable-uploads/7cd5fb05-bdaf-4646-bfe6-bca765df7234.png" 
        alt="WhatsApp" 
        className="w-full h-full object-cover"
      />
    </Button>
  );
};

export default WhatsAppButton;
