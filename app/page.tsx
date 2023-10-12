import Image from "next/image";
import Pg from "./pg";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Pg />
    </main>
  );
}
