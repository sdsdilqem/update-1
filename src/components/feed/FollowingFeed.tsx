import React from 'react';
import { useAuth } from '../../contexts/AuthContext';
import PostGrid from '../PostGrid';
import LoginPrompt from './LoginPrompt';
import { samplePosts } from '../../data/samplePosts';

export default function FollowingFeed() {
  const { user } = useAuth();

  if (!user) {
    return <LoginPrompt />;
  }

  // In a real app, we would filter posts by followed users
  const followingPosts = samplePosts.slice(0, 4); // Showing fewer posts for demo

  return followingPosts.length > 0 ? (
    <PostGrid posts={followingPosts} />
  ) : (
    <div className="text-center py-12">
      <p className="text-gray-500">İzlədiyiniz istifadəçilərin elanları burada görünəcək</p>
    </div>
  );
}