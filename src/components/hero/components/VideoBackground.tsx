import { useTheme } from "@/contexts/theme";
import { useVideoContext } from "../video-context";

interface VideoBackgroundProps {
    src: string;
    poster?: string;
}

export function VideoBackground({ src, poster }: VideoBackgroundProps) {
    const { theme } = useTheme();
    const {setIsVideoLoaded} = useVideoContext()
    
    const overlayClass = theme === "dark" ? "bg-black/40" : "bg-transparent";
    const gradientClass = theme === "dark"
        ? "from-black/50 via-black/25 to-black/60"
        : "from-white/20 via-black/55 to-white/20";

    return (
        <div className="absolute inset-0 w-full h-full overflow-hidden -z-10">
            <video
                autoPlay
                loop
                muted
                playsInline
                poster={poster}
                onCanPlayThrough={() => setIsVideoLoaded(true)}
                className="object-cover w-full h-full"
            >
                <source src={src} type="video/mp4" />
            </video>
            <div className={`absolute inset-0 ${overlayClass}`} />
            <div className={`absolute inset-0 bg-linear-to-b ${gradientClass} pointer-events-none`} />
        </div>
    );
};