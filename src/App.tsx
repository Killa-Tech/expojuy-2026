import { About } from "./components/about";
import { Agenda } from "./components/agenda"
import { Expositores } from "./components/expositores"
import { EventMap } from "./components/event-map"
import { Footer } from "./components/footer";
import { Header } from "./components/header"
import { Hero } from "./components/hero"
import { Location } from "./components/location"

const mockSponsors = [
  { id: '1', name: 'Sponsor 1', logoUrl: '/logos/sponsor-1.webp' },
  { id: '2', name: 'Sponsor 2', logoUrl: '/logos/sponsor-2.webp' },
  { id: '3', name: 'Sponsor 3', logoUrl: '/logos/sponsor-3.webp' },
  { id: '4', name: 'Sponsor 4', logoUrl: '/logos/sponsor-4.webp' },
];

function App() {
  return (
    <>
      <Header />

      <main className="w-full flex flex-col">
        <Hero
          title={"ExpoJuy 2026"}
          subtitle={"¡La ExpoJuy 2026 llego! Un evento imperdible para vivir lo mejor de nuestra región. ¡No te lo pierdas!"}
          videoSrc={"https://expojuy.camcomexjujuy.com.ar/build/assets/video-DvvGNoCh.mp4"}
          ctaText={"Empezar ahora"}
          onCtaClick={() => console.log('CTA Clicked')}
          sponsors={mockSponsors}
        />
        <Agenda />
        <EventMap />
        <Expositores />
        <Location/>
        <About/>
      </main>

      <Footer/>
    </>
  )
}

export default App
