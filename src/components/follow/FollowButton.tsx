import React from 'react';
import { UserPlus, UserMinus } from 'lucide-react';
import { useFollowButton } from './hooks/useFollowButton';

interface FollowButtonProps {
  userId: string;
  isFollowing: boolean;
  onFollow: () => Promise<void>;
  onUnfollow: () => Promise<void>;
}

export default function FollowButton({ 
  userId, 
  isFollowing, 
  onFollow, 
  onUnfollow 
}: FollowButtonProps) {
  const { loading, handleFollowAction } = useFollowButton({
    onFollow,
    onUnfollow
  });

  return (
    <button
      onClick={() => handleFollowAction(isFollowing)}
      disabled={loading}
      className={`
        flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors
        ${isFollowing 
          ? 'bg-gray-100 hover:bg-gray-200 text-gray-700' 
          : 'bg-blue-500 hover:bg-blue-600 text-white'
        }
        ${loading ? 'opacity-50 cursor-not-allowed' : ''}
      `}
    >
      {isFollowing ? (
        <>
          <UserMinus className="w-5 h-5" />
          <span>İzləyirsən</span>
        </>
      ) : (
        <>
          <UserPlus className="w-5 h-5" />
          <span>İzlə</span>
        </>
      )}
    </button>
  );
}