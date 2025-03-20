# User Directory - Next.js 15 Demo

A server-rendered user directory application built with Next.js 15, optimized for SEO and accessibility.

## Features

- Server-side rendered user list
- Responsive design with Tailwind CSS
- SEO optimized with Next.js metadata
- WCAG accessibility compliant
- TypeScript for type safety

## Getting Started

### Prerequisites

- Node.js 18.17.0 or later
- npm or yarn package manager

### Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/user-directory.git
cd user
```

2. Install dependencies:

```shellscript
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:

```shellscript
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Building for Production

To build the application for production:

```shellscript
npm run build
# or
yarn build
# or
pnpm build
```

To start the production server:

```shellscript
npm run start
# or
yarn start
# or
pnpm start
```

## SEO Optimizations

This application implements several SEO best practices:

1. **Server-Side Rendering (SSR)**: All pages are rendered on the server, providing search engines with fully rendered HTML content for better indexing.
2. **Metadata API**: Using Next.js 15's Metadata API to define page-specific metadata:

```typescript
export const metadata: Metadata = {
  title: "User Directory | Next.js 15 Demo",
  description:
    "A server-rendered list of users built with Next.js 15, optimized for SEO and accessibility.",
};
```

3. **Semantic HTML**: Proper use of HTML5 semantic elements (`<main>`, `<section>`, `<header>`, `<footer>`) to help search engines understand page structure.
4. **Descriptive Text**: Clear, descriptive text content that explains the purpose of the page.

## WCAG Accessibility Compliance

The application follows Web Content Accessibility Guidelines (WCAG) 2.1:

**Semantic Structure**:

1. Proper heading hierarchy (`<h1>`, `<h2>`, etc.)
1. Use of `<main>`, `<section>`, and other semantic elements
1. ARIA landmarks where appropriate (e.g., `aria-labelledby`)

**Screen Reader Support**:

1. Hidden elements with `sr-only` class for screen reader context
1. Proper labeling of UI elements
1. `aria-hidden="true"` for decorative elements

**Image Accessibility**:

1. Empty alt attributes for decorative images
1. Proper image sizing and optimization with Next.js Image component

**Color and Contrast**

1. Sufficient color contrast between text and background
1. Information not conveyed by color alone

**Keyboard Navigation**:

1. Interactive elements are keyboard accessible
1. Focus states are visible

## Project Structure

```plaintext
├── app/
│   ├── layout.tsx      # Root layout with header and footer
│   ├── page.tsx        # Main user list page
│   └── globals.css     # Global styles
├── components/
│   ├── ui/             # UI components (shadcn/ui)
│   └── user-card.tsx   # User card component
├── data/
│   └── users.ts        # User data and types
└── public/             # Static assets
```
