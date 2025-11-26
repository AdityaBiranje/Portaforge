"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const testimonials = [
    {
        quote: "Portaforge completely transformed how I present my work. The 3D elements are a game changer.",
        author: "Sarah Chen",
        role: "Product Designer",
        initials: "SC",
    },
    {
        quote: "I built my portfolio in under an hour and got three job offers the next week. Incredible tool.",
        author: "Marcus Johnson",
        role: "Frontend Dev",
        initials: "MJ",
    },
    {
        quote: "The templates are stunning and the customization is limitless. Highly recommended.",
        author: "Elena Rodriguez",
        role: "Art Director",
        initials: "ER",
    },
    {
        quote: "Finally, a builder that understands what designers actually need. It's fast, beautiful, and intuitive.",
        author: "David Kim",
        role: "UX Researcher",
        initials: "DK",
    },
    {
        quote: "The templates are stunning and the customization is limitless. Highly recommended.",
        author: "Elena Rodriguez",
        role: "Art Director",
        initials: "ER",
    },
    {
        quote: "I built my portfolio in under an hour and got three job offers the next week. Incredible tool.",
        author: "Marcus Johnson",
        role: "Frontend Dev",
        initials: "MJ",
    },
    {
        quote: "The templates are stunning and the customization is limitless. Highly recommended.",
        author: "Elena Rodriguez",
        role: "Art Director",
        initials: "ER",
    },
]

export function TestimonialCarousel() {
    const containerRef = useRef<HTMLDivElement>(null)
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    })

    const x = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"])

    return (
        <section ref={containerRef} className="py-24 overflow-hidden">
            <div className="container px-6 mb-12">
                <h2 className="text-3xl font-bold tracking-tight text-center">Loved by creators</h2>
            </div>

            <motion.div
                style={{ x }}
                className="flex gap-6 pl-6 w-max cursor-grab active:cursor-grabbing"
            >
                {testimonials.map((t, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, filter: "blur(10px)" }}
                        whileInView={{ opacity: 1, filter: "blur(0px)" }}
                        transition={{ duration: 0.5, delay: i * 0.1 }}
                        viewport={{ once: true }}
                        className="w-[350px] md:w-[450px] flex-shrink-0 rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm"
                    >
                        <p className="mb-6 text-lg text-muted-foreground leading-relaxed">"{t.quote}"</p>
                        <div className="flex items-center gap-4">
                            <Avatar>
                                <AvatarImage src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${t.initials}`} />
                                <AvatarFallback>{t.initials}</AvatarFallback>
                            </Avatar>
                            <div>
                                <div className="font-semibold">{t.author}</div>
                                <div className="text-sm text-muted-foreground">{t.role}</div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    )
}
