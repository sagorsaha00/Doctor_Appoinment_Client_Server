"use client";

import Home from "./home/page";
// import { useEffect, useState } from "react";

export default function Main() {

  // const [doctors, setDoctors] = useState([]);
  // const token = "x";

  // useEffect(() => {

  //   const fetchDoctors = async () => {

  //     try {

  //       const res = await fetch(
  //         `${process.env.NEXT_PUBLIC_API_URL}/allDoctorList`,

  //       );

  //       const data = await res.json();

  //       setDoctors(data?.data || []);

  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };

  //   fetchDoctors();

  // }, []);
  //  console.log("Doctors in Main:", doctors);
  return (
    <>
      <Home />
    </>
  );
}