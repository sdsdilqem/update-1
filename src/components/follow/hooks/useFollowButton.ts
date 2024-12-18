import { useState } from 'react';
import { useAuth } from '../../../contexts/AuthContext';
import { showNotification } from '../../../utils/notifications';

interface UseFollowButtonProps {
  onFollow: () => Promise<void>;
  onUnfollow: () => Promise<void>;
}

export const useFollowButton = ({ onFollow, onUnfollow }: UseFollowButtonProps) => {
  const { user, setShowAuthSheet } = useAuth();
  const [loading, setLoading] = useState(false);

  const handleFollowAction = async (isFollowing: boolean) => {
    if (!user) {
      setShowAuthSheet({ isOpen: true, defaultTab: 'login' });
      return;
    }

    try {
      setLoading(true);
      if (isFollowing) {
        await onUnfollow();
      } else {
        await onFollow();
      }
    } catch (error) {
      // Error is already handled by the API error handler
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    handleFollowAction,
    isAuthenticated: !!user
  };
};