export enum Category {
  MEN = 'Men',
  WOMEN = 'Women',
  ACCESSORIES = 'Accessories',
  UNISEX = 'Unisex'
}

export interface Product {
  id: string;
  name: string;
  price: number;
  category: Category;
  description: string;
  image: string;
  sizes?: string[];
}

export interface CartItem extends Product {
  quantity: number;
  selectedSize?: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  isError?: boolean;
}