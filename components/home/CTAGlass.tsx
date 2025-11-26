"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { MagneticButton } from "./MagneticButton"

export function CTAGlass() {
    return (
        <section className="py-24 relative overflow-hidden">
            <div className="container px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-12 text-center backdrop-blur-md"
                >
                    <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/20 via-transparent to-purple-500/20 opacity-50" />
                    <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-primary/30 blur-3xl animate-pulse" />
                    <div className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-purple-500/30 blur-3xl animate-pulse delay-1000" />

                    <h2 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl">
                        Ready to build your legacy?
                    </h2>
                    <p className="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground">
                        Join thousands of designers and developers crafting their digital identity with Portaforge.
                    </p>

                    <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                        <MagneticButton className="h-14 px-8 text-lg">
                            Get Started Free <ArrowRight className="ml-2 h-5 w-5" />
                        </MagneticButton>
                        <MagneticButton variant="outline" className="h-14 px-8 text-lg bg-transparent border-white/20 hover:bg-white/10">
                            View Showcase
                        </MagneticButton>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
