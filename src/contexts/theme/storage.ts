import type { ThemePreference } from "./context"

const STORAGE_KEY = "expojuy-theme"

export const getInitialThemePreference = (): ThemePreference => {
  const savedPreference = localStorage.getItem(STORAGE_KEY)
  return savedPreference === "light" || savedPreference === "dark" ? savedPreference : "system"
}

export const saveThemePreference = (preference: ThemePreference) => {
  localStorage.setItem(STORAGE_KEY, preference)
}