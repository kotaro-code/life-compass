export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-50">
      <h1 className="text-5xl font-bold text-blue-600">
        Life Compass
      </h1>

      <p className="mt-6 text-lg text-gray-600">
        人生設計を、もっと身近に。
      </p>

      <button className="mt-10 rounded-xl bg-blue-600 px-8 py-4 text-lg font-semibold text-white transition hover:bg-blue-700">
        シミュレーションを始める
      </button>
    </main>
  );
}