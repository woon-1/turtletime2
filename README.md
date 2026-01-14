# TurtleTime Landing Page

A pre-order landing page for TurtleTime - a cute turtle-shaped alarm clock designed to discourage phone usage and doomscrolling.

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Deployment**: Vercel

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Project Structure

```
├── app/
│   ├── layout.tsx      # Root layout with fonts and metadata
│   ├── page.tsx        # Main landing page
│   └── globals.css     # Global styles and Tailwind
├── components/
│   ├── Hero.tsx        # Hero section with main CTA
│   ├── Problem.tsx     # Pain points section
│   ├── Solution.tsx    # Product introduction
│   ├── HowItWorks.tsx  # Step-by-step guide
│   ├── Features.tsx    # Product features
│   ├── SocialProof.tsx # Testimonials and movement
│   ├── PreOrder.tsx    # Fake door checkout flow
│   ├── Footer.tsx      # Site footer
│   └── Button.tsx      # Reusable button component
└── public/             # Static assets
```

## Fake Door Test

This landing page implements a "fake door" test to measure real purchase intent without processing actual payments:

1. Users click "Pre-order Now" CTA
2. They go through a realistic checkout flow (shipping → payment)
3. At the final step, they see a message explaining we're not ready yet
4. Their email is captured for launch notification

This approach validates genuine conversion intent.

## Customization

- **Colors**: Edit `tailwind.config.ts` to change the color palette
- **Content**: Edit individual components to update copy
- **Images**: Replace placeholder emojis with actual product images in `public/`

## Deployment

Push to GitHub to trigger automatic deployment via Vercel.
