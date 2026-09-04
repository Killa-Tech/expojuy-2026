import { useEffect, useState, useSyncExternalStore, type ReactNode } from "react"
import { ThemeContext, type ThemePreference } from "./context"
import { getInitialThemePreference, saveThemePreference } from "./storage"
import { applyTheme, getSystemTheme, subscribeToSystemTheme } from "./system"

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [preference, setPreference] = useState<ThemePreference>(getInitialThemePreference)
  const systemTheme = useSyncExternalStore(
    subscribeToSystemTheme,
    getSystemTheme,
    getSystemTheme,
  )
  const theme = preference === "system" ? systemTheme : preference

  useEffect(() => {
    applyTheme(theme)
    saveThemePreference(preference)
  }, [preference, theme])

  return <ThemeContext value={{ preference, theme, setPreference }}>{children}</ThemeContext>
}
