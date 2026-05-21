import Header from "../../../components/header";
import Hero from "../../../components/heroSection";
import Footer from "../../../components/footer";
import Services from "../../../components/service";
import TopDoctors from "../../../components/topDoctor";
import DoctorsSection from "../../../components/showDoctor";
import ClientReviews from "../../../components/review";
import ResultSection from "../../../components/result";

export default function HomePage() {
  return (
    <>
      <Header />
      <Hero />
      <Services></Services>
      <TopDoctors />
      <DoctorsSection></DoctorsSection>
      <ClientReviews></ClientReviews>
      <ResultSection />
      <Footer />
    </>
  );
}
