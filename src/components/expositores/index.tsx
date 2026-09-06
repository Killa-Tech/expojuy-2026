import { Section } from "@/components/section";

import {
  Building2,
  Calendar,
  ChevronRight,
  Clock,
  Download,
  Edit3,
  Globe,
  Plus,
  Search,
  UserPlus,
  Users
} from 'lucide-react';
import React, { useState } from 'react';

// --- Types & Interfaces ---
export interface DisertacionSecundaria {
  tipo: string;
  detalle: string;
  horario?: string;
}

export interface Expositor {
  id: string | number;
  nombre: string;
  cargo: string;
  organizacion: string;
  pais: string;
  paisCodigo: string; // ej. 'ARG', 'CHL', 'BRA'
  categoria: string | 'Comercio Exterior' | 'Minería & Litio' | 'Agroindustria' | 'Innovación & Tech' | 'Energías Renovables';
  tipoParticipacion: string; // ej. 'Plenaria Central', 'Keynote Session'
  tituloDisertacion: string;
  fecha: string;
  hora: string;
  auditorio: string;
  fotoUrl: string;
  otrasParticipaciones: DisertacionSecundaria[];
}

// --- Datos Iniciales (6 Expositores Oficiales ExpoJuy 2026) ---
const EXPOSITORES_INICIALES: Expositor[] = [
  {
    id: 1,
    nombre: "Dra. Fuentes Maria Lourdes",
    cargo: "Directora de Integración Regional",
    organizacion: "Mercosur",
    pais: "Mercosur",
    paisCodigo: "ARG / MERCOSUR",
    categoria: "Comercio Exterior",
    tipoParticipacion: "Masterclass Magistral",
    tituloDisertacion: "Estrategias de Exportación e Integración Logística del Corredor Bioceánico 2026",
    fecha: "14 OCT",
    hora: "10:30 HS",
    auditorio: "Salón Auditorio A",
    fotoUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80",
    otrasParticipaciones: [
      { tipo: "Mesa de debate", detalle: "Aranceles y Tránsito Andino", horario: "15:00 hs" },
      { tipo: "Ronda B2B", detalle: "Reunión con delegaciones del Corredor", horario: "16:30 hs" }
    ]
  },
  {
    id: 2,
    nombre: "Ing. Peloc Sergio Antonino",
    cargo: "CEO & Fundador",
    organizacion: "Alega Tech & Soluciones Integrales",
    pais: "Argentina / Región Norte",
    paisCodigo: "ARG / TRIÁNGULO LITIO",
    categoria: "Desarrollo de Software",
    tipoParticipacion: "Keynote Session",
    tituloDisertacion: "Sustentabilidad Hídrica y Extracción Directa en los Salares de Altura",
    fecha: "14 OCT",
    hora: "12:00 HS",
    auditorio: "Salón Auditorio B",
    fotoUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80",
    otrasParticipaciones: [
      { tipo: "Firma de Convenio", detalle: "Acuerdo Tecnológico I+D UNJu", horario: "14:30 hs" },
      { tipo: "Mesa Minera", detalle: "Inversores Mineros Cu/Li", horario: "17:00 hs" }
    ]
  },
  {
    id: 3,
    nombre: "Lic. Sofía Ramos",
    cargo: "Vicepresidenta de Asuntos Regulatorios",
    organizacion: "Consejo de Comercio Bilateral",
    pais: "Brasil",
    paisCodigo: "BRA / CÁMARA INDUSTRIA",
    categoria: "Comercio Exterior",
    tipoParticipacion: "Disertación Magistral",
    tituloDisertacion: "Pacto Verde Europeo, Certificaciones de Origen y Nuevas Cuotas de Exportación",
    fecha: "14 OCT",
    hora: "15:00 HS",
    auditorio: "Salón Auditorio A",
    fotoUrl: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=800&q=80",
    otrasParticipaciones: [
      { tipo: "Apertura Rondas", detalle: "Pabellón Internacional Brasil", horario: "11:00 hs" },
      { tipo: "Panel Tripartito", detalle: "Aduanas Integradas NOA", horario: "17:45 hs" }
    ]
  },
  {
    id: 4,
    nombre: "Dr. Mateo Benítez",
    cargo: "Director de Innovación Genética",
    organizacion: "BioPampa Genetics",
    pais: "Argentina",
    paisCodigo: "ARG / NOA AGRO",
    categoria: "Agroindustria",
    tipoParticipacion: "Conferencia Central",
    tituloDisertacion: "Biotecnología Adaptativa y Riego Inteligente para Valles de Altura",
    fecha: "14 OCT",
    hora: "17:15 HS",
    auditorio: "Salón Auditorio B",
    fotoUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80",
    otrasParticipaciones: [
      { tipo: "Taller Práctico", detalle: "Sensores IoT en fincas tabacaleras", horario: "10:00 hs" },
      { tipo: "Entrega de Premios", detalle: "Innovación AgroJuy 2026", horario: "19:00 hs" }
    ]
  },
  {
    id: 5,
    nombre: "Dra. Camila Zhang",
    cargo: "Head of Applied AI",
    organizacion: "Pacific Supply Chain Nexus",
    pais: "Singapur / Global",
    paisCodigo: "SGP / GLOBAL TECH",
    categoria: "Innovación & Tech",
    tipoParticipacion: "Keynote Futuro",
    tituloDisertacion: "Blockchain y Gemelos Digitales para Trazabilidad en Corredores Logísticos",
    fecha: "15 OCT",
    hora: "09:45 HS",
    auditorio: "Sala Conferencias C",
    fotoUrl: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=800&q=80",
    otrasParticipaciones: [
      { tipo: "Jurado Pitch", detalle: "Startups Jujuy Conecta", horario: "14:00 hs" },
      { tipo: "Networking VIP", detalle: "Founders & Venture Capitals", horario: "16:30 hs" }
    ]
  },
  {
    id: 6,
    nombre: "Ing. Guillermo Navarro",
    cargo: "Presidente Regional",
    organizacion: "Consorcio Solar Andino & Almacenamiento",
    pais: "España / Mercosur",
    paisCodigo: "ESP / TRANSICIÓN GLOBAL",
    categoria: "Energías Renovables",
    tipoParticipacion: "Masterclass Internacional",
    tituloDisertacion: "Hidrógeno Verde y Parques Fotovoltaicos: La Nueva Matriz Exportadora del Cono Sur",
    fecha: "15 OCT",
    hora: "16:00 HS",
    auditorio: "Salón Auditorio A",
    fotoUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80",
    otrasParticipaciones: [
      { tipo: "Mesa Técnica", detalle: "Cauchari II y Expansión Litio", horario: "11:30 hs" },
      { tipo: "Financiamiento", detalle: "Ronda Verde BID / CAF", horario: "18:00 hs" }
    ]
  }
];

