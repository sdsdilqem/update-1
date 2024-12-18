import React from 'react';
import { Sparkles, UsersRound } from 'lucide-react';

interface FeedTabsProps {
  activeTab: 'discover' | 'following';
  onTabChange: (tab: 'discover' | 'following') => void;
}

export default function FeedTabs({ activeTab, onTabChange }: FeedTabsProps) {
  return (
    <div className="bg-white/50 backdrop-blur-sm mb-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex">
          <button
            onClick={() => onTabChange('discover')}
            className={`
              relative flex items-center space-x-2 py-3.5 px-4 flex-1 justify-center
              transition-colors text-sm
              ${activeTab === 'discover'
                ? 'text-gray-900'
                : 'text-gray-500 hover:text-gray-700'
              }
            `}
          >
            <Sparkles className="w-4 h-4" />
            <span className="font-medium">Kəşfet</span>
            {activeTab === 'discover' && (
              <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 to-blue-600" />
            )}
          </button>
          
          <button
            onClick={() => onTabChange('following')}
            className={`
              relative flex items-center space-x-2 py-3.5 px-4 flex-1 justify-center
              transition-colors text-sm
              ${activeTab === 'following'
                ? 'text-gray-900'
                : 'text-gray-500 hover:text-gray-700'
              }
            `}
          >
            <UsersRound className="w-4 h-4" />
            <span className="font-medium">İzlədiklərim</span>
            {activeTab === 'following' && (
              <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 to-blue-600" />
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
