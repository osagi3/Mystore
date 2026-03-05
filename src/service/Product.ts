import { data } from "react-router";

const API_URL = "https://fakestoreapi.com/products";

export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

export async function getProduct() {
  const res = await fetch(`${API_URL}/store`);

  if (!res.ok) throw Error("Faid getting store");

  const { data } = await res.json();
  return data;
}
console.log(data);
