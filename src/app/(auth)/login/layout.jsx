import React from "react";
import Header from "../../../../components/header";
import Footer from "../../../../components/footer";

export const metadata = {
  title: "Doctor Appointment - Login",
  description:
    "Sign in to your doctor appointment account to manage appointments and medical records.",
   
};

export default function LoginLayout({ children }) {
  return (
    <>
      <Header></Header>
      {children}
      <Footer></Footer>
    </>
  );
}
