"use server";
import { headers } from "next/headers";
import { MemberDto } from "@/types/dto/members";

export const isRootPath = async () => {
    const headersList = headers();
    const referer = headersList.get("referer"); // Get the referer or header info.

    if (referer) {
        try {
            const url = new URL(referer);
            return url.pathname === "/";
        } catch (error) {
            console.error("URL Parsing Error: ", error);
            return false;
        }
    }

    return false;
};
export const GetHeaderUserInfo = async () => {
    const url = headers().get("x-userInfo")!;
    const userInfo = JSON.parse(
        headers().get("x-userInfo") || "{}"
    ) as MemberDto;
    return userInfo;
};
