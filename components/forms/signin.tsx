"use client";

import { signIn } from "next-auth/react";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

import { useToast } from "../ui/use-toast";
import { Button } from "../ui/button";
import { cn } from "@storedocs/lib/utils";

const LOGIN_REDIRECT_PATH = "/documents";

type SignInFormProps = {
  className?: string;
};

export const SignInForm = ({ className }: SignInFormProps) => {
  const { toast } = useToast();

  const onSignInWithGoogleClick = async () => {
    try {
      await signIn("google", { callbackUrl: LOGIN_REDIRECT_PATH });
    } catch (error) {
      toast({
        title: "An unknown error occurred",
        description:
          "We encountered an unknown error while attempting to sign you In. Please try again later.",
        variant: "destructive",
      });
    }
  };

  const onSignInWithGithubClick = async () => {
    try {
      await signIn("github", { callbackUrl: LOGIN_REDIRECT_PATH });
    } catch (error) {
      toast({
        title: "An unknown error occurred",
        description:
          "We encountered an unknown error while attempting to sign you In. Please try again later.",
        variant: "destructive",
      });
    }
  };

  return (
    <form className={cn("flex w-full flex-col gap-y-4", className)}>
      <Button
        type="button"
        size="lg"
        variant='outline'
        className="border bg-background text-muted-foreground"
        onClick={onSignInWithGoogleClick}
      >
        <FcGoogle className="mr-2 h-6 w-6" />
        Google
      </Button>

      {/* <Button
        type="button"
        size="lg"
        variant='outline'
        className="border bg-background text-muted-foreground"
        onClick={onSignInWithGithubClick}
      >
        <FaGithub className="mr-2 h-6 w-6" />
        Github
      </Button> */}
    </form>
  );
};
