import React, { useState } from 'react';
import { Star, MessageSquare, Send, ThumbsUp, ThumbsDown } from 'lucide-react';

interface FeedbackSystemProps {
  destinationId: string;
  destinationName: string;
}

const FeedbackSystem: React.FC<FeedbackSystemProps> = ({ destinationId, destinationName }) => {
  const [rating, setRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);
  const [feedback, setFeedback] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [sentiment, setSentiment] = useState<'positive' | 'negative' | 'neutral'>('neutral');

  const handleSubmit = async () => {
    if (rating === 0) {
      alert('Please provide a rating');
      return;
    }

    // Simulate AI sentiment analysis
    const analyzeSentiment = (text: string): 'positive' | 'negative' | 'neutral' => {
      const positiveWords = ['good', 'great', 'excellent', 'amazing', 'wonderful', 'beautiful', 'love'];
      const negativeWords = ['bad', 'terrible', 'awful', 'poor', 'disappointing', 'worst'];
      
      const lowerText = text.toLowerCase();
      const positiveCount = positiveWords.filter(word => lowerText.includes(word)).length;
      const negativeCount = negativeWords.filter(word => lowerText.includes(word)).length;
      
      if (positiveCount > negativeCount) return 'positive';
      if (negativeCount > positiveCount) return 'negative';
      return 'neutral';
    };

    const detectedSentiment = analyzeSentiment(feedback);
    setSentiment(detectedSentiment);

    // Simulate API call
    setTimeout(() => {
      setSubmitted(true);
      console.log('Feedback submitted:', {
        destinationId,
        rating,
        feedback,
        sentiment: detectedSentiment,
        timestamp: new Date().toISOString()
      });
    }, 1000);
  };

  if (submitted) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
        <div className="flex items-center justify-center mb-4">
          <div className="bg-green-100 p-3 rounded-full">
            <ThumbsUp className="h-6 w-6 text-green-600" />
          </div>
        </div>
        <h3 className="text-lg font-semibold text-green-800 mb-2">Thank You!</h3>
        <p className="text-green-700 mb-3">
          Your feedback has been submitted and analyzed using AI sentiment analysis.
        </p>
        <div className="bg-white p-3 rounded-lg">
          <p className="text-sm text-gray-600">
            <strong>Sentiment Detected:</strong> 
            <span className={`ml-2 px-2 py-1 rounded-full text-xs font-medium ${
              sentiment === 'positive' ? 'bg-green-100 text-green-800' :
              sentiment === 'negative' ? 'bg-red-100 text-red-800' :
              'bg-gray-100 text-gray-800'
            }`}>
              {sentiment.charAt(0).toUpperCase() + sentiment.slice(1)}
            </span>
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6">
      <div className="flex items-center space-x-2 mb-4">
        <MessageSquare className="h-5 w-5 text-blue-600" />
        <h3 className="text-lg font-semibold text-gray-900">
          Share Your Experience - {destinationName}
        </h3>
      </div>

      {/* Star Rating */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Overall Rating
        </label>
        <div className="flex space-x-1">
          {[1, 2, 3, 4, 5].map((star) => (
            <button
              key={star}
              onClick={() => setRating(star)}
              onMouseEnter={() => setHoveredRating(star)}
              onMouseLeave={() => setHoveredRating(0)}
              className="focus:outline-none"
            >
              <Star
                className={`h-8 w-8 transition-colors ${
                  star <= (hoveredRating || rating)
                    ? 'text-yellow-500 fill-current'
                    : 'text-gray-300'
                }`}
              />
            </button>
          ))}
        </div>
        <p className="text-sm text-gray-600 mt-1">
          {rating > 0 && `You rated this ${rating} out of 5 stars`}
        </p>
      </div>

      {/* Feedback Text */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Your Feedback (Optional)
        </label>
        <textarea
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
          placeholder="Share your experience, suggestions, or any issues you encountered..."
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
          rows={4}
        />
        <p className="text-xs text-gray-500 mt-1">
          Your feedback will be analyzed using AI to improve our services
        </p>
      </div>

      {/* Quick Feedback Options */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Quick Feedback
        </label>
        <div className="flex flex-wrap gap-2">
          {[
            'Beautiful scenery',
            'Well maintained',
            'Friendly guides',
            'Good facilities',
            'Value for money',
            'Easy accessibility',
            'Cultural experience',
            'Nature photography'
          ].map((tag) => (
            <button
              key={tag}
              onClick={() => setFeedback(prev => prev ? `${prev}, ${tag}` : tag)}
              className="px-3 py-1 text-sm bg-gray-100 text-gray-700 rounded-full hover:bg-gray-200 transition-colors"
            >
              + {tag}
            </button>
          ))}
        </div>
      </div>

      {/* Submit Button */}
      <button
        onClick={handleSubmit}
        className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2"
      >
        <Send className="h-4 w-4" />
        <span>Submit Feedback</span>
      </button>

      <p className="text-xs text-gray-500 mt-2 text-center">
        Your feedback helps improve tourism experiences in Jharkhand
      </p>
    </div>
  );
};

export default FeedbackSystem;