import React from 'react';
import { UserPlus, Download } from 'lucide-react';

interface ExpositoresCtaProps {
  onAgregarExpositor: () => void;
  onDescargarPrensa?: () => void;
}

export const ExpositoresCta: React.FC<ExpositoresCtaProps> = ({
  onAgregarExpositor,
  onDescargarPrensa,
}) => {
  return (
    <div className="mt-12 rounded-2xl border border-slate-200/80 bg-white p-6 sm:p-8 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden">
      <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-[#00b4d8] to-[#6c35de]" />
      <div className="max-w-2xl">
        <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#6c35de]">
          <span className="h-1.5 w-1.5 rounded-full bg-[#6c35de]" />
          Comité Organizador ExpoJuy 2026
        </span>
        <h3 className="mt-1 text-xl sm:text-2xl font-bold text-slate-900">
          ¿Desea incorporar un nuevo disertante o expositor oficial?
        </h3>
        <p className="mt-1.5 text-xs sm:text-sm text-slate-600">
          Sume la ficha institucional, fecha de conferencia, auditorio y material de prensa al catálogo oficial en tiempo real.
        </p>
      </div>
      <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto">
        <button
          type="button"
          onClick={onAgregarExpositor}
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#00b4d8] to-[#6c35de] px-6 py-3 text-xs sm:text-sm font-semibold text-white shadow-md hover:opacity-95 transition-all cursor-pointer"
        >
          <UserPlus className="h-4 w-4" />
          <span>+ Agregar Nuevo Disertante</span>
        </button>
        <button
          type="button"
          onClick={onDescargarPrensa}
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-slate-100 px-5 py-3 text-xs sm:text-sm font-semibold text-slate-700 hover:bg-slate-200 transition-all cursor-pointer"
        >
          <Download className="h-4 w-4" />
          <span>Descargar Pauta de Prensa</span>
        </button>
      </div>
    </div>
  );
};
