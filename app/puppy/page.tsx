'use client'
import dynamic from 'next/dynamic'
const GameComponent = dynamic(
  () => import('./_game/GameComponent'),
  { ssr: false }
);

export default function Home() {
  return (
    <main>
      <div className="absolute top-0 w-full h-full">
        <GameComponent/>
      </div>
    </main>
  );
}