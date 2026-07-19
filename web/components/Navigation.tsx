import Link from "next/link";

export default function Navigation() {
  return (
    <nav className="mt-6 flex gap-6">

      <Link href="/">
        ホーム
      </Link>

      <Link href="/dashboard">
        ダッシュボード
      </Link>

      <Link href="/events">
        ライフイベント
      </Link>

      <Link href="/simulation">
        シミュレーション
      </Link>

      <Link href="/settings">
        設定
      </Link>

    </nav>
  );
}