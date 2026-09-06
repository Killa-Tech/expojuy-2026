import { createContext } from "react"

export interface ContextValue {
   isVideoLoaded: boolean
   setIsVideoLoaded: (loaded: boolean) => void
}

export const VideoContext = createContext<ContextValue|null>(null)