import { Car, Home, Laptop, Smartphone, Shirt, Sofa } from 'lucide-react';
import type { Category } from '../../types/category';

export const categories: Category[] = [
  {
    id: 1,
    name: 'Nəqliyyat',
    icon: Car,
    subcategories: [
      { id: 11, name: 'Avtomobillər', icon: Car },
      { id: 12, name: 'Motosikletlər', icon: Car },
      { id: 13, name: 'Ehtiyat hissələri', icon: Car },
      { id: 14, name: 'Digər nəqliyyat', icon: Car }
    ]
  },
  {
    id: 2,
    name: 'Daşınmaz əmlak',
    icon: Home,
    subcategories: [
      { id: 21, name: 'Mənzillər', icon: Home },
      { id: 22, name: 'Villalar, bağ evləri', icon: Home },
      { id: 23, name: 'Ofislər', icon: Home },
      { id: 24, name: 'Qarajlar', icon: Home }
    ]
  },
  {
    id: 3,
    name: 'Elektronika',
    icon: Laptop,
    subcategories: [
      { id: 31, name: 'Kompüterlər', icon: Laptop },
      { id: 32, name: 'Telefonlar', icon: Smartphone },
      { id: 33, name: 'Planşetlər', icon: Laptop },
      { id: 34, name: 'Audio və video', icon: Laptop }
    ]
  },
  {
    id: 4,
    name: 'Geyim',
    icon: Shirt,
    subcategories: [
      { id: 41, name: 'Kişi geyimləri', icon: Shirt },
      { id: 42, name: 'Qadın geyimləri', icon: Shirt },
      { id: 43, name: 'Uşaq geyimləri', icon: Shirt },
      { id: 44, name: 'Aksesuarlar', icon: Shirt }
    ]
  },
  {
    id: 5,
    name: 'Ev və bağ',
    icon: Sofa,
    subcategories: [
      { id: 51, name: 'Mebel', icon: Sofa },
      { id: 52, name: 'Təmir və tikinti', icon: Sofa },
      { id: 53, name: 'Məişət texnikası', icon: Sofa },
      { id: 54, name: 'Bağ və bağça', icon: Sofa }
    ]
  },
  {
    id: 6,
    name: 'Aksesuar və qurğular',
    icon: Smartphone,
    subcategories: [
      { id: 61, name: 'Smartfonlar', icon: Smartphone },
      { id: 62, name: 'Smart saatlar', icon: Smartphone },
      { id: 63, name: 'Qulaqlıqlar', icon: Smartphone },
      { id: 64, name: 'Digər aksesuarlar', icon: Smartphone }
    ]
  }
];