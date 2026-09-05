import { RotateCcw, ZoomIn, ZoomOut } from "lucide-react";
import { useEffect, useState } from "react";

import { useTheme } from "@/contexts/theme";
import { EventMapScene } from "./scene";
import type { EventMapCategory, EventMapSector } from "./event-map.types";
import { getEventMapPalette } from "./palette";

const sectors: EventMapSector[] = [
  {
    id: "institutional",
    name: "Pabellón Institucional / Gobierno",
    shortName: "Institucional",
    category: "institutional",
    description: "Organismos públicos, dependencias y representaciones de la provincia.",
    position: [-4.2, 0, -2.35],
    size: [3.6, 0.72, 2.15],
  },
  {
    id: "industrial",
    name: "Pabellón Minero e Industrial",
    shortName: "Minero e industrial",
    category: "industrial",
    description: "El motor productivo del Norte, con la identidad minera e industrial de Jujuy.",
    position: [0, 0, -2.35],
    size: [4.25, 0.92, 2.15],
  },
  {
    id: "commerce",
    name: "Pabellón de Comercio y Servicios / Pymes",
    shortName: "Comercio y pymes",
    category: "commerce",
    description: "Un espacio dinámico para emprendedores, empresas y soluciones TIC.",
    position: [4.25, 0, -2.35],
    size: [3.25, 0.64, 2.15],
  },
  {
    id: "exterior",
    name: "Sector Exterior: Maquinaria y Automotriz",
    shortName: "Exterior",
    category: "exterior",
    description: "Área al aire libre para conocer maquinaria, vehículos y grandes equipos.",
    position: [-4.15, 0, 1.35],
    size: [3.7, 0.52, 2.35],
  },
  {
    id: "auditorium",
    name: "Auditorio y Rondas de Negocios",
    shortName: "Auditorio",
    category: "auditorium",
    description: "Conferencias, encuentros y rondas para fortalecer la vinculación empresarial.",
    position: [0.25, 0, 1.35],
    size: [4.2, 0.84, 2.35],
  },
  {
    id: "gastronomy",
    name: "Sector Gastronómico: Patio de Comidas",
    shortName: "Patio de comidas",
    category: "gastronomy",
    description: "Un área recreativa para descansar, encontrarse y disfrutar la visita.",
    position: [4.3, 0, 1.35],
    size: [3.15, 0.58, 2.35],
  },
];

const categoryLabels: Record<EventMapCategory, string> = {
  institutional: "Gobierno",
  industrial: "Industria",
  commerce: "Comercio",
  exterior: "Exterior",
  auditorium: "Vinculación",
  gastronomy: "Gastronomía",
};

