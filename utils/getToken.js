import { auth } from "./auth";

export async function getToken(headerStore) {

    try {

        const tokenSession = await auth.api.getToken({
            headers: headerStore,
        });

        console.log("Session in getToken:", tokenSession);

        return tokenSession;

    } catch (error) {

        console.log("AUTH ERROR:", error);

        return null;
    }
}