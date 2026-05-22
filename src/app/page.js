

import Home from "./home/page";
import { headers } from "next/headers";
import { getToken } from "../../utils/getToken";
import { getSession } from "../../utils/auth-client";

export default async function Main() {
  const token =await getToken(await headers())
  console.log("TOken", token)
  const tokenx = await getSession.token();
  console.log("TOkenx", tokenx)
  return (
    <>
      <Home />
    </>
  );
}