"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

const logos = [
    { name: "Acme", color: "text-blue-500" },
    { name: "Globex", color: "text-red-500" },
    { name: "Soylent", color: "text-green-500" },
    { name: "Initech", color: "text-purple-500" },
    { name: "Umbrella", color: "text-yellow-500" },
    { name: "Stark", color: "text-cyan-500" },
    { name: "Wayne", color: "text-gray-500" },
    { name: "Cyberdyne", color: "text-indigo-500" },
]

export function LogoMarquee() {
    return (
        <section className="py-12 overflow-hidden bg-background/50 backdrop-blur-sm border-y border-white/5">
            <div className="flex">
                <motion.div
                    initial={{ x: 0 }}
                    animate={{ x: "-50%" }}
                    transition={{
                        duration: 30,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                    className="flex gap-16 pr-16 whitespace-nowrap"
                >
                    {[...logos, ...logos, ...logos].map((logo, i) => (
                        <div
                            key={i}
                            className={cn(
                                "text-2xl font-bold opacity-50 transition-all duration-300 hover:opacity-100 hover:scale-110 cursor-default",
                                logo.color
                            )}
                        >
                            {logo.name}
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}
