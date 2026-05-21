"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import Image from "next/image";
import { useSession, authClient } from "../utils/auth-client";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "All Appointment", path: "/allDoctor" },
  { name: "DashBoard", path: "/dashboard" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const { data: session } = useSession();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLogout = async () => {
    await authClient.signOut();
    window.location.href = "/";
  };

  return (
    <header
      className="
        fixed
        top-0
        left-0
        w-full
        z-50
        transition-all
        duration-500
      "
    >
      <div
        className="
          max-w-7xl
          mx-auto
          px-4
          sm:px-6
          mt-4
          transition-all
          duration-500
        "
      >
        <div
          className={`
            flex
            items-center
            justify-between
            px-5
            py-4
            rounded-2xl
            border
            transition-all
            duration-500
            ${
              scrolled
                ? `
                  bg-white/70
                  backdrop-blur-xl
                  border-white/40
                  shadow-xl
                  shadow-slate-200/50
                `
                : `
                  bg-white/20
                  backdrop-blur-md
                  border-white/20
                `
            }
          `}
        >
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/pic.png"
              alt="Logo"
              width={300}
              height={300}
              className="w-10 h-10 rounded-full"
            />

            <div>
              <h2 className="text-xl font-bold text-slate-900">MediNova</h2>

              <p className="text-xs text-slate-500 tracking-wide">
                Smart Medical Care
              </p>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((item) => (
              <Link
                key={item.name}
                href={item.path}
                className="
                  relative
                  text-[15px]
                  font-medium
                  text-slate-700
                  hover:text-blue-600
                  transition-all
                  duration-300
                  group
                "
              >
                {item.name}

                <span
                  className="
                    absolute
                    left-0
                    -bottom-1
                    h-[2px]
                    w-0
                    bg-blue-600
                    rounded-full
                    transition-all
                    duration-300
                    group-hover:w-full
                  "
                ></span>
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            {session?.user ? (
              <div className="flex items-center gap-3">
                <Link href="/profile">
                  <Image
                    src={session.user.image || "/default-user.png"}
                    alt="User"
                    width={40}
                    height={40}
                    className="
                      w-10
                      h-10
                      rounded-full
                      border-2
                      border-blue-500
                      object-cover
                      cursor-pointer
                    "
                  />
                </Link>
                <button
                  onClick={handleLogout}
                  className="cursor-pointer text-gray-600 hover:text-red-500 transition"
                >
                  sign out
                </button>
              </div>
            ) : (
              <div className="hidden sm:flex items-center gap-3">
                <Link
                  href="/login"
                  className="
                    px-5
                    py-2.5
                    rounded-full
                    border
                    border-blue-600
                    text-blue-600
                    hover:bg-blue-50
                    text-sm
                    font-semibold
                    transition-all
                    duration-300
                  "
                >
                  Login
                </Link>

                <Link
                  href="/register"
                  className="
                    bg-blue-600
                    hover:bg-blue-700
                    text-white
                    px-6
                    py-3
                    rounded-full
                    text-sm
                    font-semibold
                    shadow-lg
                    shadow-blue-200
                    hover:shadow-xl
                    hover:shadow-blue-300
                    hover:-translate-y-0.5
                    transition-all
                    duration-300
                  "
                >
                  Register
                </Link>
              </div>
            )}

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="
                lg:hidden
                w-10
                h-10
                rounded-full
                flex
                items-center
                justify-center
                text-slate-700
                hover:bg-slate-100
                transition-all
                duration-300
              "
            >
              {mobileOpen ? <FiX size={22} /> : <FiMenu size={22} />}
            </button>
          </div>
        </div>

        {mobileOpen && (
          <div
            className="
              mt-3
              lg:hidden
              bg-white/80
              backdrop-blur-2xl
              rounded-3xl
              border
              border-white/40
              shadow-2xl
              p-4
            "
          >
            <nav className="flex flex-col gap-1">
              {navLinks.map((item) => (
                <Link
                  key={item.name}
                  href={item.path}
                  onClick={() => setMobileOpen(false)}
                  className="
                    px-4
                    py-3
                    rounded-xl
                    text-slate-700
                    font-medium
                    hover:bg-blue-50
                    hover:text-blue-600
                    transition-all
                    duration-300
                  "
                >
                  {item.name}
                </Link>
              ))}

              {session?.user ? (
                <Link
                  href="/profile"
                  className="
                    mt-3
                    bg-blue-600
                    hover:bg-blue-700
                    text-white
                    text-center
                    py-3
                    rounded-full
                    font-semibold
                    transition-all
                    duration-300
                  "
                >
                  My Profile
                </Link>
              ) : (
                <div className="flex flex-col gap-3 mt-3">
                  <Link
                    href="/login"
                    className="
                      border
                      border-blue-600
                      text-blue-600
                      text-center
                      py-3
                      rounded-full
                      font-semibold
                      hover:bg-blue-50
                      transition-all
                      duration-300
                    "
                  >
                    Login
                  </Link>

                  <Link
                    href="/register"
                    className="
                      bg-blue-600
                      hover:bg-blue-700
                      text-white
                      text-center
                      py-3
                      rounded-full
                      font-semibold
                      transition-all
                      duration-300
                    "
                  >
                    Register
                  </Link>
                </div>
              )}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
