import { getToken } from "../../../utils/getToken";
import { headers } from "next/headers";
import DoctorsList from "../../../components/DoctorList";

export default async function Page() {
  const headerStore = await headers();
  const token = await getToken(headerStore);

  let doctors = [];
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/allDoctorList`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token?.token || token}`,
        },
        cache: "no-store",
      },
    );
    if (response.ok) {
      const data = await response.json();
      doctors = data.data || [];
    }
  } catch (error) {
    console.error("Error fetching doctors:", error);
  }

  return <DoctorsList dataX={doctors} />;
}
