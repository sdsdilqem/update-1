import React from 'react';
import { Check } from 'lucide-react';
import BottomSheet from '../../../components/common/BottomSheet';

interface SearchSortSheetProps {
  isOpen: boolean;
  onClose: () => void;
}

const sortOptions = [
  'Ən yenilər',
  'Qiymət: Ucuzdan bahaya',
  'Qiymət: Bahadan ucuza',
  'Ən çox baxılanlar',
  'Ən çox bəyənilənlər'
];

export default function SearchSortSheet({ isOpen, onClose }: SearchSortSheetProps) {
  return (
    <BottomSheet isOpen={isOpen} onClose={onClose}>
      <div className="px-4 pb-6">
        <h2 className="text-xl font-semibold mb-6">Sıralama</h2>
        <div className="space-y-2">
          {sortOptions.map((option) => (
            <button
              key={option}
              className="w-full flex items-center justify-between p-3 hover:bg-gray-50 rounded-xl transition-colors"
            >
              <span className="text-gray-700">{option}</span>
              <Check className="w-5 h-5 text-blue-500" />
            </button>
          ))}
        </div>
      </div>
    </BottomSheet>
  );
}