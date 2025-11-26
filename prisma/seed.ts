import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

async function main() {
    // Create Templates
    const minimalTemplate = await prisma.template.create({
        data: {
            name: "Minimalist Portfolio",
            category: "Minimal",
            thumbnail: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=800&q=80",
            theme: {
                colors: {
                    primary: "#000000",
                    background: "#ffffff",
                },
                font: "Inter",
            },
            blocks: [
                {
                    id: "hero-1",
                    type: "hero",
                    props: {
                        title: "Hello, I'm [Name]",
                        subtitle: "A Creative Developer",
                        ctaText: "See My Work",
                    },
                },
                {
                    id: "about-1",
                    type: "about",
                    props: {
                        heading: "About Me",
                        content: "I am a passionate developer...",
                    },
                },
            ],
        },
    })

    const creativeTemplate = await prisma.template.create({
        data: {
            name: "Creative Studio",
            category: "Creative",
            thumbnail: "https://images.unsplash.com/photo-1558655146-d09347e0b7a9?w=800&q=80",
            theme: {
                colors: {
                    primary: "#6366f1",
                    background: "#0f172a",
                },
                font: "Outfit",
            },
            blocks: [],
        },
    })

    console.log({ minimalTemplate, creativeTemplate })
}

main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })
