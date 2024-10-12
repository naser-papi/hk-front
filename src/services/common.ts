import { cookies } from "next/headers";
import { i18nCookieName } from "@/constants/locale";

export const GetLocaleFromCookie = () => {
    const cookieStore = cookies();
    const locale = cookieStore.get(i18nCookieName);
    return locale?.value ?? "en";
};
