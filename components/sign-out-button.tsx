"use client";

import { useFormStatus } from "react-dom";
import { Button } from "./ui/button";

type Props = {
  disabled?: boolean;
};

export const SignOutButton = ({ disabled }: Props) => {
  const { pending } = useFormStatus();
  return (
    <>
      <Button disabled={pending} type="submit">
        Sign Out
      </Button>
    </>
  );
};
