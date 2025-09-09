import React, { useState } from 'react';
import { Camera, Eye, Smartphone, X } from 'lucide-react';

interface ARPreviewProps {
  destinationName: string;
  images: string[];
}

const ARPreview: React.FC<ARPreviewProps> = ({ destinationName, images }) => {
  const [showARModal, setShowARModal] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleARPreview = () => {
    setShowARModal(true);
  };

  return (
    <>
      <button
        onClick={handleARPreview}
        className="flex items-center space-x-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300"
      >
        <Eye className="h-4 w-4" />
        <span>AR Preview</span>
      </button>

      {showARModal && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-hidden">
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-bold text-gray-900">
                  AR Preview: {destinationName}
                </h3>
                <button
                  onClick={() => setShowARModal(false)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              <div className="relative">
                <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg p-8 text-center">
                  <div className="mb-6">
                    <img
                      src={images[currentImageIndex]}
                      alt={destinationName}
                      className="w-full h-64 object-cover rounded-lg shadow-lg"
                    />
                  </div>

                  {/* AR Simulation Overlay */}
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-20 rounded-lg animate-pulse"></div>
                    <div className="relative bg-white p-6 rounded-lg shadow-lg">
                      <div className="flex items-center justify-center space-x-4 mb-4">
                        <Camera className="h-8 w-8 text-blue-600" />
                        <div className="text-center">
                          <h4 className="text-lg font-semibold text-gray-900">AR Mode Simulation</h4>
                          <p className="text-sm text-gray-600">360° Virtual Experience</p>
                        </div>
                      </div>

                      <div className="grid grid-cols-3 gap-4 mb-4">
                        {images.slice(0, 3).map((image, index) => (
                          <button
                            key={index}
                            onClick={() => setCurrentImageIndex(index)}
                            className={`relative overflow-hidden rounded-lg ${
                              currentImageIndex === index ? 'ring-2 ring-blue-500' : ''
                            }`}
                          >
                            <img
                              src={image}
                              alt={`View ${index + 1}`}
                              className="w-full h-20 object-cover hover:scale-110 transition-transform duration-300"
                            />
                          </button>
                        ))}
                      </div>

                      <div className="space-y-3">
                        <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                          <span className="text-sm font-medium">Temperature</span>
                          <span className="text-sm text-blue-600">24°C</span>
                        </div>
                        <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                          <span className="text-sm font-medium">Best Time to Visit</span>
                          <span className="text-sm text-green-600">Now</span>
                        </div>
                        <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                          <span className="text-sm font-medium">Crowd Level</span>
                          <span className="text-sm text-yellow-600">Moderate</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* AR Instructions */}
                <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                  <div className="flex items-start space-x-3">
                    <Smartphone className="h-5 w-5 text-blue-600 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-blue-900 mb-2">How to use AR Preview</h4>
                      <ul className="text-sm text-blue-700 space-y-1">
                        <li>• Point your device camera at the destination</li>
                        <li>• Get real-time information overlay</li>
                        <li>• View historical significance and cultural details</li>
                        <li>• Access interactive 3D models and virtual tours</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="mt-4 flex space-x-4">
                  <button className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300">
                    Launch Mobile AR
                  </button>
                  <button className="flex-1 border border-gray-300 text-gray-700 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
                    Download AR App
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ARPreview;