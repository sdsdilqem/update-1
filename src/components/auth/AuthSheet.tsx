import React, { useEffect, useState } from 'react';
import BottomSheet from '../common/BottomSheet';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';
import { useAuth } from '../../contexts/AuthContext';

interface AuthSheetProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AuthSheet({ isOpen, onClose }: AuthSheetProps) {
  const { showAuthSheet, setShowAuthSheet } = useAuth();
  const [activeTab, setActiveTab] = useState<'login' | 'register'>(showAuthSheet.defaultTab);

  useEffect(() => {
    if (showAuthSheet.isOpen) {
      setActiveTab(showAuthSheet.defaultTab);
    }
  }, [showAuthSheet.defaultTab]);

  const handleClose = () => {
    onClose();
    setShowAuthSheet({ isOpen: false, defaultTab: 'login' });
  };

  return (
    <BottomSheet isOpen={isOpen} onClose={handleClose}>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold">
          {activeTab === 'login' ? 'Daxil ol' : 'Qeydiyyat'}
        </h2>
      </div>

      {activeTab === 'login' ? (
        <LoginForm onSuccess={handleClose} />
      ) : (
        <RegisterForm onSuccess={handleClose} />
      )}

      <button
        onClick={() => setActiveTab(activeTab === 'login' ? 'register' : 'login')}
        className="w-full text-center text-blue-500 mt-4"
      >
        {activeTab === 'login' ? 'Qeydiyyatdan keçin' : 'Daxil olun'}
      </button>
    </BottomSheet>
  );
}