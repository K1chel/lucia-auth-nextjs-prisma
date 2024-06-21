"use client";

import { FormErrorMessage } from "@/components/form-error-message";
import { ShowPassword } from "@/components/show-password";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { registrationSchema } from "@/lib/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { signUpAction } from "./actions";

const SignUpPage = () => {
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [isPending, startTransition] = useTransition();

  const form = useForm<z.infer<typeof registrationSchema>>({
    resolver: zodResolver(registrationSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  function onSubmit(values: z.infer<typeof registrationSchema>) {
    startTransition(() => {
      signUpAction(values.email, values.password).then((result) => {
        if (result?.errors) {
          setErrorMessage(result.errors);
        }
      });
    });
  }

  return (
    <div className="w-full space-y-6">
      <h1 className="text-4xl">Sign Up</h1>
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
            Create Account
          </Button>
        </form>
      </Form>
      <div>
        <span>Already have an account? </span>
        <Link
          href="/sign-in"
          className="text-blue-500 hover:opacity-90 transition-opacity"
        >
          Login here.
        </Link>
      </div>
    </div>
  );
};

export default SignUpPage;
