import { useState } from "react";

const eventTitle = "Inauguración y Show de Los Tekis - Expojuy 2026";

export const AgendaCard = () => {
  const [isScheduled, setIsScheduled] = useState(false);

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
          alt="Conferencia Minería y Transición Energética"
          className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuBVVquQWPSH_2Kl6P9HacNWhduxOmEK5yi-xUvHR23bpWzNeGWsiBb3iNKHZUa6f5h9XX4oHawD6b33Y4C_XsqrLRhuRKxeuY8nJ_9G1zYO6IGJZaYMO4t3YKEwE4RnOzq-v79g74RWZPMZbqRoYFUMPtmu55phC1Viyh0FROpZhSdSRL-ZxG2oRT3z6XOpK_9TNCyKTn2kM27iIFdKx8Qq_Eeh13Vxd2AYLCT_ApODWWKimD73vHh6rw"
        />
        <div className="absolute inset-0 bg-linear-to-t from-[#17171f] via-[#17171f]/50 to-transparent" />
        <div className="absolute inset-x-3.5 top-3.5 flex items-center justify-between">
          <div className="flex items-center gap-1.5 rounded-full border border-tertiary/20 bg-black/75 px-3 py-1 text-xs font-bold text-tertiary shadow-md backdrop-blur-md">
            <span className="material-symbols-outlined text-[16px] text-tertiary">
              schedule
            </span>
            <span>HOY • 18:30 hs</span>
          </div>
          <div className="rounded-full border border-purple-400/30 bg-brand-violet px-3 py-1 text-xs font-bold text-white shadow-md">
            Inauguración Oficial
          </div>
        </div>
        <div className="absolute bottom-3 left-3.5 flex items-center gap-1.5 rounded-lg border border-white/10 bg-surface-container-highest/90 px-3 py-1 text-xs font-semibold text-white backdrop-blur-md">
          <span className="material-symbols-outlined text-[16px] text-primary">
            apartment
          </span>
          <span>Auditorio Mayor "Éxodo Jujeño"</span>
        </div>
      </div>

      <div className="flex flex-1 flex-col gap-5 p-5 md:p-6">
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[18px] text-primary">
              star
            </span>
            <span className="text-[11px] font-extrabold uppercase tracking-widest text-primary">
              EVENTO DEL DÍA • PRIMARIO
            </span>
            <span className="ml-auto rounded bg-tertiary/10 px-2 py-0.5 text-[11px] font-semibold text-tertiary">
              Sala Plenaria
            </span>
          </div>
          <h3 className="text-lg font-bold leading-snug text-white transition-colors group-hover:text-primary md:text-xl">
            Conferencia Magistral: El Eje Minero y la Transición Energética
            Regional
          </h3>
          <p className="text-sm leading-relaxed text-[#aba3b5] line-clamp-2">
            Desafíos de la industrialización del litio, sostenibilidad hídrica
            de la Puna y alianzas estratégicas del Norte Grande con el Cono Sur.
          </p>
          <div className="flex items-center gap-3 pt-1">
            <img
              alt="Dra. Valeria Aramayo"
              className="h-11 w-11 shrink-0 rounded-full object-cover ring-2 ring-primary/40"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCUrHAUStRLzxhK3bdZYyWEvvtPGRLyQcLwZZtBV9YsvoqeIRvoPd2kZXyHtzGrbJsTq2WvO1uIs8wkBRL39kH6_SXQQaz2BxyrXip_70VMD46Dza3P8TGhqkljZvZJIyNDho2nH-Iq4ycvdpsh1tO1QU_k8UI1KoKCc-JFoxXGCVQwZNvGCXuf4QhLXyLhLIha-TykqZrUhtDvflMjARQtlsBxpX9uAr9CV6YaxNA9MfYogKk2EHI6ew"
            />
            <div className="flex min-w-0 flex-col">
              <span className="truncate text-sm font-bold text-white">
                Dra. Valeria Aramayo
              </span>
              <span className="truncate text-xs text-[#aba3b5]">
                Cámara Minera de Jujuy &amp; Directora del Instituto del Litio
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
              21:30 hs
            </span>
          </div>
          <div className="flex items-center justify-between gap-3 pl-2">
            <div className="flex min-w-0 flex-col">
              <h4 className="text-base font-extrabold text-white">
                Los Tekis en Vivo
              </h4>
              <p className="mt-0.5 flex items-center gap-1 text-xs text-[#d4bbff]">
                <span className="material-symbols-outlined text-[14px]">
                  music_note
                </span>
                <span>
                  Carnaval de Primavera &amp; Fusión Andina • Escenario Central
                  al Aire Libre
                </span>
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
              className="flex items-center gap-2 rounded-xl bg-linear-to-r from-[#791ac7] to-[#9c3ce7] px-4 py-2 text-xs font-bold text-white shadow-md transition-all hover:brightness-110 active:scale-95"
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
