import React from 'react';
import { X } from 'lucide-react';

interface Filter {
  id: string;
  label: string;
}

interface ActiveFiltersProps {
  filters: Filter[];
}

export default function ActiveFilters({ filters }: ActiveFiltersProps) {
  return (
    <div className="flex items-center space-x-2 py-2 overflow-x-auto no-scrollbar">
      {filters.map((filter) => (
        <button
          key={filter.id}
          className="flex items-center space-x-1 px-2 py-1 bg-blue-50 text-blue-600 rounded-lg text-sm whitespace-nowrap"
        >
          <span>{filter.label}</span>
          <X className="w-4 h-4" />
        </button>
      ))}
    </div>
  );
}