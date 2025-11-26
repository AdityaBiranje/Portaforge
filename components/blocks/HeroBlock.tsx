import { Button } from "@/components/ui/button"
import Link from "next/link"

interface HeroBlockProps {
    title: string
    subtitle: string
    ctaText: string
    ctaLink?: string
}

export function HeroBlock({ title, subtitle, ctaText, ctaLink }: HeroBlockProps) {
    return (
        <section className="py-20 px-6 text-center bg-background">
            <h1 className="text-5xl font-bold mb-6">{title}</h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">{subtitle}</p>
            {ctaLink ? (
                <Link href={ctaLink}>
                    <Button size="lg">{ctaText}</Button>
                </Link>
            ) : (
                <Button size="lg">{ctaText}</Button>
            )}
        </section>
    )
}
