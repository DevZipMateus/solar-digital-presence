
import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ImageModalProps {
  selectedImage: { src: string; alt: string } | null;
  onClose: () => void;
}

const ImageModal = ({ selectedImage, onClose }: ImageModalProps) => {
  if (!selectedImage) return null;

  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
      <div className="relative max-w-4xl max-h-full">
        <img 
          src={selectedImage.src} 
          alt={selectedImage.alt}
          className="max-w-full max-h-full object-contain rounded-lg"
        />
        <Button
          variant="outline"
          size="icon"
          className="absolute top-4 right-4 bg-background/90 hover:bg-background"
          onClick={onClose}
        >
          <X className="h-4 w-4" />
        </Button>
        <div className="absolute bottom-4 left-4 right-4 bg-background/90 text-foreground p-3 rounded-md">
          <p className="text-sm font-medium">{selectedImage.alt}</p>
        </div>
      </div>
    </div>
  );
};

export default ImageModal;
