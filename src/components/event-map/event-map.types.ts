export type EventMapCategory =
  | "institutional"
  | "industrial"
  | "commerce"
  | "exterior"
  | "auditorium"
  | "gastronomy";

export type EventMapSector = {
  id: string;
  name: string;
  shortName: string;
  category: EventMapCategory;
  description: string;
  position: [number, number, number];
  size: [number, number, number];
};

export type EventMapPalette = {
  background: string;
  foreground: string;
  primary: string;
  secondary: string;
  accent: string;
  muted: string;
  floor: string;
  surface: string;
  gridPrimary: string;
  gridSecondary: string;
  sectorColors: Record<EventMapCategory, {
    color: string;
    accent: string;
    label: string;
    labelShadow: string;
  }>;
};
