import React from 'react';
import { Clock, Heart } from 'lucide-react';

interface ProfileStatsProps {
  responseTime: string;
  totalLikes: number;
}

export default function ProfileStats({ responseTime, totalLikes }: ProfileStatsProps) {
  return (
    <div className="grid grid-cols-2 gap-4 mb-8">
      <div className="bg-gray-50 p-4 rounded-xl">
        <div className="flex items-center space-x-2 text-sm text-gray-500 mb-1">
          <Clock className="w-4 h-4" />
          <span>Cavablama müddəti</span>
        </div>
        <p className="font-medium">{responseTime}</p>
      </div>
      <div className="bg-gray-50 p-4 rounded-xl">
        <div className="flex items-center space-x-2 text-sm text-gray-500 mb-1">
          <Heart className="w-4 h-4" />
          <span>Bəyənmə sayı</span>
        </div>
        <p className="font-medium">{totalLikes}</p>
      </div>
    </div>
  );
}