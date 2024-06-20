import {
  createUser,
  getUserAccountByEmail,
  verifyPassword,
} from "@/data-access/users";

export async function registerUserUseCase(email: string, password: string) {
  const existingUser = await getUserAccountByEmail(email);
  if (existingUser) {
    throw new Error("User already exists with that email.");
  }
  const user = await createUser(email, password);
  return user;
}

export async function signInUseCase(email: string, password: string) {
  const user = await getUserAccountByEmail(email);
  if (!user) {
    return null;
  }

  const isPasswordCorrect = await verifyPassword(email, password);

  if (!isPasswordCorrect) {
    return null;
  }

  return user;
}
