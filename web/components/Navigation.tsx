import Link from "next/link";

export default function Navigation() {
  return (
    <nav className="mt-6 flex gap-6">

      <Link href="/" className="rounded-lg px-3 py-2 hover:bg-blue-100">
        ホーム
      </Link>

      <Link href="/dashboard" className="rounded-lg px-3 py-2 hover:bg-blue-100">
        ダッシュボード
      </Link>

      <Link href="/events" className="rounded-lg px-3 py-2 hover:bg-blue-100">
        ライフイベント
      </Link>

      <Link href="/simulation" className="rounded-lg px-3 py-2 hover:bg-blue-100">
        シミュレーション
      </Link>

      <Link href="/settings" className="rounded-lg px-3 py-2 hover:bg-blue-100">
        設定
      </Link>

    </nav>
  );
}