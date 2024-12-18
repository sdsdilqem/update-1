import React, { useState } from 'react';
import { ImagePlus, ArrowLeft } from 'lucide-react';
import { PostFormData } from '../../../types/post';

interface StepTwoProps {
  initialData: PostFormData;
  onBack: () => void;
  onSubmit: (data: Partial<PostFormData>) => void;
}

export default function StepTwo({ initialData, onBack, onSubmit }: StepTwoProps) {
  const [formData, setFormData] = useState({
    price: initialData.price,
    images: initialData.images,
    phone: initialData.phone
  });

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, '');
    if (value.length <= 10) {
      // Format as 0XX XXX XX XX
      if (value.length > 0) value = '0' + value;
      if (value.length > 3) value = value.slice(0, 3) + ' ' + value.slice(3);
      if (value.length > 7) value = value.slice(0, 7) + ' ' + value.slice(7);
      if (value.length > 9) value = value.slice(0, 9) + ' ' + value.slice(9);
      
      setFormData(prev => ({ ...prev, phone: value }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="price" className="block text-sm font-medium text-gray-700 mb-1">
          Qiymət
        </label>
        <div className="relative">
          <input
            type="number"
            id="price"
            value={formData.price}
            onChange={(e) => setFormData(prev => ({ ...prev, price: e.target.value }))}
            className="w-full pl-12 pr-4 py-2.5 bg-gray-50 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-100"
            placeholder="0.00"
            required
          />
          <span className="absolute left-4 top-2.5 text-gray-500">₼</span>
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Şəkillər
        </label>
        <div className="grid grid-cols-4 gap-2">
          {[...Array(4)].map((_, i) => (
            <button
              key={i}
              type="button"
              className="aspect-square bg-gray-50 rounded-xl flex items-center justify-center hover:bg-gray-100 transition-colors"
            >
              <ImagePlus className="w-6 h-6 text-gray-400" />
            </button>
          ))}
        </div>
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
          Əlaqə nömrəsi
        </label>
        <input
          type="tel"
          id="phone"
          value={formData.phone}
          onChange={handlePhoneChange}
          className="w-full px-4 py-2.5 bg-gray-50 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-100"
          placeholder="0XX XXX XX XX"
          required
        />
      </div>

      <div className="flex space-x-3">
        <button
          type="button"
          onClick={onBack}
          className="flex-1 bg-gray-100 text-gray-600 py-3 rounded-xl hover:bg-gray-200 transition-colors flex items-center justify-center space-x-2"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Geri</span>
        </button>
        <button
          type="submit"
          className="flex-1 bg-blue-500 text-white py-3 rounded-xl hover:bg-blue-600 transition-colors"
        >
          Paylaş
        </button>
      </div>
    </form>
  );
}