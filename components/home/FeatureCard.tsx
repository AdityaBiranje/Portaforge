"use client"

import { useRef, useState } from "react"
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import { LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"

interface FeatureCardProps {
    title: string
    description: string
    icon: LucideIcon
    className?: string
}

export function FeatureCard({ title, description, icon: Icon, className }: FeatureCardProps) {
    const ref = useRef<HTMLDivElement>(null)

    const x = useMotionValue(0)
    const y = useMotionValue(0)

    const mouseX = useSpring(x, { stiffness: 500, damping: 100 })
    const mouseY = useSpring(y, { stiffness: 500, damping: 100 })

    const rotateX = useTransform(mouseY, [-0.5, 0.5], ["2deg", "-2deg"])
    const rotateY = useTransform(mouseX, [-0.5, 0.5], ["-2deg", "2deg"])

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = ref.current!.getBoundingClientRect()
        const width = rect.width
        const height = rect.height
        const mouseX = e.clientX - rect.left
        const mouseY = e.clientY - rect.top
        const xPct = mouseX / width - 0.5
        const yPct = mouseY / height - 0.5
        x.set(xPct)
        y.set(yPct)
    }

    const handleMouseLeave = () => {
        x.set(0)
        y.set(0)
    }

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
            }}
            className={cn(
                "group relative h-full rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition-colors hover:bg-white/10",
                className
            )}
        >
            <div
                style={{ transform: "translateZ(20px)" }}
                className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:scale-110 transition-transform duration-300"
            >
                <Icon className="h-6 w-6" />
            </div>
            <h3
                style={{ transform: "translateZ(10px)" }}
                className="mb-2 text-xl font-bold tracking-tight text-foreground"
            >
                {title}
            </h3>
            <p
                style={{ transform: "translateZ(5px)" }}
                className="text-muted-foreground"
            >
                {description}
            </p>

            <div className="absolute inset-0 -z-10 rounded-2xl bg-gradient-to-br from-primary/20 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
        </motion.div>
    )
}
