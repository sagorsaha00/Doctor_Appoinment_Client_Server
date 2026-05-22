import React from "react";
import Header from "../../../../components/header";
import Footer from "../../../../components/footer";

export const metadata = {
  title: "Doctor Appointment - Create Account",
  description:
    "Create a new account to book and manage doctor appointments online.",
  
};

export default function RegisterLayout({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
