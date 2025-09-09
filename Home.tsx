import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, MapPin, Users, Award } from 'lucide-react';
import { destinations } from '../data/destinations';
import DestinationCard from '../components/DestinationCard';

const Home: React.FC = () => {
  const featuredDestinations = destinations.slice(0, 3);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-50 via-blue-50 to-purple-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Discover the Heart of
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600"> Jharkhand</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Experience authentic tribal culture, pristine forests, and spiritual heritage through our AI-powered smart tourism platform
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/destinations"
                className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Explore Destinations
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/itinerary"
                className="inline-flex items-center px-8 py-3 border border-gray-300 text-base font-medium rounded-lg text-gray-700 bg-white hover:bg-gray-50 transition-colors duration-300"
              >
                <Sparkles className="mr-2 h-5 w-5" />
                AI Trip Planner
              </Link>
            </div>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-green-200 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-16 h-16 bg-blue-200 rounded-full opacity-20 animate-pulse delay-1000"></div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-green-100 rounded-full">
                  <MapPin className="h-8 w-8 text-green-600" />
                </div>
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">50+</h3>
              <p className="text-gray-600">Curated Destinations</p>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-blue-100 rounded-full">
                  <Users className="h-8 w-8 text-blue-600" />
                </div>
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">200+</h3>
              <p className="text-gray-600">Verified Guides</p>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-purple-100 rounded-full">
                  <Award className="h-8 w-8 text-purple-600" />
                </div>
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">1000+</h3>
              <p className="text-gray-600">Happy Travelers</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Destinations */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Featured Destinations
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover Jharkhand's most captivating places, from pristine national parks to sacred spiritual sites
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredDestinations.map((destination) => (
              <DestinationCard key={destination.id} destination={destination} />
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/destinations"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-green-600 bg-green-50 hover:bg-green-100 transition-colors duration-300"
            >
              View All Destinations
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Smart Tourism Features
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our AI-powered platform offers cutting-edge features to enhance your travel experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl">
              <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mb-4">
                <Sparkles className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">AI Itinerary Planner</h3>
              <p className="text-gray-600">
                Get personalized travel plans based on your preferences, budget, and time
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                <MapPin className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Interactive Maps</h3>
              <p className="text-gray-600">
                Explore destinations with real-time location data and AR previews
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl">
              <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Verified Guides</h3>
              <p className="text-gray-600">
                Connect with certified local guides for authentic cultural experiences
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Explore Jharkhand?
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Start your journey today with our AI-powered platform and discover the authentic beauty of Jharkhand
          </p>
          <Link
            to="/itinerary"
            className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-lg text-green-600 bg-white hover:bg-gray-50 transition-colors duration-300 shadow-lg hover:shadow-xl"
          >
            <Sparkles className="mr-2 h-5 w-5" />
            Plan Your Trip Now
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;