import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import LanguageSwitcher from './components/LanguageSwitcher';
import ChatBot from './components/ChatBot';
import Home from './pages/Home';
import Destinations from './pages/Destinations';
import ItineraryPlanner from './pages/ItineraryPlanner';
import Marketplace from './pages/Marketplace';
import Guides from './pages/Guides';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/destinations" element={<Destinations />} />
          <Route path="/itinerary" element={<ItineraryPlanner />} />
          <Route path="/marketplace" element={<Marketplace />} />
          <Route path="/guides" element={<Guides />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
        <ChatBot />
      </div>
    </Router>
  );
}

export default App;