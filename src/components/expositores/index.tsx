import React, { useState } from 'react';
import { Section } from '@/components/section';
import type { Expositor, DisertacionSecundaria } from './types';
import {
  EXPOSITORES_INICIALES,
  CATEGORIAS_EXPOSITORES,
  AUDITORIOS_DISPONIBLES,
} from './data';
import {
  ExpositoresHeader,
  ExpositoresFilters,
  ExpositoresGrid,
  ExpositorCard,
} from './components';

// Re-exportar tipos y subcomponentes clave para retrocompatibilidad
export type { Expositor, DisertacionSecundaria };
export { ExpositorCard };

export const Expositores: React.FC = () => {
  const [expositores, setExpositores] = useState<Expositor[]>(EXPOSITORES_INICIALES);
  const [busqueda, setBusqueda] = useState<string>('');
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState<string>('Todos');
  const [auditorioSeleccionado, setAuditorioSeleccionado] = useState<string>('Todos');

  // Filtrado reactivo de expositores
  const expositoresFiltrados = expositores.filter((exp) => {
    const coincideTexto =
      exp.nombre.toLowerCase().includes(busqueda.toLowerCase()) ||
      exp.tituloDisertacion.toLowerCase().includes(busqueda.toLowerCase()) ||
      exp.organizacion.toLowerCase().includes(busqueda.toLowerCase());

    const coincideCategoria =
      categoriaSeleccionada === 'Todos' || exp.categoria === categoriaSeleccionada;

    const coincideAuditorio =
      auditorioSeleccionado === 'Todos' || exp.auditorio.includes(auditorioSeleccionado);

    return coincideTexto && coincideCategoria && coincideAuditorio;
  });


  const handleEditarExpositor = (exp: Expositor) => {
    const nuevoNombre = prompt("Editar nombre del expositor:", exp.nombre);
    if (nuevoNombre) {
      setExpositores((prev) =>
        prev.map((item) => (item.id === exp.id ? { ...item, nombre: nuevoNombre } : item))
      );
    }
  };

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
        <ExpositoresHeader totalExpositores={expositores.length} />

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
          onEdit={handleEditarExpositor}
          onResetFilters={handleResetFilters}
        />
      </div>
    </Section>
  );
};

export default Expositores;
