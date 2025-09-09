import React, { useState } from 'react';
import { MessageCircle, Send, X, Bot, User } from 'lucide-react';

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

const ChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Namaste! मैं आपकी झारखंड यात्रा में सहायता करने के लिए यहाँ हूँ। आप कैसे मदद चाहते हैं?",
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [inputText, setInputText] = useState('');

  const predefinedResponses: { [key: string]: string } = {
    'betla': 'Betla National Park is one of Jharkhand\'s premier wildlife destinations. Best time to visit is October to March. Safari timings are 6:30 AM - 10:30 AM and 2:30 PM - 5:30 PM.',
    'hundru': 'Hundru Falls is a beautiful 98-meter waterfall near Ranchi. Best visited during monsoons (July-September). Entry fee is ₹10 per person.',
    'deoghar': 'Deoghar is famous for Baba Baidyanath Temple, one of the 12 Jyotirlingas. Best time to visit is October to March. During Shravan month, millions of devotees visit.',
    'netarhat': 'Netarhat is called the "Queen of Chotanagpur" with beautiful sunrise and sunset points. Best time to visit is October to March when weather is pleasant.',
    'booking': 'You can book destinations through our platform. Click on any destination card and select your preferred dates. We offer secure blockchain-verified transactions.',
    'guide': 'Our verified local guides are available for all major destinations. Rates start from ₹1200/day. All guides are blockchain-verified for your safety.',
  };

  const handleSendMessage = () => {
    if (!inputText.trim()) return;

    const newUserMessage: Message = {
      id: messages.length + 1,
      text: inputText,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, newUserMessage]);

    // Simple AI response logic
    setTimeout(() => {
      let botResponse = "I understand you're asking about Jharkhand tourism. Let me help you with that!";
      
      const lowerInput = inputText.toLowerCase();
      for (const [key, response] of Object.entries(predefinedResponses)) {
        if (lowerInput.includes(key)) {
          botResponse = response;
          break;
        }
      }

      const botMessage: Message = {
        id: messages.length + 2,
        text: botResponse,
        sender: 'bot',
        timestamp: new Date()
      };

      setMessages(prev => [...prev, botMessage]);
    }, 1000);

    setInputText('');
  };

  const quickActions = [
    'Book a tour',
    'Find local guides',
    'Weather information',
    'Transportation help',
    'Cultural events'
  ];

  return (
    <>
      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 bg-gradient-to-r from-green-600 to-blue-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-50"
      >
        <MessageCircle className="h-6 w-6" />
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 w-96 h-[500px] bg-white rounded-lg shadow-2xl border z-50 flex flex-col">
          {/* Header */}
          <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white p-4 rounded-t-lg">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Bot className="h-5 w-5" />
                <div>
                  <h3 className="font-semibold">झारखंड AI Assistant</h3>
                  <p className="text-xs opacity-90">Multilingual Tourism Guide</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="hover:bg-white hover:bg-opacity-20 p-1 rounded"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div className={`flex items-start space-x-2 max-w-[80%] ${
                  message.sender === 'user' ? 'flex-row-reverse space-x-reverse' : ''
                }`}>
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs text-white ${
                    message.sender === 'user' ? 'bg-green-600' : 'bg-blue-600'
                  }`}>
                    {message.sender === 'user' ? <User className="h-3 w-3" /> : <Bot className="h-3 w-3" />}
                  </div>
                  <div className={`p-3 rounded-lg ${
                    message.sender === 'user' 
                      ? 'bg-green-600 text-white rounded-br-sm' 
                      : 'bg-gray-100 text-gray-800 rounded-bl-sm'
                  }`}>
                    <p className="text-sm">{message.text}</p>
                    <p className="text-xs opacity-70 mt-1">
                      {message.timestamp.toLocaleTimeString('en-US', { 
                        hour: '2-digit', 
                        minute: '2-digit' 
                      })}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Quick Actions */}
          <div className="px-4 py-2 border-t">
            <div className="flex flex-wrap gap-1">
              {quickActions.slice(0, 3).map((action) => (
                <button
                  key={action}
                  onClick={() => setInputText(action)}
                  className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full hover:bg-gray-200 transition-colors"
                >
                  {action}
                </button>
              ))}
            </div>
          </div>

          {/* Input */}
          <div className="p-4 border-t">
            <div className="flex space-x-2">
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder="Type your question in English or Hindi..."
                className="flex-1 border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
              <button
                onClick={handleSendMessage}
                className="bg-green-600 text-white p-2 rounded-lg hover:bg-green-700 transition-colors"
              >
                <Send className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatBot;