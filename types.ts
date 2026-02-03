import { LucideIcon } from 'lucide-react';

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  Icon: LucideIcon;
}

export interface ProductItem {
  id: string;
  name: string;
  price: number;
  category: string;
  imageUrl: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  role?: string; // e.g., "Dueño de Yamaha MT-09"
  rating: number;
  comment: string;
  avatarUrl: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
  description?: string;
}