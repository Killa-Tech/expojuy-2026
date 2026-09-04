import { createContext } from "react"

export type Theme = "light" | "dark"
export type ThemePreference = Theme | "system"

type ThemeContextValue = {
  preference: ThemePreference
  theme: Theme
  setPreference: (preference: ThemePreference) => void
}

export const ThemeContext = createContext<ThemeContextValue | null>(null)