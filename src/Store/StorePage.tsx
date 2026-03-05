import { useLoaderData } from "react-router";
import type { Product } from "../service/productsLoader";
import Button from "../UI/Button";

export default function StorePage() {
  const products = useLoaderData() as Product[];
  return (
    <main className="bg-gray-100 min-h-dvh p-4 md:p-12">
      <div className="max-w-7xl mx-auto">
        <header className="mb-10">
          <h1 className="text-4xl font-black text-blue-800 tracking-tight">
            Our Collection
          </h1>
          <p className="text-gray-500 mt-2">
            Quality products delivered to your door.
          </p>
        </header>
        <div className="grid grid-cols-2  md:grid-cols-3 lg:grid-cols-4 gap-6 ">
          {products.map((product) => (
            <div
              key={product.id}
              className="flex flex-col p-5 border border-blue-800 bg-white shadow-sm rounded-2xl hover:shadow-xl hover:-translate-y-1 transition-all duration-300 "
            >
              <div className="h-48 w-full flex justify-center mb-4 bg-gray-50 items-center rounded-xl overflow-hidden p-4">
                <img
                  src={product.image}
                  alt={product.title}
                  className="max-h-full object-contain mix-blend-multiply mx-auto"
                />
              </div>
              <div className="flex flex-col grow">
                <h2 className="mt-3 text-sm font-bold text-gray-800 md:text-base line-clamp-2 leading-tight ">
                  {product.title}
                </h2>
              </div>
              <div className="mt-auto pt-4">
                <p className="text-blue-600 text-lg font-bold mt-2">
                  ${product.price.toFixed(2)}
                </p>
                <Button
                  className="w-full mt-3 py-2.5 bg-gray-900 text-white text-xs font-bold rounded-xl hover:bg-blue-600 active:scale-95 transition-all cursor-pointer"
                  type="button"
                >
                  Add to Cart
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
