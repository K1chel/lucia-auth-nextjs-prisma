import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { db } from "./db";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export async function generateUsername(): Promise<string> {
  let username;

  const ranoomChars = "abcdefghijklmnopqrstuvwxyz0123456789";
  const usernameLength = 8;
  let usernameExists = true;

  while (usernameExists) {
    username = Array.from({ length: usernameLength })
      .map(() =>
        ranoomChars.charAt(Math.floor(Math.random() * ranoomChars.length))
      )
      .join("");

    const user = await db.user.findUnique({
      where: {
        username,
      },
    });

    if (!user) {
      usernameExists = false;
    }
  }

  return `username-${username}`;
}
