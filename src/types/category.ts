import { ReactNode } from 'react';

export interface Subcategory {
  id: number;
  name: string;
  icon: ReactNode;
}

export interface Category {
  id: number;
  name: string;
  icon: ReactNode;
  subcategories: Subcategory[];
}