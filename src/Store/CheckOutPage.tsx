import { useCart } from "../Context/useCart";
import Button from "../UI/Button";
import { Link } from "react-router";

export default function CheckOutPage() {
  const { cart, addToCart, removeFromCart, clearCart } = useCart();

  const totalPrice = cart.reduce<number>(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  if (cart.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] gap-4">
        <h2 className="text-2xl font-black text-gray-800">
          Your cart is empty
        </h2>
        <p className="text-gray-500">
          Looks like you haven't added anything yet.
        </p>
        <Link to="/store">
          <Button
            type="button"
            className="bg-blue-800 text-white px-8 py-3 rounded-xl font-bold hover:bg-blue-700 transition-all"
          >
            Return to Store
          </Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto p-4 md:p-12">
      <div className="flex justify-between items-end mb-8">
        <h1 className="text-4xl font-black text-gray-900 tracking-tight">
          Your Cart
        </h1>
        <button
          onClick={clearCart}
          className="text-red-500 font-bold text-sm hover:underline cursor-pointer"
        >
          Clear All
        </button>
      </div>

      <div className="grid gap-10 lg:grid-cols-3">
        {/* Item List */}
        <div className="lg:col-span-2 space-y-4">
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex flex-col sm:flex-row items-center gap-6 bg-white p-6 rounded-3xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
            >
              <div className="w-24 h-24 shrink-0 bg-gray-50 p-2 rounded-2xl">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-contain mix-blend-multiply"
                />
              </div>

              <div className="grow text-center sm:text-left">
                <h3 className="font-bold text-gray-800 text-lg leading-tight mb-1">
                  {item.title}
                </h3>
                <p className="text-blue-600 font-black text-xl mb-3">
                  ${item.price.toFixed(2)}
                </p>

                <div className="flex items-center justify-center sm:justify-start gap-4">
                  <div className="flex items-center bg-gray-100 rounded-full p-1 border border-gray-200">
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="w-8 h-8 flex items-center justify-center bg-white rounded-full shadow-sm hover:bg-gray-50 active:scale-90 transition-all cursor-pointer font-bold"
                    >
                      -
                    </button>
                    <span className="w-10 text-center font-black text-gray-800">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => addToCart(item)}
                      className="w-8 h-8 flex items-center justify-center bg-white rounded-full shadow-sm hover:bg-gray-50 active:scale-90 transition-all cursor-pointer font-bold"
                    >
                      +
                    </button>
                  </div>
                  <p className="text-gray-400 text-sm font-medium">
                    Subtotal:{" "}
                    <span className="text-gray-900">
                      ${(item.price * item.quantity).toFixed(2)}
                    </span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="lg:sticky lg:top-28 h-fit">
          <div className="bg-blue-800 p-8 rounded-4xl shadow-xl text-white">
            <h2 className="text-2xl font-black mb-6">Order Summary</h2>

            <div className="space-y-3 mb-6">
              <div className="flex justify-between text-blue-100 font-medium">
                <span>Items ({cart.length})</span>
                <span>${totalPrice.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-blue-100 font-medium">
                <span>Shipping</span>
                <span className="text-green-300 font-bold">FREE</span>
              </div>
            </div>

            <div className="border-t border-blue-700 pt-6 mb-8">
              <div className="flex justify-between items-center">
                <span className="text-lg font-bold">Total Amount</span>
                <span className="text-3xl font-black">
                  ${totalPrice.toFixed(2)}
                </span>
              </div>
            </div>

            <Button
              type="button"
              className="w-full py-4 bg-white text-blue-800 rounded-2xl font-black text-lg hover:bg-blue-50 active:scale-95 transition-all shadow-lg"
              onClick={() => alert("Proceeding to payment...")}
            >
              Confirm Order
            </Button>

            <p className="text-center text-blue-200 text-xs mt-4 font-medium italic">
              Secure checkout powered by MyStore
            </p>
          </div>

          <Link
            to="/store"
            className="block text-center mt-6 text-gray-500 font-bold hover:text-blue-800 transition-colors"
          >
            ← Continue Shopping
          </Link>
        </div>
      </div>
    </div>
  );
}
