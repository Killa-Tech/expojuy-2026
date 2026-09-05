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
  color: string;
  accent: string;
};
