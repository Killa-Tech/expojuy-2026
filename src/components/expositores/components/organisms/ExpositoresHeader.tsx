import React from 'react';
import { Users, Globe, Building2 } from 'lucide-react';
import { StatItem } from '../atoms/StatItem';

interface ExpositoresHeaderProps {
  totalExpositores: number;
}

export const ExpositoresHeader: React.FC<ExpositoresHeaderProps> = ({ totalExpositores }) => {
  return (
    <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-slate-200/80">
      <div className="max-w-2xl">
        <div className="inline-flex items-center gap-2 rounded-full bg-[#00b4d8]/10 px-3.5 py-1 text-xs font-semibold text-[#0089a8] mb-3">
          <span className="h-1.5 w-1.5 rounded-full bg-[#00b4d8]" />
          CUMBRE INTERNACIONAL EXPOJUY 2026
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 font-['Ambit',sans-serif]">
          Expositores &amp; Disertantes{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00b4d8] to-[#6c35de]">
            Magistrales
          </span>
        </h1>
        <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed font-light">
          Conectando referentes internacionales del comercio, minería sustentable, agroindustria y tecnología. Conoce a los líderes que disertarán durante la jornada en el Corredor Bioceánico.
        </p>
      </div>

      {/* Estadísticas Rápidas de la Jornada */}
      <div className="flex items-center gap-3 bg-white p-3 rounded-2xl shadow-sm border border-slate-200/70 self-start md:self-auto">
        <StatItem
          icon={Users}
          value={`${totalExpositores}+`}
          label="Líderes"
          iconColor="text-[#6c35de]"
          hasBorder={true}
        />
        <StatItem
          icon={Globe}
          value={12}
          label="Países"
          iconColor="text-[#00b4d8]"
          hasBorder={true}
        />
        <StatItem
          icon={Building2}
          value={3}
          label="Auditorios"
          iconColor="text-purple-600"
          hasBorder={false}
        />
      </div>
    </div>
  );
};
