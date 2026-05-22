import React from "react";
import Header from "../../../components/header";
import Footer from "../../../components/footer";

export const metadata = {
  title: "Doctor Appointment - Dashboard",
  description:
    "Manage your appointments, view medical records, and access your healthcare information.",
  keywords: [
    "dashboard",
    "appointments",
    "medical records",
    "doctor appointment",
    "healthcare",
  ],
  openGraph: {
    title: "Doctor Appointment - Dashboard",
    description:
      "Manage your appointments, view medical records, and access your healthcare information.",
  },
};

export default function DashboardLayout({ children }) {
  return (
    <>
      <Header />
      <main className="min-h-screen">{children}</main>
      <Footer />
    </>
  );
}
