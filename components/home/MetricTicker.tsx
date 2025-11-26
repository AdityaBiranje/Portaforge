"use client"

import { useEffect, useRef } from "react"
import { useInView, useMotionValue, useSpring } from "framer-motion"

interface MetricTickerProps {
    value: number
    label: string
    suffix?: string
}

export function MetricTicker({ value, label, suffix = "" }: MetricTickerProps) {
    const ref = useRef<HTMLDivElement>(null)
    const motionValue = useMotionValue(0)
    // Slower, smoother spring animation
    const springValue = useSpring(motionValue, { damping: 30, stiffness: 50 })
    const isInView = useInView(ref, { once: true, margin: "-100px" })

    useEffect(() => {
        if (isInView) {
            motionValue.set(value)
        }
    }, [isInView, value, motionValue])

    useEffect(() => {
        springValue.on("change", (latest) => {
            if (ref.current) {
                ref.current.textContent = Intl.NumberFormat("en-US").format(Math.round(latest)) + suffix
            }
        })
    }, [springValue, suffix])

    return (
        <div className="flex flex-col items-center">
            <span ref={ref} className="text-3xl font-bold tracking-tight text-foreground" />
            <span className="text-sm text-muted-foreground font-medium">{label}</span>
        </div>
    )
}
