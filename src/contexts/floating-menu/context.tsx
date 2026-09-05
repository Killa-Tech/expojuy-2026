import { createContext } from "react"

export interface ContextValue {
    isOpen: boolean
    menu:string
    setMenu: (menu:string) => void
    closeMenu: () => void
}

export const FloatingMenuContext = createContext<ContextValue|null>(null)