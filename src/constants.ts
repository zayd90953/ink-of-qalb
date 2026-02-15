import { Product, Category } from './types';

export const WALLPAPER_CATEGORIES: Category[] = [
  { id: 'all', label: 'All Wallpapers' },
  { id: 'palestine', label: 'Palestine' },
  { id: 'sudan', label: 'Sudan' },
  { id: 'nature', label: 'Nature & Islamic' },
  { id: 'words', label: 'Words of Thanks' },
  { id: 'names', label: 'Names of Allah' },
  { id: 'makkah', label: 'Makkah & Madina' },
];

export const PRODUCTS: Product[] = [
  // --- Dua Books ---
  {
    id: 'book-1',
    title: 'My Ramadhan Essentials',
    category: 'dua-book',
    price: '$12.00',
    imageUrl: 'https://images.unsplash.com/photo-1769418805884-3512674eb0f7?q=80&w=665&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    link: 'https://gumroad.com/inkofqalb',
  },

  // --- Palestine Wallpapers ---
  {
    id: 'pal-1',
    title: 'Dome of the Rock - Dawn',
    category: 'palestine',
    price: '$5.00',
    imageUrl: 'https://images.unsplash.com/photo-1563840733564-909772186780?q=80&w=800&auto=format&fit=crop',
    link: 'https://gumroad.com/inkofqalb',
  },
  {
    id: 'pal-2',
    title: 'Jerusalem Stone',
    category: 'palestine',
    price: '$5.00',
    imageUrl: 'https://images.unsplash.com/photo-1549488346-601cb1804791?q=80&w=800&auto=format&fit=crop',
    link: 'https://gumroad.com/inkofqalb',
  },

  // --- Sudan Wallpapers ---
  {
    id: 'sud-1',
    title: 'Meroe Pyramids',
    category: 'sudan',
    price: '$5.00',
    imageUrl: 'https://images.unsplash.com/photo-1539493122176-7964b3ce7c0f?q=80&w=800&auto=format&fit=crop',
    link: 'https://gumroad.com/inkofqalb',
  },
  {
    id: 'sud-2',
    title: 'Nile Reflections',
    category: 'sudan',
    price: '$5.00',
    imageUrl: 'https://images.unsplash.com/photo-1518242058097-4078864f7b64?q=80&w=800&auto=format&fit=crop', // Abstract water
    link: 'https://gumroad.com/inkofqalb',
  },

  // --- Nature ---
  {
    id: 'nat-1',
    title: 'Divine Light',
    category: 'nature',
    price: '$4.00',
    imageUrl: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=800&auto=format&fit=crop',
    link: 'https://gumroad.com/inkofqalb',
  },
  {
    id: 'nat-2',
    title: 'Silent Mountains',
    category: 'nature',
    price: '$4.00',
    imageUrl: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=800&auto=format&fit=crop',
    link: 'https://gumroad.com/inkofqalb',
  },

  // --- Words (Sabr, Shukr) ---
  {
    id: 'wrd-1',
    title: 'Sabr (Patience)',
    category: 'words',
    price: '$3.00',
    imageUrl: 'https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?q=80&w=800&auto=format&fit=crop', // Abstract Calligraphy
    link: 'https://gumroad.com/inkofqalb',
  },
  {
    id: 'wrd-2',
    title: 'Shukr (Gratitude)',
    category: 'words',
    price: '$3.00',
    imageUrl: 'https://images.unsplash.com/photo-1584551246679-0daf3d275d0f?q=80&w=800&auto=format&fit=crop',
    link: 'https://gumroad.com/inkofqalb',
  },

  // --- Names of Allah ---
  {
    id: 'nam-1',
    title: 'Al-Nur (The Light)',
    category: 'names',
    price: '$5.00',
    imageUrl: 'https://images.unsplash.com/photo-1519817650390-64a93db51149?q=80&w=800&auto=format&fit=crop',
    link: 'https://gumroad.com/inkofqalb',
  },
  
  // --- Makkah & Madina ---
  {
    id: 'mak-1',
    title: 'The Kaaba',
    category: 'makkah',
    price: '$6.00',
    imageUrl: 'https://images.unsplash.com/photo-1565656073-774431713437?q=80&w=800&auto=format&fit=crop',
    link: 'https://gumroad.com/inkofqalb',
  },
  {
    id: 'mak-2',
    title: 'Masjid An-Nabawi',
    category: 'makkah',
    price: '$6.00',
    imageUrl: 'https://images.unsplash.com/photo-1564121211835-e88c852648ab?q=80&w=800&auto=format&fit=crop',
    link: 'https://gumroad.com/inkofqalb',
  },
];