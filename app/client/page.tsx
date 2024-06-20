"use client";

import { buttonVariants } from "@/components/ui/button";
import { useCurrentUser } from "@/hooks/use-current-user";
import Image from "next/image";
import Link from "next/link";
import { signUpAction } from "../(auth)/sign-up/actions";
import { signOutAction } from "@/actions/sign-out";
import { SignOutButton } from "@/components/sign-out-button";

const ClientSidePage = () => {
  const { isLoading, user } = useCurrentUser();

  if (isLoading) return <p>loading...</p>;

  if (!user) {
    return (
      <div>
        <p>Not authenticated</p>
        <Link href="/sign-in" className={buttonVariants()}>
          Sign in
        </Link>
      </div>
    );
  }

  return (
    <>
      <code>&quot;use client&quot;</code>
      <div className="flex flex-col h-screen items-center justify-center gap-y-10">
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
        <Link href="/" className={buttonVariants()}>
          Back to server side
        </Link>
        <form action={signOutAction}>
          <SignOutButton />
        </form>
      </div>
    </>
  );
};

export default ClientSidePage;
