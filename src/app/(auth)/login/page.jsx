"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import toast from "react-hot-toast";
import { signIn, authClient, useSession } from "../../../../utils/auth-client";
import Image from "next/image";
import { useRouter } from "next/navigation";

export const signInGoogle = async () => {
  console.log("google calling");
  const data = await authClient.signIn.social({
    provider: "google",
  });
  console.log("Data", data);
};
export default function LoginPage() {
  const { data: session } = useSession();
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (session?.user) {
      router.push("/home");
    }
  }, [session, router]);

  const handleLogin = async (e) => {
    e.preventDefault();

    const { error } = await signIn.email(
      {
        email,
        password,
        callbackURL: "/",
      },
      {
        onRequest: () => {
          console.log("Loading...");
        },
        onSuccess: () => {
          console.log("Login success");
        },
        onError: (ctx) => {
          toast.error("please try again something wrong");
          alert(ctx.error.message);
          console.log(error);
        },
      },
    );
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-[#F4F9FF] px-4">
      <div className="w-full max-w-md rounded-3xl bg-white p-8 shadow-2xl border border-gray-100">
        <div className="flex flex-col items-center">
          <Image
            height={600}
            width={600}
            src="/pic.png"
            className="h-5 w-5"
            alt="google"
          />

          <h1 className="mt-4 text-3xl font-bold text-[#131313]">
            Doctor Appointment
          </h1>

          <p className="mt-2 text-sm text-gray-500">
            Login to book your appointment
          </p>
        </div>

        <form onSubmit={handleLogin} className="mt-8 space-y-5">
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700">
              Email Address
            </label>

            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full placeholder:text-gray-400 text-black rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700">
              Password
            </label>

            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full placeholder:text-gray-400 text-black rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            />
          </div>

          <div className="flex justify-end">
            <Link
              href="/forgot-password"
              className="text-sm text-blue-600 hover:underline"
            >
              Forgot Password?
            </Link>
          </div>

          <button className="w-full cursor-pointer rounded-xl bg-blue-600 py-3 font-medium text-white transition hover:bg-blue-700">
            Login
          </button>
        </form>

        <div className="my-6 flex items-center gap-3">
          <div className="h-px flex-1 bg-gray-200" />
          <span className="text-sm text-gray-400">OR</span>
          <div className="h-px flex-1 bg-gray-200" />
        </div>

        <button
          onClick={() => signInGoogle()}
          className="flex w-full cursor-pointer text-gray-400 items-center justify-center gap-3 rounded-xl border border-gray-300 py-3 text-sm font-medium transition hover:bg-gray-50"
        >
          <Image
            height={300}
            width={300}
            src="https://www.svgrepo.com/show/475656/google-color.svg"
            className="h-5 w-5 "
            alt="google"
          />
          Continue with Google
        </button>

        <p className="mt-6 text-center text-sm text-gray-500">
          Don’t have an account?{" "}
          <Link
            href="/register"
            className="font-semibold text-blue-600 hover:underline"
          >
            Register
          </Link>
        </p>
      </div>
    </main>
  );
}
