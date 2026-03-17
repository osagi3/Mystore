import type { LoaderFunctionArgs } from "react-router";

export const ProductDeatilsLoader = async ({ params }: LoaderFunctionArgs) => {
  const id = params.id;
  if (!id) {
    throw new Error("Product ID is missing");
  }
  const res = await fetch(`https://fakestoreapi.com/products/${id}`);

  if (!res.ok) throw new Error("Product not found");
  return res.json();
};
