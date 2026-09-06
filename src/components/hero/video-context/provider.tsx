import { useState, type ReactNode } from "react"
import { VideoContext } from "./context"


export const VideContextProvider = ({children}:{children: ReactNode}) => {
    const [isVideoLoaded, setIsVideoLoaded] = useState(false)

    return <VideoContext value={{isVideoLoaded, setIsVideoLoaded}}> {children} </VideoContext>
}