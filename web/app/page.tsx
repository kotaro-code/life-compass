import Header from "@/components/Header";
import DashboardCard from "@/components/DashboardCard";
import PrimaryButton from "@/components/PrimaryButton";

export default function Home() {
  return (
    <>
      <Header />

      <main className="mx-auto max-w-5xl p-8">

        <h2 className="mb-8 text-3xl font-bold">
          🏠 ダッシュボード
        </h2>

        <div className="grid gap-6 md:grid-cols-2">

          <DashboardCard
            title="現在の資産"
            value="¥12,350,000"
          />

          <DashboardCard
            title="今月の収支"
            value="+¥82,000"
          />

          <DashboardCard
            title="次のライフイベント"
            value="🏠 マイホーム購入"
          />

        </div>

        <div className="mt-10">
          <PrimaryButton
            text="シミュレーションを始める"
          />
        </div>

      </main>
    </>
  );
}