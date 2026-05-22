import { getToken } from "../../../../utils/getToken";
import { headers } from "next/headers";
import SingleDoctor from "../../../../components/singleDoctor";

export default async function Page({ params }) {
  const doctorId = params.id;
  const headerStore = await headers();
  const token = await getToken(headerStore);

  let doctor = null;
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/doctor/${doctorId}`,
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
      doctor = data.data;
    }
  } catch (error) {
    console.error("Error fetching doctor:", error);
  }

  return <SingleDoctor doctor={doctor} />;
}
