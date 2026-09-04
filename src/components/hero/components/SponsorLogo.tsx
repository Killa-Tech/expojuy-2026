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
        <div className="flex items-center gap-3 min-w-[170px] px-3.5 py-2 mx-2 rounded-xl bg-white/5 border border-white/10 hover:border-brand-lilac/40 hover:bg-white/10 transition-all duration-300 group cursor-pointer shadow-sm">
            {!imgError && logoUrl ? (
                <div className="bg-white/95 group-hover:bg-white px-3 py-1.5 rounded-lg flex items-center justify-center shadow-sm transition-all duration-300">
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
                <div className="w-8 h-8 rounded-full bg-brand-violet/60 border border-brand-lilac/40 flex items-center justify-center text-xs font-bold text-brand-cyan shrink-0">
                    {name.charAt(0)}
                </div>
            )}
            <span className="text-sm font-medium text-muted tracking-wide group-hover:text-brand-lilac transition-colors whitespace-nowrap">
                {name}
            </span>
        </div>
    );
};