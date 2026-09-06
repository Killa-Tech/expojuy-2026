import React, { useState } from 'react';
import { Calendar } from 'lucide-react';
import type { Expositor } from '../../types';
import { CountryBadge } from '../atoms/CountryBadge';

export interface ExpositorCardProps {
  expositor: Expositor;
  onEdit?: (expositor: Expositor) => void;
}

export const ExpositorCard: React.FC<ExpositorCardProps> = ({ expositor }) => {
  const [imgError, setImgError] = useState(false);

  return (
    <article className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card text-card-foreground shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl font-['Ambit',sans-serif]">
      {/* Contenedor Superior: Imagen con Badges y Edición */}
      <div className="relative h-64 w-full overflow-hidden bg-slate-900">
        {!imgError ? (
          <img
            src={expositor.fotoUrl}
            alt={expositor.nombre}
            className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105 opacity-90 group-hover:opacity-100"
            loading="lazy"
            onError={() => setImgError(true)}
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-muted text-muted-foreground font-semibold text-lg">
            {expositor.nombre.charAt(0)}
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />

        {/* Badge de Origen / Delegación */}
        <div className="absolute left-3.5 top-3.5">
          <CountryBadge countryCode={expositor.paisCodigo} />
        </div>

        {/* Franja de Fecha, Hora y Auditorio sobre la imagen */}
        <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between rounded-xl bg-primary/95 px-3.5 py-2 text-xs font-semibold text-primary-foreground shadow-lg backdrop-blur-md border border-white/10">
          <div className="flex items-center gap-1.5">
            <Calendar className="h-3.5 w-3.5 text-accent" />
            <span>{expositor.fecha} — {expositor.hora}</span>
          </div>
          <span className="text-[11px] text-primary-foreground/90 font-medium">
            {expositor.auditorio}
          </span>
        </div>
      </div>

      {/* Contenido Textual Inferior */}
      <div className="flex flex-1 flex-col p-5">
        {/* Chips de Categoría y Tipo */}
        <div className="mb-2 flex flex-wrap items-center justify-between gap-2">
          <span className="rounded-md bg-accent/10 border border-accent/20 px-2.5 py-0.5 text-xs font-semibold text-accent">
            {expositor.categoria}
          </span>
          <span className="text-[11px] font-medium text-muted-foreground uppercase tracking-wider">
            {expositor.tipoParticipacion}
          </span>
        </div>

        {/* Nombre y Cargo */}
        <h3 className="text-lg font-bold tracking-tight text-foreground group-hover:text-primary transition-colors">
          {expositor.nombre}
        </h3>
        <p className="mt-0.5 text-xs font-medium text-muted-foreground">
          {expositor.cargo} • <span className="font-semibold text-foreground">{expositor.organizacion}</span>
        </p>

        {/* Título Principal Destacado */}
        <div className="mt-3.5 rounded-xl border border-border bg-muted/40 p-3">
          <p className="text-[10px] font-bold uppercase tracking-wider text-primary">
            Disertación Magistral
          </p>
          <p className="mt-1 text-xs font-semibold leading-relaxed text-foreground">
            "{expositor.tituloDisertacion}"
          </p>
        </div>

        {/* Eventos secundarios o participaciones menores */}
        {expositor.otrasParticipaciones && expositor.otrasParticipaciones.length > 0 && (
          <div className="mt-3.5 border-t border-border pt-3">
            <p className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
              Otras participaciones:
            </p>
            <ul className="mt-1.5 space-y-1">
              {expositor.otrasParticipaciones.map((item, idx) => (
                <li key={idx} className="flex items-start text-xs text-muted-foreground">
                  <span className="mr-1.5 text-accent">•</span>
                  <span className="font-medium text-foreground">{item.tipo}:</span>
                  <span className="ml-1 text-muted-foreground truncate">{item.detalle}</span>
                  {item.horario && (
                    <span className="ml-auto text-[10px] text-muted-foreground/80 font-['Ambit',sans-serif]">
                      {item.horario}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Botones de Interacción Inferiores */}
        <div className="mt-5 pt-3 border-t border-border flex items-center gap-2 font-['Ambit',sans-serif]">
          <button
            type="button"
            className="flex-1 rounded-xl border border-border bg-card py-2 text-center text-xs font-semibold font-['Ambit',sans-serif] text-foreground transition hover:bg-muted hover:border-foreground/20 cursor-pointer"
          >
            Ver Perfil
          </button>
          <button
            type="button"
            className="flex-1 rounded-xl bg-primary py-2 text-center text-xs font-semibold font-['Ambit',sans-serif] text-primary-foreground shadow-sm shadow-primary/20 transition hover:opacity-90 cursor-pointer"
          >
            Agendar
          </button>
        </div>
      </div>
    </article>
  );
};
