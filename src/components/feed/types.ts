export type FeedTab = 'discover' | 'following';

export interface FeedState {
  activeTab: FeedTab;
  isLoading: boolean;
  error: string | null;
}