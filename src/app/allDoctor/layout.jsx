import React from "react";
import Header from "../../../components/header";
import Footer from "../../../components/footer";
export const metadata = {
  title: "Doctor Appointment - All Doctors",
  description:
    "Browse and find the best doctors for your healthcare needs.",
};
export default function layout({ children }) {
  return (
    <>
      <Header></Header>
      {children}
      <Footer></Footer>
    </>
  );
}
