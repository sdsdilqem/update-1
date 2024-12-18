import React from 'react';
import { Users } from 'lucide-react';
import type { FollowStats as FollowStatsType } from '../../types/follow';

interface FollowStatsProps {
  stats: FollowStatsType;
  onFollowersClick: () => void;
  onFollowingClick: () => void;
}

export default function FollowStats({
  stats,
  onFollowersClick,
  onFollowingClick
}: FollowStatsProps) {
  return (
    <div className="flex items-center space-x-6">
      <button
        onClick={onFollowersClick}
        className="flex items-center space-x-2 hover:text-blue-500 transition-colors"
      >
        <Users className="w-5 h-5" />
        <div className="text-left">
          <span className="block font-semibold">{stats.followersCount}</span>
          <span className="text-sm text-gray-500">İzləyici</span>
        </div>
      </button>

      <button
        onClick={onFollowingClick}
        className="flex items-center space-x-2 hover:text-blue-500 transition-colors"
      >
        <Users className="w-5 h-5" />
        <div className="text-left">
          <span className="block font-semibold">{stats.followingCount}</span>
          <span className="text-sm text-gray-500">İzləyir</span>
        </div>
      </button>
    </div>
  );
}