<div align="center">
  <img src="public/hero.png" alt="Ink Of Qalb" width="100%" />
  <h1>Ink Of Qalb</h1>
  <p><em>Minimalist digital art and spiritual reflections—created to bring meaning into the everyday.</em></p>
</div><p align="center">
  <a href="https://inkofqalb.vercel.app">Live Website</a>
  ·
  <a href="mailto:inkofqalb@gmail.com">Contact</a>
</p>About
Ink Of Qalb is a creative digital storefront and gallery built around thoughtful design, spirituality, and the beauty of the written word. The site brings together curated digital wallpapers and books in a minimalist, dark visual experience inspired by calligraphy and modern editorial design.
What’s inside
- Digital wallpaper gallery — browse wallpaper collections, including themes such as Palestine, Sudan, nature, Islamic-inspired imagery, words of gratitude, the Names of Allah, and Makkah & Madina.
- Book collection — discover books and spiritual guidebooks.
- Category filtering — narrow the books and wallpapers by category.
- Content managed through Sanity — book and wallpaper entries are fetched from Sanity CMS, so collection content can be maintained separately from the frontend.
- Contact form — a contact form for inquiries and collaborations, powered by Formspree.
- Responsive navigation — desktop header, mobile navigation drawer, and scroll-aware header styling.
- Privacy-conscious cookie consent — a consent banner stores the visitor’s choice locally and expires the saved choice after 90 days.
- Dedicated information pages — Privacy Policy, Terms & Conditions, Cookie Policy, and Refund Policy.
- Accessibility and usability touches — skip-to-content link, labelled controls, responsive layouts, and lazy-loaded images.
Tech Stack
Technology	Role
React 19	UI components and frontend rendering
TypeScript	Typed application code
Vite 5	Development server and production build tooling
React Router 7	Client-side routing
Tailwind CSS 3	Utility-first styling
Lucide React	Interface icons
Sanity	Headless CMS for book and wallpaper content
Formspree	Contact form submissions
Vercel	Deployment and hosting configuration


Routes
Route	Page
/	Home, collections, about, and contact sections
/books	Book catalogue with category filters
/wallpapers	Wallpaper gallery with category filters
/contact	Contact page
/privacy	Privacy Policy
/terms	Terms & Conditions
/cookies	Cookie Policy
/refund	Refund Policy


Run locally
Requirements
- Node.js (LTS recommended)
- npm
- The configured Sanity project/dataset (the client settings currently live in src/sanityClient.ts)
Installation
# Clone the repository
git clone https://github.com/zayd90953/ink-of-qalb.git
cd ink-of-qalb

# Install dependencies
npm install

# Start the development server
npm run dev
Open the local URL printed by Vite (usually http://localhost:5173).
Available scripts
Command	Description
npm run dev	Start the local development server
npm run build	Create the production build in dist/
npm run preview	Preview the production build locally


Content management
Book and wallpaper listings are queried from Sanity using the document types book and wallpaper. The frontend reads each entry’s title, link, image, and category information and uses the category slug for filtering. The Sanity project ID, dataset, API version, and CDN setting are currently configured directly in src/sanityClient.ts. The .env.example file contains placeholder variables from the original starter and is not currently used by the application code.
Deployment
The project includes Vercel configuration (vercel.json) for deployment and SPA route handling.
1. Push the project to a Git repository.
2. Import the repository into Vercel.
3. Use the default Vite build settings:
   - Build command: npm run build
   - Output directory: dist
4. Deploy.
Project structure
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
│   ├── constants.ts          # Static categories and fallback product data
│   ├── sanityClient.ts       # Sanity client setup
│   ├── types.ts              # TypeScript types
│   └── main.tsx              # Application entry point
├── index.html
├── tailwind.config.js
├── vite.config.ts
├── vercel.json
└── package.json
Design direction
- Dark, minimalist canvas with restrained contrast and typography.
- Editorial serif typography paired with clean sans-serif text.
- Motion and image treatments used to support the content rather than distract from it.
- Responsive layouts for mobile and larger screens.
Links
- Website: https://inkofqalb.vercel.app
- Email: inkofqalb@gmail.com
<div align="center">
  <sub>Ink Of Qalb — creative products, digital art, and reflections.</sub>
</div>
