import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import BottomSheet from '../common/BottomSheet';
import { 
  Settings, 
  Package, 
  Heart, 
  LogOut, 
  MessageCircle, 
  ShoppingBag,
  UserRoundCheck
} from 'lucide-react';

interface ProfileSheetProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ProfileSheet({ isOpen, onClose }: ProfileSheetProps) {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const menuItems = [
    { icon: MessageCircle, label: 'Mesajlar', path: '/messages' },
    { icon: Heart, label: 'Bəyənmələr', path: '/likes' },
    { icon: ShoppingBag, label: 'Sifarişlər', path: '/orders' },
    { icon: UserRoundCheck, label: 'İzlədiklərim', path: '/following' },
    { icon: Package, label: 'Mənim elanlarım', path: '/my-listings' },
    { icon: Settings, label: 'Tənzimləmələr', path: '/settings' },
    { 
      icon: LogOut, 
      label: 'Çıxış', 
      action: () => {
        logout();
        onClose();
      }, 
      color: 'text-red-500' 
    }
  ];

  const handleItemClick = (item: typeof menuItems[0]) => {
    if (item.action) {
      item.action();
    } else if (item.path) {
      navigate(item.path);
      onClose();
    }
  };

  if (!user) return null;

  return (
    <BottomSheet isOpen={isOpen} onClose={onClose}>
      <div className="px-4 pb-6">
        <div className="flex items-center space-x-4 mb-6">
          <img
            src={user.avatar}
            alt={user.username}
            className="w-16 h-16 rounded-full object-cover"
          />
          <div>
            <h2 className="text-xl font-semibold">{user.username}</h2>
            <p className="text-sm text-gray-500">{user.email}</p>
          </div>
        </div>

        <div className="space-y-2">
          {menuItems.map((item) => (
            <button
              key={item.label}
              onClick={() => handleItemClick(item)}
              className={`w-full flex items-center space-x-3 p-4 rounded-xl hover:bg-gray-50 transition-colors ${
                item.color || 'text-gray-700'
              }`}
            >
              <item.icon className="w-5 h-5" />
              <span>{item.label}</span>
            </button>
          ))}
        </div>
      </div>
    </BottomSheet>
  );
}