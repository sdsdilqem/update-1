export type ProductCategory = 'LUXURY' | 'RARE' | 'COLLECTIBLE' | 'EXCLUSIVE';

export type ProductStatus = 'AVAILABLE' | 'PENDING' | 'SOLD' | 'RESERVED';

export interface Product {
  id: string;
  sellerId: string;
  title: string;
  description: string;
  price: number;
  category: ProductCategory;
  status: ProductStatus;
  images: string[];
  tags: string[];
  createdAt: Date;
  verificationStatus: 'PENDING' | 'VERIFIED' | 'REJECTED';
  viewCount: number;
  interestedUsers: string[];
}