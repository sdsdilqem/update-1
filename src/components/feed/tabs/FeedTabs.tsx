import React from 'react';
import { Sparkle, UserRoundCheck } from 'lucide-react';
import TabButton from './TabButton';
import type { FeedTab } from '../types';

interface FeedTabsProps {
  activeTab: FeedTab;
  onTabChange: (tab: FeedTab) => void;
}

export default function FeedTabs({ activeTab, onTabChange }: FeedTabsProps) {
  return (
    <div className="bg-white/50 backdrop-blur-sm mb-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex">
          <TabButton
            icon={Sparkle}
            label="Kəşfet"
            isActive={activeTab === 'discover'}
            onClick={() => onTabChange('discover')}
          />
          <TabButton
            icon={UserRoundCheck}
            label="İzlədiklərim"
            isActive={activeTab === 'following'}
            onClick={() => onTabChange('following')}
          />
        </div>
      </div>
    </div>
  );
}