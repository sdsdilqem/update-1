import React, { useState } from 'react';
import BottomSheet from '../common/BottomSheet';
import StepOne from './steps/StepOne';
import StepTwo from './steps/StepTwo';
import StepIndicator from './StepIndicator';
import { PostFormData } from '../../types/post';

interface CreatePostSheetProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CreatePostSheet({ isOpen, onClose }: CreatePostSheetProps) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<PostFormData>({
    title: '',
    description: '',
    category: '',
    price: '',
    images: [],
    phone: ''
  });

  const handleNext = (data: Partial<PostFormData>) => {
    setFormData(prev => ({ ...prev, ...data }));
    setStep(2);
  };

  const handleSubmit = (data: Partial<PostFormData>) => {
    const finalData = { ...formData, ...data };
    console.log('Submitting post:', finalData);
    onClose();
    setStep(1);
    setFormData({
      title: '',
      description: '',
      category: '',
      price: '',
      images: [],
      phone: ''
    });
  };

  return (
    <BottomSheet isOpen={isOpen} onClose={onClose}>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold">
          {step === 1 ? 'Məhsul haqqında' : 'Qiymət və şəkillər'}
        </h2>
        <StepIndicator currentStep={step} totalSteps={2} />
      </div>

      {step === 1 ? (
        <StepOne
          initialData={formData}
          onNext={handleNext}
        />
      ) : (
        <StepTwo
          initialData={formData}
          onBack={() => setStep(1)}
          onSubmit={handleSubmit}
        />
      )}
    </BottomSheet>
  );
}