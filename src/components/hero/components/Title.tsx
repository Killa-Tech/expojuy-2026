import { useVideoContext } from "../video-context";

interface Props {
  title: string;
  subtitle: string;
  ctaText: string;
  onCtaClick: () => void;
}

export const Title = ({ title, subtitle, ctaText, onCtaClick }: Props) => {
  const {isVideoLoaded} = useVideoContext()
  const titleParts = title.trim().split(" ");

  return isVideoLoaded && (
    <div className="flex-1 flex flex-col items-center justify-center text-center px-4 max-w-5xl mx-auto py-8 md:py-10">
      {/* Nivel 3: Badge contextual */}
      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-violet/40 border border-brand-lilac/30 backdrop-blur-md mb-6 shadow-sm">
        <span className="w-2 h-2 rounded-full bg-brand-cyan animate-pulse" />
        <span className="text-xs md:text-sm font-semibold tracking-wider text-brand-lilac uppercase">
          Jujuy • Argentina
        </span>
      </div>

      <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 leading-tight">
        {parseInt.length > 1 ? (
          <>
            <span className="text-white drop-shadow-md">
              {titleParts.join(" ")}{" "}
            </span>
            <span className="text-brand-cyan drop-shadow-[0_0_25px_rgba(0,194,203,0.5)]">
              {titleParts.pop()}
            </span>
          </>
        ) : (
          <>
            <span className="text-white drop-shadow-md">
              {titleParts.join(" ")}{" "}
            </span>
            <span className="text-brand-cyan drop-shadow-[0_0_25px_rgba(0,194,203,0.5)]">
              {title}
            </span>
          </>
        )}
      </h1>

      <p className="text-lg md:text-2xl text-white max-w-2xl mb-8 font-medium leading-relaxed drop-shadow-[0_2px_8px_rgba(0,0,0,0.85)]">
        {subtitle}
      </p>

      <button
        onClick={onCtaClick}
        className="px-8 py-4 bg-brand-violet hover:bg-brand-violet/90 active:bg-brand-lilac text-white font-semibold rounded-full shadow-lg shadow-brand-violet/40 hover:shadow-brand-violet/70 border border-brand-lilac/30 transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer flex items-center gap-2 group"
      >
        <span>{ctaText}</span>
        <svg
          className="w-5 h-5 text-brand-cyan transition-transform group-hover:translate-x-1"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2.5}
            d="M13 7l5 5m0 0l-5 5m5-5H6"
          />
        </svg>
      </button>
    </div>
  );
};