// --- Subcomponente: Tarjeta de Expositor Editable / Modular ---
interface ExpositorCardProps {
  expositor: Expositor;
  onEdit?: (expositor: Expositor) => void;
}

export const ExpositorCard: React.FC<ExpositorCardProps> = ({ expositor, onEdit }) => {
  return (
    <article className="group relative flex flex-col overflow-hidden rounded-2xl border border-gray-200/80 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      {/* Contenedor Superior: Imagen con Badges y Edición */}
      <div className="relative h-64 w-full overflow-hidden bg-slate-900">
        <img
          src={expositor.fotoUrl}
          alt={expositor.nombre}
          className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105 opacity-90 group-hover:opacity-100"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />

        {/* Badge de Origen / Delegación */}
        <div className="absolute left-3.5 top-3.5 flex items-center gap-1.5 rounded-full bg-black/60 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-white backdrop-blur-md border border-white/20">
          <span className="h-2 w-2 rounded-full bg-[#00b4d8]" />
          {expositor.paisCodigo}
        </div>

        {/* Botón de Edición Rápida sobre la imagen */}
        <button
          onClick={() => onEdit?.(expositor)}
          title="Editar información o foto del expositor"
          className="absolute right-3.5 top-3.5 flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-slate-700 shadow-md backdrop-blur-sm transition-colors hover:bg-[#6c35de] hover:text-white"
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
          <button className="flex-1 rounded-xl border border-slate-200 bg-white py-2 text-center text-xs font-semibold text-slate-700 transition hover:bg-slate-50 hover:border-slate-300">
            Ver Perfil
          </button>
          <button className="flex-1 rounded-xl bg-[#6c35de] py-2 text-center text-xs font-semibold text-white shadow-sm transition hover:bg-[#5926c2]">
            Agendar
          </button>
        </div>
      </div>
    </article>
  );
};

