import { SponsorCarousel, type Sponsor } from "./components/SponsorCarousel";
import { VideoBackground } from "./components/VideoBackground";

interface HeroProps{
  title:string;
  subtitle:string;
  videoSrc: string;
  ctaText: string;
  onCtaClick: () => void;
  sponsors: Sponsor[];
}


export const Hero = ({title,subtitle,videoSrc,ctaText,onCtaClick,sponsors}:HeroProps) => {
  return (
    <section className="relative isolate w-full min-h-[calc(100vh-4rem)] flex flex-col justify-between text-white overflow-hidden">
      <VideoBackground src={videoSrc}/>
      <div className="flex-1 flex flex-col items-center justify-center text-center px-4 max-w-5xl mx-auto py-12 md:py-16">
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 leading-tight drop-shadow-md">
          {title}
        </h1>
        <p className="text-lg md:text-2xl text-gray-200 max-w-2xl mb-8 font-light drop-shadow">
          {subtitle}
        </p>
        <button
          onClick={onCtaClick}
          className="px-8 py-4 bg-indigo-600 hover:bg-indigo-500 font-semibold rounded-full shadow-lg hover:shadow-indigo-500/50 transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer"
        >
          {ctaText}
        </button>
      </div>
      <SponsorCarousel sponsors={sponsors}/>
    </section>
  );
};   