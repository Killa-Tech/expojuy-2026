import { AgendaCard } from "./card";
import agendaDays from "@/assets/agenda-days.json";
import agendaEvents from "@/assets/agenda-events.json";
import agendaStats from "@/assets/agenda-stats.json";
import { Section } from "@/components/section";

export const Agenda = () => {
  return (
    <Section id="agenda" label="Agenda" className="flex w-full flex-col items-center bg-background px-6 py-8 text-foreground md:px-12">
      <div className="mb-6 flex w-full flex-col gap-3 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-3xl font-bold uppercase tracking-[0.100em] text-primary">
            Agenda oficial
          </p>
          <h2 className="mt-2 text-2xl font-black text-foreground/70">
            Cronograma de actividades
          </h2>
        </div>
      </div>

      <div className="flex w-full flex-col gap-3 md:flex-row md:items-end md:justify-between">
        <div className="flex w-full flex-nowrap justify-start gap-3 overflow-x-auto pb-2">
          {agendaDays.map((day) => (
            <button
              key={day.name}
              type="button"
              className={[
                "flex items-center justify-between rounded-2xl border p-3.5 text-left transition-all",
                day.active
                  ? "border-primary/60 bg-primary text-primary-foreground shadow-lg shadow-primary/20"
                  : "border-foreground/10 bg-background hover:border-primary/40 hover:bg-primary/5",
              ].join(" ")}
            >
              <div>
                <span
                  className={[
                    "text-[11px] font-bold uppercase tracking-wider",
                    day.active
                      ? "text-primary-foreground/80"
                      : "text-foreground/70",
                  ].join(" ")}
                >
                  {day.name}
                </span>
                <div
                  className={[
                    "mt-2 text-2xl font-black",
                    day.active ? "text-primary-foreground" : "text-foreground",
                  ].join(" ")}
                >
                  {day.date}
                </div>
                <span
                  className={[
                    "mt-1 block text-xs",
                    day.active
                      ? "text-primary-foreground/80"
                      : "text-foreground/70",
                  ].join(" ")}
                >
                  {day.label}
                </span>
              </div>
              <span
                className={[
                  "text-2xl",
                  day.active ? "text-primary-foreground/80" : "text-primary",
                ].join(" ")}
              >
                •
              </span>
            </button>
          ))}
        </div>

        <div className="flex w-full gap-2 justify-end">
          <div className="rounded-2xl border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold text-foreground/80">
            <span>
              <h2 className="mt-2 text-2xl font-black text-foreground text-center">
                {agendaStats.days}
              </h2>
              Jornadas
            </span>
          </div>
          <div className="rounded-2xl border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold text-foreground/80">
            <span>
              <h2 className="mt-2 text-2xl font-black text-foreground text-center">
                {agendaStats.speakers}
              </h2>
              Disertantes
            </span>
          </div>
          <div className="rounded-2xl border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold text-foreground/80">
            <span>
              <h2 className="mt-2 text-2xl font-black text-foreground text-center">
                {agendaStats.shows}
              </h2>
              Shows Musicales
            </span>
          </div>
        </div>
      </div>

      <div className="mt-8 grid w-full gap-10 md:grid-cols-2 xl:grid-cols-3">
        {agendaEvents.map((event) => (
          <AgendaCard key={event.title} {...event} />
        ))}
      </div>
    </Section>
  );
};
