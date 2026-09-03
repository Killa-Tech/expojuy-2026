import { Agenda } from "./components/agenda"
import { Expositores } from "./components/expositores"
import { Header } from "./components/header"
import { Hero } from "./components/hero"

function App() {
  return (
    <>
      <Header />
      
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <Hero />
        <Agenda />
        <Expositores />
      </main>
    </>
  )
}

export default App
