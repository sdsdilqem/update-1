import React from 'react';
import { LucideIcon } from 'lucide-react';

interface TabButtonProps {
  icon: LucideIcon;
  label: string;
  isActive: boolean;
  onClick: () => void;
}

export default function TabButton({ icon: Icon, label, isActive, onClick }: TabButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`
        relative flex items-center space-x-2 py-3.5 px-4 flex-1 justify-center
        transition-colors text-sm
        ${isActive ? 'text-gray-900' : 'text-gray-500 hover:text-gray-700'}
      `}
    >
      <Icon className="w-4 h-4" />
      <span className="font-medium">{label}</span>
      {isActive && (
        <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 to-blue-600" />
      )}
    </button>
  );
}