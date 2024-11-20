import { cookies } from "next/headers";
import { cache } from "react";
import { i18nCookieName } from "@/constants/locale";

export const GetLocaleFromCookie = () => {
    const cookieStore = cookies();
    const locale = cookieStore.get(i18nCookieName);
    return locale?.value ?? "en";
};

export const GetUrlParams = cache((url: string) => {
    const urlInfo = new URL(url);
    return Object.fromEntries(urlInfo.searchParams);
});
