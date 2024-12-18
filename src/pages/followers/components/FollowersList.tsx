import React from 'react';
import { Shield } from 'lucide-react';
import { formatDistanceToNow } from 'date-fns';
import type { Follower } from '../types';
import FollowButton from './FollowButton';

interface FollowersListProps {
  followers: Follower[];
  loading: boolean;
}

export default function FollowersList({ followers, loading }: FollowersListProps) {
  if (loading) {
    return (
      <div className="flex justify-center py-8">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500" />
      </div>
    );
  }

  if (followers.length === 0) {
    return (
      <div className="text-center py-8">
        <p className="text-gray-500">Hələ heç bir izləyiciniz yoxdur</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {followers.map((follower) => (
        <div
          key={follower.id}
          className="flex items-start space-x-4 p-4 bg-white rounded-xl border border-gray-100"
        >
          <img
            src={follower.avatar}
            alt={follower.username}
            className="w-12 h-12 rounded-full object-cover"
          />
          <div className="flex-1 min-w-0">
            <div className="flex items-center space-x-2">
              <span className="font-medium">{follower.username}</span>
              {follower.isVerified && (
                <Shield className="w-4 h-4 text-blue-500" />
              )}
            </div>
            <p className="text-sm text-gray-500">
              {formatDistanceToNow(new Date(follower.followedAt), { addSuffix: true })}
            </p>
          </div>
          <FollowButton
            isFollowing={follower.isFollowing}
            onFollow={() => {}}
            onUnfollow={() => {}}
          />
        </div>
      ))}
    </div>
  );
}