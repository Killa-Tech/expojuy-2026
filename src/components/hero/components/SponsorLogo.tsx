import { useState, useEffect } from "react";

interface SponsorLogoProps {
    name: string;
    logoUrl: string;
}

export function SponsorLogo({ name, logoUrl }: SponsorLogoProps) {
    const [imgError, setImgError] = useState(false);

    // Reiniciar el estado de error si cambia la URL
    useEffect(() => {
        setImgError(false);
    }, [logoUrl]);

    return (
        <div className="flex items-center gap-3 min-w-[170px] px-3.5 py-2 mx-2 rounded-xl bg-primary/5 border border-primary/35 hover:border-primary/80 hover:bg-primary/10 backdrop-blur-sm transition-all duration-300 group cursor-pointer shadow-sm">
            {!imgError && logoUrl ? (
                <div className="bg-white px-3 py-1.5 rounded-lg flex items-center justify-center shadow-sm transition-all duration-300 border border-foreground/10">
                    <img
                        src={logoUrl}
                        alt={`${name} logo`}
                        onError={() => {
                            console.warn(`No se pudo cargar la imagen: ${logoUrl}`);
                            setImgError(true);
                        }}
                        className="h-7 md:h-8 w-auto max-w-[130px] object-contain transition-all"
                    />
                </div>
            ) : (
                <div className="w-8 h-8 rounded-full bg-primary/20 border border-primary/40 flex items-center justify-center text-xs font-bold text-accent shrink-0 transition-colors">
                    {name.charAt(0)}
                </div>
            )}
            <span className="text-sm font-medium text-foreground/85 tracking-wide group-hover:text-primary transition-colors whitespace-nowrap">
                {name}
            </span>
        </div>
    );
};