// --- Componente Principal Exportado ---
export const Expositores: React.FC = () => {
  const [expositores, setExpositores] = useState<Expositor[]>(EXPOSITORES_INICIALES);
  const [busqueda, setBusqueda] = useState<string>('');
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState<string>('Todos');
  const [auditorioSeleccionado, setAuditorioSeleccionado] = useState<string>('Todos');

  // Categorías para filtrado dinámico
  const categorias = [
    'Todos',
    'Comercio Exterior',
    'Minería & Litio',
    'Agroindustria',
    'Innovación & Tech',
    'Energías Renovables'
  ];

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

  // Handler para agregar un nuevo disertante dinámicamente
  const handleAgregarExpositor = () => {
    const nuevoId = expositores.length + 1;
    const nuevo: Expositor = {
      id: nuevoId,
      nombre: `Nuevo Disertante #${nuevoId}`,
      cargo: "Especialista Invitado",
      organizacion: "Cámara de Comercio e Industria",
      pais: "Argentina",
      paisCodigo: "ARG / NOA",
      categoria: "Comercio Exterior",
      tipoParticipacion: "Panel Técnico",
      tituloDisertacion: "Título de la nueva disertación o conferencia a confirmar",
      fecha: "16 OCT",
      hora: "11:00 HS",
      auditorio: "Salón Auditorio A",
      fotoUrl: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=800&q=80",
      otrasParticipaciones: [
        { tipo: "Networking", detalle: "Encuentro B2B y mesa redonda", horario: "14:00 hs" }
      ]
    };
    setExpositores((prev) => [...prev, nuevo]);
  };

  const handleEditarExpositor = (exp: Expositor) => {
    const nuevoNombre = prompt("Editar nombre del expositor:", exp.nombre);
    if (nuevoNombre) {
      setExpositores((prev) =>
        prev.map((item) => (item.id === exp.id ? { ...item, nombre: nuevoNombre } : item))
      );
    }
  };

  return (
        <Section id="expositores" label="Expositores"
 className="w-full bg-[#fcf9f8] py-12 px-4 sm:px-6 lg:px-8 font-sans text-slate-900">
      <div className="mx-auto max-w-7xl">
        
        {/* Encabezado Principal de la Sección */}
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
            <div className="flex items-center gap-2 px-3 py-1 border-r border-slate-100">
              <Users className="h-4 w-4 text-[#6c35de]" />
              <div className="text-left">
                <span className="block text-sm font-bold text-slate-900">{expositores.length}+</span>
                <span className="block text-[10px] text-slate-400 uppercase">Líderes</span>
              </div>
            </div>
            <div className="flex items-center gap-2 px-3 py-1 border-r border-slate-100">
              <Globe className="h-4 w-4 text-[#00b4d8]" />
              <div className="text-left">
                <span className="block text-sm font-bold text-slate-900">12</span>
                <span className="block text-[10px] text-slate-400 uppercase">Países</span>
              </div>
            </div>
            <div className="flex items-center gap-2 px-3 py-1">
              <Building2 className="h-4 w-4 text-purple-600" />
              <div className="text-left">
                <span className="block text-sm font-bold text-slate-900">3</span>
                <span className="block text-[10px] text-slate-400 uppercase">Auditorios</span>
              </div>
            </div>
          </div>
        </div>

        {/* Barra de Filtros, Búsqueda y Botón para Sumar */}
        <div className="mt-8 flex flex-col gap-4 rounded-2xl bg-white p-4 shadow-sm border border-slate-200/80">
          <div className="flex flex-col sm:flex-row items-center gap-3">
            {/* Input de Búsqueda */}
            <div className="relative w-full sm:flex-1">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
              <input
                type="text"
                placeholder="Buscar por nombre, cargo, empresa o eje temático..."
                value={busqueda}
                onChange={(e) => setBusqueda(e.target.value)}
                className="w-full rounded-xl bg-slate-50 pl-10 pr-4 py-2.5 text-xs sm:text-sm text-slate-900 border border-slate-200 placeholder-slate-400 focus:bg-white focus:border-[#6c35de] focus:outline-none focus:ring-2 focus:ring-[#6c35de]/10 transition-all"
              />
            </div>

            {/* Selector de Auditorio */}
            <select
              value={auditorioSeleccionado}
              onChange={(e) => setAuditorioSeleccionado(e.target.value)}
              className="w-full sm:w-56 rounded-xl bg-slate-50 px-3.5 py-2.5 text-xs sm:text-sm text-slate-700 border border-slate-200 focus:bg-white focus:border-[#6c35de] focus:outline-none transition-all"
            >
              <option value="Todos">Todos los Auditorios</option>
              <option value="Auditorio A">Auditorio A</option>
              <option value="Auditorio B">Auditorio B</option>
              <option value="Sala Conferencias C">Sala Conferencias C</option>
            </select>

            {/* Botón "+ Sumar Nuevo Expositor" */}
            <button
              onClick={handleAgregarExpositor}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#00b4d8] to-[#6c35de] px-5 py-2.5 text-xs sm:text-sm font-semibold text-white shadow-md shadow-[#6c35de]/20 transition-all hover:opacity-95 hover:shadow-lg active:scale-95"
            >
              <Plus className="h-4 w-4" />
              <span>Sumar Nuevo Expositor</span>
            </button>
          </div>

          {/* Filtros rápidos por categoría (Pills) */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 pt-2 no-scrollbar">
            {categorias.map((cat) => (
              <button
                key={cat}
                onClick={() => setCategoriaSeleccionada(cat)}
                className={`whitespace-nowrap rounded-full px-3.5 py-1.5 text-xs font-semibold transition-all ${
                  categoriaSeleccionada === cat
                    ? 'bg-[#6c35de] text-white shadow-sm'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200/80 hover:text-slate-800'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Bloque Destacado: Cronograma del Día Plenario */}
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
            <button className="text-xs font-semibold text-[#00b4d8] hover:underline flex items-center gap-1 self-start sm:self-auto">
              Ver agenda completa <ChevronRight className="h-3.5 w-3.5" />
            </button>
          </div>

          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs">
            <div className="rounded-xl bg-white/5 p-3 border border-white/5">
              <div className="flex justify-between text-[11px] text-[#00b4d8] font-mono">
                <span>10:30 HS</span>
                <span className="text-white/60">Auditorio A</span>
              </div>
              <p className="mt-1 font-semibold text-white">Integración Logística 2026</p>
              <p className="text-slate-400 text-[11px]">Dra. Elena Valenzuela (Mercosur)</p>
            </div>
            <div className="rounded-xl bg-white/5 p-3 border border-white/5">
              <div className="flex justify-between text-[11px] text-[#00b4d8] font-mono">
                <span>12:00 HS</span>
                <span className="text-white/60">Auditorio B</span>
              </div>
              <p className="mt-1 font-semibold text-white">El Triángulo del Litio</p>
              <p className="text-slate-400 text-[11px]">Ing. Carlos Mendez (Andes Lithium)</p>
            </div>
            <div className="rounded-xl bg-white/5 p-3 border border-white/5">
              <div className="flex justify-between text-[11px] text-[#00b4d8] font-mono">
                <span>15:00 HS</span>
                <span className="text-white/60">Auditorio A</span>
              </div>
              <p className="mt-1 font-semibold text-white">Pacto Verde &amp; Mercados UE</p>
              <p className="text-slate-400 text-[11px]">Lic. Sofía Ramos (Cámara Bilateral)</p>
            </div>
            <div className="rounded-xl bg-white/5 p-3 border border-white/5">
              <div className="flex justify-between text-[11px] text-[#00b4d8] font-mono">
                <span>17:15 HS</span>
                <span className="text-white/60">Auditorio B</span>
              </div>
              <p className="mt-1 font-semibold text-white">AgTech &amp; Biotecnología NOA</p>
              <p className="text-slate-400 text-[11px]">Dr. Mateo Benítez (BioPampa)</p>
            </div>
          </div>
        </div>

        {/* Grilla de Expositores (Responsive 3 columnas desktop, 2 tablet, 1 mobile) */}
        <div className="mt-10">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold tracking-tight text-slate-900 flex items-center gap-2">
              <span className="text-[#6c35de]">★</span> Oradores Magistrales Confirmados
            </h2>
            <span className="text-xs text-slate-500 font-medium">
              Mostrando <strong className="text-slate-800">{expositoresFiltrados.length}</strong> disertantes
            </span>
          </div>

          {expositoresFiltrados.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {expositoresFiltrados.map((exp) => (
                <ExpositorCard
                  key={exp.id}
                  expositor={exp}
                  onEdit={handleEditarExpositor}
                />
              ))}
            </div>
          ) : (
            <div className="rounded-2xl border-2 border-dashed border-slate-200 bg-white p-12 text-center">
              <p className="text-base font-semibold text-slate-700">No se encontraron expositores</p>
              <p className="mt-1 text-xs text-slate-500">
                Prueba ajustando los filtros temáticos o el término de búsqueda.
              </p>
              <button
                onClick={() => { setBusqueda(''); setCategoriaSeleccionada('Todos'); }}
                className="mt-4 rounded-xl bg-slate-100 px-4 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-200"
              >
                Limpiar Filtros
              </button>
            </div>
          )}
        </div>

        {/* Call to Action: Añadir Expositor para el Comité Organizador */}
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
              onClick={handleAgregarExpositor}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#00b4d8] to-[#6c35de] px-6 py-3 text-xs sm:text-sm font-semibold text-white shadow-md hover:opacity-95"
            >
              <UserPlus className="h-4 w-4" />
              <span>+ Agregar Nuevo Disertante</span>
            </button>
            <button className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-slate-100 px-5 py-3 text-xs sm:text-sm font-semibold text-slate-700 hover:bg-slate-200">
              <Download className="h-4 w-4" />
              <span>Descargar Pauta de Prensa</span>
            </button>
          </div>
        </div>

      </div>
    </Section>
  );
};

export default Expositores;
