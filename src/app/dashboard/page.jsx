import DashboardProfile from "../../../components/DashboardProfile";

import { headers } from "next/headers";
import { getToken } from "../../../utils/getToken";

export default async function DashboardPage() {
  const headerStore = await headers();

  const tokenSession = await getToken(headerStore);
  console.log("token", tokenSession);
  const token = tokenSession?.token || tokenSession;
  return <DashboardProfile token={token} />;
}
