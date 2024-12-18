import React from 'react';
import PostGrid from '../../PostGrid';
import { samplePosts } from '../../../data/samplePosts';

export default function DiscoverFeed() {
  return <PostGrid posts={samplePosts} />;
}