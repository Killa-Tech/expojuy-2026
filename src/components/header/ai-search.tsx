import { useEffect, useRef, useState } from "react"

const prompts = [
  { icon: "✦", label: "Conferencias de Minería y Litio", query: "¿Qué conferencias sobre Minería y Litio hay hoy?", color: "text-brand-cyan" },
  { icon: "♪", label: "Horario y escenario de Los Tekis", query: "¿A qué hora y en qué escenario tocan Los Tekis?", color: "text-brand-lilac" },
  { icon: "◇", label: "¿Cómo llegar al Auditorio Principal?", query: "Guiame al Auditorio Principal desde el acceso general", color: "text-brand-cyan" },
  { icon: "✓", label: "Crear itinerario inteligente de hoy", query: "Armame un itinerario personalizado de negocios para esta tarde", color: "text-brand-lilac" },
]

export const AISearch = () => {
  const [query, setQuery] = useState("")
  const [isPanelOpen, setIsPanelOpen] = useState(false)
  const searchRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  const submitSearch = () => {
    const trimmedQuery = query.trim()
    if (!trimmedQuery) {
      inputRef.current?.focus()
      setIsPanelOpen(true)
      return
    }

    window.alert(`🤖 ExpoIA Consultando: "${trimmedQuery}"\n\nEl asistente multipropósito analiza la agenda en tiempo real, mapas y expositores de Expojuy.`)
    setIsPanelOpen(false)
  }

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (!searchRef.current?.contains(event.target as Node)) setIsPanelOpen(false)
    }
    const handleShortcut = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault()
        inputRef.current?.focus()
        setIsPanelOpen(true)
      }
    }

    document.addEventListener("click", handleOutsideClick)
    document.addEventListener("keydown", handleShortcut)
    return () => {
      document.removeEventListener("click", handleOutsideClick)
      document.removeEventListener("keydown", handleShortcut)
    }
  }, [])

  return (
    <div ref={searchRef} className="relative mx-auto flex-1 group max-w-2xl">
      <div className="ai-border-glow shadow-[0_0_25px_rgba(0,194,203,0.15)] transition-shadow duration-300 focus-within:shadow-[0_0_35px_rgba(0,194,203,0.35)]">
        <div className="relative flex items-center rounded-full bg-[#19191E] px-4 py-2.5 transition-colors hover:bg-[#1E1E24] focus-within:bg-[#1C1C22] sm:px-5">
          <input ref={inputRef} id="ai-search-input" type="text" value={query} placeholder="Preguntale a la IA: '¿A qué hora tocan Los Tekis?' o '¿Dónde queda el stand de Litio?'" className="w-full truncate bg-transparent text-sm font-medium text-gray-100 placeholder:text-gray-400 focus:outline-none sm:text-base" autoComplete="off" onFocus={() => setIsPanelOpen(true)} onChange={(event) => setQuery(event.target.value)} onKeyDown={(event) => {
            if (event.key === "Enter") submitSearch()
            if (event.key === "Escape") setIsPanelOpen(false)
          }} />
        </div>
      </div>

      {isPanelOpen && (
        <div className="absolute left-0 right-0 top-full z-50 mt-3 rounded-2xl border border-white/10 bg-[#18181D]/95 p-4 shadow-2xl backdrop-blur-2xl">
          <div className="mb-3 flex items-center justify-between gap-3 border-b border-white/10 pb-3 text-xs">
            <span className="flex items-center gap-1.5 font-semibold text-gray-400"><span className="text-sm text-brand-cyan" aria-hidden="true">✦</span>Asistente Inteligente Multipropósito</span>
            <span className="rounded-full bg-brand-violet/20 px-2 py-0.5 text-[11px] font-semibold text-brand-lilac">Agenda, Expositores y Plano 2026</span>
          </div>
          <div className="mb-2 text-[11px] font-bold uppercase tracking-wider text-gray-400">Consultas frecuentes</div>
          <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
            {prompts.map((prompt) => (
              <button key={prompt.label} type="button" className="flex items-center gap-2 rounded-xl border border-transparent bg-white/5 p-2.5 text-left text-xs text-gray-200 transition-all hover:border-brand-violet/40 hover:bg-brand-violet/25 hover:text-white" onClick={() => {
                setQuery(prompt.query)
                setIsPanelOpen(false)
                inputRef.current?.focus()
              }}>
                <span className={`shrink-0 text-base ${prompt.color}`} aria-hidden="true">{prompt.icon}</span>
                <span className="truncate">{prompt.label}</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}