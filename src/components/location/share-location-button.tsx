import { Check, Share2 } from "lucide-react";
import { useState } from "react";

type ShareLocationButtonProps = {
  locationUrl: string;
  locationName: string;
};

export const ShareLocationButton = ({
  locationUrl,
  locationName,
}: ShareLocationButtonProps) => {
  const [status, setStatus] = useState<"idle" | "copied" | "error">("idle");

  const copyLocation = async () => {
    if (!navigator.clipboard?.writeText) throw new Error("Clipboard API unavailable");

    await navigator.clipboard.writeText(locationUrl);
    setStatus("copied");
    window.setTimeout(() => setStatus("idle"), 2200);
  };

  const handleShare = async () => {
    setStatus("idle");

    const shareData = {
      title: `Ubicación de ${locationName}`,
      url: locationUrl,
    };
    const canUseNativeShare =
      typeof navigator.share === "function" &&
      (!navigator.canShare || navigator.canShare(shareData));

    if (canUseNativeShare) {
      try {
        await navigator.share(shareData);
      } catch (error) {
        if (error instanceof DOMException && error.name === "AbortError") return;
        try {
          await copyLocation();
        } catch {
          setStatus("error");
        }
      }
      return;
    }

    try {
      await copyLocation();
    } catch {
      setStatus("error");
    }
  };

  const buttonLabel =
    status === "copied"
      ? "Ubicación copiada"
      : status === "error"
        ? "No se pudo compartir"
        : "Compartir ubicación";

  return (
    <button
      type="button"
      onClick={handleShare}
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
  );
};
