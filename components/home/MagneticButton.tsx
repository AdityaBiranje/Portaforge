"use client"

import { useRef, useState } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

import { HTMLMotionProps } from "framer-motion"

interface MagneticButtonProps extends Omit<HTMLMotionProps<"button">, "ref"> {
    children: React.ReactNode
    className?: string
    variant?: "primary" | "outline" | "ghost"
}

export function MagneticButton({ children, className, variant = "primary", ...props }: MagneticButtonProps) {
    const ref = useRef<HTMLButtonElement>(null)
    const [position, setPosition] = useState({ x: 0, y: 0 })

    const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
        const { clientX, clientY } = e
        const { left, top, width, height } = ref.current!.getBoundingClientRect()
        const x = clientX - (left + width / 2)
        const y = clientY - (top + height / 2)
        setPosition({ x, y })
    }

    const handleMouseLeave = () => {
        setPosition({ x: 0, y: 0 })
    }

    const variants = {
        primary: "bg-primary text-primary-foreground shadow-lg shadow-primary/25 hover:shadow-primary/40",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        ghost: "hover:bg-accent hover:text-accent-foreground",
    }

    return (
        <motion.button
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            animate={{ x: position.x * 0.5, y: position.y * 0.5 }}
            transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
            className={cn(
                "relative inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 h-12 px-8",
                variants[variant],
                className
            )}
            {...props}
        >
            {children}
        </motion.button>
    )
}
