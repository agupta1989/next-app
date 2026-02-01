import Link from "next/link";
import Header from "./main-header";

export default function Home() {
  return (
    <main className="bg-slate-500">
      <Header />
      <nav className="flex justify-center gap-10">
        <Link href={"/about"}>About</Link>
        <Link href={"/users"}>Users</Link>
        <Link href={"/meals"}>Meals</Link>
        <Link href={"/meals/share"}>Share Meal</Link>
        <Link href={"/community"}>Community</Link>
      </nav>
    </main>
  );
}
