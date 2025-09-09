import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from 'recharts';
import { TrendingUp, Users, MapPin, IndianRupee, Eye, Star, Download, Calendar } from 'lucide-react';

const Dashboard: React.FC = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('month');

  // Sample data - in real app, this would come from API
  const visitorData = [
    { name: 'Jan', visitors: 1200, revenue: 450000 },
    { name: 'Feb', visitors: 1800, revenue: 675000 },
    { name: 'Mar', visitors: 2400, revenue: 890000 },
    { name: 'Apr', visitors: 2200, revenue: 820000 },
    { name: 'May', visitors: 2800, revenue: 1040000 },
    { name: 'Jun', visitors: 3200, revenue: 1200000 },
  ];

  const destinationData = [
    { name: 'Betla National Park', visitors: 8500, color: '#10B981' },
    { name: 'Hundru Falls', visitors: 7200, color: '#3B82F6' },
    { name: 'Netarhat', visitors: 6800, color: '#8B5CF6' },
    { name: 'Deoghar', visitors: 9200, color: '#F59E0B' },
    { name: 'Patratu Valley', visitors: 5400, color: '#EF4444' },
  ];

  const recentBookings = [
    { id: 1, destination: 'Betla National Park', tourist: 'Amit Kumar', amount: 3500, status: 'confirmed', date: '2024-01-15' },
    { id: 2, destination: 'Hundru Falls', tourist: 'Priya Sharma', amount: 1800, status: 'pending', date: '2024-01-14' },
    { id: 3, destination: 'Netarhat', tourist: 'Rajesh Singh', amount: 4200, status: 'confirmed', date: '2024-01-14' },
  ];

  const feedbackData = [
    { category: 'Excellent', value: 45, color: '#10B981' },
    { category: 'Good', value: 35, color: '#3B82F6' },
    { category: 'Average', value: 15, color: '#F59E0B' },
    { category: 'Poor', value: 5, color: '#EF4444' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Tourism Analytics Dashboard</h1>
              <p className="text-gray-600 mt-2">Government of Jharkhand - Tourism Department</p>
            </div>
            <div className="flex items-center space-x-4">
              <select 
                value={selectedPeriod}
                onChange={(e) => setSelectedPeriod(e.target.value)}
                className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-500"
              >
                <option value="week">Last Week</option>
                <option value="month">Last Month</option>
                <option value="quarter">Last Quarter</option>
                <option value="year">Last Year</option>
              </select>
              <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors flex items-center space-x-2">
                <Download className="h-4 w-4" />
                <span>Export Report</span>
              </button>
            </div>
          </div>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">Total Visitors</p>
                <p className="text-3xl font-bold text-gray-900">47,230</p>
                <p className="text-green-600 text-sm flex items-center mt-1">
                  <TrendingUp className="h-4 w-4 mr-1" />
                  +15.3% from last month
                </p>
              </div>
              <div className="bg-blue-100 p-3 rounded-full">
                <Users className="h-8 w-8 text-blue-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">Revenue Generated</p>
                <p className="text-3xl font-bold text-gray-900">₹18.5L</p>
                <p className="text-green-600 text-sm flex items-center mt-1">
                  <TrendingUp className="h-4 w-4 mr-1" />
                  +22.1% from last month
                </p>
              </div>
              <div className="bg-green-100 p-3 rounded-full">
                <IndianRupee className="h-8 w-8 text-green-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">Active Destinations</p>
                <p className="text-3xl font-bold text-gray-900">28</p>
                <p className="text-blue-600 text-sm flex items-center mt-1">
                  <Eye className="h-4 w-4 mr-1" />
                  5 new this month
                </p>
              </div>
              <div className="bg-purple-100 p-3 rounded-full">
                <MapPin className="h-8 w-8 text-purple-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">Average Rating</p>
                <p className="text-3xl font-bold text-gray-900">4.7</p>
                <p className="text-yellow-600 text-sm flex items-center mt-1">
                  <Star className="h-4 w-4 mr-1 fill-current" />
                  Based on 2,340 reviews
                </p>
              </div>
              <div className="bg-yellow-100 p-3 rounded-full">
                <Star className="h-8 w-8 text-yellow-600" />
              </div>
            </div>
          </div>
        </div>

        {/* Charts Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Visitor Trends */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Visitor Trends</h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={visitorData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="visitors" stroke="#10B981" strokeWidth={3} />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Revenue Chart */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Revenue Growth</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={visitorData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip formatter={(value) => [`₹${value.toLocaleString()}`, 'Revenue']} />
                <Bar dataKey="revenue" fill="#3B82F6" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Popular Destinations & Feedback */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Popular Destinations */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Popular Destinations</h3>
            <div className="space-y-4">
              {destinationData.map((destination, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div 
                      className="w-4 h-4 rounded-full"
                      style={{ backgroundColor: destination.color }}
                    ></div>
                    <span className="font-medium text-gray-900">{destination.name}</span>
                  </div>
                  <div className="text-right">
                    <div className="font-semibold text-gray-900">{destination.visitors.toLocaleString()}</div>
                    <div className="text-sm text-gray-600">visitors</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Customer Satisfaction */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Customer Satisfaction</h3>
            <ResponsiveContainer width="100%" height={200}>
              <PieChart>
                <Pie
                  data={feedbackData}
                  dataKey="value"
                  nameKey="category"
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  label={({ category, value }) => `${category}: ${value}%`}
                >
                  {feedbackData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Recent Bookings */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Recent Bookings</h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 px-4 font-semibold text-gray-900">Destination</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-900">Tourist</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-900">Amount</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-900">Status</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-900">Date</th>
                </tr>
              </thead>
              <tbody>
                {recentBookings.map((booking) => (
                  <tr key={booking.id} className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="py-3 px-4">{booking.destination}</td>
                    <td className="py-3 px-4">{booking.tourist}</td>
                    <td className="py-3 px-4">₹{booking.amount.toLocaleString()}</td>
                    <td className="py-3 px-4">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        booking.status === 'confirmed' 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {booking.status}
                      </span>
                    </td>
                    <td className="py-3 px-4">{booking.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* AI Insights */}
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl shadow-lg p-8 text-white">
          <h3 className="text-2xl font-bold mb-4">AI-Powered Insights</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white bg-opacity-20 rounded-lg p-4">
              <h4 className="font-semibold mb-2">Peak Season Prediction</h4>
              <p className="text-sm opacity-90">
                AI predicts 35% increase in visitors during December-January based on historical patterns
              </p>
            </div>
            <div className="bg-white bg-opacity-20 rounded-lg p-4">
              <h4 className="font-semibold mb-2">Revenue Optimization</h4>
              <p className="text-sm opacity-90">
                Suggested pricing adjustments could increase revenue by ₹2.3L per month
              </p>
            </div>
            <div className="bg-white bg-opacity-20 rounded-lg p-4">
              <h4 className="font-semibold mb-2">Marketing Insights</h4>
              <p className="text-sm opacity-90">
                Social media campaigns show 18% higher engagement for eco-tourism content
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;