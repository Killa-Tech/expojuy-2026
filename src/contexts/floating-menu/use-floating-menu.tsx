import { use } from "react"
import { FloatingMenuContext } from "./context"

export const useFloatingMenu = () => {
    const context = use(FloatingMenuContext)
    
    if (!context)
        throw new Error("useFloatingMenu must be used within a FloatingMenuProvider")
    
    
    return context
}