import { Section } from "@/components/section";
import { useState } from "react";

const purposes = [
  {
    icon: "trending_up",
    text: "Presentar las ventajas económicas y comerciales de la provincia.",
  },
  {
    icon: "precision_manufacturing",
    text: "Presentar y demostrar productos, maquinaria, nuevas tecnologías y servicios.",
  },
  {
    icon: "person_add",
    text: "Construir o ampliar la lista de clientes potenciales.",
  },
  { icon: "public", text: "Sumar nuevos mercados." },
  { icon: "language", text: "Internacionalización y expansión de marcas." },
  { icon: "payments", text: "Buscar inversiones." },
  {
    icon: "handshake",
    text: "Buscar cooperación y desarrollar alianzas estratégicas para proyectos públicos y privados.",
  },
  {
    icon: "travel_explore",
    text: "Difundir la cultura de la provincia y fomentar el turismo.",
  },
  { icon: "analytics", text: "Actualizarse sobre la situación del mercado." },
  {
    icon: "school",
    text: "Capacitarse e informarse sobre las tendencias en los negocios.",
  },
  { icon: "query_stats", text: "Conocer mejor a los competidores." },
  { icon: "lightbulb", text: "Descubrir nuevas oportunidades." },
  {
    icon: "groups",
    text: "Generar nuevos vínculos empresariales y profesionales.",
  },
  {
    icon: "rocket_launch",
    text: "Impulsar el crecimiento y la innovación regional.",
  },
];

export const About = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <Section
      id="about"
      label="Sobre nosotros"
      className="w-full bg-background px-4 py-8 text-foreground sm:px-6 md:px-12"
    >
      <div className="w-full rounded-[2rem] px-5 py-8 shadow-2xl shadow-primary/5 sm:px-8 md:px-10 md:py-10">
        <div className="w-full text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-accent">
            <span
              className="h-2 w-2 rounded-full bg-accent"
              aria-hidden="true"
            />
            Qué es ExpoJuy
          </span>
          <h2 className="mt-4 text-3xl font-black uppercase leading-tight text-foreground sm:text-4xl">
            Un espacio estratégico que impulsa el desarrollo y la integración
            regional de Jujuy.
          </h2>
          <p className="mt-4 text-sm leading-6 text-foreground/65 sm:text-base">
            La <strong className="text-foreground">EXPOJUY</strong> es un
            espacio de encuentro que reúne a empresas, productores,
            emprendedores, instituciones y visitantes para visibilizar el
            potencial de Jujuy y generar nuevas oportunidades. A través del
            intercambio y la vinculación entre distintos sectores, impulsa el
            desarrollo de negocios, la inversión, la innovación y la generación
            de alianzas estratégicas, fortaleciendo el crecimiento económico y
            la integración regional de la provincia.
          </p>
        </div>

        <div className="mt-9 flex items-center gap-3">
          <span
            className="h-2.5 w-2.5 shrink-0 rounded-full bg-secondary shadow-[0_0_12px_var(--theme-secondary)]"
            aria-hidden="true"
          />
          <h3 className="shrink-0 text-sm font-black uppercase text-foreground">
            La EXPOJUY es un espacio de encuentro para:
          </h3>
          <span className="h-px flex-1 bg-foreground/10" aria-hidden="true" />
        </div>

        <div className="mt-4 flex flex-wrap gap-2.5">
          {purposes.map((purpose, index) => (
            <article
              key={purpose.text}
              className={`${index >= 4 && !isExpanded ? "hidden min-[1070px]:flex" : "flex"} min-w-[min(100%,18rem)] flex-[1_1_30%] items-start gap-3 rounded-xl border border-foreground/10 bg-foreground/[0.05] px-4 py-3 text-sm text-foreground/85 transition-colors hover:border-primary/40 hover:bg-primary/10`}
            >
              <span
                className="material-symbols-outlined shrink-0 text-xl text-primary"
                aria-hidden="true"
              >
                {purpose.icon}
              </span>
              <span>{purpose.text}</span>
            </article>
          ))}
        </div>

        <button
          type="button"
          onClick={() => setIsExpanded((expanded) => !expanded)}
          className="mx-auto mt-5 flex items-center gap-2 rounded-xl border border-primary/40 bg-primary/10 px-4 py-2 text-sm font-bold text-primary transition-colors hover:bg-primary hover:text-primary-foreground min-[1070px]:hidden"
        >
          {isExpanded ? "Ver menos" : "Ver más"}
          <span
            className="material-symbols-outlined text-lg"
            aria-hidden="true"
          >
            {isExpanded ? "expand_less" : "expand_more"}
          </span>
        </button>
      </div>
    </Section>
  );
};
