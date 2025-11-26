import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

async function main() {
    console.log("Cleaning up old templates...")
    await prisma.template.deleteMany({})

    console.log("Seeding new templates...")

    const templates = [
        {
            name: "Minimal Portfolio",
            category: "Minimal",
            thumbnail: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&w=800&q=80",
            theme: {
                colors: {
                    background: "#ffffff",
                    foreground: "#000000",
                    primary: "#000000",
                }
            },
            blocks: [
                {
                    id: "hero-1",
                    type: "hero",
                    props: {
                        title: "Hi, I'm Alex",
                        subtitle: "A minimal designer based in NYC. I craft digital experiences.",
                        ctaText: "See My Work",
                        ctaLink: "#projects"
                    }
                },
                {
                    id: "about-1",
                    type: "about",
                    props: {
                        heading: "About Me",
                        content: "I believe in clean, functional design that puts the user first. With 5 years of experience in UI/UX, I help brands tell their story."
                    }
                },
                {
                    id: "projects-1",
                    type: "projects",
                    props: {}
                },
                {
                    id: "contact-1",
                    type: "contact",
                    props: {
                        title: "Let's Work Together",
                        email: "alex@example.com"
                    }
                }
            ]
        },
        {
            name: "Creative Studio",
            category: "Creative",
            thumbnail: "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=800&q=80",
            theme: {
                colors: {
                    background: "#1a1a1a",
                    foreground: "#ffffff",
                    primary: "#ff0055",
                }
            },
            blocks: [
                {
                    id: "hero-2",
                    type: "hero",
                    props: {
                        title: "We Create Magic",
                        subtitle: "Digital experiences that leave a lasting impression.",
                        ctaText: "Start a Project",
                        ctaLink: "#contact"
                    }
                },
                {
                    id: "projects-2",
                    type: "projects",
                    props: {}
                },
                {
                    id: "contact-2",
                    type: "contact",
                    props: {
                        title: "Get in Touch",
                        subtitle: "Ready to make something amazing?",
                        email: "studio@example.com"
                    }
                }
            ]
        },
        {
            name: "Dev Profile",
            category: "Developer",
            thumbnail: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
            theme: {
                colors: {
                    background: "#0f172a",
                    foreground: "#e2e8f0",
                    primary: "#38bdf8",
                }
            },
            blocks: [
                {
                    id: "hero-3",
                    type: "hero",
                    props: {
                        title: "<Coder />",
                        subtitle: "Full-stack developer building the future. React, Node, and everything in between.",
                        ctaText: "View Projects",
                        ctaLink: "#projects"
                    }
                },
                {
                    id: "skills-1",
                    type: "skills",
                    props: {}
                },
                {
                    id: "projects-3",
                    type: "projects",
                    props: {}
                },
                {
                    id: "about-2",
                    type: "about",
                    props: {
                        heading: "Technical Stack",
                        content: "I specialize in building scalable web applications using modern technologies like Next.js, TypeScript, and Prisma."
                    }
                },
                {
                    id: "contact-3",
                    type: "contact",
                    props: {
                        title: "Hire Me",
                        email: "dev@example.com"
                    }
                }
            ]
        },
        {
            name: "Photo Gallery",
            category: "Photography",
            thumbnail: "https://images.unsplash.com/photo-1452587925148-ce544e77e70d?auto=format&fit=crop&w=800&q=80",
            theme: {
                colors: {
                    background: "#000000",
                    foreground: "#ffffff",
                    primary: "#ffffff",
                }
            },
            blocks: [
                {
                    id: "hero-4",
                    type: "hero",
                    props: {
                        title: "Captured Moments",
                        subtitle: "Life through a lens. Exploring the world one frame at a time.",
                        ctaText: "View Gallery",
                        ctaLink: "#gallery"
                    }
                },
                {
                    id: "projects-4",
                    type: "projects",
                    props: {}
                },
                {
                    id: "contact-4",
                    type: "contact",
                    props: {
                        title: "Book a Session",
                        email: "photo@example.com"
                    }
                }
            ]
        }
    ]

    for (const t of templates) {
        await prisma.template.create({
            data: t
        })
    }

    console.log("Seeding blog posts...")
    const posts = [
        {
            title: "Welcome to PortaForge",
            slug: "welcome-to-portaforge",
            excerpt: "The easiest way to build your portfolio is finally here.",
            content: "We are excited to announce the launch of PortaForge! Our mission is to help developers and creatives build stunning portfolios in minutes. With our drag-and-drop builder, you can customize every aspect of your site without writing a single line of code.",
            image: "https://images.unsplash.com/photo-1499750310159-5b5f226932b7?auto=format&fit=crop&w=800&q=80"
        },
        {
            title: "10 Tips for a Great Portfolio",
            slug: "10-tips-portfolio",
            excerpt: "Learn how to make your portfolio stand out from the crowd.",
            content: "1. Keep it simple. 2. Show your best work. 3. Tell a story. 4. Make it responsive. 5. Include a call to action. 6. Use high-quality images. 7. Keep it updated. 8. Show your personality. 9. Get feedback. 10. Promote it.",
            image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=800&q=80"
        },
        {
            title: "Why You Need a Personal Website",
            slug: "why-personal-website",
            excerpt: "In the digital age, your personal website is your new business card.",
            content: "A personal website gives you control over your online presence. It's a central hub for your work, thoughts, and contact information. Unlike social media, you own the platform and the content.",
            image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80"
        }
    ]

    for (const p of posts) {
        await prisma.post.upsert({
            where: { slug: p.slug },
            update: {},
            create: p
        })
    }

    console.log("Seeding help articles...")
    const helpArticles = [
        {
            title: "Getting Started",
            slug: "getting-started",
            category: "Basics",
            content: "To get started, simply click on 'New Site' in your dashboard. Choose a template that fits your style, and start customizing!"
        },
        {
            title: "Customizing Your Site",
            slug: "customizing-site",
            category: "Builder",
            content: "You can customize every block by clicking on it. The properties panel on the right allows you to change text, colors, and images."
        },
        {
            title: "Connecting a Custom Domain",
            slug: "custom-domain",
            category: "Advanced",
            content: "To connect a custom domain, go to your site settings and enter your domain name. You'll need to update your DNS records to point to our servers."
        }
    ]

    for (const h of helpArticles) {
        await prisma.helpArticle.upsert({
            where: { slug: h.slug },
            update: {},
            create: h
        })
    }

    console.log("Seeding complete!")
}

main()
    .catch((e) => {
        console.error(e)
        process.exit(1)
    })
    .finally(async () => {
        await prisma.$disconnect()
    })
