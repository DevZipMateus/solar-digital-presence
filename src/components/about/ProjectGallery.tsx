
import { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import type { CarouselApi } from "@/components/ui/carousel";
import { projectImages } from './aboutData';

interface ProjectGalleryProps {
  onImageClick: (image: { src: string; alt: string }) => void;
}

const ProjectGallery = ({ onImageClick }: ProjectGalleryProps) => {
  const [carouselApi, setCarouselApi] = useState<CarouselApi>();

  // Auto-scroll effect
  useEffect(() => {
    if (!carouselApi) {
      return;
    }

    const interval = setInterval(() => {
      carouselApi.scrollNext();
    }, 5000);

    return () => clearInterval(interval);
  }, [carouselApi]);

  const handleImageClick = (image: { src: string; alt: string }, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    console.log('Image clicked:', image.alt);
    onImageClick(image);
  };

  const handleKeyPress = (image: { src: string; alt: string }, e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onImageClick(image);
    }
  };

  return (
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
          setApi={setCarouselApi}
          opts={{
            align: "start",
            loop: true,
            dragFree: false,
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
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105 cursor-pointer select-none" 
                      onClick={(e) => handleImageClick(image, e)}
                      onKeyDown={(e) => handleKeyPress(image, e)}
                      tabIndex={0}
                      role="button"
                      aria-label={`Ampliar imagem: ${image.alt}`}
                      draggable={false}
                    />
                    <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                      <span className="bg-background/90 text-foreground px-3 py-1 rounded-md text-sm font-medium">
                        Clique para ampliar
                      </span>
                    </div>
                  </div>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="flex -left-6 sm:-left-12" />
          <CarouselNext className="flex -right-6 sm:-right-12" />
        </Carousel>
      </div>
    </div>
  );
};

export default ProjectGallery;
