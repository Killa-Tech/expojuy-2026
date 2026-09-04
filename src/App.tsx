import { Agenda } from "./components/agenda"
import { Expositores } from "./components/expositores"
import { Header } from "./components/header"
import { Hero } from "./components/hero"

const mockSponsors = [
  { id: '1', name: 'Sponsor 1', logoUrl: '/logos/sponsor1.svg' },
  { id: '2', name: 'Sponsor 2', logoUrl: '/logos/sponsor2.svg' },
  { id: '3', name: 'Sponsor 3', logoUrl: '/logos/sponsor3.svg' },
  { id: '4', name: 'Sponsor 4', logoUrl: '/logos/sponsor4.svg' },
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
        <Expositores />
      </main>
    </>
  )
}

export default App
