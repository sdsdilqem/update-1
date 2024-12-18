import React from 'react';

interface StepIndicatorProps {
  currentStep: number;
  totalSteps: number;
}

export default function StepIndicator({ currentStep, totalSteps }: StepIndicatorProps) {
  return (
    <span className="text-sm text-gray-500">
      Addım {currentStep}/{totalSteps}
    </span>
  );
}