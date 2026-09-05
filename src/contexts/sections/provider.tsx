import { useCallback, useEffect, useRef, useState } from "react"
import { SectionsContext, type SectionDefinition, type SectionId } from "./context"

export const SectionsProvider = ({ children }: { children: React.ReactNode }) => {
  const [activeSection, setActiveSection] = useState<SectionId | null>(null)
  const [registeredSections, setRegisteredSections] = useState<SectionDefinition[]>([])
  const sections = useRef(new Map<SectionId, { definition: SectionDefinition; element: HTMLElement }>())
  const observer = useRef<IntersectionObserver | null>(null)
  const visibleSections = useRef(new Map<SectionId, number>())

  useEffect(() => {
    const visibleEntries = visibleSections.current

    observer.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const sectionId = entry.target.id

          if (entry.isIntersecting) {
            visibleEntries.set(sectionId, entry.intersectionRatio)
          } else {
            visibleEntries.delete(sectionId)
          }
        })

        const mostVisibleSection = [...visibleEntries.entries()]
          .sort(([, ratioA], [, ratioB]) => ratioB - ratioA)[0]?.[0]

        if (mostVisibleSection) {
          setActiveSection(mostVisibleSection)
        }
      },
      {
        root: null,
        rootMargin: "-96px 0px -45% 0px",
        threshold: [0, 0.25, 0.5, 0.75, 1],
      },
    )

    sections.current.forEach(({ element }) => observer.current?.observe(element))

    return () => {
      observer.current?.disconnect()
      observer.current = null
      visibleEntries.clear()
    }
  }, [])

  const registerSection = useCallback((id: SectionId, label: string, element: HTMLElement) => {
    sections.current.set(id, { definition: { id, label }, element })
    observer.current?.observe(element)
    setRegisteredSections([...sections.current.values()].map(({ definition }) => definition))
  }, [])

  const unregisterSection = useCallback((id: SectionId, element: HTMLElement) => {
    if (sections.current.get(id)?.element === element) {
      observer.current?.unobserve(element)
      visibleSections.current.delete(id)
      sections.current.delete(id)
      setRegisteredSections([...sections.current.values()].map(({ definition }) => definition))
    }
  }, [])

  return (
    <SectionsContext
      value={{
        activeSection,
        sections: registeredSections,
        registerSection,
        unregisterSection,
        setActiveSection,
      }}
    >
      {children}
    </SectionsContext>
  )
}
