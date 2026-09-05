import { useSections, type SectionId } from "@/contexts/sections"

export const useNavbar = () => {
  const { activeSection, sections, setActiveSection } = useSections()

  const selectSection = (sectionId: SectionId) => {
    setActiveSection(sectionId)
    document.getElementById(sectionId)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    })
    window.history.replaceState(null, "", `#${sectionId}`)
  }

  return {
    links: sections,
    activeSection,
    selectSection,
  }
}
