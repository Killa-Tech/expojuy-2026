import { use } from "react"
import { VideoContext } from "./context"



export const useVideoContext = () => {
    const context = use(VideoContext)

    if (context === null)
        throw new Error("Not Found Video Context Provider")

    return context
}