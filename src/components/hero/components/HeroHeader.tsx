import { useVideoContext } from "../video-context";

interface Props {
  title: string;
  subtitle: string;
  ctaText: string;
  onCtaClick: () => void;
}

export const HeroHeader = ({ title, subtitle, ctaText, onCtaClick }: Props) => {
  const { isVideoLoaded } = useVideoContext();

  return (
    isVideoLoaded && (
      <div className="flex-1 flex flex-col items-center justify-center text-center px-4 max-w-5xl mx-auto py-8 md:py-10">
        {/* Nivel 3: Badge contextual */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-violet/40 border border-brand-lilac/30 backdrop-blur-md mb-6 shadow-sm">
          <span className="w-2 h-2 rounded-full bg-brand-cyan animate-pulse" />
          <span className="text-xs md:text-sm font-semibold tracking-wider text-brand-lilac uppercase">
            Jujuy • Argentina
          </span>
        </div>

        <Title title={title} />

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
    )
  );
};

const Title = ({ title }: { title: string }) => {
  const words = title.trim().split(/\s+/);
  const isSingleWord = words.length <= 1;

  const leadingWords = words.slice(0, -1).join(" ");
  const lastWord = words.at(-1);

  return (
    <h1 className="motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-bottom-4 motion-safe:duration-1000 motion-safe:ease-out text-5xl md:text-7xl font-extrabold tracking-tight mb-6 leading-tight">
      {isSingleWord ? (
        <span className="bg-gradient-to-r from-white via-white to-brand-cyan bg-clip-text text-transparent drop-shadow-md">
          {title}
        </span>
      ) : (
        <>
          <span className="text-white drop-shadow-md">{leadingWords} </span>
          <span className="text-brand-cyan drop-shadow-[0_0_25px_rgba(0,194,203,0.5)]">
            {lastWord}
          </span>
        </>
      )}
    </h1>
  );
};
