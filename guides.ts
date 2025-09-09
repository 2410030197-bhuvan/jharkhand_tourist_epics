import { Guide } from '../types';

export const guides: Guide[] = [
  {
    id: '1',
    name: 'Ravi Kumar Mahato',
    avatar: 'https://images.pexels.com/photos/1172253/pexels-photo-1172253.jpeg?auto=compress&cs=tinysrgb&w=200',
    rating: 4.8,
    reviews: 127,
    languages: ['Hindi', 'English', 'Nagpuri'],
    specialties: ['Wildlife Tours', 'Eco-tourism', 'Photography'],
    experience: 8,
    verified: true,
    pricePerDay: 1500,
    location: 'Ranchi'
  },
  {
    id: '2',
    name: 'Sunita Devi',
    avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=200',
    rating: 4.9,
    reviews: 89,
    languages: ['Hindi', 'English', 'Santhali'],
    specialties: ['Cultural Tours', 'Tribal Heritage', 'Handicrafts'],
    experience: 6,
    verified: true,
    pricePerDay: 1200,
    location: 'Deoghar'
  },
  {
    id: '3',
    name: 'Manoj Singh',
    avatar: 'https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=200',
    rating: 4.7,
    reviews: 156,
    languages: ['Hindi', 'English'],
    specialties: ['Adventure Sports', 'Trekking', 'Mountain Climbing'],
    experience: 10,
    verified: true,
    pricePerDay: 1800,
    location: 'Netarhat'
  }
];