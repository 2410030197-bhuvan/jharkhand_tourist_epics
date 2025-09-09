import React, { useState } from 'react';
import { Globe } from 'lucide-react';

interface Language {
  code: string;
  name: string;
  nativeName: string;
}

const languages: Language[] = [
  { code: 'en', name: 'English', nativeName: 'English' },
  { code: 'hi', name: 'Hindi', nativeName: 'हिंदी' },
  { code: 'ng', name: 'Nagpuri', nativeName: 'नागपुरी' },
  { code: 'st', name: 'Santhali', nativeName: 'ᱥᱟᱱᱛᱟᱲᱤ' },
];

const LanguageSwitcher: React.FC = () => {
  const [currentLanguage, setCurrentLanguage] = useState('en');
  const [isOpen, setIsOpen] = useState(false);

  const handleLanguageChange = (langCode: string) => {
    setCurrentLanguage(langCode);
    setIsOpen(false);
    // In a real app, this would trigger translation logic
    console.log(`Language changed to: ${langCode}`);
  };

  const getCurrentLanguage = () => {
    return languages.find(lang => lang.code === currentLanguage) || languages[0];
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors"
      >
        <Globe className="h-4 w-4" />
        <span className="text-sm font-medium">{getCurrentLanguage().code.toUpperCase()}</span>
      </button>

      {isOpen && (
        <>
          <div
            className="fixed inset-0 z-10"
            onClick={() => setIsOpen(false)}
          />
          <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 z-20">
            <div className="py-2">
              {languages.map((language) => (
                <button
                  key={language.code}
                  onClick={() => handleLanguageChange(language.code)}
                  className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-100 transition-colors ${
                    currentLanguage === language.code ? 'bg-green-50 text-green-600' : 'text-gray-700'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span>{language.name}</span>
                    <span className="text-xs text-gray-500">{language.nativeName}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default LanguageSwitcher;