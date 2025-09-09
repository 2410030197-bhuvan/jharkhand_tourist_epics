export interface Destination {
  id: string;
  name: string;
  type: 'eco-tourism' | 'cultural' | 'historical' | 'adventure' | 'spiritual';
  location: string;
  description: string;
  images: string[];
  rating: number;
  reviews: number;
  highlights: string[];
  bestTime: string;
  activities: string[];
  difficulty: 'Easy' | 'Moderate' | 'Challenging';
  duration: string;
  price: number;
}

export interface Guide {
  id: string;
  name: string;
  avatar: string;
  rating: number;
  reviews: number;
  languages: string[];
  specialties: string[];
  experience: number;
  verified: boolean;
  pricePerDay: number;
  location: string;
}

export interface Product {
  id: string;
  name: string;
  category: 'handicraft' | 'homestay' | 'experience' | 'food';
  price: number;
  image: string;
  seller: string;
  rating: number;
  description: string;
  location: string;
}

export interface Itinerary {
  id: string;
  title: string;
  duration: number;
  destinations: string[];
  totalCost: number;
  difficulty: string;
  type: string[];
}

export interface TourismStats {
  totalVisitors: number;
  monthlyGrowth: number;
  topDestinations: { name: string; visitors: number }[];
  revenueGenerated: number;
  localBusinesses: number;
}