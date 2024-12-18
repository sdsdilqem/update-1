export interface Follower {
  id: string;
  username: string;
  avatar: string;
  isVerified: boolean;
  isFollowing: boolean;
  followedAt: string;
}