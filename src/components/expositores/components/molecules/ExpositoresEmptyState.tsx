import React from 'react';
import { SearchX } from 'lucide-react';

interface ExpositoresEmptyStateProps {
  onResetFilters: () => void;
}

export const ExpositoresEmptyState: React.FC<ExpositoresEmptyStateProps> = ({ onResetFilters }) => {
  return (
    <div className="rounded-2xl border-2 border-dashed border-slate-200 bg-white p-12 text-center">
      <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-slate-100 text-slate-400">
        <SearchX className="h-6 w-6" />
      </div>
      <p className="text-base font-semibold text-slate-700">No se encontraron expositores</p>
      <p className="mt-1 text-xs text-slate-500">
        Prueba ajustando los filtros temáticos o el término de búsqueda.
      </p>
      <button
        type="button"
        onClick={onResetFilters}
        className="mt-4 rounded-xl bg-slate-100 px-4 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-200 transition-colors cursor-pointer"
      >
        Limpiar Filtros
      </button>
    </div>
  );
};
