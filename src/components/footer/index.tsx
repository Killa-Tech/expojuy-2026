import logo from "@/assets/logo-header.png";

const eventLinks = [
  "Sobre Expojuy",
  "Disertantes",
  "Agenda Oficial",
  "Rondas de Negocio",
];

const legalLinks = [
  "Acreditaciones",
  "Reglamento de Expositores",
  "Protocolo y Accesibilidad",
  "Términos y Condiciones",
  "Políticas de Privacidad",
];

const socialLinks = [
  { label: "YouTube", icon: "youtube" },
  { label: "Facebook", icon: "facebook" },
  { label: "Instagram", icon: "instagram" },
  { label: "LinkedIn", icon: "linkedin" },
  { label: "X", icon: "x" },
  { label: "TikTok", icon: "tiktok" },
];

export const Footer = () => {
  return (
    <footer className="border-t border-foreground/10 bg-background text-foreground">
      <div className="mx-auto max-w-[1720px] px-6 pb-8 pt-14 lg:px-10 lg:pt-16">
        <div className="flex flex-wrap gap-x-10 gap-y-12">
          <section className="min-w-[min(100%,20rem)] flex-[1.5_1_20rem]">
            <a
              href="#"
              aria-label="Expojuy Inicio"
              className="inline-flex rounded-2xl bg-white p-3 shadow-sm transition-transform hover:scale-[1.02]"
            >
              <img
                src={logo}
                alt="Logo Expojuy"
                className="h-9 w-auto object-contain"
              />
            </a>
            <h2 className="mt-6 text-lg font-bold text-foreground">
              16° Edición • Multisectorial y Bianual
            </h2>
            <p className="mt-2 max-w-md text-sm leading-6 text-foreground/65">
              El mayor encuentro empresarial, industrial, comercial y
              tecnológico del Noroeste Argentino y el Corredor Bioceánico.
            </p>
            <p className="mt-6 text-xs font-bold uppercase tracking-wider text-foreground/55">
              Canales oficiales • @expojuy
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {socialLinks.map(({ label, icon }) => (
                <a
                  key={label}
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-foreground/10 bg-foreground/10 text-sm font-bold text-foreground/70 transition-colors hover:border-primary/40 hover:bg-primary/15 hover:text-primary"
                >
                  <SocialIcon name={icon} />
                </a>
              ))}
            </div>
          </section>

          <FooterLinkSection title="Evento / Edición 16°" links={eventLinks} />

          <section className="min-w-[min(100%,16rem)] flex-[1_1_16rem]">
            <h2 className="border-b border-foreground/10 pb-3 text-base font-bold uppercase text-foreground">
              Información & sede
            </h2>
            <ul className="mt-4 space-y-4 text-sm text-foreground/70">
              <li className="flex gap-3">
                <span
                  className="material-symbols-outlined text-xl text-primary"
                  aria-hidden="true"
                >
                  location_on
                </span>
                <span>Predio Ciudad Cultural, San Salvador de Jujuy</span>
              </li>
              <li className="flex gap-3">
                <span
                  className="material-symbols-outlined text-xl text-primary"
                  aria-hidden="true"
                >
                  event
                </span>
                <span>Fecha: 08 al 12 de octubre 2026</span>
              </li>
              <li className="flex gap-3">
                <span
                  className="material-symbols-outlined text-xl text-primary"
                  aria-hidden="true"
                >
                  history
                </span>
                <span>Frecuencia: Bianual</span>
              </li>
              <li className="flex gap-3">
                <span
                  className="material-symbols-outlined text-xl text-primary"
                  aria-hidden="true"
                >
                  language
                </span>
                <a
                  href="https://www.expojuy.com.ar"
                  className="underline decoration-foreground/30 underline-offset-2 hover:text-primary"
                >
                  www.expojuy.com.ar
                </a>
              </li>
              <li className="flex gap-3">
                <span
                  className="material-symbols-outlined text-xl text-primary"
                  aria-hidden="true"
                >
                  schedule
                </span>
                <span>Acreditaciones: 10:00 a 22:00 hs</span>
              </li>
            </ul>
          </section>

          <FooterLinkSection title="Legal & servicios" links={legalLinks} />
        </div>

        <a
          href="#"
          className="mx-auto mt-10 flex w-fit items-center gap-2 text-sm font-semibold text-foreground/60 transition-colors hover:text-primary"
        >
          Volver al principio
          <span className="material-symbols-outlined" aria-hidden="true">
            arrow_upward
          </span>
        </a>

        <div className="mt-5 border-t border-foreground/10 pt-8 text-sm text-foreground/60">
          <p>
            Expojuy promueve el desarrollo productivo, la integración regional
            del Corredor Bioceánico y la sustentabilidad.
          </p>
          <div className="mt-5 flex flex-col justify-between gap-4 lg:flex-row lg:items-center">
            <div className="flex flex-wrap gap-x-7 gap-y-2">
              <a href="#" className="hover:text-primary">
                Privacidad
              </a>
              <span aria-hidden="true">•</span>
              <a href="#" className="hover:text-primary">
                Términos del sitio
              </a>
              <span aria-hidden="true">•</span>
              <a href="#" className="hover:text-primary">
                Preferencias de cookies
              </a>
              <span aria-hidden="true">•</span>
              <span>
                © 2026 Expojuy. Ciudad Cultural, San Salvador de Jujuy.
              </span>
            </div>
            <p>
              Comunidad Oficial:{" "}
              <a href="#" className="font-bold text-primary hover:text-accent">
                @expojuy
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

const SocialIcon = ({ name }: { name: string }) => {
  const commonProps = {
    className: "h-5 w-5 fill-current",
    viewBox: "0 0 24 24",
    "aria-hidden": true,
  } as const;

  switch (name) {
    case "youtube":
      return (
        <svg {...commonProps}>
          <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2 31.5 31.5 0 0 0 0 12a31.5 31.5 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1A31.5 31.5 0 0 0 24 12a31.5 31.5 0 0 0-.5-5.8ZM9.6 15.6V8.4l6.2 3.6-6.2 3.6Z" />
        </svg>
      );
    case "facebook":
      return (
        <svg {...commonProps}>
          <path d="M13.5 21v-8h2.7l.4-3h-3.1V8.1c0-.9.3-1.6 1.7-1.6h1.8V3.8c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3V10H7.5v3h2.8v8h3.2Z" />
        </svg>
      );
    case "instagram":
      return (
        <svg {...commonProps}>
          <path
            fillRule="evenodd"
            d="M7.2 2h9.6A5.2 5.2 0 0 1 22 7.2v9.6a5.2 5.2 0 0 1-5.2 5.2H7.2A5.2 5.2 0 0 1 2 16.8V7.2A5.2 5.2 0 0 1 7.2 2Zm0 2A3.2 3.2 0 0 0 4 7.2v9.6A3.2 3.2 0 0 0 7.2 20h9.6a3.2 3.2 0 0 0 3.2-3.2V7.2A3.2 3.2 0 0 0 16.8 4H7.2Zm9.1 1.5a1.2 1.2 0 1 1 0 2.4 1.2 1.2 0 0 1 0-2.4ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z"
            clipRule="evenodd"
          />
        </svg>
      );
    case "linkedin":
      return (
        <svg {...commonProps}>
          <path d="M5.2 3.5A1.8 1.8 0 1 1 1.6 3.5a1.8 1.8 0 0 1 3.6 0ZM1.9 7h3.4v11H1.9V7Zm5.5 0h3.3v1.5h.1c.5-.9 1.7-1.9 3.5-1.9 3.5 0 4.1 2.3 4.1 5.3V18H15v-5.4c0-1.3 0-3-1.9-3s-2.2 1.5-2.2 2.9V18H7.4V7Z" />
        </svg>
      );
    case "x":
      return (
        <svg {...commonProps}>
          <path d="M18.2 2h3.7l-8.1 9.3L23.3 22h-7.5l-5.9-7.7L3.2 22H-.5l8.7-10L-.2 2h7.7l5.3 7L18.2 2Zm-1.3 18h2.1L6.9 4H4.6l12.3 16Z" />
        </svg>
      );
    case "tiktok":
      return (
        <svg {...commonProps}>
          <path d="M16.7 2h3.1c.2 1.8 1.2 3.3 2.8 4.2v3.1a8.2 8.2 0 0 1-2.8-.8v6.2a7.3 7.3 0 1 1-6.3-7.2v3.2a4.1 4.1 0 1 0 2.1 4v-12.7h1.1Z" />
        </svg>
      );
    default:
      return null;
  }
};

const FooterLinkSection = ({
  title,
  links,
}: {
  title: string;
  links: string[];
}) => (
  <section className="min-w-[min(100%,16rem)] flex-[1_1_16rem]">
    <h2 className="border-b border-foreground/10 pb-3 text-base font-bold uppercase text-foreground">
      {title}
    </h2>
    <ul className="mt-4 space-y-3 text-sm text-foreground/70">
      {links.map((link) => (
        <li key={link}>
          <a
            href="#"
            className={
              link === "Agenda Oficial"
                ? "font-semibold text-foreground hover:text-primary"
                : "hover:text-primary"
            }
          >
            {link}
          </a>
        </li>
      ))}
    </ul>
  </section>
);
