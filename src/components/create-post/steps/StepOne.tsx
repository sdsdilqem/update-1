import React from 'react';
import { PostFormData } from '../../../types/post';
import { Check } from 'lucide-react';

interface StepOneProps {
  initialData: PostFormData;
  onNext: (data: Partial<PostFormData>) => void;
}

export default function StepOne({ initialData, onNext }: StepOneProps) {
  const [formData, setFormData] = React.useState({
    title: initialData.title,
    description: initialData.description
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onNext(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
          Məhsulun adı
        </label>
        <input
          type="text"
          id="title"
          value={formData.title}
          onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))}
          className="w-full px-4 py-2.5 bg-gray-50 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-100"
          placeholder="Məsələn: iPhone 13 Pro"
          required
        />
      </div>

      <div>
        <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
          Təsvir
        </label>
        <textarea
          id="description"
          value={formData.description}
          onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
          className="w-full px-4 py-2.5 bg-gray-50 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-100 min-h-[100px]"
          placeholder="Məhsul haqqında ətraflı məlumat..."
          required
        />
      </div>

      <div className="bg-blue-50 rounded-xl p-4 flex items-start space-x-3">
        <div className="p-2 bg-blue-100 rounded-lg">
          <Check className="w-5 h-5 text-blue-600" />
        </div>
        <div>
          <h3 className="font-medium text-blue-900">Avtomatik kateqoriya</h3>
          <p className="text-sm text-blue-700 mt-0.5">
            Sistem məhsulunuzun kateqoriyasını avtomatik təyin edəcək
          </p>
        </div>
      </div>

      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-3 rounded-xl hover:bg-blue-600 transition-colors"
      >
        Növbəti
      </button>
    </form>
  );
}