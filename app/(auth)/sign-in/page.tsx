"use client";

import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import { loginSchema } from "@/lib/schemas";
import { signInAction } from "./actions";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ShowPassword } from "@/components/show-password";
import { FormErrorMessage } from "@/components/form-error-message";

const SignInPage = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();

  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  function onSubmit(values: z.infer<typeof loginSchema>) {
    startTransition(() => {
      signInAction(values.email, values.password).then((result) => {
        if (result?.errors) {
          setErrorMessage(result.errors);
        }
      });
    });
  }

  return (
    <div className="mx-auto max-w-md space-y-6 w-full">
      <h1 className="text-4xl">Sign In</h1>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    placeholder="email@email.com"
                    disabled={isPending}
                  />
                </FormControl>
                <FormErrorMessage
                  error={form.formState.errors.email?.message}
                />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <div className="relative">
                    <Input
                      {...field}
                      placeholder="******"
                      disabled={isPending}
                      type={showPassword ? "text" : "password"}
                      className="pr-10"
                    />
                    <ShowPassword
                      showPassword={showPassword}
                      setShowPassword={setShowPassword}
                      disabled={isPending}
                    />
                  </div>
                </FormControl>
                <FormErrorMessage
                  error={form.formState.errors.password?.message}
                />
              </FormItem>
            )}
          />
          <FormErrorMessage error={errorMessage} />
          <Button className="w-full" type="submit" disabled={isPending}>
            Sign In
          </Button>
        </form>
      </Form>
      <div>
        <span>Don&apos;t have an account? </span>
        <Link
          href="/sign-up"
          className="text-blue-500 hover:opacity-90 transition-opacity"
        >
          Create one.
        </Link>
      </div>
    </div>
  );
};

export default SignInPage;
