"use client";
import { useParams } from "next/navigation";
import { getSingleData } from "../../../../utils/fetch";
import SingleDoctor from "../../../../components/singleDoctor";

const doctor = {
  id: "d1",
  name: "Dr. Ayesha Rahman",
  specialty: "Cardiologist",
  image: "https://i.ibb.co/doctor-demo.jpg",
  experience: "10 years",
  availability: ["09:00 AM - 12:00 PM", "04:00 PM - 07:00 PM"],
  description:
    "Highly experienced cardiologist specializing in heart diseases, preventive care, and patient-centered treatment.",
  hospital: "Labaid Cardiac Hospital",
  location: "Dhanmondi, Dhaka",
  fee: 800,
};

export default function Page() {
  const params = useParams();
  const doctorId = params.id;
  console.log("Doctor ID from URL:", doctorId);

  return <SingleDoctor id={doctorId} />;
}
