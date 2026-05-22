import React from "react";
import Header from "../../../../components/header";
import Footer from "../../../../components/footer";
export const metadata = {
  title: "Doctor Appointment - Doctor Details",
  description:
    "View detailed information about our experienced doctors and their specialties.",
};
export default function RootLayout({ children }) {

  return (
    <>
      <Header></Header>
      {children}
      <Footer></Footer>
    </>
  );
}
