import { useNavigate } from "react-router";

export default function Button() {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => navigate("store")}
      type="button"
      className="bg-blue-800 py-4 px-9 font-bold text-l rounded-2xl text-white cursor-pointer transition-all duration-300 ease-out hover:scale-110
  active:scale-95 hover:shadow-xl hover:shadow-blue-500/50"
    >
      Go to store
    </button>
  );
}
