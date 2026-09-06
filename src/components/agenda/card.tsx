import { useState } from "react";
import {
  CalendarPlus,
  ChevronRight,
  Clock,
  Drama,
  MapPin,
  PartyPopper,
  Share2,
  Tag,
} from "lucide-react";

export interface AgendaCardProps {
  image: string;
  imageAlt: string;
  time: string;
  badge: string;
  location: string;
  category: string;
  room: string;
  title: string;
  description: string;
  speakerName: string;
  speakerRole: string;
  speakerImage: string;
  showTime: string;
  showTitle: string;
  showDescription: string;
}

export const AgendaCard = ({
  image,
  imageAlt,
  time,
  badge,
  location,
  category,
  room,
  title,
  description,
  speakerName,
  speakerRole,
  speakerImage,
  showTime,
  showTitle,
  showDescription,
}: AgendaCardProps) => {
  const [isScheduled, setIsScheduled] = useState(false);
  const eventTitle = `${title} - Expojuy 2026`;

  const handleShare = async () => {
    if (navigator.share) {
      await navigator.share({
        title: eventTitle,
        text: "Mirá la agenda de Expojuy 2026",
        url: window.location.href,
      });
      return;
    }

    await navigator.clipboard.writeText(window.location.href);
  };

  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-foreground/10 bg-background shadow-2xl shadow-primary/10 transition-all duration-300 hover:border-primary/40 hover:shadow-primary/20">
      <div className="relative h-52 w-full overflow-hidden">
        <img
          alt={imageAlt}
          className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
          src={image}
        />
        <div className="absolute inset-0 bg-linear-to-t from-background via-background/60 to-transparent" />
        <div className="absolute inset-x-3.5 top-3.5 flex items-center justify-between">
          <div className="flex items-center gap-1.5 rounded-full border border-accent/30 bg-background/80 px-3 py-1 text-xs font-bold text-accent shadow-md backdrop-blur-md">
            <Clock aria-hidden="true" className="size-4 text-accent" />
            <span className="shrink-0 whitespace-nowrap">HOY • {time} hs</span>
          </div>
          <div className="rounded-full border border-secondary/40 bg-brand-violet px-3 py-1 text-xs font-bold text-purple-100 shadow-md">
            {badge}
          </div>
        </div>
        <div className="absolute bottom-3 left-3.5 flex items-center gap-1.5 rounded-lg border border-foreground/10 bg-background/85 px-3 py-1 text-xs font-semibold text-foreground backdrop-blur-md">
          <MapPin aria-hidden="true" className="size-4 text-primary" />
          <span>{location}</span>
        </div>
      </div>

      <div className="flex flex-1 flex-col gap-5 p-5 md:p-6">
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-2">
            <Tag aria-hidden="true" className="size-[18px] text-primary" />
            <span className="text-[11px] font-extrabold uppercase tracking-widest text-primary">
              {category}
            </span>
            <span className="ml-auto rounded bg-accent/10 px-2 py-0.5 text-[11px] font-semibold text-accent">
              {room}
            </span>
          </div>
          <h3 className="text-lg font-bold leading-snug text-foreground transition-colors group-hover:text-primary md:text-xl">
            {title}
          </h3>
          <p className="text-sm leading-relaxed text-foreground/70 line-clamp-2">
            {description}
          </p>
          <div className="flex items-center gap-3 pt-1">
            <img
              alt="Dra. Valeria Aramayo"
              className="h-11 w-11 shrink-0 rounded-full object-cover ring-2 ring-primary/40"
              src={speakerImage}
            />
            <div className="flex min-w-0 flex-col">
              <span className="truncate text-sm font-bold text-foreground">
                {speakerName}
              </span>
              <span className="truncate text-xs text-foreground/70">
                {speakerRole}
              </span>
            </div>
          </div>
        </div>

        <div className="relative mt-auto flex flex-col gap-2 overflow-hidden rounded-xl border border-foreground/10 bg-linear-to-r from-secondary/10 via-primary/5 to-accent/10 p-4 shadow-inner">
          <div className="absolute bottom-0 left-0 top-0 w-1.5 bg-linear-to-b from-accent via-secondary to-primary" />
          <div className="flex items-center justify-between pl-2">
            <span className="flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-wider text-accent">
              <PartyPopper aria-hidden="true" className="size-4 text-accent" />
              SHOW CENTRAL DEL DÍA
            </span>
            <span className="shrink-0 whitespace-nowrap rounded-full border border-foreground/10 bg-background/70 px-2.5 py-0.5 text-xs font-bold text-foreground">
              {showTime} hs
            </span>
          </div>
          <div className="flex items-center justify-between gap-3 pl-2">
            <div className="flex min-w-0 flex-col">
              <h4 className="text-base font-extrabold text-foreground">
                {showTitle}
              </h4>
              <p className="mt-0.5 text-xs text-secondary">
                <span>{showDescription}</span>
              </p>
            </div>
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-secondary/40 bg-secondary/20 text-secondary shadow-md">
              <Drama aria-hidden="true" className="size-6 text-secondary" />
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between border-t border-foreground/10 pt-2">
          <div className="flex items-center gap-2">
            <button
              className="flex items-center gap-2 rounded-xl bg-linear-to-r from-brand-violet to-brand-lilac px-4 py-2 text-xs font-bold text-primary-foreground shadow-md shadow-primary/20 transition-all hover:brightness-110 active:scale-95"
              onClick={() => setIsScheduled((current) => !current)}
              type="button"
            >
              <CalendarPlus aria-hidden="true" className="size-[18px]" />
              <span>{isScheduled ? "Agendado" : "Agendar"}</span>
            </button>
            <button
              aria-label="Compartir evento"
              className="flex h-9 w-9 items-center justify-center rounded-xl border border-foreground/10 bg-foreground/5 text-foreground/70 transition-colors hover:bg-foreground/10 hover:text-foreground"
              onClick={handleShare}
              title="Compartir"
              type="button"
            >
              <Share2 aria-hidden="true" className="size-[18px]" />
            </button>
          </div>
          <a
            className="inline-flex items-center gap-1 text-xs font-bold text-primary transition-colors hover:text-foreground"
            href="#"
          >
            <span>Detalles del día</span>
            <ChevronRight aria-hidden="true" className="size-4" />
          </a>
        </div>
      </div>
    </article>
  );
};
