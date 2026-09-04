interface SponsorLogoProps {
    name: string;
    logoUrl:string;
}

export function SponsorLogo({name,logoUrl}:SponsorLogoProps) {
    return(
        <div className="flex items-center justify-center min-w[160px] px-6 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
            <img src={logoUrl} alt={`${name} logo`} className="h-10 object-contain"/>
        </div>
    );
};