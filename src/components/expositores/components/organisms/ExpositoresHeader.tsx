import React from 'react';
import { Users, Globe, Building2 } from 'lucide-react';
import { StatItem } from '../atoms/StatItem';

interface ExpositoresHeaderProps {
  totalExpositores: number;
}

export const ExpositoresHeader: React.FC<ExpositoresHeaderProps> = ({ totalExpositores }) => {
  return (
    <div className="flex w-full flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-border font-['Ambit',sans-serif]">
      <div className="max-w-2xl font-['Ambit',sans-serif]">
        <div className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-3.5 py-1 text-xs font-semibold text-accent mb-3 font-['Ambit',sans-serif]">
          <span className="h-1.5 w-1.5 rounded-full bg-accent" />
          CUMBRE INTERNACIONAL EXPOJUY 2026
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground font-['Ambit',sans-serif]">
          Expositores &amp; Disertantes{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-brand-violet">
            Magistrales
          </span>
        </h1>
        <p className="mt-3 text-sm sm:text-base text-muted-foreground leading-relaxed font-light font-['Ambit',sans-serif]">
          Conectando referentes internacionales del comercio, minería sustentable, agroindustria y tecnología. Conoce a los líderes que disertarán durante la jornada en el Corredor Bioceánico.
        </p>
      </div>

      {/* Estadísticas Rápidas de la Jornada */}
      <div className="flex items-center gap-3 bg-card text-card-foreground p-3 rounded-2xl shadow-sm border border-border self-start md:self-auto transition-colors">
        <StatItem
          icon={Users}
          value={`${totalExpositores}+`}
          label="Líderes"
          iconColor="text-primary"
          hasBorder={true}
        />
        <StatItem
          icon={Globe}
          value={12}
          label="Países"
          iconColor="text-accent"
          hasBorder={true}
        />
        <StatItem
          icon={Building2}
          value={3}
          label="Auditorios"
          iconColor="text-secondary"
          hasBorder={false}
        />
      </div>
    </div>
  );
};
