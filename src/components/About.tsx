
import { useState } from 'react';
import AboutContent from './about/AboutContent';
import AboutStats from './about/AboutStats';
import ProjectGallery from './about/ProjectGallery';
import ImageModal from './about/ImageModal';

const About = () => {
  const [selectedImage, setSelectedImage] = useState<{ src: string; alt: string } | null>(null);

  const openImageModal = (image: { src: string; alt: string }) => {
    setSelectedImage(image);
  };

  const closeImageModal = () => {
    setSelectedImage(null);
  };

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
          <AboutContent />
          <AboutStats />
        </div>

        <ProjectGallery onImageClick={openImageModal} />
      </div>

      <ImageModal selectedImage={selectedImage} onClose={closeImageModal} />
    </section>
  );
};

export default About;
