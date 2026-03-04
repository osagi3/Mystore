import { useLoaderData } from "react-router";

type Product = {
  id: number;
  title: string;
  price: number;
  image: string;
};

export const loader = async (): Promise<Product[]> => {
  const res = await fetch("https://fakestoreapi.com/products");

  if (!res.ok) {
    throw "Error fetching products";
  }
  return res.json();
};

export default function StorePage() {
  const products = useLoaderData<Product[]>();
  return <div className="bg-gray-200 min-h-dvh"></div>;
}
