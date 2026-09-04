import { SponsorLogo } from "./SponsorLogo";

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
        <div className="w-full overflow-hidden bg-black/40 backdrop-blur-sm border-t border-white/10 py-6">
            <div className="flex w-max animate-[marque_25s_linear_infinite]">
                {[...sponsors, ...sponsors].map((sponsor, index) => (
                    <SponsorLogo key={`${sponsor.id}-${index}`} name={sponsor.name} logoUrl={sponsor.logoUrl} />
                ))}

            </div>

        </div>
    );
};