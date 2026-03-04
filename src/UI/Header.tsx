import { Link } from "react-router";
import Search from "../Order/Search";
import Cart from "../Cart/Cart";

export default function Header() {
  return (
    <header className=" sticky top-0 z-50 font-bold text-2xl text-white p-3 pl-9 bg-blue-800 cursor-pointer flex items-center justify-between">
      <Link to={"/"}>MyStore🛒</Link>
      <Search />
      <Cart />
    </header>
  );
}
