"use client"

import { Button } from "@/components/ui/button"
import { HeroScene } from "@/components/3d/HeroScene"
import { MagneticButton } from "@/components/home/MagneticButton"
import { MetricTicker } from "@/components/home/MetricTicker"
import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function Hero() {
    return (
        <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">

            {/* Mesh Gradient Background */}


            {/* <HeroScene3D /> Removed to avoid conflict with the new side component */}

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="p-8 rounded-2xl bg-background/30 backdrop-blur-md border border-white/10 shadow-2xl"
                    >
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.2 }}
                            className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-sm font-medium text-primary mb-6"
                        >
                            <span>v1.0 Public Beta</span>
                        </motion.div>
                        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-tight">
                            Craft your <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-purple-500 to-pink-600 animate-gradient-x bg-300%">
                                Digital Identity
                            </span>
                        </h1>
                        <p className="text-xl text-muted-foreground mb-8 leading-relaxed max-w-lg">
                            The portfolio builder for professionals who care about design.
                            Create stunning, 3D-enhanced sites in minutes.
                        </p>

                        <div className="flex flex-wrap gap-4 mb-12">
                            <Link href="/auth/signup">
                                <MagneticButton className="h-12 px-8 text-base">
                                    Start Building <ArrowRight className="ml-2 w-4 h-4" />
                                </MagneticButton>
                            </Link>
                            <Link href="/templates">
                                <MagneticButton variant="outline" className="h-12 px-8 text-base bg-background/50 backdrop-blur-sm border-white/20">
                                    View Templates
                                </MagneticButton>
                            </Link>
                        </div>

                        <div className="grid grid-cols-3 gap-8 border-t border-white/10 pt-8">
                            <MetricTicker value={100000} label="Users" suffix="+" />
                            <MetricTicker value={5000} label="Templates" suffix="+" />
                            <MetricTicker value={99} label="Satisfaction" suffix="%" />
                        </div>
                    </motion.div>

                    <div className="h-[500px] w-full hidden lg:block">
                        <HeroScene />
                    </div>
                </div>
            </div>

            <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground"
            >
                <span className="text-sm font-medium">Scroll to explore</span>
                <motion.div
                    animate={{ y: [0, 5, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                    className="w-5 h-8 border-2 border-muted-foreground/50 rounded-full flex justify-center p-1"
                >
                    <motion.div
                        animate={{ y: [0, 12, 0] }}
                        transition={{ repeat: Infinity, duration: 1.5 }}
                        className="w-1 h-1 bg-muted-foreground rounded-full"
                    />
                </motion.div>
            </motion.div>
        </section>
    )
}
