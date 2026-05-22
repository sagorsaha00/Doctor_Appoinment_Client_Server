"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import SingleDoctor from "../../../../components/singleDoctor";
export default function Page() {
  const params = useParams();
  const doctorId = params.id;
 
  const [doctor, setDoctor] = useState(null);

  useEffect(() => {
    const fetchDoctor = async () => {
      try {
        console.log("Doctor ID from URL:", doctorId);

        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/doctor/${doctorId}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              
            },
            cache: "no-store",
          },
        );

        console.log("Response from doctor API:", response);

        if (response.ok) {
          const data = await response.json();

          setDoctor(data.data);
        }
      } catch (error) {
        console.error("Error fetching doctor:", error);
      }
    };

    if (doctorId) {
      fetchDoctor();
    }
  }, [doctorId]);

  return <SingleDoctor doctor={doctor} />;
}
