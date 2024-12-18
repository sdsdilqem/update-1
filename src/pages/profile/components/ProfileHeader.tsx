import React from 'react';
import { Shield, Star } from 'lucide-react';

interface ProfileHeaderProps {
  username: string;
  avatar: string;
  verificationLevel: string;
  rating: number;
  totalSales: number;
  bio: string;
}

export default function ProfileHeader({
  username,
  avatar,
  verificationLevel,
  rating,
  totalSales,
  bio
}: ProfileHeaderProps) {
  return (
    <div className="flex items-start space-x-4 mb-6">
      <img
        src={avatar}
        alt={username}
        className="w-20 h-20 rounded-full object-cover"
      />
      <div className="flex-1">
        <div className="flex items-center space-x-2 mb-1">
          <h2 className="text-xl font-semibold">{username}</h2>
          {verificationLevel === 'VERIFIED' && (
            <Shield className="w-5 h-5 text-blue-500" />
          )}
        </div>
        <div className="flex items-center space-x-1 text-sm text-gray-500">
          <div className="flex items-center bg-yellow-50 text-yellow-700 px-2 py-0.5 rounded-full">
            <Star className="w-4 h-4 mr-1 fill-yellow-400 text-yellow-400" />
            <span className="font-medium">{rating}</span>
          </div>
          <span>•</span>
          <span>{totalSales} satış</span>
        </div>
        <p className="mt-2 text-sm text-gray-600">{bio}</p>
      </div>
    </div>
  );
}