export const EventMap = () => {
  const { theme } = useTheme();
  const palette = getEventMapPalette(theme);
  const [selectedId, setSelectedId] = useState(sectors[0].id);
  const [resetToken, setResetToken] = useState(0);
  const [zoom, setZoom] = useState(33);
  const selectedSector = sectors.find((sector) => sector.id === selectedId) ?? sectors[0];

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelectedId("");
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, []);

  const selectSector = (sector: EventMapSector) => setSelectedId(sector.id);
  const resetView = () => {
    setSelectedId(sectors[0].id);
    setZoom(33);
    setResetToken((value) => value + 1);
  };

  return (
    <section id="mapa-evento" className="w-full border-y border-border bg-background px-4 py-20 md:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 max-w-3xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-brand-cyan">
            Explorá el predio
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-5xl">
            Un mapa para orientarte en ExpoJuy 2026
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-7 text-muted-foreground md:text-lg">
            Descubrí qué sucede en cada sector, ubicá tus puntos de interés y armá tu recorrido por la exposición.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[minmax(0,1.35fr)_minmax(18rem,0.65fr)] lg:items-start">
          <div className="relative">
            <EventMapScene
              sectors={sectors}
              palette={palette}
              selectedId={selectedId}
              onSelect={selectSector}
              resetToken={resetToken}
              zoom={zoom}
            />
            <div className="absolute right-4 top-4 flex flex-col gap-2 sm:right-6 sm:top-6">
              <button
                type="button"
                onClick={() => setZoom((value) => Math.min(48, value + 3))}
                className="grid size-11 place-items-center rounded-xl border border-border bg-background/85 text-foreground shadow-lg backdrop-blur transition-colors hover:bg-primary hover:text-primary-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-cyan"
                aria-label="Acercar mapa"
                title="Acercar mapa"
              >
                <ZoomIn aria-hidden="true" className="size-5" />
              </button>
              <button
                type="button"
                onClick={() => setZoom((value) => Math.max(25, value - 3))}
                className="grid size-11 place-items-center rounded-xl border border-border bg-background/85 text-foreground shadow-lg backdrop-blur transition-colors hover:bg-primary hover:text-primary-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-cyan"
                aria-label="Alejar mapa"
                title="Alejar mapa"
              >
                <ZoomOut aria-hidden="true" className="size-5" />
              </button>
              <button
                type="button"
                onClick={resetView}
                className="grid size-11 place-items-center rounded-xl border border-border bg-background/85 text-foreground shadow-lg backdrop-blur transition-colors hover:bg-primary hover:text-primary-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-cyan"
                aria-label="Restablecer vista del mapa"
                title="Restablecer vista"
              >
                <RotateCcw aria-hidden="true" className="size-5" />
              </button>
            </div>
          </div>

          <aside className="flex min-h-108 flex-col rounded-[1.25rem] border border-border bg-muted/25 p-5 sm:p-6 lg:min-h-156">
            <div className="border-b border-border pb-5">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-cyan">Sector seleccionado</p>
              <h3 className="mt-2 text-2xl font-bold text-foreground">{selectedSector.name}</h3>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">{selectedSector.description}</p>
              <span className="mt-4 inline-flex rounded-full border border-brand-violet/30 bg-brand-violet/10 px-3 py-1 text-xs font-semibold text-brand-violet dark:text-brand-lilac">
                {categoryLabels[selectedSector.category]}
              </span>
            </div>

            <div className="mt-5 flex-1">
              <div className="mb-3 flex items-center justify-between">
                <h4 className="text-sm font-bold uppercase tracking-[0.12em] text-foreground">Sectores</h4>
                <span className="text-xs text-muted-foreground">{sectors.length} áreas</span>
              </div>
              <div className="flex flex-col gap-2">
                {sectors.map((sector) => {
                  const isSelected = sector.id === selectedId;
                  return (
                    <button
                      key={sector.id}
                      type="button"
                      aria-pressed={isSelected}
                      onClick={() => selectSector(sector)}
                      className={`flex min-h-12 items-center gap-3 rounded-xl border px-3 text-left transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-cyan ${isSelected ? "border-brand-cyan/60 bg-brand-cyan/10" : "border-transparent hover:border-border hover:bg-background"}`}
                    >
                      <span className="size-3 shrink-0 rounded-full" style={{ backgroundColor: palette.sectorColors[sector.category].accent }} />
                      <span className="min-w-0 flex-1 text-sm font-semibold text-foreground">{sector.name}</span>
                      <span className="text-muted-foreground" aria-hidden="true">›</span>
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="mt-5 border-t border-border pt-4 text-xs leading-5 text-muted-foreground">
              Arrastrá para rotar el plano. En móvil, usá dos dedos para explorar y tocá un sector para ver sus detalles.
            </div>
          </aside>
        </div>

        <div className="mt-6 flex flex-wrap gap-x-5 gap-y-3 text-xs font-semibold text-muted-foreground" aria-label="Leyenda del mapa">
          {Object.entries(categoryLabels).map(([category, label]) => {
            const sector = sectors.find((item) => item.category === category);
            return (
              <span key={category} className="inline-flex items-center gap-2">
                <span className="size-2.5 rounded-full" style={{ backgroundColor: sector ? palette.sectorColors[sector.category].accent : palette.accent }} />
                {label}
              </span>
            );
          })}
        </div>

        <details className="mt-8 rounded-xl border border-border bg-muted/20 p-4 lg:hidden">
          <summary className="cursor-pointer text-sm font-bold text-foreground">Ver sectores sin usar el mapa 3D</summary>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {sectors.map((sector) => (
              <button
                key={sector.id}
                type="button"
                onClick={() => selectSector(sector)}
                className="rounded-lg border border-border bg-background p-3 text-left text-sm font-semibold text-foreground"
              >
                {sector.name}
              </button>
            ))}
          </div>
        </details>
      </div>
    </section>
  );
};
