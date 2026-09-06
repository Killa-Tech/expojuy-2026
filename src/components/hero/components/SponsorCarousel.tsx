import { SponsorLogo } from "./SponsorLogo";
import "./SponsorCarousel.css";
import { useVideoContext } from "../video-context";

export interface Sponsor {
    id: string;
    name: string;
    logoUrl: string;
}

interface SponsorCarouselProps {
    sponsors: Sponsor[];
}

export function SponsorCarousel({ sponsors }: SponsorCarouselProps) {
    const {isVideoLoaded} = useVideoContext()
    
    return isVideoLoaded && (
        <div className="w-full overflow-hidden bg-background/95 backdrop-blur-md border-t border-foreground/10 pt-3 pb-5 transition-colors duration-200">
            <div className="text-center mb-2.5">
                <span className="text-xs uppercase font-bold tracking-widest text-primary transition-colors">
                    Sponsors Oficiales
                </span>
            </div>
            <div className="flex w-max animate-marquee">
                {[...sponsors, ...sponsors].map((sponsor, index) => (
                    <SponsorLogo key={`${sponsor.id}-${sponsor.logoUrl}-${index}`} name={sponsor.name} logoUrl={sponsor.logoUrl} />
                ))}
            </div>
        </div>
    );
};