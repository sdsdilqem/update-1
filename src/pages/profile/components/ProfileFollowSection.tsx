import React, { useState } from 'react';
import { Users } from 'lucide-react';
import FollowSheet from '../../../components/follow/FollowSheet';
import { useFollow } from '../../../hooks/useFollow';

interface ProfileFollowSectionProps {
  userId: string;
}

export default function ProfileFollowSection({ userId }: ProfileFollowSectionProps) {
  const [showFollowers, setShowFollowers] = useState(false);

  const {
    followStats,
    followers,
    loading,
    fetchFollowers,
    followUser,
    unfollowUser
  } = useFollow(userId);

  const handleFollowersClick = async () => {
    await fetchFollowers();
    setShowFollowers(true);
  };

  return (
    <>
      <button
        onClick={handleFollowersClick}
        className="flex items-center space-x-2 hover:text-blue-500 transition-colors"
      >
        <Users className="w-5 h-5" />
        <div className="text-left">
          <span className="block font-semibold">{followStats.followersCount}</span>
          <span className="text-sm text-gray-500">İzləyici</span>
        </div>
      </button>

      <FollowSheet
        isOpen={showFollowers}
        onClose={() => setShowFollowers(false)}
        title="İzləyicilər"
        users={followers}
        onFollow={followUser}
        onUnfollow={unfollowUser}
        loading={loading}
      />
    </>
  );
}