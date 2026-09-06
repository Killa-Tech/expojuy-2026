import React from 'react';
import { Search } from 'lucide-react';
import { CategoryPill } from '../atoms/CategoryPill';

interface ExpositoresFiltersProps {
  busqueda: string;
  onBusquedaChange: (value: string) => void;
  categoriaSeleccionada: string;
  onCategoriaChange: (categoria: string) => void;
  categorias: string[];
  auditorioSeleccionado: string;
  onAuditorioChange: (auditorio: string) => void;
  auditorios: string[];
}

export const ExpositoresFilters: React.FC<ExpositoresFiltersProps> = ({
  busqueda,
  onBusquedaChange,
  categoriaSeleccionada,
  onCategoriaChange,
  categorias,
  auditorioSeleccionado,
  onAuditorioChange,
  auditorios,
}) => {
  return (
    <div className="mt-8 flex flex-col gap-4 rounded-2xl bg-white p-4 shadow-sm border border-slate-200/80">
      <div className="flex flex-col sm:flex-row items-center gap-3">
        {/* Input de Búsqueda */}
        <div className="relative w-full sm:flex-1">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
          <input
            type="text"
            placeholder="Buscar por nombre, cargo, empresa o eje temático..."
            value={busqueda}
            onChange={(e) => onBusquedaChange(e.target.value)}
            className="w-full rounded-xl bg-slate-50 pl-10 pr-4 py-2.5 text-xs sm:text-sm text-slate-900 border border-slate-200 placeholder-slate-400 focus:bg-white focus:border-[#6c35de] focus:outline-none focus:ring-2 focus:ring-[#6c35de]/10 transition-all"
          />
        </div>

        {/* Selector de Auditorio */}
        <select
          value={auditorioSeleccionado}
          onChange={(e) => onAuditorioChange(e.target.value)}
          className="w-full sm:w-56 rounded-xl bg-slate-50 px-3.5 py-2.5 text-xs sm:text-sm text-slate-700 border border-slate-200 focus:bg-white focus:border-[#6c35de] focus:outline-none transition-all cursor-pointer"
        >
          {auditorios.map((auditorio) => (
            <option key={auditorio} value={auditorio}>
              {auditorio === 'Todos' ? 'Todos los Auditorios' : auditorio}
            </option>
          ))}
        </select>
      </div>

      {/* Filtros rápidos por categoría (Pills) */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1 pt-2 no-scrollbar">
        {categorias.map((cat) => (
          <CategoryPill
            key={cat}
            label={cat}
            isSelected={categoriaSeleccionada === cat}
            onClick={() => onCategoriaChange(cat)}
          />
        ))}
      </div>
    </div>
  );
};
