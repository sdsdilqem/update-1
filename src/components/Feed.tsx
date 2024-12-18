import React from 'react';
import CreatePostButton from './create-post/CreatePostButton';
import CategoriesBar from './categories/CategoriesBar';
import FeedTabs from './feed/tabs/FeedTabs';
import DiscoverFeed from './feed/content/DiscoverFeed';
import FollowingFeed from './feed/content/FollowingFeed';
import { useFeed } from './feed/hooks/useFeed';

export default function Feed() {
  const { activeTab, handleTabChange } = useFeed();

  return (
    <div className="mx-auto py-6">
      <div className="max-w-7xl mx-auto px-1 sm:px-4 lg:px-6">
        <CategoriesBar />
        <CreatePostButton />
        <FeedTabs activeTab={activeTab} onTabChange={handleTabChange} />
      </div>
      <div className="max-w-7xl mx-auto">
        {activeTab === 'discover' ? <DiscoverFeed /> : <FollowingFeed />}
      </div>
    </div>
  );
}