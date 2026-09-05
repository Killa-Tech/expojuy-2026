import { createContext } from "react"

export type SectionId = string
export type SectionDefinition = {
  id: SectionId
  label: string
}

type SectionsContextValue = {
  activeSection: SectionId | null
  sections: SectionDefinition[]
  registerSection: (id: SectionId, label: string, element: HTMLElement) => void
  unregisterSection: (id: SectionId, element: HTMLElement) => void
  setActiveSection: (id: SectionId) => void
}

export const SectionsContext = createContext<SectionsContextValue | null>(null)
