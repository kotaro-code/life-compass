import Navigation from "./Navigation";

export default function Header() {
  return (
    <header className="border-b bg-white px-8 py-5 shadow-sm">

      <div className="flex items-center justify-between">

        <h1 className="text-2xl font-bold text-blue-600">
          Life Compass
        </h1>

        <button className="rounded-lg bg-gray-100 px-3 py-2 hover:bg-gray-200">
          👤 Kotaro
        </button>

      </div>

      <Navigation />

    </header>
  );
}