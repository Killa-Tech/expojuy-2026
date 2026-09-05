import { MapPin } from "lucide-react";

import { LocationMap } from "./map-view";
import { ShareLocationButton } from "./share-location-button";
import { Section } from "@/components/section";

const venue = {
    name: "Ciudad Cultural",
    city: "San Salvador de Jujuy, Jujuy",
    address: "Av. de los Estudiantes, Alto Padilla",
    mapsUrl:
        "https://www.google.com/maps/search/?api=1&query=Ciudad+Cultural+San+Salvador+de+Jujuy",
};

export const Location = () => {
    return (
        <Section id="ubicacion" label="Ubicación" className="w-full border-y border-border bg-muted/35 px-4 py-20 md:px-8 lg:py-28">
            <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:gap-16">
                <div className="max-w-xl rounded-lg">
                    <a
                        className="group block cursor-pointer rounded-lg focus-visible:outline-2 focus-visible:outline-offset-8 focus-visible:outline-brand-violet"
                        href={venue.mapsUrl}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`Abrir ${venue.name} en Google Maps`}
                    >
                        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-brand-cyan">
                            Encontranos en Jujuy
                        </p>
                        <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-5xl">
                            El punto de encuentro de ExpoJuy 2026
                        </h2>
                        <p className="mt-5 max-w-lg text-base leading-7 text-muted-foreground md:text-lg">
                            Acercate a vivir la exposición en el corazón de San Salvador de Jujuy.
                            Explorá el mapa para ubicar el predio y planificar tu llegada.
                        </p>

                        <div className="mt-8 flex items-start gap-4 border-l-2 border-brand-cyan pl-4">
                            <MapPin aria-hidden="true" className="mt-1 size-5 shrink-0 text-brand-violet" />
                            <div>
                                <h3 className="font-semibold text-foreground">{venue.name}</h3>
                                <p className="mt-1 text-sm text-muted-foreground">{venue.address}</p>
                                <p className="text-sm text-muted-foreground">{venue.city}</p>
                            </div>
                        </div>
                    </a>
                    <ShareLocationButton locationUrl={venue.mapsUrl} locationName={venue.name} />
                </div>

                <LocationMap venue={venue} />
            </div>
        </Section>
    );
};