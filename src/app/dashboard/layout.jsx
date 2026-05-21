import React from "react";
import Header from "../../../components/header";
import Footer from "../../../components/footer";
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />

        <main className="min-h-screen">{children}</main>

        <Footer />
      </body>
    </html>
  );
}
