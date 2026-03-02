import { Link } from "react-router";
import Search from "../Order/Search";
import Cart from "../Cart/Cart";

export default function Header() {
  return (
    <header className="font-bold text-2xl text-white p-3 pl-9 bg-blue-800 cursor-pointer flex justify-between">
      <Link to={"/"}>MyStore🛒</Link>
      <Search />
      <Cart />
    </header>
  );
}
