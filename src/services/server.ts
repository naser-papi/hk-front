"use server";
import { headers } from "next/headers";
import { MemberDto } from "@/types/dto/members";

export const GetHeaderUserInfo = async () => {
    const url = headers().get("x-userInfo")!;
    const userInfo = JSON.parse(
        headers().get("x-userInfo") || "{}"
    ) as MemberDto;
    return userInfo;
};
