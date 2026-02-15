export interface Product {
  id: string;
  title: string;
  category: string;
  price: string;
  imageUrl: string;
  link: string;
}

export interface Category {
  id: string;
  label: string;
}

export type SectionId = 'home' | 'products' | 'about' | 'contact';