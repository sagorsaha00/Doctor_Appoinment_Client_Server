import Header from "../../../components/header";
import Footer from "../../../components/footer";
export const metadata = {
  title: "Doctor Appointment -  Book Appointment",
  description:
    " Book an appointment with our experienced doctors for personalized healthcare and expert medical advice.",
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
