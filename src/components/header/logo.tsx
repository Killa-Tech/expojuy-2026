import logo from "@/assets/logo-header.png"

export const Logo = () => (
  <div className="flex shrink-0 items-center gap-3">
    <a href="#" className="group flex items-center gap-3 focus:outline-none" aria-label="Expojuy Inicio">
      <img
        src={logo}
        alt="Logo Expojuy - Conectando Países, Creando Oportunidades"
        className="h-12 w-auto object-contain drop-shadow-[0_2px_12px_rgba(121,26,199,0.35)] transition-transform duration-300 group-hover:scale-105 md:h-14"
      />
      <span className="hidden rounded-full border border-secondary/30 bg-primary/20 px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider text-secondary 2xl:inline-flex">
        Edición 2026
      </span>
    </a>
  </div>
)