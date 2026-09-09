import { useCallback, useEffect, useRef, useState } from "react"
import {
  SectionsContext,
  type SectionDefinition,
  type SectionId,
  type SectionState,
} from "./context"

export const SectionsProvider = ({ children }: { children: React.ReactNode }) => {
  const [activeSection, setActiveSection] = useState<SectionId | null>(null)
  const [registeredSections, setRegisteredSections] = useState<SectionDefinition[]>([])
  const sections = useRef(new Map<SectionId, { definition: SectionDefinition; element: HTMLElement }>())
  const observer = useRef<IntersectionObserver | null>(null)
  const visibleSections = useRef(new Map<SectionId, number>())
  const [sectionStates, setSectionStates] = useState(() => new Map<SectionId, SectionState>())
  const sectionStatesRef = useRef(sectionStates)

  useEffect(() => {
    const visibleEntries = visibleSections.current

    observer.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const sectionId = entry.target.id
          const previous = sectionStatesRef.current.get(sectionId) ?? {
            hasEntered: false,
            isVisible: false,
          }
          const isVisible =
            entry.boundingClientRect.bottom > 0 &&
            entry.boundingClientRect.top < window.innerHeight
          const next = {
            hasEntered: previous.hasEntered || entry.isIntersecting,
            isVisible,
          }

          if (isVisible) {
            visibleEntries.set(sectionId, entry.intersectionRatio)
          } else {
            visibleEntries.delete(sectionId)
          }

          if (
            previous.hasEntered !== next.hasEntered ||
            previous.isVisible !== next.isVisible
          ) {
            sectionStatesRef.current.set(sectionId, next)
            setSectionStates((current) => {
              const updated = new Map(current)
              updated.set(sectionId, next)
              return updated
            })
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
      sectionStatesRef.current.clear()
      setSectionStates(new Map())
    }
  }, [])

  const registerSection = useCallback((id: SectionId, label: string, element: HTMLElement) => {
    sections.current.set(id, { definition: { id, label }, element })
    observer.current?.observe(element)
    setSectionStates((current) => {
      if (current.has(id)) return current
      const updated = new Map(current)
      updated.set(id, { hasEntered: false, isVisible: false })
      sectionStatesRef.current = updated
      return updated
    })
    setRegisteredSections([...sections.current.values()].map(({ definition }) => definition))
  }, [])

  const unregisterSection = useCallback((id: SectionId, element: HTMLElement) => {
    if (sections.current.get(id)?.element === element) {
      observer.current?.unobserve(element)
      visibleSections.current.delete(id)
      setSectionStates((current) => {
        const updated = new Map(current)
        updated.delete(id)
        sectionStatesRef.current = updated
        return updated
      })
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
        getSectionState: (id) =>
          sectionStates.get(id) ?? { hasEntered: false, isVisible: false },
      }}
    >
      {children}
    </SectionsContext>
  )
}
