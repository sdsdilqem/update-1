import React from 'react';
import { UserPlus, UserMinus } from 'lucide-react';

interface FollowButtonProps {
  isFollowing: boolean;
  onFollow: () => void;
  onUnfollow: () => void;
}

export default function FollowButton({ isFollowing, onFollow, onUnfollow }: FollowButtonProps) {
  return (
    <button
      onClick={isFollowing ? onUnfollow : onFollow}
      className={`
        flex items-center space-x-1 px-3 py-1.5 rounded-lg text-sm font-medium transition-colors
        ${isFollowing
          ? 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          : 'bg-blue-500 text-white hover:bg-blue-600'
        }
      `}
    >
      {isFollowing ? (
        <>
          <UserMinus className="w-4 h-4" />
          <span>İzləyirsən</span>
        </>
      ) : (
        <>
          <UserPlus className="w-4 h-4" />
          <span>İzlə</span>
        </>
      )}
    </button>
  );
}