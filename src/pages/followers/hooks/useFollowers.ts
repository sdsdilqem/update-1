import { useState, useEffect } from 'react';
import type { Follower } from '../types';

// Mock data - replace with actual API call
const mockFollowers: Follower[] = [
  {
    id: '1',
    username: 'John Doe',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400',
    isVerified: true,
    isFollowing: false,
    followedAt: new Date().toISOString()
  },
  {
    id: '2',
    username: 'Sarah Wilson',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400',
    isVerified: true,
    isFollowing: true,
    followedAt: new Date(Date.now() - 86400000).toISOString()
  }
];

export function useFollowers() {
  const [followers, setFollowers] = useState<Follower[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFollowers = async () => {
      try {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1000));
        setFollowers(mockFollowers);
      } catch (error) {
        console.error('Failed to fetch followers:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchFollowers();
  }, []);

  return { followers, loading };
}