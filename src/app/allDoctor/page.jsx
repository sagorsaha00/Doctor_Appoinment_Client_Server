import { getData } from "../../../utils/fetch";
import DoctorsList from "../../../components/DoctorList";

export default async function Page() {
  const doctors = await getData();

  return <DoctorsList dataX={doctors.data} />;
}
