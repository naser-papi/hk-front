import { i18nRouter } from "next-i18n-router";
import i18nConfig from "./i18nConfig";
import { NextRequest, NextResponse } from "next/server";
import mainCall from "@/services/rest-api/main-call";
import { MembersAPIPath } from "@/constants/api-path/members";
import { ICMSApiResponse } from "@/types/base";
import { MemberDto } from "@/types/dto/members";
import { EventEmitter } from "events";

EventEmitter.defaultMaxListeners = 50;

// Helper function for token validation
async function isAuthenticated(
    request: NextRequest
): Promise<boolean | MemberDto> {
    const token =
        request.headers.get("Authorization") ||
        request.cookies.get("hkAuthToken")?.value;

    if (!token) return false;

    //validate the token it should return userinfo
    const apiInfo = MembersAPIPath.getUserInfo;
    apiInfo.body.token = token;
    const resp = await mainCall<ICMSApiResponse<MemberDto>>(apiInfo);
    if (resp.status === 200 && resp.data?.data) {
        return resp.data.data;
    }
    return false;
}

export async function middleware(request: NextRequest) {
    const urlPath = request.nextUrl.pathname;
    let userInfo = {} as MemberDto;
    // Only check authentication for paths starting with '/dashboard'
    if (urlPath.indexOf("/dashboard") > -1) {
        const memberInfo = await isAuthenticated(request);
        if (!memberInfo) {
            return NextResponse.redirect(new URL("/auth", request.url));
        } else {
            // Add the user info to the request object for further use
            userInfo = memberInfo as MemberDto;
        }
    }

    // Handle i18n routing
    const i18nResponse = i18nRouter(request, i18nConfig);

    // Add the current request URL to a custom header for further use
    i18nResponse.headers.set("x-url", request.url);
    i18nResponse.headers.set("x-userInfo", JSON.stringify(userInfo));
    return i18nResponse;
}

// Apply middleware to specific routes
export const config = {
    matcher: "/((?!api|static|.*\\..*|_next).*)", // Exclude specific paths
};
