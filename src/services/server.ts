"use server";
import { headers } from "next/headers";
import { MemberDto } from "@/types/dto/members";

export const isRootPath = async () => {
    try {
        const headersList = headers();
        // Get the referer or fallback to the `host` header
        const referer = headersList.get("referer");
        const host = headersList.get("host");

        // Construct the full URL based on available headers
        const url = referer
            ? new URL(referer)
            : new URL("/", `https://${host}`);

        // Check if the pathname is `/`
        return url.pathname === "/";
    } catch (error) {
        console.error("Error determining whether the route is root:", error);
        return false;
    }
};
export const GetHeaderUserInfo = async () => {
    const url = headers().get("x-userInfo")!;
    const userInfo = JSON.parse(
        headers().get("x-userInfo") || "{}"
    ) as MemberDto;
    return userInfo;
};
