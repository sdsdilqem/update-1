import React from 'react';
import { Shield } from 'lucide-react';
import type { FollowUser } from '../../types/follow';
import FollowButton from './FollowButton';

interface FollowListProps {
  users: FollowUser[];
  onFollow: (userId: string) => Promise<void>;
  onUnfollow: (userId: string) => Promise<void>;
}

export default function FollowList({ users, onFollow, onUnfollow }: FollowListProps) {
  return (
    <div className="space-y-4">
      {users.map((user) => (
        <div 
          key={user.id}
          className="flex items-center justify-between p-4 bg-white rounded-xl border border-gray-100"
        >
          <div className="flex items-center space-x-3">
            <img
              src={user.avatar}
              alt={user.username}
              className="w-12 h-12 rounded-full object-cover"
            />
            <div>
              <div className="flex items-center space-x-1">
                <span className="font-medium">{user.username}</span>
                {user.verificationLevel !== 'BASIC' && (
                  <Shield className="w-4 h-4 text-blue-500" />
                )}
              </div>
            </div>
          </div>

          <FollowButton
            userId={user.id}
            isFollowing={user.isFollowing}
            onFollow={() => onFollow(user.id)}
            onUnfollow={() => onUnfollow(user.id)}
          />
        </div>
      ))}
    </div>
  );
}