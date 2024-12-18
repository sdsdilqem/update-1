export interface Follow {
  id: string;
  followerId: string;
  followingId: string;
  createdAt: Date;
}

export interface FollowStats {
  followersCount: number;
}

export interface FollowUser {
  id: string;
  username: string;
  avatar: string;
  verificationLevel: 'BASIC' | 'VERIFIED' | 'PREMIUM';
  isFollowing: boolean;
}