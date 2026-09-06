import { useState, useMemo } from 'react';
import { Section } from '@/components/section';
import type { Expositor } from './types';
import {
  EXPOSITORES_INICIALES,
  CATEGORIAS_EXPOSITORES,
  AUDITORIOS_DISPONIBLES,
} from './data';
import {
  ExpositoresHeader,
  ExpositoresFilters,
  ExpositoresGrid,
} from './components';

export type { Expositor };

export const Expositores = () => {
  const [busqueda, setBusqueda] = useState('');
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState('Todos');
  const [auditorioSeleccionado, setAuditorioSeleccionado] = useState('Todos');

  // Filtrado reactivo optimizado
  const expositoresFiltrados = useMemo(() => {
    const query = busqueda.trim().toLowerCase();

    return EXPOSITORES_INICIALES.filter((exp) => {
      const coincideTexto =
        !query ||
        exp.nombre.toLowerCase().includes(query) ||
        exp.tituloDisertacion.toLowerCase().includes(query) ||
        exp.organizacion.toLowerCase().includes(query);

      const coincideCategoria =
        categoriaSeleccionada === 'Todos' || exp.categoria === categoriaSeleccionada;

      const coincideAuditorio =
        auditorioSeleccionado === 'Todos' || exp.auditorio.includes(auditorioSeleccionado);

      return coincideTexto && coincideCategoria && coincideAuditorio;
    });
  }, [busqueda, categoriaSeleccionada, auditorioSeleccionado]);

  const handleResetFilters = () => {
    setBusqueda('');
    setCategoriaSeleccionada('Todos');
    setAuditorioSeleccionado('Todos');
  };

  return (
    <Section
      id="expositores"
      label="Expositores"
      className="flex w-full flex-col items-center bg-background px-6 py-8 text-foreground md:px-12 font-['Ambit',sans-serif] transition-colors duration-200"
    >
      <div className="w-full font-['Ambit',sans-serif]">
        {/* Encabezado Principal de la Sección (Organismo) */}
        <ExpositoresHeader totalExpositores={EXPOSITORES_INICIALES.length} />

        {/* Barra de Filtros y Búsqueda (Organismo) */}
        <ExpositoresFilters
          busqueda={busqueda}
          onBusquedaChange={setBusqueda}
          categoriaSeleccionada={categoriaSeleccionada}
          onCategoriaChange={setCategoriaSeleccionada}
          categorias={CATEGORIAS_EXPOSITORES}
          auditorioSeleccionado={auditorioSeleccionado}
          onAuditorioChange={setAuditorioSeleccionado}
          auditorios={AUDITORIOS_DISPONIBLES}
        />

        {/* Grilla de Expositores o Estado Vacío (Organismo) */}
        <ExpositoresGrid
          expositores={expositoresFiltrados}
          onResetFilters={handleResetFilters}
        />
      </div>
    </Section>
  );
};

export default Expositores;

