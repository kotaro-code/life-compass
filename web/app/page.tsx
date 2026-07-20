import { supabase } from "@/lib/supabase";

export default async function Home() {
  const { error } = await supabase.from("profiles").select("*");

  return (
    <main className="p-10">
      <h1 className="text-4xl font-bold">
        Life Compass
      </h1>

      <p className="mt-6">
        {error ? "Supabase接続成功！（テーブルはまだありません）" : "Supabase接続成功！"}
      </p>
    </main>
  );
}