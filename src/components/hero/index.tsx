import { SponsorCarousel, type Sponsor } from "./components/SponsorCarousel";
import { VideoBackground } from "./components/VideoBackground";
import { Section } from "@/components/section";
import { VideContextProvider } from "./video-context";
import { HeroHeader } from "./components/HeroHeader";

interface HeroProps {
  title: string;
  subtitle: string;
  videoSrc: string;
  ctaText: string;
  onCtaClick: () => void;
  sponsors: Sponsor[];
}

export const Hero = ({
  title,
  subtitle,
  videoSrc,
  ctaText,
  onCtaClick,
  sponsors,
}: HeroProps) => {
  return (
    <VideContextProvider>
      <Section
        id="inicio"
        label="Inicio"
        className="relative isolate w-full min-h-[calc(100vh-6rem)] flex flex-col justify-between text-white overflow-hidden"
      >
        {/* Contenedor principal con video cuya altura coincide exactamente con la barra de sponsors */}
        <div className="relative flex-1 flex flex-col items-center justify-center w-full">
          <VideoBackground src={videoSrc} />
          <HeroHeader {...{ctaText, onCtaClick, title, subtitle}} />
        </div>
        <SponsorCarousel sponsors={sponsors} />
      </Section>
    </VideContextProvider>
  );
};
