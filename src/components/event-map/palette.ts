import type { Theme } from "@/contexts/theme";
import type { EventMapPalette } from "./event-map.types";

const readThemeColor = (name: string, fallback: string, theme: Theme) => {
  if (typeof document === "undefined") return fallback;
  if (!document.documentElement.classList.contains(theme)) return fallback;

  return getComputedStyle(document.documentElement).getPropertyValue(name).trim() || fallback;
};

export const getEventMapPalette = (theme: Theme): EventMapPalette => {
  const background = readThemeColor("--theme-bg", theme === "dark" ? "#121212" : "#ffffff", theme);
  const foreground = readThemeColor("--theme-text", theme === "dark" ? "#f3f4f6" : "#4a4a4a", theme);
  const primary = readThemeColor("--theme-primary", theme === "dark" ? "#a980f2" : "#791ac7", theme);
  const secondary = readThemeColor("--theme-secondary", theme === "dark" ? "#791ac7" : "#a980f2", theme);
  const accent = readThemeColor("--theme-accent", "#00c2cb", theme);
  const muted = readThemeColor("--theme-muted", theme === "dark" ? "#4a4a4a" : "#bdbdbd", theme);

  const lightLabel = "#121212";
  const darkLabel = "#f3f4f6";
  const sectorColors: EventMapPalette["sectorColors"] = {
    institutional: {
      color: primary,
      accent: secondary,
      label: theme === "dark" ? lightLabel : "#ffffff",
      labelShadow: theme === "dark" ? "rgba(255,255,255,0.22)" : "rgba(0,0,0,0.8)",
    },
    industrial: {
      color: foreground,
      accent,
      label: theme === "dark" ? lightLabel : "#ffffff",
      labelShadow: theme === "dark" ? "rgba(255,255,255,0.22)" : "rgba(0,0,0,0.8)",
    },
    commerce: {
      color: accent,
      accent: secondary,
      label: theme === "dark" ? lightLabel : "#121212",
      labelShadow: theme === "dark" ? "rgba(255,255,255,0.22)" : "rgba(255,255,255,0.72)",
    },
    exterior: {
      color: foreground,
      accent,
      label: theme === "dark" ? lightLabel : "#ffffff",
      labelShadow: theme === "dark" ? "rgba(255,255,255,0.22)" : "rgba(0,0,0,0.8)",
    },
    auditorium: {
      color: primary,
      accent,
      label: theme === "dark" ? lightLabel : "#ffffff",
      labelShadow: theme === "dark" ? "rgba(255,255,255,0.22)" : "rgba(0,0,0,0.8)",
    },
    gastronomy: {
      color: secondary,
      accent,
      label: theme === "dark" ? darkLabel : lightLabel,
      labelShadow: theme === "dark" ? "rgba(0,0,0,0.8)" : "rgba(255,255,255,0.72)",
    },
  };

  return {
    background,
    foreground,
    primary,
    secondary,
    accent,
    muted,
    floor: theme === "dark" ? "#0d0d0f" : "#edf3f4",
    surface: theme === "dark" ? "#18131f" : "#f8fbfb",
    gridPrimary: theme === "dark" ? muted : "#b8c7cb",
    gridSecondary: theme === "dark" ? "#27212f" : "#dce6e8",
    sectorColors,
  };
};
