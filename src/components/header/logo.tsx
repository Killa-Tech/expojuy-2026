import logoClaro from "@/assets/logo-header.png";
import logoOscuro from "@/assets/logo-header-claro.png";
import { useTheme } from "@/contexts/theme";

export const Logo = () => {
  const { theme } = useTheme();

  return (
    <div className="flex shrink-0 items-center gap-3">
      <a
        href="#inicio"
        className="group flex items-center gap-3 focus:outline-none"
        aria-label="Expojuy Inicio"
      >
        <img
          src={theme === "dark" ? logoOscuro : logoClaro}
          alt="Logo Expojuy - Conectando Países, Creando Oportunidades"
          className="h-12 w-auto object-contain drop-shadow-[0_2px_12px_rgba(121,26,199,0.35)] md:h-14"
        />
      </a>
    </div>
  );
};
