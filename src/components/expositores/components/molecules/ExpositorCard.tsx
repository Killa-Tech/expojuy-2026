import React, { useState } from 'react';
import { Calendar, Edit3 } from 'lucide-react';
import type { Expositor } from '../../types';
import { CountryBadge } from '../atoms/CountryBadge';

export interface ExpositorCardProps {
  expositor: Expositor;
  onEdit?: (expositor: Expositor) => void;
}

export const ExpositorCard: React.FC<ExpositorCardProps> = ({ expositor, onEdit }) => {
  const [imgError, setImgError] = useState(false);

  return (
    <article className="group relative flex flex-col overflow-hidden rounded-2xl border border-gray-200/80 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
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
          <div className="flex h-full w-full items-center justify-center bg-slate-800 text-slate-400 font-semibold text-lg">
            {expositor.nombre.charAt(0)}
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />

        {/* Badge de Origen / Delegación */}
        <div className="absolute left-3.5 top-3.5">
          <CountryBadge countryCode={expositor.paisCodigo} />
        </div>

        {/* Botón de Edición Rápida sobre la imagen */}
        <button
          type="button"
          onClick={() => onEdit?.(expositor)}
          title="Editar información o foto del expositor"
          className="absolute right-3.5 top-3.5 flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-slate-700 shadow-md backdrop-blur-sm transition-colors hover:bg-[#6c35de] hover:text-white cursor-pointer"
        >
          <Edit3 className="h-4 w-4" />
        </button>

        {/* Franja de Fecha, Hora y Auditorio sobre la imagen */}
        <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between rounded-xl bg-[#6c35de]/95 px-3.5 py-2 text-xs font-semibold text-white shadow-lg backdrop-blur-md border border-white/10">
          <div className="flex items-center gap-1.5">
            <Calendar className="h-3.5 w-3.5 text-[#00b4d8]" />
            <span>{expositor.fecha} — {expositor.hora}</span>
          </div>
          <span className="text-[11px] text-white/90 font-medium">
            {expositor.auditorio}
          </span>
        </div>
      </div>

      {/* Contenido Textual Inferior */}
      <div className="flex flex-1 flex-col p-5">
        {/* Chips de Categoría y Tipo */}
        <div className="mb-2 flex flex-wrap items-center justify-between gap-2">
          <span className="rounded-md bg-[#00b4d8]/10 px-2.5 py-0.5 text-xs font-semibold text-[#007799]">
            {expositor.categoria}
          </span>
          <span className="text-[11px] font-medium text-slate-500 uppercase tracking-wider">
            {expositor.tipoParticipacion}
          </span>
        </div>

        {/* Nombre y Cargo */}
        <h3 className="text-lg font-bold tracking-tight text-slate-900 group-hover:text-[#6c35de] transition-colors">
          {expositor.nombre}
        </h3>
        <p className="mt-0.5 text-xs font-medium text-slate-600">
          {expositor.cargo} • <span className="font-semibold text-slate-800">{expositor.organizacion}</span>
        </p>

        {/* Título Principal Destacado */}
        <div className="mt-3.5 rounded-xl border border-slate-100 bg-slate-50/70 p-3">
          <p className="text-[10px] font-bold uppercase tracking-wider text-[#6c35de]">
            Disertación Magistral
          </p>
          <p className="mt-1 text-xs font-semibold leading-relaxed text-slate-800">
            "{expositor.tituloDisertacion}"
          </p>
        </div>

        {/* Eventos secundarios o participaciones menores */}
        {expositor.otrasParticipaciones && expositor.otrasParticipaciones.length > 0 && (
          <div className="mt-3.5 border-t border-slate-100 pt-3">
            <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
              Otras participaciones:
            </p>
            <ul className="mt-1.5 space-y-1">
              {expositor.otrasParticipaciones.map((item, idx) => (
                <li key={idx} className="flex items-start text-xs text-slate-600">
                  <span className="mr-1.5 text-[#00b4d8]">•</span>
                  <span className="font-medium text-slate-700">{item.tipo}:</span>
                  <span className="ml-1 text-slate-500 truncate">{item.detalle}</span>
                  {item.horario && (
                    <span className="ml-auto text-[10px] text-slate-400 font-mono">
                      {item.horario}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Botones de Interacción Inferiores */}
        <div className="mt-5 pt-3 border-t border-slate-100 flex items-center gap-2">
          <button
            type="button"
            className="flex-1 rounded-xl border border-slate-200 bg-white py-2 text-center text-xs font-semibold text-slate-700 transition hover:bg-slate-50 hover:border-slate-300 cursor-pointer"
          >
            Ver Perfil
          </button>
          <button
            type="button"
            className="flex-1 rounded-xl bg-[#6c35de] py-2 text-center text-xs font-semibold text-white shadow-sm transition hover:bg-[#5926c2] cursor-pointer"
          >
            Agendar
          </button>
        </div>
      </div>
    </article>
  );
};
