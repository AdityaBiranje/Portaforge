"use client"

import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { Button } from "@/components/ui/button"
import { Check, Loader2 } from "lucide-react"
import { useSession } from "next-auth/react"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { toast } from "sonner"

const tiers = [
    {
        name: "Hobby",
        id: "HOBBY",
        price: "$0",
        description: "Perfect for trying out PortaForge.",
        features: ["1 Project", "Basic Templates", "PortaForge Branding", "Community Support"],
        cta: "Get Started",
        variant: "outline" as const,
    },
    {
        name: "Pro",
        id: "PRO",
        price: "$12",
        description: "For serious professionals.",
        features: ["Unlimited Projects", "Premium Templates", "Custom Domain", "Remove Branding", "Priority Support", "Analytics"],
        cta: "Upgrade to Pro",
        variant: "default" as const,
        popular: true,
    },
    {
        name: "Team",
        id: "TEAM",
        price: "$49",
        description: "Collaborate with your team.",
        features: ["Everything in Pro", "Team Collaboration", "Shared Assets", "Admin Controls", "SSO"],
        cta: "Contact Sales",
        variant: "outline" as const,
    },
]

export default function PricingPage() {
    const { data: session, update } = useSession()
    const router = useRouter()
    const [loading, setLoading] = useState<string | null>(null)

    const handleUpgrade = async (planId: string) => {
        if (!session) {
            router.push("/auth/signin")
            return
        }

        setLoading(planId)
        try {
            const response = await fetch("/api/user/subscription", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ plan: planId }),
            })

            if (!response.ok) {
                throw new Error("Something went wrong")
            }

            await update() // Update session to reflect new plan
            toast.success(`Successfully upgraded to ${planId} plan!`)
            router.refresh()
        } catch (error) {
            toast.error("Failed to upgrade plan. Please try again.")
        } finally {
            setLoading(null)
        }
    }

    // @ts-ignore - Plan is added to user type via Prisma but might not be in NextAuth type yet
    const currentPlan = session?.user?.plan || "HOBBY"

    return (
        <div className="min-h-screen bg-background flex flex-col">
            <Navbar />
            <main className="flex-1 pt-24 pb-16">
                <div className="container mx-auto px-4">
                    <div className="text-center max-w-2xl mx-auto mb-16">
                        <h1 className="text-4xl font-bold tracking-tight mb-4">
                            Simple, transparent pricing
                        </h1>
                        <p className="text-muted-foreground text-lg">
                            Choose the plan that's right for you. All plans include a 14-day free trial.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        {tiers.map((tier) => {
                            const isCurrentPlan = currentPlan === tier.id
                            return (
                                <div key={tier.name} className={`relative flex flex-col p-8 bg-card rounded-xl border ${tier.popular ? 'border-primary shadow-lg scale-105 z-10' : 'border-border'}`}>
                                    {tier.popular && (
                                        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full">
                                            Most Popular
                                        </div>
                                    )}
                                    <div className="mb-4">
                                        <h3 className="text-lg font-semibold">{tier.name}</h3>
                                        <p className="text-sm text-muted-foreground">{tier.description}</p>
                                    </div>
                                    <div className="mb-6">
                                        <span className="text-4xl font-bold">{tier.price}</span>
                                        {tier.name === "Team" ? (
                                            <p className="text-muted-foreground">Everything in Pro, plus:</p>
                                        ) : (
                                            <span className="text-muted-foreground">/month</span>
                                        )}
                                    </div>
                                    <ul className="flex-1 space-y-3 mb-8">
                                        {tier.features.map((feature) => (
                                            <li key={feature} className="flex items-center text-sm">
                                                <Check className="w-4 h-4 text-primary mr-2" />
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                    <Button
                                        variant={tier.variant}
                                        className="w-full"
                                        disabled={isCurrentPlan || loading === tier.id}
                                        onClick={() => handleUpgrade(tier.id)}
                                    >
                                        {loading === tier.id && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                                        {isCurrentPlan ? "Current Plan" : tier.cta}
                                    </Button>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    )
}
