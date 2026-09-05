import {
  Map,
  MapControls,
  MapMarker,
  MarkerContent,
  MarkerPopup,
  useMap,
} from "@/components/ui/map";
import { Crosshair, MapPin, Navigation } from "lucide-react";

type Venue = {
  name: string;
  city: string;
  address: string;
  mapsUrl: string;
};

type LocationMapProps = {
  venue: Venue;
};

const JUJUY_CENTER: [number, number] = [-65.297, -24.185];
const VENUE_COORDINATES = {
  longitude: -65.275,
  latitude: -24.181,
};
const MAP_BOUNDS: [[number, number], [number, number]] = [
  [-65.48, -24.38],
  [-65.08, -23.98],
];

const VenueRecenterButton = () => {
  const { map } = useMap();

  const handleRecenter = () => {
    map?.flyTo({
      center: [VENUE_COORDINATES.longitude, VENUE_COORDINATES.latitude],
      zoom: 15,
      duration: 700,
    });
  };

  return (
    <button
      type="button"
      onClick={handleRecenter}
      disabled={!map}
      aria-label="Volver al predio de ExpoJuy"
      title="Volver al predio"
      className="absolute right-2 bottom-3 z-10 flex size-10 items-center justify-center rounded-md border border-border bg-background shadow-sm transition-colors hover:bg-accent disabled:pointer-events-none disabled:opacity-50"
    >
      <Crosshair aria-hidden="true" className="size-5 text-brand-violet" />
    </button>
  );
};

export const LocationMap = ({ venue }: LocationMapProps) => {
  return (
    <div className="relative isolate h-[22rem] overflow-hidden rounded-xl border border-border bg-background shadow-xl shadow-brand-violet/10 [&_.maplibregl-ctrl-attrib]:hidden md:h-[30rem]">
      <Map
        center={JUJUY_CENTER}
        zoom={12}
        maxZoom={17}
        minZoom={10}
        maxBounds={MAP_BOUNDS}
        attributionControl={false}
        className="size-full"
      >
        <VenueRecenterButton />
        <MapMarker {...VENUE_COORDINATES}>
          <MarkerContent>
            <div className="grid size-10 place-items-center rounded-full border-4 border-white bg-brand-violet text-white shadow-lg shadow-brand-violet/40 transition-transform hover:scale-110">
              <MapPin aria-hidden="true" className="size-5" fill="currentColor" />
            </div>
          </MarkerContent>
          <MarkerPopup closeButton>
            <div className="min-w-48 pr-4">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-cyan">
                ExpoJuy 2026
              </p>
              <h3 className="mt-1 font-semibold text-foreground">{venue.name}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{venue.address}</p>
              <p className="text-sm text-muted-foreground">{venue.city}</p>
              <a
                href={venue.mapsUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-brand-violet underline decoration-brand-cyan decoration-2 underline-offset-4 hover:text-brand-cyan focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-violet"
              >
                <Navigation aria-hidden="true" className="size-4" />
                Abrir en Google Maps
              </a>
            </div>
          </MarkerPopup>
        </MapMarker>
        <MapControls showCompass showFullscreen position="top-right" />
      </Map>
      <div className="absolute top-2 left-2 z-10 rounded-sm bg-background/70 px-2 py-1 text-[10px] text-muted-foreground shadow-sm backdrop-blur-sm">
        ©{" "}
        <a
          href="https://carto.com/about-carto/"
          target="_blank"
          rel="noreferrer"
          className="underline underline-offset-2 hover:text-foreground"
        >
          CARTO
        </a>
        , ©{" "}
        <a
          href="https://www.openstreetmap.org/about/"
          target="_blank"
          rel="noreferrer"
          className="underline underline-offset-2 hover:text-foreground"
        >
          OpenStreetMap contributors
        </a>
      </div>
    </div>
  );
};