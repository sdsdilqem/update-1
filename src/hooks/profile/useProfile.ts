import { useState, useEffect } from 'react';
import api from '../../config/api';
import { handleApiError } from '../../utils/error';
import { showNotification } from '../../utils/notifications';
import type { User } from '../../types/user';

export function useProfile(username: string) {
  const [profile, setProfile] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await api.get(`/api/users/${username}`);
        setProfile(response.data);
      } catch (error) {
        const { message } = handleApiError(error, 'Failed to fetch profile');
        showNotification(message, 'error');
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, [username]);

  return { profile, loading };
}