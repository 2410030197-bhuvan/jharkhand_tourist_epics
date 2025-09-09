import { Destination } from '../types';

export const destinations: Destination[] = [
  {
    id: '1',
    name: 'Betla National Park',
    type: 'eco-tourism',
    location: 'Latehar District',
    description: 'Betla National Park, also known as Palamau Tiger Reserve, is one of the earliest tiger reserves in India. Home to diverse wildlife including tigers, elephants, and over 180 bird species.',
    images: [
      'https://images.pexels.com/photos/247599/pexels-photo-247599.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/142497/pexels-photo-142497.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    rating: 4.5,
    reviews: 324,
    highlights: ['Tiger Safari', 'Wildlife Photography', 'Bird Watching', 'Forest Trekking'],
    bestTime: 'October to March',
    activities: ['Safari', 'Nature Walks', 'Photography', 'Wildlife Spotting'],
    difficulty: 'Easy',
    duration: '2-3 days',
    price: 2500
  },
  {
    id: '2',
    name: 'Hundru Falls',
    type: 'eco-tourism',
    location: 'Ranchi',
    description: 'Hundru Falls is a magnificent 98-meter waterfall on the Subarnarekha River. The scenic beauty and thundering water make it one of Jharkhand\'s most visited natural attractions.',
    images: [
      'https://images.pexels.com/photos/457882/pexels-photo-457882.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1612351/pexels-photo-1612351.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    rating: 4.3,
    reviews: 567,
    highlights: ['Waterfall Views', 'Monsoon Beauty', 'Photography', 'Picnic Spots'],
    bestTime: 'July to February',
    activities: ['Sightseeing', 'Photography', 'Picnicking', 'Rock Climbing'],
    difficulty: 'Moderate',
    duration: '1 day',
    price: 800
  },
  {
    id: '3',
    name: 'Netarhat',
    type: 'eco-tourism',
    location: 'Latehar District',
    description: 'Known as the "Queen of Chotanagpur", Netarhat is a beautiful hill station offering breathtaking sunrise and sunset views, dense forests, and cool climate.',
    images: [
      'https://images.pexels.com/photos/167699/pexels-photo-167699.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1423600/pexels-photo-1423600.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    rating: 4.7,
    reviews: 892,
    highlights: ['Sunrise Point', 'Sunset Point', 'Forest Walks', 'Cool Climate'],
    bestTime: 'October to March',
    activities: ['Trekking', 'Nature Photography', 'Camping', 'Forest Walks'],
    difficulty: 'Easy',
    duration: '2-3 days',
    price: 3200
  },
  {
    id: '4',
    name: 'Deoghar',
    type: 'spiritual',
    location: 'Deoghar District',
    description: 'Deoghar is one of the most sacred Hindu pilgrimage sites, home to the famous Baba Baidyanath Temple, one of the 12 Jyotirlingas in India.',
    images: [
      'https://images.pexels.com/photos/1098460/pexels-photo-1098460.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/2259917/pexels-photo-2259917.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    rating: 4.8,
    reviews: 1245,
    highlights: ['Baidyanath Temple', 'Spiritual Experience', 'Cultural Heritage', 'Religious Festivals'],
    bestTime: 'October to March',
    activities: ['Temple Visits', 'Religious Tours', 'Cultural Exploration', 'Festival Participation'],
    difficulty: 'Easy',
    duration: '2-3 days',
    price: 2000
  },
  {
    id: '5',
    name: 'Patratu Valley',
    type: 'eco-tourism',
    location: 'Ramgarh District',
    description: 'Patratu Valley offers stunning landscapes with its dam, hills, and valleys. Perfect for adventure sports and nature enthusiasts.',
    images: [
      'https://images.pexels.com/photos/210186/pexels-photo-210186.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    rating: 4.4,
    reviews: 678,
    highlights: ['Valley Views', 'Dam', 'Adventure Sports', 'Scenic Drives'],
    bestTime: 'October to March',
    activities: ['Paragliding', 'Boating', 'Photography', 'Hiking'],
    difficulty: 'Moderate',
    duration: '1-2 days',
    price: 1800
  },
  {
    id: '6',
    name: 'Tribal Villages',
    type: 'cultural',
    location: 'Various Districts',
    description: 'Experience authentic tribal culture, traditional crafts, folk dances, and indigenous lifestyle of Jharkhand\'s tribal communities.',
    images: [
      'https://images.pexels.com/photos/1402787/pexels-photo-1402787.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1670770/pexels-photo-1670770.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    rating: 4.6,
    reviews: 445,
    highlights: ['Tribal Culture', 'Traditional Crafts', 'Folk Dance', 'Authentic Cuisine'],
    bestTime: 'November to February',
    activities: ['Cultural Tours', 'Craft Workshops', 'Folk Performances', 'Village Stays'],
    difficulty: 'Easy',
    duration: '2-4 days',
    price: 2800
  }
];