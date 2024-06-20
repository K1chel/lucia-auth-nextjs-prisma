"use server";

import { lucia } from "@/lib/auth";
import { registerUserUseCase } from "@/use-cases/users";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function signUpAction(email: string, password: string) {
  try {
    const user = await registerUserUseCase(email, password);
    const session = await lucia.createSession(user.id, {});
    const sessionCookie = lucia.createSessionCookie(session.id);
    cookies().set(
      sessionCookie.name,
      sessionCookie.value,
      sessionCookie.attributes
    );
  } catch (error) {
    console.log({ error });
    return {
      errors: "An error occurred. Please try again.",
    };
  }

  return redirect("/");
}
