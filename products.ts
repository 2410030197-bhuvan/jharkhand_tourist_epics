import { Product } from '../types';

export const products: Product[] = [
  {
    id: '1',
    name: 'Dokra Metal Craft',
    category: 'handicraft',
    price: 2500,
    image: 'https://images.pexels.com/photos/1670770/pexels-photo-1670770.jpeg?auto=compress&cs=tinysrgb&w=400',
    seller: 'Tribal Artisan Cooperative',
    rating: 4.7,
    description: 'Traditional Dokra metal craft made by skilled tribal artisans using ancient lost-wax casting technique.',
    location: 'Khunti District'
  },
  {
    id: '2',
    name: 'Tribal Village Homestay',
    category: 'homestay',
    price: 1800,
    image: 'https://images.pexels.com/photos/1402787/pexels-photo-1402787.jpeg?auto=compress&cs=tinysrgb&w=400',
    seller: 'Munda Family Homestay',
    rating: 4.8,
    description: 'Experience authentic tribal lifestyle with comfortable accommodation and traditional meals.',
    location: 'Gumla District'
  },
  {
    id: '3',
    name: 'Handwoven Textiles',
    category: 'handicraft',
    price: 1200,
    image: 'https://images.pexels.com/photos/4969879/pexels-photo-4969879.jpeg?auto=compress&cs=tinysrgb&w=400',
    seller: 'Women Self Help Group',
    rating: 4.6,
    description: 'Beautiful handwoven fabrics with traditional tribal patterns and natural colors.',
    location: 'Simdega District'
  },
  {
    id: '4',
    name: 'Forest Eco-Camp Experience',
    category: 'experience',
    price: 3500,
    image: 'https://images.pexels.com/photos/1687845/pexels-photo-1687845.jpeg?auto=compress&cs=tinysrgb&w=400',
    seller: 'Eco-Adventure Jharkhand',
    rating: 4.9,
    description: '2-day forest camping experience with guided nature walks and wildlife spotting.',
    location: 'Betla National Park'
  }
];