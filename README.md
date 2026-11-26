<div align="center">
  <img src="public/hero.png" alt="Ink Of Qalb — digital art and spiritual reflections" width="88%" />

  <h1>Ink Of Qalb</h1>
  <p><em>Minimalist digital art and spiritual reflections—created to bring meaning into the everyday.</em></p>

  <p>
    <a href="https://inkofqalb.vercel.app">Live Website</a> ·
    <a href="mailto:inkofqalb@gmail.com">Contact</a>
  </p>


  <p>
    <img src="https://img.shields.io/badge/React-19-149eca?logo=react&logoColor=white" alt="React 19" />
    <img src="https://img.shields.io/badge/TypeScript-typed-3178c6?logo=typescript&logoColor=white" alt="TypeScript" />
    <img src="https://img.shields.io/badge/Vite-frontend%20tooling-646cff?logo=vite&logoColor=white" alt="Vite" />
    <img src="https://img.shields.io/badge/Tailwind_CSS-styling-38bdf8?logo=tailwindcss&logoColor=white" alt="Tailwind CSS" />
  </p>
</div>


## About

**Ink Of Qalb** is a creative digital storefront and gallery built around thoughtful design, spirituality, and the beauty of the written word. It brings together curated digital wallpapers and books in a minimalist, dark visual experience inspired by calligraphy and modern editorial design.


## Explore

- **Wallpapers** — browse curated collections featuring themes such as Palestine, Sudan, nature, Islamic-inspired imagery, words of gratitude, the Names of Allah, and Makkah & Madina.
- **Books** — discover books and spiritual guidebooks.
- **Category filters** — find books and wallpapers by category.
- **Contact** — send inquiries or collaboration messages through the contact form.


## Features

- Content-driven book catalogue and wallpaper gallery powered by **Sanity CMS**.
- Category-based filtering for books and wallpapers.
- Responsive navigation with desktop header and mobile navigation drawer.
- Scroll-aware header styling.
- Contact form powered by **Formspree**.
- Cookie consent banner with locally stored choice and a 90-day expiry.
- Dedicated Privacy Policy, Terms & Conditions, Cookie Policy, and Refund Policy pages.
- Usability and accessibility details, including a skip-to-content link, labelled controls, responsive layouts, and lazy-loaded images.


## Tech stack

| Technology | Used for |
| --- | --- |
| [React 19](https://react.dev/) | UI components and frontend rendering |
| [TypeScript](https://www.typescriptlang.org/) | Typed application code |
| [Vite 5](https://vite.dev/) | Development server and build tooling |
| [React Router 7](https://reactrouter.com/) | Client-side routing |
| [Tailwind CSS 3](https://tailwindcss.com/) | Utility-based styling |
| [Lucide React](https://lucide.dev/) | Interface icons |
| [Sanity](https://www.sanity.io/) | Headless CMS for book and wallpaper content |
| [Formspree](https://formspree.io/) | Contact form submissions |
| [Vercel](https://vercel.com/) | Deployment and hosting configuration |


## Pages & routes

| Path | Description |
| --- | --- |
| `/` | Home, collections, about, and contact sections |
| `/books` | Book catalogue with category filters |
| `/wallpapers` | Wallpaper gallery with category filters |
| `/contact` | Contact page |
| `/privacy` | Privacy Policy |
| `/terms` | Terms & Conditions |
| `/cookies` | Cookie Policy |
| `/refund` | Refund Policy |


## Getting started

### Prerequisites

- [Node.js](https://nodejs.org/) (LTS recommended)
- npm
- Access to the configured Sanity project and dataset

### Run locally

```bash
# Clone the repository
git clone https://github.com/zayd90953/ink-of-qalb.git
cd ink-of-qalb

# Install dependencies
npm install

# Start the development server
npm run dev
```

Vite will print the local development URL in your terminal (typically `http://localhost:5173`).

### Available commands

| Command | Description |
| --- | --- |
| `npm run dev` | Start the local development server |
| `npm run build` | Build the production app into `dist/` |
| `npm run preview` | Preview the production build locally |


## Content management

Book and wallpaper content is fetched from **Sanity CMS** using the `book` and `wallpaper` document types. The frontend uses each entry’s title, link, image, and category information, with category slugs used for filtering.


> **Configuration note:** The Sanity project ID, dataset, API version, and CDN setting are currently configured in `src/sanityClient.ts`. The `.env.example` file contains placeholder variables from the starter template and is not currently used by the application.


## Deployment

The project includes a `vercel.json` configuration for deployment and single-page-app route handling.

1. Push the repository to GitHub.
2. Import the project into [Vercel](https://vercel.com/).
3. Use the following build settings:
   - **Build command:** `npm run build`
   - **Output directory:** `dist`
4. Deploy.


## Project structure

```text
ink-of-qalb/
├── public/                  # Static assets, favicon, hero image, sitemap
├── src/
│   ├── components/          # Pages and reusable UI components
│   │   ├── About.tsx
│   │   ├── BooksPage.tsx
│   │   ├── WallpapersPage.tsx
│   │   ├── Contact.tsx
│   │   ├── CookieConsent.tsx
│   │   └── ...
│   ├── App.tsx              # Routes and app layout
│   ├── constants.ts          # Categories and fallback product data
│   ├── sanityClient.ts       # Sanity client configuration
│   ├── types.ts              # TypeScript types
│   └── main.tsx              # Application entry point
├── index.html
├── tailwind.config.js
├── vite.config.ts
├── vercel.json
└── package.json
```


## Design principles

- Dark, minimalist canvas with restrained contrast.
- Editorial typography paired with clean sans-serif text.
- Imagery and motion that support the content instead of competing with it.
- Responsive layouts designed for mobile and larger screens.


## Links

- **Website:** [inkofqalb.vercel.app](https://inkofqalb.vercel.app)
- **Email:** [inkofqalb@gmail.com](mailto:inkofqalb@gmail.com)


---

<div align="center">
  <sub>Ink Of Qalb — creative products, digital art, and reflections.</sub>
</div>
