import { Check, Copy, Link2, MessageCircle, Send, Share2, X } from "lucide-react";
import { useEffect, useState } from "react";

type ShareLocationButtonProps = {
  locationUrl: string;
  locationName: string;
};

export const ShareLocationButton = ({
  locationUrl,
  locationName,
}: ShareLocationButtonProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [status, setStatus] = useState<"idle" | "copied" | "error">("idle");

  const copyLocation = async () => {
    if (!navigator.clipboard?.writeText) throw new Error("Clipboard API unavailable");

    await navigator.clipboard.writeText(locationUrl);
    setStatus("copied");
    window.setTimeout(() => setStatus("idle"), 2200);
  };

  useEffect(() => {
    if (!isOpen) return;

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };

    document.addEventListener("keydown", closeOnEscape);
    return () => document.removeEventListener("keydown", closeOnEscape);
  }, [isOpen]);

  const handleCopy = async () => {
    try {
      await copyLocation();
    } catch {
      setStatus("error");
    }
  };

  const shareText = `Ubicación de ${locationName}: ${locationUrl}`;
  const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(shareText)}`;
  const telegramUrl = `https://t.me/share/url?url=${encodeURIComponent(locationUrl)}&text=${encodeURIComponent(`Ubicación de ${locationName}`)}`;

  const buttonLabel =
    status === "copied"
      ? "Ubicación copiada"
      : status === "error"
        ? "No se pudo compartir"
        : "Compartir ubicación";

  return (
    <>
      <button
      type="button"
      onClick={() => {
        setStatus("idle");
        setIsOpen(true);
      }}
      className="mt-6 inline-flex items-center gap-2 rounded-md border border-brand-violet/30 bg-background px-4 py-2 text-sm font-semibold text-brand-violet shadow-sm transition-colors hover:bg-brand-violet hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-violet"
      aria-label={buttonLabel}
    >
      {status === "copied" ? (
        <Check aria-hidden="true" className="size-4" />
      ) : (
        <Share2 aria-hidden="true" className="size-4" />
      )}
      {buttonLabel}
      </button>

      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-end bg-black/45 p-0 sm:items-center sm:justify-center sm:p-4"
          role="presentation"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="w-full rounded-t-2xl border border-border bg-background p-5 pb-[max(1.25rem,env(safe-area-inset-bottom))] text-left shadow-2xl sm:max-w-md sm:rounded-2xl"
            role="dialog"
            aria-modal="true"
            aria-labelledby="share-location-title"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-cyan">
                  Compartir
                </p>
                <h2 id="share-location-title" className="mt-1 text-lg font-bold text-foreground">
                  Ubicación de {locationName}
                </h2>
              </div>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="grid size-9 shrink-0 place-items-center rounded-full text-muted-foreground transition-colors hover:bg-muted hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-violet"
                aria-label="Cerrar compartir"
              >
                <X aria-hidden="true" className="size-5" />
              </button>
            </div>

            <div className="mt-6 grid grid-cols-3 gap-3">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                onClick={() => setIsOpen(false)}
                className="flex flex-col items-center gap-2 rounded-lg p-2 text-center text-xs font-semibold text-foreground transition-colors hover:bg-muted focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-violet"
              >
                <span className="grid size-12 place-items-center rounded-full bg-[#25D366] text-white">
                  <MessageCircle aria-hidden="true" className="size-6" />
                </span>
                WhatsApp
              </a>
              <a
                href={telegramUrl}
                target="_blank"
                rel="noreferrer"
                onClick={() => setIsOpen(false)}
                className="flex flex-col items-center gap-2 rounded-lg p-2 text-center text-xs font-semibold text-foreground transition-colors hover:bg-muted focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-violet"
              >
                <span className="grid size-12 place-items-center rounded-full bg-[#229ED9] text-white">
                  <Send aria-hidden="true" className="size-6" />
                </span>
                Telegram
              </a>
              <button
                type="button"
                onClick={handleCopy}
                className="flex flex-col items-center gap-2 rounded-lg p-2 text-center text-xs font-semibold text-foreground transition-colors hover:bg-muted focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-violet"
              >
                <span className="grid size-12 place-items-center rounded-full bg-muted text-foreground">
                  {status === "copied" ? (
                    <Check aria-hidden="true" className="size-6 text-brand-violet" />
                  ) : (
                    <Copy aria-hidden="true" className="size-6" />
                  )}
                </span>
                {status === "copied" ? "Copiado" : "Copiar enlace"}
              </button>
            </div>

            {status === "error" && (
              <p className="mt-4 text-center text-sm text-destructive">
                No se pudo copiar el enlace.
              </p>
            )}

            <a
              href={locationUrl}
              target="_blank"
              rel="noreferrer"
              onClick={() => setIsOpen(false)}
              className="mt-6 flex items-center gap-3 border-t border-border pt-4 text-sm font-semibold text-brand-violet hover:text-brand-cyan"
            >
              <Link2 aria-hidden="true" className="size-4" />
              Abrir enlace de ubicación
            </a>
          </div>
        </div>
      )}
    </>
  );
};
