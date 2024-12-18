import React from 'react';
import { Check } from 'lucide-react';
import BottomSheet from '../../../components/common/BottomSheet';

interface SearchFiltersSheetProps {
  isOpen: boolean;
  onClose: () => void;
}

const priceRanges = [
  '₼0 - ₼100',
  '₼100 - ₼500',
  '₼500 - ₼1000',
  '₼1000+'
];

const conditions = [
  'Yeni',
  'Yaxşı',
  'İşlənmiş',
  'Köhnə'
];

export default function SearchFiltersSheet({ isOpen, onClose }: SearchFiltersSheetProps) {
  return (
    <BottomSheet isOpen={isOpen} onClose={onClose}>
      <div className="px-4 pb-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold">Filtrlər</h2>
          <button className="text-sm text-blue-500">Sıfırla</button>
        </div>

        {/* Price Range */}
        <div className="mb-6">
          <h3 className="text-sm font-medium text-gray-700 mb-3">Qiymət aralığı</h3>
          <div className="space-y-2">
            {priceRanges.map((range) => (
              <button
                key={range}
                className="w-full flex items-center justify-between p-3 hover:bg-gray-50 rounded-xl transition-colors"
              >
                <span className="text-gray-700">{range}</span>
                <Check className="w-5 h-5 text-blue-500" />
              </button>
            ))}
          </div>
        </div>

        {/* Condition */}
        <div className="mb-6">
          <h3 className="text-sm font-medium text-gray-700 mb-3">Vəziyyət</h3>
          <div className="space-y-2">
            {conditions.map((condition) => (
              <button
                key={condition}
                className="w-full flex items-center justify-between p-3 hover:bg-gray-50 rounded-xl transition-colors"
              >
                <span className="text-gray-700">{condition}</span>
                <Check className="w-5 h-5 text-blue-500" />
              </button>
            ))}
          </div>
        </div>

        <button
          onClick={onClose}
          className="w-full bg-blue-500 text-white py-3 rounded-xl hover:bg-blue-600 transition-colors"
        >
          Tətbiq et
        </button>
      </div>
    </BottomSheet>
  );
}