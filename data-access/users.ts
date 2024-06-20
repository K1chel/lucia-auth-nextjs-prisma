import { db } from "@/lib/db";
import { generateUsername } from "@/lib/utils";
import crypto from "crypto";

const ITERATIONS = 100000;

export async function getUserAccountByEmail(email: string) {
  const user = await db.user.findUnique({
    where: {
      email,
    },
  });

  return user;
}

export async function createUser(email: string, password: string) {
  const salt = crypto.randomBytes(128).toString("base64");
  const hash = await hashPassword(password, salt);

  const user = await db.user.create({
    data: {
      email,
      password: hash,
      username: await generateUsername(),
      avatar: `https://avatar.vercel.sh/${email.split("@")[0]}.svg?text=${email
        .slice(0, 2)
        .toUpperCase()}`,
      salt,
    },
  });

  return user;
}

export async function verifyPassword(email: string, plainTextPassword: string) {
  const user = await getUserAccountByEmail(email);

  if (!user) {
    return false;
  }

  const salt = user.salt;
  const savedPassword = user.password;

  if (!salt || !savedPassword) {
    return false;
  }

  const hash = await hashPassword(plainTextPassword, salt);

  return user.password == hash;
}

async function hashPassword(plainTextPassword: string, salt: string) {
  return new Promise<string>((resolve, reject) => {
    crypto.pbkdf2(
      plainTextPassword,
      salt,
      ITERATIONS,
      64,
      "sha512",
      (err, derivedKey) => {
        if (err) reject(err);
        resolve(derivedKey.toString("hex"));
      }
    );
  });
}
