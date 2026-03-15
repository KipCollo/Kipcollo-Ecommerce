export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
}

export const products: Product[] = [
  { id: 1, name: 'Aspirin', price: 100, description: 'Pain reliever' },
  { id: 2, name: 'Paracetamol', price: 80, description: 'Fever reducer' },
  {id: 3,name: 'Laptop',price: 700,description: "Hp"}
];
