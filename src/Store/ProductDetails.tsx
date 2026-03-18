import { useLoaderData, useNavigate } from "react-router";
import { useCart } from "../Context/useCart";
import type { Product } from "../service/productsLoader";
import Button from "../UI/Button";
import { useCallback, useEffect } from "react";

export default function ProductDetails() {
  const product = useLoaderData() as Product;

  const { addToCart } = useCart();
  const navigate = useNavigate();

  const handleClose = useCallback(() => {
    navigate("/store");
  }, [navigate]);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [handleClose]);

  if (!product) return null;
  return (
    <div
      className="fixed inset-0 z-100 flex items-center justify-center p-4 bg-black/40 backdrop-blur-md animate-in fade-in duration-300"
      onClick={handleClose}
    >
      <div
        className="bg-white w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-[2.5rem] shadow-2xl flex flex-col md:flex-row relative animate-in zoom-in-95 duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        <Button
          type="button"
          onClick={handleClose}
          aria-label="Close details"
          className="absolute top-6 right-6 text-gray-400 hover:text-black font-bold text-xl cursor-pointer"
        >
          x
        </Button>
        <div className="md:w-1/2 p-10 bg-gray-50 flex items-center justify-center">
          <img
            src={product.image}
            alt={product.title}
            className="max-h-75 md:max-h-96 object-contain mix-blend-multiply"
          />
        </div>
        <div className="p-8 md:w-1/2 md:p-12 flex flex-col">
          <div className="flex justify-between items-center mb-10">
            <span className="bg-blue-100 text-blue-800 text-xs font-black px-3 py-1 rounded-full uppercase">
              {product.category}
            </span>
            <div className="text-right">
              <p className="text-[10px] text-gray-400 uppercase font-bold tracking-widest">
                Uploaded By
              </p>
              <p className="text-sm font-bold text-gray-700">@StoreAdmin</p>
            </div>
          </div>
          <h1 className="text-2xl md:text-3xl font-black text-gray-900 mb-4 leading-tight">
            {product.title}
          </h1>
          <div className="grow">
            <p className="text-gray-500 text-sm md:text-base leading-relaxed mb-8">
              {product.description}
            </p>
          </div>
          <div className="mt-auto flex items-center justify-between gap-4">
            <div>
              <p className="text-gray-400 text-xs font-bold uppercase">Price</p>
              <span className="text-3xl font-black text-blue-800">
                ${product.price.toFixed(2) ?? "0.00"}
              </span>
            </div>
            <Button
              className="px-5 cursor-pointer py-4 bg-blue-800 text-white rounded-2xl font-bold hover:bg-blue-700 active:scale-95 transition-all shadow-lg"
              type="button"
              onClick={() => {
                addToCart(product);
              }}
            >
              Add to Cart
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
