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
  paisCodigo: string; // ej. 'ARG / MERCOSUR'
  categoria: string;
  tipoParticipacion: string; // ej. 'Masterclass Magistral', 'Keynote Session'
  tituloDisertacion: string;
  fecha: string;
  hora: string;
  auditorio: string;
  fotoUrl: string;
  otrasParticipaciones: DisertacionSecundaria[];
}
