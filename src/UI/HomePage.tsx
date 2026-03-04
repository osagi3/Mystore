import { Link } from "react-router";

export default function HomePage() {
  return (
    <main
      className="w-full h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/home.jpg')" }}
    >
      <div className="flex flex-col h-dvh items-center justify-center">
        <p className="font-bold text-white text-7xl">Welcome.</p>
        <p className="text-white font-bold text-xl pb-3">
          You will find everything you need to start your day
        </p>
        <Link
          to={"/store"}
          className="bg-blue-800 py-4 px-9 font-bold text-l rounded-2xl text-white cursor-pointer  duration-300 
  active:scale-95 hover:shadow-xl hover:shadow-blue-500/50"
        >
          Go to store
        </Link>
      </div>
    </main>
  );
}
