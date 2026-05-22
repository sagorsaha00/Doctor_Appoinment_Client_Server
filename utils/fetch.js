export async function getData() {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/allDoctorList`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
        cache: "no-store",
    });

    if (!response.ok) {
        throw new Error("Failed to fetch doctors");
    }

    const data = await response.json();
     console.log("Fetched doctors data:", data);
    return data;
}