import React from 'react';
import PostGrid from '../../../components/PostGrid';
import type { Post } from '../../../types/post';

interface ProfileListingsProps {
  posts: Post[];
}

export default function ProfileListings({ posts }: ProfileListingsProps) {
  return (
    <div>
      <h3 className="font-semibold mb-4">Aktiv elanlar</h3>
      <PostGrid posts={posts} />
    </div>
  );
}