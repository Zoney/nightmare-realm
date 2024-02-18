import { Button } from "@repo/ui/components/ui/button";
import Image from "next/image";
import Link from "next/link";
export default function Page() {
  return (
    <main>
      <div className="flex h-screen w-full flex-col items-center justify-center bg-[#bd1e59] p-4 text-center">
        <Image
          alt="Nightmare Realm Logo"
          className="mb-8 max-w-xs md:max-w-lg"
          src="/logo.webp"
          width={300}
          height={300}
        />

        <h1 className="mb-4 text-4xl font-bold text-white">Nightmare Realm</h1>
        <Link className="mb-4 w-64 bg-black text-white py-2 px-4 rounded-md hover:bg-gray-800" href={"puppy"}>
          Start Game
        </Link>
        <Button className="w-64 bg-white text-black" variant="outline">
          About
        </Button>
      </div>
    </main>
  );
}
