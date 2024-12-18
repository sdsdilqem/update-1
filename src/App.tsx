import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import Navbar from './components/Navbar';
import Feed from './components/Feed';
import ProductDetail from './pages/ProductDetail';
import CategoryPage from './pages/CategoryPage';
import SellerProfile from './pages/SellerProfile';
import MessagesPage from './pages/messages/MessagesPage';
import LikesPage from './pages/likes/LikesPage';
import OrdersPage from './pages/orders/OrdersPage';
import SettingsPage from './pages/settings/SettingsPage';
import PromotionPage from './pages/promotion/PromotionPage';
import FollowersPage from './pages/followers/FollowersPage';
import SearchResults from './pages/SearchResults';

export default function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen bg-gray-50 flex flex-col">
          <Navbar />
          <main className="flex-1 safe-area-top safe-area-bottom">
            <Routes>
              <Route path="/" element={<Feed />} />
              <Route path="/search" element={<SearchResults />} />
              <Route path="/product/:id" element={<ProductDetail />} />
              <Route path="/product/:id/promote" element={<PromotionPage />} />
              <Route path="/category/:name" element={<CategoryPage />} />
              <Route path="/seller/:username" element={<SellerProfile />} />
              <Route path="/messages" element={<MessagesPage />} />
              <Route path="/likes" element={<LikesPage />} />
              <Route path="/orders" element={<OrdersPage />} />
              <Route path="/settings" element={<SettingsPage />} />
              <Route path="/followers" element={<FollowersPage />} />
            </Routes>
          </main>
        </div>
      </Router>
    </AuthProvider>
  );
}