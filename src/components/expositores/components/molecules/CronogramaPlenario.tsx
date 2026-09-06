import React from 'react';
import { Clock, ChevronRight } from 'lucide-react';
import type { CronogramaItemData } from '../../types';
import { CRONOGRAMA_PLENARIO_INICIAL } from '../../data';

interface CronogramaPlenarioProps {
  items?: CronogramaItemData[];
  onVerAgendaCompleta?: () => void;
}

export const CronogramaPlenario: React.FC<CronogramaPlenarioProps> = ({
  items = CRONOGRAMA_PLENARIO_INICIAL,
  onVerAgendaCompleta,
}) => {
  return (
    <div className="mt-6 rounded-2xl bg-gradient-to-r from-slate-950 via-[#101426] to-slate-900 p-5 sm:p-6 text-white shadow-xl border border-slate-800">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800/80 pb-4">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-cyan-500/20 text-[#00b4d8]">
            <Clock className="h-5 w-5" />
          </div>
          <div>
            <h2 className="text-sm sm:text-base font-bold text-white">
              Cronograma del Día • Bloque Plenario Central
            </h2>
            <p className="text-xs text-slate-400">
              14 de Octubre de 2026 — Ciudad Cultural, San Salvador de Jujuy
            </p>
          </div>
        </div>
        <button
          type="button"
          onClick={onVerAgendaCompleta}
          className="text-xs font-semibold text-[#00b4d8] hover:underline flex items-center gap-1 self-start sm:self-auto cursor-pointer"
        >
          Ver agenda completa <ChevronRight className="h-3.5 w-3.5" />
        </button>
      </div>


    </div>
  );
};
