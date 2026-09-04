import type { Theme } from "./context"

const SYSTEM_THEME_QUERY = "(prefers-color-scheme: dark)"

export const getSystemTheme = (): Theme => (
  window.matchMedia(SYSTEM_THEME_QUERY).matches ? "dark" : "light"
)

export const subscribeToSystemTheme = (onThemeChange: (theme: Theme) => void) => {
  const mediaQuery = window.matchMedia(SYSTEM_THEME_QUERY)
  const handleThemeChange = () => onThemeChange(mediaQuery.matches ? "dark" : "light")

  mediaQuery.addEventListener("change", handleThemeChange)
  return () => mediaQuery.removeEventListener("change", handleThemeChange)
}

export const applyTheme = (theme: Theme) => {
  document.documentElement.classList.toggle("dark", theme === "dark")
  document.documentElement.classList.toggle("light", theme === "light")
  document.documentElement.style.colorScheme = theme
}