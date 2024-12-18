import { useState, useCallback } from 'react';
import api from '../../config/api';
import type { FollowUser } from '../../types/follow';
import { handleApiError } from '../../utils/error';
import { showNotification } from '../../utils/notifications';

export function useFollowList(userId: string) {
  const [users, setUsers] = useState<FollowUser[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchFollowers = useCallback(async () => {
    try {
      setLoading(true);
      const response = await api.get(`/api/follow/followers/${userId}`);
      setUsers(response.data);
    } catch (error) {
      const message = handleApiError(error, 'Failed to fetch followers');
      showNotification(message, 'error');
    } finally {
      setLoading(false);
    }
  }, [userId]);

  const fetchFollowing = useCallback(async () => {
    try {
      setLoading(true);
      const response = await api.get(`/api/follow/following/${userId}`);
      setUsers(response.data);
    } catch (error) {
      const message = handleApiError(error, 'Failed to fetch following');
      showNotification(message, 'error');
    } finally {
      setLoading(false);
    }
  }, [userId]);

  return {
    users,
    loading,
    fetchFollowers,
    fetchFollowing
  };
}