
export default function Video() {
    return (
        <video
            aria-hidden="true"
            className="absolute inset-0 z-0 h-full w-full object-cover contrast-100"
            autoPlay
            muted
            preload="auto"
            playsInline
            loop
            tabIndex={-1}
        >
            {/* <source src="/zlo-video-one.mp4" type="video/mp4" /> */}
            <source src="/video-full.mp4" type="video/mp4" />
            Your browser does not support the video tag.
        </video>
    )
}