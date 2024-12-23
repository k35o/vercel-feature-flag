import Link from "next/link";
import { showFeatureA } from "./../flag";

export default async function Home() {
  const featureA = await showFeatureA();
  return (
    <main className="flex flex-col items-center justify-center h-screen gap-8">
      <Link href="/dashboard" className="text-blue-500 underline hover:text-blue-700">
        ダッシュボード
      </Link>
      {featureA ? <div>機能1</div> : <div>デフォルト</div>}
    </main>
  );
}
