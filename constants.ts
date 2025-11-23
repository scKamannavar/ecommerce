import { Category, Product } from './types';

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Heavyweight Boxy Tee',
    price: 45,
    category: Category.UNISEX,
    description: 'Our signature tee featuring a boxy, cropped fit. Crafted from 280GSM combed cotton for a premium structure that holds its shape.',
    image: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=800&auto=format&fit=crop',
    sizes: ['S', 'M', 'L', 'XL']
  },
  {
    id: '2',
    name: 'Essential French Terry Hoodie',
    price: 110,
    category: Category.UNISEX,
    description: 'The perfect everyday hoodie. 450GSM french terry cotton, garment-dyed for a vintage feel and zero shrinkage. Double-lined hood.',
    image: 'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?q=80&w=800&auto=format&fit=crop',
    sizes: ['XS', 'S', 'M', 'L', 'XL']
  },
  {
    id: '3',
    name: 'Vintage Wash Graphic Tee',
    price: 55,
    category: Category.MEN,
    description: 'Oversized fit tee with a distinct vintage wash and abstract puff-print graphic on the back.',
    image: 'https://images.unsplash.com/photo-1503341504253-dff4815485f1?q=80&w=800&auto=format&fit=crop',
    sizes: ['S', 'M', 'L', 'XL']
  },
  {
    id: '4',
    name: 'Cropped Zip Hoodie',
    price: 95,
    category: Category.WOMEN,
    description: 'A modern take on the classic zip-up. Cropped silhouette with dropped shoulders and a premium silver zipper.',
    image: 'https://images.unsplash.com/photo-1620799140188-3b2a02fd9a77?q=80&w=800&auto=format&fit=crop',
    sizes: ['XS', 'S', 'M', 'L']
  },
  {
    id: '5',
    name: 'Oversized Crewneck Sweatshirt',
    price: 90,
    category: Category.UNISEX,
    description: 'Clean, minimalist crewneck. Ribbed cuffs and hem with a relaxed dropped shoulder design. Perfect for layering.',
    image: 'https://images.unsplash.com/photo-1614975058789-41316d0e2e9c?q=80&w=800&auto=format&fit=crop',
    sizes: ['S', 'M', 'L', 'XL', 'XXL']
  },
  {
    id: '6',
    name: 'Streetwear Cargo Joggers',
    price: 120,
    category: Category.MEN,
    description: 'Functional cargo pants with adjustable toggle cuffs. The perfect pairing for our hoodies and oversized tees.',
    image: 'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?q=80&w=800&auto=format&fit=crop',
    sizes: ['30', '32', '34', '36']
  },
  {
    id: '7',
    name: 'Classic White Tee',
    price: 35,
    category: Category.UNISEX,
    description: 'The foundation of any wardrobe. Standard fit, mid-weight cotton that gets softer with every wash.',
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=800&auto=format&fit=crop',
    sizes: ['XS', 'S', 'M', 'L', 'XL']
  },
  {
    id: '8',
    name: 'Tech-Fleece Zip Hoodie',
    price: 130,
    category: Category.MEN,
    description: 'Performance meets style. Smooth, lightweight tech fleece that traps heat without bulk. Water-resistant finish.',
    image: 'https://images.unsplash.com/photo-1626497764746-6dc36546b388?q=80&w=800&auto=format&fit=crop',
    sizes: ['S', 'M', 'L', 'XL']
  },
  {
    id: '9',
    name: 'Ribbed Fisherman Beanie',
    price: 30,
    category: Category.ACCESSORIES,
    description: 'Classic ribbed beanie made from a merino wool blend. Low profile fit.',
    image: 'https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: '10',
    name: 'Heavy Duty Canvas Tote',
    price: 45,
    category: Category.ACCESSORIES,
    description: 'Heavy 16oz canvas tote with reinforced handles. Large enough for a laptop and a hoodie.',
    image: 'https://images.unsplash.com/photo-1597484662317-9bd7bdda2907?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: '11',
    name: 'Relaxed Fit Hoodie - Beige',
    price: 100,
    category: Category.WOMEN,
    description: 'Soft brushed fleece interior for maximum coziness. Relaxed fit with a kangaroo pocket.',
    image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=800&auto=format&fit=crop',
    sizes: ['XS', 'S', 'M', 'L']
  },
  {
    id: '12',
    name: 'Statement Graphic Hoodie',
    price: 115,
    category: Category.MEN,
    description: 'Bold back graphics on our heavyweight hoodie blank. For those who want to stand out.',
    image: 'https://images.unsplash.com/photo-1509942774463-acf339cf87d5?q=80&w=800&auto=format&fit=crop',
    sizes: ['S', 'M', 'L', 'XL']
  }
];

export const APP_NAME = "Aura";