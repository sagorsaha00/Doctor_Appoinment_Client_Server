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

    return data;
}

export async function getSingleData(id) {
    console.log("id",id)
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/doctor/${id}`, {
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

    return data;
}


