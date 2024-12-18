import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Star, Shield, Package, Clock, Heart, Users, MessageCircle, UserPlus, UserMinus } from 'lucide-react';
import { samplePosts } from '../data/samplePosts';
import PostGrid from '../components/PostGrid';
import { useFollow } from '../hooks/useFollow';
import { useAuth } from '../contexts/AuthContext';

export default function SellerProfile() {
  const { username } = useParams();
  const { user, setShowAuthSheet } = useAuth();
  const [isFollowing, setIsFollowing] = useState(false);
  const sellerPosts = samplePosts.filter(post => post.username === username);
  const { followStats, fetchFollowStats } = useFollow(username || '');

  React.useEffect(() => {
    fetchFollowStats();
  }, [fetchFollowStats]);
  
  const seller = {
    username: username,
    avatar: sellerPosts[0]?.avatar || 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400',
    joinDate: 'Mart 2023',
    bio: 'Texnologiya həvəskarı və keyfiyyətli məhsulların satıcısı',
    rating: 4.8,
    totalSales: 45,
    totalLikes: sellerPosts.reduce((sum, post) => sum + post.likes, 0),
    responseTime: '~2 saat',
    verificationLevel: 'VERIFIED'
  };

  const handleFollowClick = () => {
    if (!user) {
      setShowAuthSheet({ isOpen: true, defaultTab: 'login' });
      return;
    }
    setIsFollowing(!isFollowing);
  };

  const handleMessageClick = () => {
    if (!user) {
      setShowAuthSheet({ isOpen: true, defaultTab: 'login' });
      return;
    }
    // Handle message action
  };

  return (
    <div className="pb-28">
      {/* Header */}
      <div className="bg-white sticky top-16 z-30 border-b">
        <div className="max-w-2xl mx-auto px-4">
          <div className="h-14 flex items-center space-x-4">
            <Link to="/" className="p-2 -ml-2 hover:bg-gray-50 rounded-full">
              <ArrowLeft className="w-5 h-5" />
            </Link>
            <h1 className="font-semibold">Satıcı profili</h1>
          </div>
        </div>
      </div>

      {/* Profile Info */}
      <div className="max-w-2xl mx-auto px-4 py-6">
        <div className="flex items-start space-x-4 mb-6">
          <img
            src={seller.avatar}
            alt={seller.username}
            className="w-20 h-20 rounded-full object-cover"
          />
          <div className="flex-1">
            <div className="flex items-center space-x-2 mb-1">
              <h2 className="text-xl font-semibold">{seller.username}</h2>
              {seller.verificationLevel === 'VERIFIED' && (
                <Shield className="w-5 h-5 text-blue-500" />
              )}
            </div>
            <div className="flex items-center space-x-1 text-sm text-gray-500">
              <div className="flex items-center bg-yellow-50 text-yellow-700 px-2 py-0.5 rounded-full">
                <Star className="w-4 h-4 mr-1 fill-yellow-400 text-yellow-400" />
                <span className="font-medium">{seller.rating}</span>
              </div>
              <span>•</span>
              <span>{seller.totalSales} satış</span>
            </div>
            <p className="mt-2 text-sm text-gray-600">{seller.bio}</p>
          </div>
        </div>

        {/* Stats */}
        <div className="bg-white rounded-2xl p-6 shadow-sm mb-8">
          <div className="grid grid-cols-3 divide-x divide-gray-100">
            {/* Response Time */}
            <div className="px-4 first:pl-0 last:pr-0">
              <div className="flex items-center space-x-2 mb-1">
                <Clock className="w-4 h-4 text-blue-500" />
                <span className="text-sm text-gray-600">Cavablama</span>
              </div>
              <p className="text-lg font-semibold">{seller.responseTime}</p>
            </div>

            {/* Likes */}
            <div className="px-4 first:pl-0 last:pr-0">
              <div className="flex items-center space-x-2 mb-1">
                <Heart className="w-4 h-4 text-red-500" />
                <span className="text-sm text-gray-600">Bəyənmə</span>
              </div>
              <p className="text-lg font-semibold">{seller.totalLikes}</p>
            </div>

            {/* Followers */}
            <div className="px-4 first:pl-0 last:pr-0">
              <div className="flex items-center space-x-2 mb-1">
                <Users className="w-4 h-4 text-purple-500" />
                <span className="text-sm text-gray-600">İzləyici</span>
              </div>
              <p className="text-lg font-semibold">{followStats.followersCount}</p>
            </div>
          </div>
        </div>

        {/* Active Listings */}
        <div>
          <h3 className="font-semibold mb-4">Aktiv elanlar</h3>
          <PostGrid posts={sellerPosts} />
        </div>
      </div>

      {/* Sticky Bottom Buttons */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t px-4 py-3">
        <div className="flex space-x-3 max-w-2xl mx-auto">
          <button
            onClick={handleFollowClick}
            className={`flex-1 flex items-center justify-center space-x-2 px-4 py-3 rounded-xl transition-colors ${
              isFollowing
                ? 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                : 'bg-blue-500 text-white hover:bg-blue-600'
            }`}
          >
            {isFollowing ? (
              <>
                <UserMinus className="w-5 h-5" />
                <span>İzləyirsən</span>
              </>
            ) : (
              <>
                <UserPlus className="w-5 h-5" />
                <span>İzlə</span>
              </>
            )}
          </button>
          <button
            onClick={handleMessageClick}
            className="flex-1 flex items-center justify-center space-x-2 px-4 py-3 bg-gray-100 text-gray-700 rounded-xl hover:bg-gray-200 transition-colors"
          >
            <MessageCircle className="w-5 h-5" />
            <span>Mesaj göndər</span>
          </button>
        </div>
      </div>
    </div>
  );
}