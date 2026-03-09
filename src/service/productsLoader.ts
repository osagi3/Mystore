export type Product = {
  id: number;
  title: string;
  price: number;
  image: string;
};

export const productsLoader = async ({
  request,
}: {
  request: Request;
}): Promise<Product[]> => {
  const res = await fetch("https://fakestoreapi.com/products");
  const url = new URL(request.url);
  const page = Number(url.searchParams.get("page")) || 1;
  const limit = 12;

  if (!res.ok) {
    throw new Response("Error fetching products", { status: res.status });
  }

  const data = await res.json();
  return data.slice((page - 1) * limit, page * limit);
};
