import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Users Page",
  description: "This is the users page !!",
};

export default function Users() {

  return (
    <div>
      Users
      <Link href="/">Go to Home page</Link>
      <Link href="/users/1">Go to 1 page</Link>
    </div>
  )
}