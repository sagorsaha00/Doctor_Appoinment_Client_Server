"use client";

import React, { useEffect } from "react";
import Header from "../../../../components/header";
import Footer from "../../../../components/footer";
import { useSession } from "../../../../utils/auth-client";
import { useRouter } from "next/navigation";

export default function Layout({ children }) {
  const { data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (session?.user) {
      router.push("/home");
    }
  }, [session, router]);

  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
