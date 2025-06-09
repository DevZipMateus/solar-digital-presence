
import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useEffect } from 'react';

interface ImageModalProps {
  selectedImage: { src: string; alt: string } | null;
  onClose: () => void;
}

const ImageModal = ({ selectedImage, onClose }: ImageModalProps) => {
  // Handle escape key press
  useEffect(() => {
    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    if (selectedImage) {
      document.addEventListener('keydown', handleEscapeKey);
      // Prevent body scroll when modal is open
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscapeKey);
      document.body.style.overflow = 'unset';
    };
  }, [selectedImage, onClose]);

  if (!selectedImage) return null;

  const handleBackdropClick = (e: React.MouseEvent) => {
    // Only close if clicking the backdrop, not the image
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div 
      className="fixed inset-0 bg-black/80 flex items-center justify-center z-[9999] p-4"
      onClick={handleBackdropClick}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
    >
      <div className="relative max-w-4xl max-h-full">
        <img 
          src={selectedImage.src} 
          alt={selectedImage.alt}
          className="max-w-full max-h-full object-contain rounded-lg"
          id="modal-title"
        />
        <Button
          variant="outline"
          size="icon"
          className="absolute top-4 right-4 bg-background/90 hover:bg-background z-10"
          onClick={onClose}
          aria-label="Fechar modal"
        >
          <X className="h-4 w-4" />
        </Button>
        <div className="absolute bottom-4 left-4 right-4 bg-background/90 text-foreground p-3 rounded-md">
          <p className="text-sm font-medium" id="modal-description">{selectedImage.alt}</p>
        </div>
      </div>
    </div>
  );
};

export default ImageModal;
