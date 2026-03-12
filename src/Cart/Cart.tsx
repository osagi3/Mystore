// import { Link } from "react-router";
import { Link } from "react-router";
import { useCart } from "../Context/useCart";
import CartIcon from "../icons/CartIcon";

export default function Cart() {
  const { totalItems } = useCart();
  return (
    <Link to="/checkout" className="cursor-pointer relative">
      <CartIcon className="w-7" color={"white"} />
      {totalItems > 0 && (
        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full min-w-5 text-center">
          {totalItems}
        </span>
      )}
    </Link>
  );
}
