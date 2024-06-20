import { signOutAction } from "@/actions/sign-out";
import { SignOutButton } from "@/components/sign-out-button";
import { Button } from "@/components/ui/button";
import { validateRequest } from "@/lib/auth";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const { user } = await validateRequest();

  if (!user) {
    return (
      <div className="h-screen flex items-center justify-center flex-col gap-3">
        <h3>You are not signed in</h3>
        <Link href="/sign-in">
          <Button>Sign In</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center flex-col h-screen gap-y-3">
      <h1>Welcome {user.email}</h1>
      <p>User ID: {user.id}</p>
      <p>Username: {user.username}</p>
      <div className="flex items-center gap-x-3">
        <h3>Avatar:</h3>
        <Image
          src={user.avatar}
          alt={user.username}
          width={40}
          height={40}
          className="rounded-full"
        />
      </div>
      <code>{user.avatar}</code>
      <div className="flex flex-col gap-y-3 border p-10 items-center justify-center">
        <span>Go to client-side page</span>
        <Link href="/client">
          <Button>Client Page</Button>
        </Link>
      </div>
      <form action={signOutAction}>
        <SignOutButton />
      </form>
    </div>
  );
}
