import { useState, useCallback } from 'react';
import api from '../config/api';
import type { FollowStats, FollowUser } from '../types/follow';
import { handleApiError } from '../utils/error';
import { showNotification } from '../utils/notifications';

export function useFollow(userId: string) {
  const [followStats, setFollowStats] = useState<FollowStats>({
    followersCount: 0
  });
  const [followers, setFollowers] = useState<FollowUser[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchFollowStats = useCallback(async () => {
    try {
      const response = await api.get(`/api/follow/stats/${userId}`);
      setFollowStats(response.data);
    } catch (error) {
      const { message } = handleApiError(error, 'Failed to fetch follow stats');
      showNotification(message, 'error');
    }
  }, [userId]);

  const fetchFollowers = useCallback(async () => {
    try {
      setLoading(true);
      const response = await api.get(`/api/follow/followers/${userId}`);
      setFollowers(response.data);
    } catch (error) {
      const { message } = handleApiError(error, 'Failed to fetch followers');
      showNotification(message, 'error');
    } finally {
      setLoading(false);
    }
  }, [userId]);

  const followUser = useCallback(async (followingId: string) => {
    try {
      await api.post(`/api/follow/${followingId}`);
      await fetchFollowStats();
      showNotification('Successfully followed user', 'success');
      
      // Update local state optimistically
      setFollowers(prev => prev.map(user => 
        user.id === followingId ? { ...user, isFollowing: true } : user
      ));
    } catch (error) {
      const { message } = handleApiError(error, 'Failed to follow user');
      showNotification(message, 'error');
      throw error;
    }
  }, [fetchFollowStats]);

  const unfollowUser = useCallback(async (followingId: string) => {
    try {
      await api.delete(`/api/follow/${followingId}`);
      await fetchFollowStats();
      showNotification('Successfully unfollowed user', 'success');
      
      // Update local state optimistically
      setFollowers(prev => prev.map(user => 
        user.id === followingId ? { ...user, isFollowing: false } : user
      ));
    } catch (error) {
      const { message } = handleApiError(error, 'Failed to unfollow user');
      showNotification(message, 'error');
      throw error;
    }
  }, [fetchFollowStats]);

  return {
    followStats,
    followers,
    loading,
    fetchFollowStats,
    fetchFollowers,
    followUser,
    unfollowUser
  };
}