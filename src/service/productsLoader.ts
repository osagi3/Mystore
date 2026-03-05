export type Product = {
  id: number;
  title: string;
  price: number;
  image: string;
};

export const productsLoader = async (): Promise<Product[]> => {
  const res = await fetch("https://fakestoreapi.com/products");

  if (!res.ok) {
    throw new Response("Error fetching products", { status: res.status });
  }
  return res.json();
};
