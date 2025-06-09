
import { useState, useEffect, useRef } from 'react';
import { MapPin, Navigation } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

const MapSection = () => {
  const address = "Rua Sérgio Ferreira, 434, Nova Cidade, Simplício Mendes - PI, 64700-000";
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [mapboxToken, setMapboxToken] = useState('');
  const [mapLoaded, setMapLoaded] = useState(false);
  
  // Coordenadas aproximadas de Simplício Mendes - PI
  const coordinates: [number, number] = [-40.8547, -7.8547];

  const openGoogleMaps = () => {
    const encodedAddress = encodeURIComponent(address);
    window.open(`https://www.google.com/maps/search/?api=1&query=${encodedAddress}`, '_blank');
  };

  const initializeMap = () => {
    if (!mapContainer.current || !mapboxToken || map.current) return;

    mapboxgl.accessToken = mapboxToken;
    
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: coordinates,
      zoom: 15,
    });

    // Adicionar marcador na localização da empresa
    new mapboxgl.Marker({
      color: '#1e3992',
      scale: 1.2
    })
      .setLngLat(coordinates)
      .setPopup(
        new mapboxgl.Popup({ offset: 25 })
          .setHTML(`
            <div class="p-2">
              <h3 class="font-semibold text-sm">Solares Energia Solar</h3>
              <p class="text-xs text-gray-600">${address}</p>
            </div>
          `)
      )
      .addTo(map.current);

    // Adicionar controles de navegação
    map.current.addControl(new mapboxgl.NavigationControl(), 'top-right');

    setMapLoaded(true);
  };

  useEffect(() => {
    initializeMap();

    return () => {
      map.current?.remove();
    };
  }, [mapboxToken]);

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-12 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Nossa <span className="text-primary">Localização</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Estamos localizados em Simplício Mendes - PI, oferecendo atendimento 
            remoto e visitas no local da instalação.
          </p>
        </div>

        {!mapboxToken && (
          <Card className="mb-8 bg-primary/5 border-primary/20">
            <CardContent className="p-6">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-foreground">Configure o Mapa</h3>
                <p className="text-sm text-muted-foreground">
                  Para visualizar o mapa interativo, insira sua chave pública do Mapbox.
                  Obtenha gratuitamente em{' '}
                  <a href="https://mapbox.com/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                    mapbox.com
                  </a>
                </p>
                <div className="flex gap-2">
                  <Input
                    type="text"
                    placeholder="Insira sua chave pública do Mapbox..."
                    value={mapboxToken}
                    onChange={(e) => setMapboxToken(e.target.value)}
                    className="flex-1"
                  />
                  <Button 
                    onClick={initializeMap}
                    disabled={!mapboxToken.trim()}
                    className="bg-primary hover:bg-primary/90"
                  >
                    Carregar Mapa
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Mapa */}
          <Card className="overflow-hidden animate-fade-in-up">
            <div className="relative h-80">
              {mapboxToken && mapLoaded ? (
                <div ref={mapContainer} className="absolute inset-0 rounded-lg" />
              ) : mapboxToken ? (
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
                  <div className="text-center space-y-2">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto"></div>
                    <p className="text-sm text-muted-foreground">Carregando mapa...</p>
                  </div>
                </div>
              ) : (
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <div className="mx-auto w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center">
                      <MapPin className="h-8 w-8 text-primary" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-semibold text-foreground">Solares Energia Solar</h3>
                      <p className="text-sm text-muted-foreground px-4">{address}</p>
                    </div>
                    <Button 
                      onClick={openGoogleMaps}
                      className="bg-primary hover:bg-primary/90 text-primary-foreground"
                    >
                      <Navigation className="h-4 w-4 mr-2" />
                      Ver no Google Maps
                    </Button>
                  </div>
                </div>
              )}
            </div>
          </Card>

          {/* Contact info */}
          <div className="space-y-6 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Atendimento <span className="text-primary">Personalizado</span>
              </h3>
              <p className="text-muted-foreground mb-6">
                Oferecemos atendimento remoto especializado e realizamos visitas no local 
                da instalação para garantir o melhor projeto para sua necessidade.
              </p>
            </div>

            <div className="space-y-4">
              <Card className="p-4 border-border/50">
                <CardContent className="flex items-center space-x-4 p-0">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground">Endereço</h4>
                    <p className="text-sm text-muted-foreground">{address}</p>
                  </div>
                </CardContent>
              </Card>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Card className="p-4 border-border/50">
                  <CardContent className="p-0">
                    <h4 className="font-medium text-foreground mb-2">Área de Atendimento</h4>
                    <p className="text-sm text-muted-foreground">
                      Simplício Mendes e região
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="p-4 border-border/50">
                  <CardContent className="p-0">
                    <h4 className="font-medium text-foreground mb-2">Horário</h4>
                    <p className="text-sm text-muted-foreground">
                      Segunda a Sexta: 8h às 18h<br />
                      Sábado: 8h às 12h
                    </p>
                  </CardContent>
                </Card>
              </div>

              {mapLoaded && (
                <Button 
                  onClick={openGoogleMaps}
                  variant="outline"
                  className="w-full border-primary text-primary hover:bg-primary/10"
                >
                  <Navigation className="h-4 w-4 mr-2" />
                  Abrir no Google Maps
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapSection;
