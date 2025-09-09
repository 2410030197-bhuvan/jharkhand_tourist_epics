import React, { useState } from 'react';
import { Shield, Check, AlertCircle, Clock } from 'lucide-react';

interface BlockchainVerificationProps {
  type: 'guide' | 'transaction' | 'booking';
  id: string;
  onVerify?: (verified: boolean) => void;
}

const BlockchainVerification: React.FC<BlockchainVerificationProps> = ({ 
  type, 
  id, 
  onVerify 
}) => {
  const [verificationStatus, setVerificationStatus] = useState<'pending' | 'verifying' | 'verified' | 'failed'>('pending');

  const handleVerification = async () => {
    setVerificationStatus('verifying');
    
    // Simulate blockchain verification process
    setTimeout(() => {
      const isVerified = Math.random() > 0.1; // 90% success rate
      setVerificationStatus(isVerified ? 'verified' : 'failed');
      if (onVerify) onVerify(isVerified);
    }, 2000);
  };

  const getStatusIcon = () => {
    switch (verificationStatus) {
      case 'pending':
        return <Shield className="h-5 w-5 text-blue-600" />;
      case 'verifying':
        return <Clock className="h-5 w-5 text-yellow-600 animate-spin" />;
      case 'verified':
        return <Check className="h-5 w-5 text-green-600" />;
      case 'failed':
        return <AlertCircle className="h-5 w-5 text-red-600" />;
      default:
        return <Shield className="h-5 w-5 text-gray-600" />;
    }
  };

  const getStatusText = () => {
    switch (verificationStatus) {
      case 'pending':
        return 'Verify on Blockchain';
      case 'verifying':
        return 'Verifying...';
      case 'verified':
        return 'Blockchain Verified';
      case 'failed':
        return 'Verification Failed';
      default:
        return 'Unknown Status';
    }
  };

  const getStatusColor = () => {
    switch (verificationStatus) {
      case 'pending':
        return 'text-blue-600 bg-blue-50 border-blue-200';
      case 'verifying':
        return 'text-yellow-600 bg-yellow-50 border-yellow-200';
      case 'verified':
        return 'text-green-600 bg-green-50 border-green-200';
      case 'failed':
        return 'text-red-600 bg-red-50 border-red-200';
      default:
        return 'text-gray-600 bg-gray-50 border-gray-200';
    }
  };

  return (
    <div className={`border rounded-lg p-4 ${getStatusColor()}`}>
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          {getStatusIcon()}
          <span className="font-medium text-sm">{getStatusText()}</span>
        </div>
        
        {verificationStatus === 'pending' && (
          <button
            onClick={handleVerification}
            className="px-3 py-1 text-xs font-medium bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
          >
            Verify Now
          </button>
        )}
      </div>

      {verificationStatus === 'verified' && (
        <div className="mt-3 text-xs text-green-700">
          <p><strong>Transaction Hash:</strong> 0x{Math.random().toString(16).substr(2, 40)}</p>
          <p><strong>Block:</strong> {Math.floor(Math.random() * 1000000) + 18500000}</p>
          <p><strong>Network:</strong> Jharkhand Tourism Chain</p>
        </div>
      )}

      {verificationStatus === 'verifying' && (
        <div className="mt-2 text-xs text-yellow-700">
          <p>Validating {type} #{id} on blockchain network...</p>
        </div>
      )}

      {verificationStatus === 'failed' && (
        <div className="mt-2 text-xs text-red-700">
          <p>Unable to verify on blockchain. Please try again or contact support.</p>
        </div>
      )}
    </div>
  );
};

export default BlockchainVerification;