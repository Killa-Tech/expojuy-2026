import { Footer } from "./components/footer";
import { Header } from "./components/header"
import { Section } from "./components/section";
import { lazy, Suspense } from "react";

const About = lazy(() => import("./components/about").then(({ About }) => ({ default: About })));
const Agenda = lazy(() => import("./components/agenda").then(({ Agenda }) => ({ default: Agenda })));
const EventMap = lazy(() => import("./components/event-map").then(({ EventMap }) => ({ default: EventMap })));
const Expositores = lazy(() => import("./components/expositores").then(({ Expositores }) => ({ default: Expositores })));
const Hero = lazy(() => import("./components/hero").then(({ Hero }) => ({ default: Hero })));
const Location = lazy(() => import("./components/location").then(({ Location }) => ({ default: Location })));

const mockSponsors = [
  { id: '1', name: 'Sponsor 1', logoUrl: '/logos/sponsor-1.webp' },
  { id: '2', name: 'Sponsor 2', logoUrl: '/logos/sponsor-2.webp' },
  { id: '3', name: 'Sponsor 3', logoUrl: '/logos/sponsor-3.webp' },
  { id: '4', name: 'Sponsor 4', logoUrl: '/logos/sponsor-4.webp' },
];

function App() {
  const fallback = <div className="min-h-32 w-full bg-background" aria-hidden="true" />;

  return (
    <>
      <Header />

      <main className="w-full flex flex-col">
        <Section id="inicio" label="Inicio" minHeight="calc(100vh - 6rem)" className="relative isolate overflow-hidden">
          <Suspense fallback={fallback}>
            <Hero
              title="ExpoJuy 2026"
              subtitle="¡La ExpoJuy 2026 llego! Un evento imperdible para vivir lo mejor de nuestra región. ¡No te lo pierdas!"
              videoSrc="https://expojuy.camcomexjujuy.com.ar/build/assets/video-DvvGNoCh.mp4"
              ctaText="Empezar ahora"
              onCtaClick={() => console.log("CTA Clicked")}
              sponsors={mockSponsors}
            />
          </Suspense>
        </Section>
        <Section id="agenda" label="Agenda" minHeight="32rem">
          <Suspense fallback={fallback}><Agenda /></Suspense>
        </Section>
        <Section id="mapa-evento" label="Predio" minHeight="48rem">
          <Suspense fallback={fallback}><EventMap /></Suspense>
        </Section>
        <Section id="expositores" label="Expositores" minHeight="40rem">
          <Suspense fallback={fallback}><Expositores /></Suspense>
        </Section>
        <Section id="ubicacion" label="Ubicación" minHeight="32rem">
          <Suspense fallback={fallback}><Location /></Suspense>
        </Section>
        <Section id="about" label="Sobre nosotros" minHeight="32rem">
          <Suspense fallback={fallback}><About /></Suspense>
        </Section>
      </main>

      <Footer/>
    </>
  )
}

export default App
