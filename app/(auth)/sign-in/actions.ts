"use server";

import { lucia } from "@/lib/auth";
import { signInUseCase } from "@/use-cases/users";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function signInAction(email: string, password: string) {
  const user = await signInUseCase(email, password);
  if (!user) {
    return {
      errors: "Invalid user",
    };
  }

  const session = await lucia.createSession(user.id, {});
  const sessionCookie = lucia.createSessionCookie(session.id);
  cookies().set(
    sessionCookie.name,
    sessionCookie.value,
    sessionCookie.attributes
  );

  return redirect("/");
}
