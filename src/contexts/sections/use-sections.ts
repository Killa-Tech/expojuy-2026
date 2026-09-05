import { use } from "react"
import { SectionsContext } from "./context"

export const useSections = () => {
  const context = use(SectionsContext)

  if (!context) {
    throw new Error("useSections must be used within a SectionsProvider")
  }

  return context
}
