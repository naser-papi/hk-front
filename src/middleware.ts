import { i18nRouter } from "next-i18n-router";
import i18nConfig from "./i18nConfig";
import { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
    // Store current request url in a custom header, which you can read later
    const i18n = i18nRouter(request, i18nConfig);
    i18n.headers.set("x-url", request.url);
    return i18n;
}

// only applies this middleware to files in the app directory
export const config = {
    matcher: "/((?!api|static|.*\\..*|_next).*)",
};
