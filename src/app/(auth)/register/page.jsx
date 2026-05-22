"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { signUp, useSession } from "../../../../utils/auth-client";
import { authClient } from "../../../../utils/auth-client";
import Image from "next/image";
import { toast } from "react-toastify";

export const signInGoogle = async () => {
  console.log("google calling");
  const data = await authClient.signIn.social({
    provider: "google",
  });
  console.log("Data", data);
};
export default function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [image, setImage] = useState("");

  const router = useRouter();
  const { data: session } = useSession();

  useEffect(() => {
    if (session?.user) {
      router.push("/home");
    }
  }, [session, router]);

  const handleRegister = async (e) => {
    e.preventDefault();

    await signUp.email(
      {
        name,
        email,
        password,
        image,
        callbackURL: "/",
      },
      {
        onRequest: () => {
          toast.success("Account try to create");
        },
        onSuccess: () => {
          toast.success(" Account created");
          router.push("/");
        },
        onError: (ctx) => {
          toast.error(`something worng ${ctx.error.message} `);
        },
      },
    );
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-[#F4F9FF] px-4 py-10">
      <div className="w-full max-w-md rounded-3xl bg-white p-8 shadow-2xl border border-gray-100">
        <div className="flex flex-col items-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
            <span className="text-3xl">🩺</span>
          </div>

          <h1 className="mt-4 text-3xl font-bold text-[#131313] text-center">
            Create Your Account
          </h1>

          <p className="mt-2 text-sm text-center text-gray-500">
            Join and book appointments with trusted doctors
          </p>
        </div>

        <form onSubmit={handleRegister} className="mt-8 space-y-5">
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700">
              Full Name
            </label>

            <input
              type="text"
              placeholder="Enter your full name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full  text-black   rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700">
              Email Address
            </label>

            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full  text-black 0 rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700">
              Password
            </label>

            <input
              type="password"
              pattern="^(?=.*[a-z])(?=.*[A-Z]).{6,}$"
              placeholder="Minimum 6 characters "
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full  text-black 0 rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700">
              Photo URL <span className="text-gray-400">(optional)</span>
            </label>

            <input
              type="text"
              placeholder="Paste your photo URL"
              value={image}
              onChange={(e) => setImage(e.target.value)}
              className="w-full  text-black 0 rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            />
          </div>

          <button className="w-full cursor-pointer rounded-xl bg-blue-600 py-3 font-medium text-white transition hover:bg-blue-700">
            Create Account
          </button>
        </form>

        <div className="my-6 flex items-center gap-3">
          <div className="h-px flex-1 bg-gray-200" />
          <span className="text-sm text-gray-400">OR</span>
          <div className="h-px flex-1 bg-gray-200" />
        </div>

        <button
          onClick={() => signInGoogle()}
          className="flex cursor-pointer text-gray-400 w-full items-center justify-center gap-3 rounded-xl border border-gray-300 py-3 text-sm font-medium transition hover:bg-gray-50"
        >
          <Image
            height={300}
            width={300}
            src="https://www.svgrepo.com/show/475656/google-color.svg"
            className="h-5 w-5  "
            alt="google"
          />
          Continue with Google
        </button>

        <p className="mt-6 text-center text-sm text-gray-500">
          Already have an account?{" "}
          <Link
            href="/login"
            className="font-semibold text-blue-600 hover:underline"
          >
            Login
          </Link>
        </p>
      </div>
    </main>
  );
}
