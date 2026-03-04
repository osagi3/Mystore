import SearchIcon from "../icons/SearchIcon";
import Button from "../UI/Button";

export default function Search() {
  return (
    <form className="max-w-lg mx-auto w-full">
      <label className="block mb-2.5 text-sm font-medium sr-only">search</label>
      <div className="relative">
        <div className="absolute inset-y-0 inset-s-0 flex items-center ps-3 pointer-events-none">
          <SearchIcon className="w-4 h-5" />
        </div>
        <input
          placeholder="Search Item..."
          type="search"
          id="search"
          className="block w-full py-2  ps-10 pe-25 bg-neutral-50  border-blue-400 text-black text-sm font-medium rounded-lg outline-none placeholder:text-body shadow-xs"
        />
        <Button
          type="submit"
          className="absolute cursor-pointer right-2 top-1/2 -translate-y-1/2 text-white px-4 py-2 bg-blue-800 text-xs  rounded"
        >
          Search
        </Button>
      </div>
    </form>
  );
}
