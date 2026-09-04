interface VideoBackgroundProps{
    src: string;
    poster?:string;
}

export function VideoBackground({src,poster}: VideoBackgroundProps){
    return (
        <div className="absolute inset-0 w-full h-full overflow-hidden -z-10">
            <video
            autoPlay
            loop
            muted
            playsInline
            poster={poster}
            className="object-cover w-full h-full"
            >
                <source src={src} type="video/mp4"/>
        </video>
        <div className="absolute inset-0 bg-black/60" />
        </div>
    )
}