import Button from "./Button";

export default function HomePage() {
  return (
    <main
      className="w-full h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/home.jpg')" }}
    >
      <div className="flex flex-col h-dvh items-center justify-center">
        <p className="font-bold text-white text-7xl">Welcome.</p>
        <p className="text-white font-bold text-2xl pb-3">
          You will find everything you need to start your day
        </p>
        <Button />
      </div>
    </main>
  );
}
