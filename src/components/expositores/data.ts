import type { Expositor } from './types';

// --- Datos Iniciales (6 Expositores Oficiales ExpoJuy 2026) ---
export const EXPOSITORES_INICIALES: Expositor[] = [
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

export const CATEGORIAS_EXPOSITORES: string[] = [
  'Todos',
  'Comercio Exterior',
  'Minería & Litio',
  'Agroindustria',
  'Innovación & Tech',
  'Energías Renovables'
];

export const AUDITORIOS_DISPONIBLES: string[] = [
  'Todos',
  'Auditorio A',
  'Auditorio B',
  'Sala Conferencias C'
];
