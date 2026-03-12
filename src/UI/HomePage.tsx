import { Link } from "react-router";

export default function HomePage() {
  return (
    <main
      className="w-full min-h-screen bg-no-repeat bg-cover bg-center"
      style={{ backgroundImage: "url('/home.jpg')" }}
    >
      <div className="flex flex-col h-dvh items-center justify-center">
        <p className="font-bold  text-white text-5xl md:text-7xl lg:text-8xl">
          Welcome.
        </p>
        <p className="text-white font-medium pb-3 text-l md:text-2xl leading-relaxed max-w-2xl text-center">
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
