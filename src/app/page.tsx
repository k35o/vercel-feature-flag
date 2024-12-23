import { showFeatureA } from "./../flag";

export default async function Home() {
  const featureA = await showFeatureA();
  return (
    <main className="flex flex-col items-center justify-center h-screen gap-8">
      {featureA ? <div>機能1</div> : <div>デフォルト</div>}
    </main>
  );
}
