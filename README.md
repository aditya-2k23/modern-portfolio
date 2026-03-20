# My Portfolio

This is my personal portfolio website. It is built with NextJS and TailwindCSS. It is a simple, clean and modern UI based website that showcases my projects, education, certifications and skills.

See the app [Live](https://aditya-modern-portfolio.vercel.app/)

## Tech Stack

- [React](https://reactjs.org/)
- [Next.js](https://nextjs.org/)
- [TailwindCSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [Aceternity UI](https://aceternity.io/)

### Getting Started

First, clone the repository:

```bash
git clone https://github.com/aditya-2k23/modern-portfolio
```

Install the dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### EmailJS setup (contact form)

The contact form uses [EmailJS](https://www.emailjs.com/) to send messages directly from the client.

- Copy `.env.example` to `.env.local`.
- Add your EmailJS values:
  - `NEXT_PUBLIC_EMAILJS_SERVICE_ID`
  - `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID`
  - `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY`
- Restart the dev server after updating env values.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.
