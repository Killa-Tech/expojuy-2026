import { createContext } from "react"

export type SectionId = string
export type SectionDefinition = {
  id: SectionId
  label: string
}

export type SectionState = {
  hasEntered: boolean
  isVisible: boolean
}

type SectionsContextValue = {
  activeSection: SectionId | null
  sections: SectionDefinition[]
  registerSection: (id: SectionId, label: string, element: HTMLElement) => void
  unregisterSection: (id: SectionId, element: HTMLElement) => void
  setActiveSection: (id: SectionId) => void
  getSectionState: (id: SectionId) => SectionState
}

export const SectionsContext = createContext<SectionsContextValue | null>(null)
