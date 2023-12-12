import { SignInForm } from "@storedocs/components/forms/signin";

export default function SignInPage() {
  return (
    <div>
      <h1 className="text-3xl font-semibold">Sign in to your account</h1>

      <SignInForm className="mt-8" />
    </div>
  );
}
