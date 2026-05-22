import AppointmentForm from "../../../components/appoinmentForm";
import { headers } from "next/headers";
import { getToken } from "../../../utils/getToken";

export default async function AppointmentPage() {
  const headerStore = await headers();

  const tokenSession = await getToken(headerStore);
  console.log("Token in AppointmentPage:", tokenSession);
  const token = tokenSession?.token || tokenSession;

  

  return <AppointmentForm   token={token} />;
}
