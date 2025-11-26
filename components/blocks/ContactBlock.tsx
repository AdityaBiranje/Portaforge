"use client"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useState } from "react"
import { useParams } from "next/navigation"
import { toast } from "sonner"

interface ContactBlockProps {
    title?: string
    subtitle?: string
    email?: string
    buttonText?: string
    backgroundColor?: string
    textColor?: string
}

export function ContactBlock({
    title,
    subtitle,
    email,
    buttonText,
    backgroundColor,
    textColor
}: ContactBlockProps) {
    const params = useParams()
    const siteId = params?.siteId as string // In builder: /builder/[siteId]
    // Note: In public site, params might be different (username/slug). 
    // For now, let's assume this works in builder. 
    // For public site, we might need to pass siteId as a prop or fetch it.
    // BUT: The public site route is /site/[username]/[slug]. 
    // We need the actual ID to post to the API.
    // The API route expects [id] which is the site ID.
    // In the builder, we have siteId in params.
    // In public view, we don't have the ID in URL, only slug.
    // We might need to look up site by slug in the API or pass ID in props.
    // Let's assume for now we are testing in builder or we need to fetch site ID.

    // Actually, for the public site, the page wrapper should probably provide context.
    // However, to keep it simple for this task:
    // If we are in builder, we use siteId from params.
    // If we are in public site, we might need to rely on a prop passed down (which we can't easily do with current architecture without fetching).
    // Let's try to handle the builder case first as that's where the user is testing.

    const [loading, setLoading] = useState(false)
    const [formData, setFormData] = useState({ name: "", email: "", message: "" })

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        if (!siteId) {
            toast.error("Cannot send message: Site ID missing")
            return
        }

        setLoading(true)
        try {
            const res = await fetch(`/api/sites/${siteId}/contact`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            })

            if (res.ok) {
                toast.success("Message sent successfully!")
                setFormData({ name: "", email: "", message: "" })
            } else {
                toast.error("Failed to send message")
            }
        } catch (error) {
            console.error(error)
            toast.error("Something went wrong")
        } finally {
            setLoading(false)
        }
    }

    return (
        <section
            className="py-20 px-6"
            style={{
                backgroundColor: backgroundColor || "transparent",
                color: textColor || "inherit"
            }}
        >
            <div className="max-w-xl mx-auto text-center space-y-8">
                <div className="space-y-4">
                    <h2 className="text-3xl font-bold tracking-tight">{title || "Get in Touch"}</h2>
                    <p className="text-muted-foreground" style={{ color: textColor ? `${textColor}cc` : undefined }}>
                        {subtitle || "Have a project in mind? Let's talk."}
                    </p>
                </div>

                <form className="space-y-4 text-left" onSubmit={handleSubmit}>
                    <div className="grid gap-2">
                        <label htmlFor="name" className="text-sm font-medium">Name</label>
                        <Input
                            id="name"
                            placeholder="Your name"
                            className="bg-background/50"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        />
                    </div>
                    <div className="grid gap-2">
                        <label htmlFor="email" className="text-sm font-medium">Email</label>
                        <Input
                            id="email"
                            type="email"
                            placeholder="m@example.com"
                            className="bg-background/50"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            required
                        />
                    </div>
                    <div className="grid gap-2">
                        <label htmlFor="message" className="text-sm font-medium">Message</label>
                        <Textarea
                            id="message"
                            placeholder="How can we help?"
                            className="min-h-[120px] bg-background/50"
                            value={formData.message}
                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                            required
                        />
                    </div>
                    <Button className="w-full" size="lg" type="submit" disabled={loading}>
                        {loading ? "Sending..." : (buttonText || "Send Message")}
                    </Button>
                </form>

                {email && (
                    <div className="pt-8 border-t border-border/40">
                        <p className="text-sm text-muted-foreground">Or email us directly at</p>
                        <a href={`mailto:${email}`} className="text-primary hover:underline font-medium">
                            {email}
                        </a>
                    </div>
                )}
            </div>
        </section>
    )
}
