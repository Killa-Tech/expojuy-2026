import { SponsorLogo } from "./SponsorLogo";
import "./SponsorCarousel.css";

export interface Sponsor {
    id: string;
    name: string;
    logoUrl: string;
}

interface SponsorCarouselProps {
    sponsors: Sponsor[];
}

export function SponsorCarousel({ sponsors }: SponsorCarouselProps) {
    return (
        <div className="w-full overflow-hidden bg-black/90 backdrop-blur-md border-t border-brand-lilac/20 pt-3 pb-5">
            <div className="text-center mb-2.5">
                <span className="text-xs uppercase font-bold tracking-widest text-brand-cyan/90">
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