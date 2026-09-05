import { useState } from "react";

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
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#17171f] shadow-2xl transition-all duration-300 hover:border-purple-500/40 hover:shadow-purple-950/30">
      <div className="relative h-52 w-full overflow-hidden">
        <img
          alt={imageAlt}
          className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
          src={image}
        />
        <div className="absolute inset-0 bg-linear-to-t from-[#17171f] via-[#17171f]/50 to-transparent" />
        <div className="absolute inset-x-3.5 top-3.5 flex items-center justify-between">
          <div className="flex items-center gap-1.5 rounded-full border border-tertiary/20 bg-black/75 px-3 py-1 text-xs font-bold text-tertiary shadow-md backdrop-blur-md">
            <span className="material-symbols-outlined text-[16px] text-tertiary">
              schedule
            </span>
            <span>HOY • {time} hs</span>
          </div>
          <div className="rounded-full border border-purple-400/30 bg-brand-violet px-3 py-1 text-xs font-bold text-white shadow-md">
            {badge}
          </div>
        </div>
        <div className="absolute bottom-3 left-3.5 flex items-center gap-1.5 rounded-lg border border-white/10 bg-surface-container-highest/90 px-3 py-1 text-xs font-semibold text-white backdrop-blur-md">
          <span className="material-symbols-outlined text-[16px] text-primary">
            apartment
          </span>
          <span>{location}</span>
        </div>
      </div>

      <div className="flex flex-1 flex-col gap-5 p-5 md:p-6">
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[18px] text-primary">
              star
            </span>
            <span className="text-[11px] font-extrabold uppercase tracking-widest text-primary">
              {category}
            </span>
            <span className="ml-auto rounded bg-tertiary/10 px-2 py-0.5 text-[11px] font-semibold text-tertiary">
              {room}
            </span>
          </div>
          <h3 className="text-lg font-bold leading-snug text-white transition-colors group-hover:text-primary md:text-xl">
            {title}
          </h3>
          <p className="text-sm leading-relaxed text-[#aba3b5] line-clamp-2">
            {description}
          </p>
          <div className="flex items-center gap-3 pt-1">
            <img
              alt="Dra. Valeria Aramayo"
              className="h-11 w-11 shrink-0 rounded-full object-cover ring-2 ring-primary/40"
              src={speakerImage}
            />
            <div className="flex min-w-0 flex-col">
              <span className="truncate text-sm font-bold text-white">
                {speakerName}
              </span>
              <span className="truncate text-xs text-[#aba3b5]">
                {speakerRole}
              </span>
            </div>
          </div>
        </div>

        <div className="relative mt-auto flex flex-col gap-2 overflow-hidden rounded-xl border border-white/10 bg-linear-to-r from-[#211f2d] via-[#1d1b28] to-[#1a232c] p-4 shadow-inner">
          <div className="absolute bottom-0 left-0 top-0 w-1.5 bg-linear-to-b from-tertiary via-secondary to-primary-container" />
          <div className="flex items-center justify-between pl-2">
            <span className="flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-wider text-tertiary">
              <span className="material-symbols-outlined text-[16px] text-tertiary">
                celebration
              </span>
              SHOW CENTRAL DEL DÍA
            </span>
            <span className="rounded-full border border-white/10 bg-black/50 px-2.5 py-0.5 text-xs font-bold text-white">
              {showTime} hs
            </span>
          </div>
          <div className="flex items-center justify-between gap-3 pl-2">
            <div className="flex min-w-0 flex-col">
              <h4 className="text-base font-extrabold text-white">
                {showTitle}
              </h4>
              <p className="mt-0.5 flex items-center gap-1 text-xs text-[#d4bbff]">
                <span className="material-symbols-outlined text-[14px]">
                  music_note
                </span>
                <span>{showDescription}</span>
              </p>
            </div>
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-purple-400/30 bg-secondary-container/80 text-white shadow-md">
              <span className="material-symbols-outlined text-2xl text-[#d4bbff]">
                festival
              </span>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between border-t border-white/5 pt-2">
          <div className="flex items-center gap-2">
            <button
              className="flex items-center gap-2 rounded-xl bg-linear-to-r from-brand-violet to-[#9c3ce7] px-4 py-2 text-xs font-bold text-white shadow-md transition-all hover:brightness-110 active:scale-95"
              onClick={() => setIsScheduled((current) => !current)}
              type="button"
            >
              <span className="material-symbols-outlined text-[18px]">
                event_available
              </span>
              <span>{isScheduled ? "Agendado" : "Agendar"}</span>
            </button>
            <button
              aria-label="Compartir evento"
              className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/5 bg-surface-container-high text-on-surface-variant transition-colors hover:bg-surface-container-highest hover:text-white"
              onClick={handleShare}
              title="Compartir"
              type="button"
            >
              <span className="material-symbols-outlined text-[18px]">
                share
              </span>
            </button>
          </div>
          <a
            className="inline-flex items-center gap-1 text-xs font-bold text-primary transition-colors hover:text-white"
            href="#"
          >
            <span>Detalles del día</span>
            <span className="material-symbols-outlined text-[16px]">
              arrow_forward
            </span>
          </a>
        </div>
      </div>
    </article>
  );
};
