import { useCart } from "../Context/useCart";
import CartIcon from "../icons/CartIcon";

export default function Cart() {
  const totalItems = useCart();
  return (
    <div>
      <CartIcon className="w-7" color={"white"} />
    </div>
  );
}
