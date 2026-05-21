import React from "react";
import Header from "../../../../components/header";
import Footer from "../../../../components/footer";
export default function RootLayout({ children }) {
  return (
    <>
      <Header></Header>
      {children}
      <Footer></Footer>
    </>
  );
}
