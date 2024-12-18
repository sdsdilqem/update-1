import React, { useState } from 'react';
import CategorySheet from './CategorySheet';
import { categories } from './constants';
import type { Category } from '../../types/category';

export default function CategoriesBar() {
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  const handleCategoryClick = (category: Category) => {
    setSelectedCategory(category);
    setIsSheetOpen(true);
  };

  return (
    <>
      <div className="bg-white shadow-sm mb-4">
        <div className="grid grid-cols-3 gap-3 p-4">
          {categories.map((category, index) => (
            <button
              key={category.id}
              className={`
                flex flex-col items-center p-3 space-y-2 rounded-xl transition-all
                hover:bg-blue-50 hover:scale-[1.02] active:scale-100
                ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white border border-gray-100'}
              `}
              onClick={() => handleCategoryClick(category)}
            >
              <div className={`
                w-12 h-12 rounded-xl flex items-center justify-center
                ${index % 3 === 0 ? 'bg-blue-50 text-blue-500' :
                  index % 3 === 1 ? 'bg-purple-50 text-purple-500' :
                  'bg-amber-50 text-amber-500'}
              `}>
                {<category.icon className="w-6 h-6" />}
              </div>
              <span className="text-sm font-medium text-gray-700 text-center leading-tight">
                {category.name}
              </span>
            </button>
          ))}
        </div>
      </div>

      <CategorySheet
        isOpen={isSheetOpen}
        onClose={() => setIsSheetOpen(false)}
        category={selectedCategory}
      />
    </>
  );
}