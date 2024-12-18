import { useState, useCallback } from 'react';
import type { FeedTab } from '../types';

export function useFeed(initialTab: FeedTab = 'discover') {
  const [activeTab, setActiveTab] = useState<FeedTab>(initialTab);

  const handleTabChange = useCallback((tab: FeedTab) => {
    setActiveTab(tab);
  }, []);

  return {
    activeTab,
    handleTabChange
  };
}