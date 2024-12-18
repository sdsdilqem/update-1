import { useCallback } from 'react';
import api from '../../config/api';
import { handleApiError } from '../../utils/error';
import { showNotification } from '../../utils/notifications';

export function useFollowActions(onSuccess?: () => void) {
  const followUser = useCallback(async (userId: string) => {
    try {
      await api.post(`/api/follow/${userId}`);
      showNotification('Successfully followed user', 'success');
      onSuccess?.();
    } catch (error) {
      const message = handleApiError(error, 'Failed to follow user');
      showNotification(message, 'error');
      throw error;
    }
  }, [onSuccess]);

  const unfollowUser = useCallback(async (userId: string) => {
    try {
      await api.delete(`/api/follow/${userId}`);
      showNotification('Successfully unfollowed user', 'success');
      onSuccess?.();
    } catch (error) {
      const message = handleApiError(error, 'Failed to unfollow user');
      showNotification(message, 'error');
      throw error;
    }
  }, [onSuccess]);

  return {
    followUser,
    unfollowUser
  };
}