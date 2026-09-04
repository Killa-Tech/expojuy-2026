import { useTheme } from "@/contexts/theme"

export const ThemeToggle = () => {
  const { theme, setPreference } = useTheme()

  const nextTheme = theme === "dark" ? "light" : "dark"
  const isDark = theme === "dark"

  return (
    <button
      type="button"
      onClick={() => setPreference(nextTheme)}
      aria-label={`Cambiar a tema ${nextTheme === "dark" ? "oscuro" : "claro"}`}
      title={`Cambiar a tema ${nextTheme === "dark" ? "oscuro" : "claro"}`}
      className="flex h-10 w-10 items-center justify-center rounded-xl text-2xl text-accent transition-colors hover:bg-foreground/10 hover:text-primary"
    >
      <span aria-hidden="true">{isDark ? "☀︎" : "☾︎"}</span>
    </button>
  )
}
