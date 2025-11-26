# Portaforge

Portaforge is a powerful, intuitive portfolio builder designed for developers, designers, and creatives. Build stunning, responsive portfolios in minutes with our drag-and-drop interface, manage your projects via a comprehensive dashboard, and showcase your work to the world.

## Features

- **🎨 Visual Builder**: A rich, drag-and-drop editor to customize every aspect of your portfolio.
- **📊 Dashboard**: Centralized hub to manage your sites, view analytics, and configure settings.
- **💎 Premium Templates**: Professionally designed templates to get you started fast.
- **🚀 High Performance**: Built on Next.js for optimal speed and SEO.
- **💳 Subscription Management**: Integrated pricing and subscription plans.
- **📝 Blog & Showcase**: Share your thoughts and get inspired by other creators.
- **🔐 Secure Authentication**: Robust user management and security.

## Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Database**: [PostgreSQL](https://www.postgresql.org/) (via [Prisma](https://www.prisma.io/))
- **UI Components**: Custom components with modern aesthetics.

## Getting Started

Follow these steps to set up the project locally.

### Prerequisites

- Node.js (v18 or later)
- npm, yarn, or pnpm
- PostgreSQL database

### Installation

1. **Clone the repository:**
   ```bash
   git clone <your-repo-url>
   cd portaforge
   ```

2. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Environment Setup:**
   Copy the example environment file and configure your variables.
   ```bash
   cp .env.example .env
   ```
   Update `.env` with your database URL and other necessary secrets.

4. **Database Setup:**
   Run the Prisma migrations to set up your database schema.
   ```bash
   npx prisma migrate dev
   ```

5. **Run the development server:**
   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Learn More

To learn more about the technologies used in this project:

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Prisma Documentation](https://www.prisma.io/docs)

## License

[MIT](LICENSE)
