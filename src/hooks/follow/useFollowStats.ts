import { useState, useCallback } from 'react';
import api from '../../config/api';
import type { FollowStats } from '../../types/follow';
import { handleApiError } from '../../utils/error';
import { showNotification } from '../../utils/notifications';

export function useFollowStats(userId: string) {
  const [stats, setStats] = useState<FollowStats>({
    followersCount: 0,
    followingCount: 0
  });
  const [loading, setLoading] = useState(false);

  const fetchStats = useCallback(async () => {
    try {
      setLoading(true);
      const response = await api.get(`/api/follow/stats/${userId}`);
      setStats(response.data);
    } catch (error) {
      const message = handleApiError(error, 'Failed to fetch follow stats');
      showNotification(message, 'error');
    } finally {
      setLoading(false);
    }
  }, [userId]);

  return {
    stats,
    loading,
    fetchStats
  };
}