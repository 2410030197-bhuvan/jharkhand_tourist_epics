import React, { useState } from 'react';
import { Calendar, Users, MapPin, IndianRupee, Sparkles, Clock, Star } from 'lucide-react';

const ItineraryPlanner: React.FC = () => {
  const [formData, setFormData] = useState({
    duration: '3',
    budget: 'moderate',
    interests: [] as string[],
    groupSize: '2',
    startDate: '',
    preferredActivities: [] as string[]
  });

  const [generatedItinerary, setGeneratedItinerary] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(false);

  const interests = [
    'Wildlife & Nature',
    'Cultural Heritage',
    'Adventure Sports',
    'Spiritual Sites',
    'Tribal Culture',
    'Photography',
    'Trekking',
    'Local Cuisine'
  ];

  const activities = [
    'Safari',
    'Temple Visits',
    'Village Tours',
    'Waterfall Visits',
    'Craft Workshops',
    'Folk Performances',
    'Nature Walks',
    'Camping'
  ];

  const handleInterestToggle = (interest: string) => {
    setFormData(prev => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter(i => i !== interest)
        : [...prev.interests, interest]
    }));
  };

  const handleActivityToggle = (activity: string) => {
    setFormData(prev => ({
      ...prev,
      preferredActivities: prev.preferredActivities.includes(activity)
        ? prev.preferredActivities.filter(a => a !== activity)
        : [...prev.preferredActivities, activity]
    }));
  };

  const generateItinerary = async () => {
    setIsLoading(true);
    
    // Simulate AI processing
    setTimeout(() => {
      const sampleItinerary = {
        title: 'AI-Curated Jharkhand Adventure',
        duration: parseInt(formData.duration),
        totalCost: formData.budget === 'budget' ? 8500 : formData.budget === 'moderate' ? 15000 : 25000,
        days: [
          {
            day: 1,
            title: 'Arrival in Ranchi & Hundru Falls',
            activities: [
              'Arrival at Ranchi Airport',
              'Check-in at Hotel',
              'Visit Hundru Falls',
              'Sunset photography'
            ],
            destinations: ['Ranchi', 'Hundru Falls'],
            cost: 3500
          },
          {
            day: 2,
            title: 'Betla National Park Safari',
            activities: [
              'Early morning drive to Betla',
              'Wildlife Safari',
              'Lunch at Forest Rest House',
              'Evening nature walk'
            ],
            destinations: ['Betla National Park'],
            cost: 4500
          },
          {
            day: 3,
            title: 'Cultural Experience & Departure',
            activities: [
              'Visit to tribal village',
              'Traditional craft workshop',
              'Local lunch with community',
              'Departure'
            ],
            destinations: ['Tribal Village'],
            cost: 3000
          }
        ],
        highlights: [
          'AI-optimized route planning',
          'Verified local guides',
          'Cultural immersion experiences',
          'Wildlife photography opportunities'
        ]
      };
      
      setGeneratedItinerary(sampleItinerary);
      setIsLoading(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            AI Trip Planner
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Let our AI create a personalized itinerary based on your preferences and interests
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Trip Duration
              </label>
              <div className="relative">
                <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <select
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
                  value={formData.duration}
                  onChange={(e) => setFormData(prev => ({ ...prev, duration: e.target.value }))}
                >
                  <option value="2">2 Days</option>
                  <option value="3">3 Days</option>
                  <option value="4">4 Days</option>
                  <option value="5">5 Days</option>
                  <option value="7">1 Week</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Budget Range
              </label>
              <div className="relative">
                <IndianRupee className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <select
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
                  value={formData.budget}
                  onChange={(e) => setFormData(prev => ({ ...prev, budget: e.target.value }))}
                >
                  <option value="budget">Budget (₹5,000-10,000)</option>
                  <option value="moderate">Moderate (₹10,000-20,000)</option>
                  <option value="luxury">Luxury (₹20,000+)</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Group Size
              </label>
              <div className="relative">
                <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <select
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
                  value={formData.groupSize}
                  onChange={(e) => setFormData(prev => ({ ...prev, groupSize: e.target.value }))}
                >
                  <option value="1">Solo Traveler</option>
                  <option value="2">Couple</option>
                  <option value="3-4">Small Group (3-4)</option>
                  <option value="5+">Large Group (5+)</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Start Date
              </label>
              <input
                type="date"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
                value={formData.startDate}
                onChange={(e) => setFormData(prev => ({ ...prev, startDate: e.target.value }))}
              />
            </div>
          </div>

          <div className="mb-8">
            <label className="block text-sm font-medium text-gray-700 mb-3">
              Your Interests
            </label>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {interests.map((interest) => (
                <button
                  key={interest}
                  onClick={() => handleInterestToggle(interest)}
                  className={`p-3 rounded-lg text-sm font-medium transition-colors ${
                    formData.interests.includes(interest)
                      ? 'bg-green-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {interest}
                </button>
              ))}
            </div>
          </div>

          <div className="mb-8">
            <label className="block text-sm font-medium text-gray-700 mb-3">
              Preferred Activities
            </label>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {activities.map((activity) => (
                <button
                  key={activity}
                  onClick={() => handleActivityToggle(activity)}
                  className={`p-3 rounded-lg text-sm font-medium transition-colors ${
                    formData.preferredActivities.includes(activity)
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {activity}
                </button>
              ))}
            </div>
          </div>

          <button
            onClick={generateItinerary}
            disabled={isLoading}
            className="w-full bg-gradient-to-r from-green-600 to-blue-600 text-white py-4 rounded-lg font-semibold hover:from-green-700 hover:to-blue-700 transition-all duration-300 disabled:opacity-50 flex items-center justify-center space-x-2"
          >
            {isLoading ? (
              <>
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                <span>Generating Your Perfect Trip...</span>
              </>
            ) : (
              <>
                <Sparkles className="h-5 w-5" />
                <span>Generate AI Itinerary</span>
              </>
            )}
          </button>
        </div>

        {generatedItinerary && (
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">
                {generatedItinerary.title}
              </h2>
              <div className="flex items-center justify-center space-x-6 text-gray-600">
                <div className="flex items-center space-x-1">
                  <Calendar className="h-5 w-5" />
                  <span>{generatedItinerary.duration} Days</span>
                </div>
                <div className="flex items-center space-x-1">
                  <IndianRupee className="h-5 w-5" />
                  <span>₹{generatedItinerary.totalCost.toLocaleString()}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Star className="h-5 w-5 text-yellow-500" />
                  <span>AI Optimized</span>
                </div>
              </div>
            </div>

            <div className="space-y-6 mb-8">
              {generatedItinerary.days.map((day: any) => (
                <div key={day.day} className="border border-gray-200 rounded-lg p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-gray-900">
                      Day {day.day}: {day.title}
                    </h3>
                    <div className="flex items-center space-x-1 text-gray-600">
                      <IndianRupee className="h-4 w-4" />
                      <span>₹{day.cost.toLocaleString()}</span>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-700 mb-2">Activities</h4>
                      <ul className="space-y-2">
                        {day.activities.map((activity: string, index: number) => (
                          <li key={index} className="flex items-center space-x-2 text-gray-600">
                            <Clock className="h-4 w-4" />
                            <span>{activity}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-700 mb-2">Destinations</h4>
                      <ul className="space-y-2">
                        {day.destinations.map((destination: string, index: number) => (
                          <li key={index} className="flex items-center space-x-2 text-gray-600">
                            <MapPin className="h-4 w-4" />
                            <span>{destination}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-green-50 rounded-lg p-6">
              <h4 className="font-bold text-gray-900 mb-3">Trip Highlights</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {generatedItinerary.highlights.map((highlight: string, index: number) => (
                  <div key={index} className="flex items-center space-x-2 text-green-700">
                    <Sparkles className="h-4 w-4" />
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <button className="flex-1 bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors">
                Book This Itinerary
              </button>
              <button className="flex-1 border border-gray-300 text-gray-700 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
                Customize Further
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ItineraryPlanner;