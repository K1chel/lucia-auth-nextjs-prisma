"use server";

import { lucia } from "@/lib/auth";
import { signInUseCase } from "@/use-cases/users";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function signInAction(email: string, password: string) {
  try {
    const user = await signInUseCase(email, password);

    if (!user) throw new Error("Invalid email or password.");

    const session = await lucia.createSession(user.id, {});
    const sessionCookie = lucia.createSessionCookie(session.id);
    cookies().set(
      sessionCookie.name,
      sessionCookie.value,
      sessionCookie.attributes
    );
  } catch (error: any) {
    return {
      errors: error.message,
    };
  }

  return redirect("/");
}
