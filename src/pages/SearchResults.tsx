import React, { useState } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { ArrowLeft, SlidersHorizontal, Search, X } from 'lucide-react';
import PostGrid from '../components/PostGrid';
import { samplePosts } from '../data/samplePosts';
import SearchFiltersSheet from './search/components/SearchFiltersSheet';
import SearchSortSheet from './search/components/SearchSortSheet';
import ActiveFilters from './search/components/ActiveFilters';

export default function SearchResults() {
  const [searchParams] = useSearchParams();
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);
  const [isSortOpen, setIsSortOpen] = useState(false);
  
  const query = searchParams.get('q') || '';
  const filteredPosts = samplePosts.filter(post => 
    post.title.toLowerCase().includes(query.toLowerCase())
  );

  const [activeFilters] = useState([
    { id: 'price', label: '₼100 - ₼500' },
    { id: 'condition', label: 'Yeni' }
  ]);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="sticky top-0 z-30 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4">
          <div className="h-16 flex items-center space-x-4">
            <Link to="/" className="p-2 -ml-2 hover:bg-gray-50 rounded-full">
              <ArrowLeft className="w-5 h-5" />
            </Link>
            
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-2.5 w-5 h-5 text-gray-400" />
              <input
                type="text"
                defaultValue={query}
                placeholder="Axtarış..."
                className="w-full pl-10 pr-4 py-2 bg-gray-50 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-100"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Filter Bar */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4">
          <div className="py-3 flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <button
                onClick={() => setIsFiltersOpen(true)}
                className="flex items-center space-x-2 px-3 py-1.5 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
              >
                <SlidersHorizontal className="w-4 h-4" />
                <span className="text-sm">Filtrlər</span>
              </button>
              <button
                onClick={() => setIsSortOpen(true)}
                className="flex items-center space-x-2 px-3 py-1.5 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
              >
                <span className="text-sm">Sıralama</span>
              </button>
            </div>
            <span className="text-sm text-gray-500">
              {filteredPosts.length} nəticə
            </span>
          </div>

          {/* Active Filters */}
          {activeFilters.length > 0 && (
            <ActiveFilters filters={activeFilters} />
          )}
        </div>
      </div>

      {/* Results */}
      <div className="max-w-7xl mx-auto px-4 py-6">
        {filteredPosts.length > 0 ? (
          <PostGrid posts={filteredPosts} />
        ) : (
          <div className="text-center py-12">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <X className="w-8 h-8 text-gray-400" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              Heç bir nəticə tapılmadı
            </h3>
            <p className="text-gray-500">
              Axtarış sözünü dəyişdirməyi və ya filtrləri silməyi yoxlayın
            </p>
          </div>
        )}
      </div>

      {/* Filter & Sort Sheets */}
      <SearchFiltersSheet
        isOpen={isFiltersOpen}
        onClose={() => setIsFiltersOpen(false)}
      />
      <SearchSortSheet
        isOpen={isSortOpen}
        onClose={() => setIsSortOpen(false)}
      />
    </div>
  );
}