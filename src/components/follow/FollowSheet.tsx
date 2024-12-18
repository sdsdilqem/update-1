import React from 'react';
import { Users } from 'lucide-react';
import BottomSheet from '../common/BottomSheet';
import FollowList from './FollowList';
import type { FollowUser } from '../../types/follow';

interface FollowSheetProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  users: FollowUser[];
  onFollow: (userId: string) => Promise<void>;
  onUnfollow: (userId: string) => Promise<void>;
  loading?: boolean;
}

export default function FollowSheet({
  isOpen,
  onClose,
  title,
  users,
  onFollow,
  onUnfollow,
  loading
}: FollowSheetProps) {
  return (
    <BottomSheet isOpen={isOpen} onClose={onClose}>
      <div className="px-4 pb-6">
        <div className="flex items-center space-x-3 mb-6">
          <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center">
            <Users className="w-5 h-5 text-blue-500" />
          </div>
          <div>
            <h2 className="text-xl font-semibold">{title}</h2>
            <p className="text-sm text-gray-500">{users.length} istifadəçi</p>
          </div>
        </div>

        {loading ? (
          <div className="flex justify-center py-8">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500" />
          </div>
        ) : (
          <FollowList
            users={users}
            onFollow={onFollow}
            onUnfollow={onUnfollow}
          />
        )}
      </div>
    </BottomSheet>
  );
}