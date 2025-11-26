"use client"

export function GradientHero() {
    return (
        <div className="absolute inset-0 -z-10 h-full w-full overflow-hidden bg-background">
            <div className="absolute top-[-10%] left-[-10%] h-[500px] w-[500px] rounded-full bg-primary/20 blur-[100px] animate-pulse" />
            <div className="absolute top-[20%] right-[-5%] h-[400px] w-[400px] rounded-full bg-purple-500/20 blur-[100px] animate-pulse delay-700" />
            <div className="absolute bottom-[-10%] left-[20%] h-[600px] w-[600px] rounded-full bg-blue-500/10 blur-[120px] animate-pulse delay-1000" />
            <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
        </div>
    )
}
