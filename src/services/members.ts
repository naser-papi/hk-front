import { cache } from "react";
import { MembersAPIPath } from "@/constants/api-path/members";
import mainCall from "@/services/rest-api/main-call";
import { MemberDto } from "@/types/dto/members";
import { ICMSListApiResponse } from "@/types/base";

export const GetUserToken = cache(async (dto: MemberDto) => {
    const apiInfo = MembersAPIPath.getUserToken;
    apiInfo.body.data = dto;
    const resp = await mainCall<{ token: string }>(apiInfo);
    if (resp.status === 400 && resp.error) {
        alert(resp.error);
    }
    return resp?.data?.token;
});

export const SendOTPCode = cache(async (dto: MemberDto) => {
    const apiInfo = MembersAPIPath.sendOTP;
    apiInfo.body.data = dto;
    const resp = await mainCall<boolean>(apiInfo);
    if (resp?.data) {
        return true;
    } else if (resp.status === 400 && resp.error) {
        throw new Error(resp.error);
    }
    throw new Error("Something went wrong");
});

export const GetMemberByEmailOrTelegramId = cache(
    async (email: string, telegramId: string) => {
        if (!email && !telegramId) {
            throw new Error("Email Or TelegramId should be provided");
        }
        const apiInfo = { ...MembersAPIPath.findMember };
        const filter = `?filters[$or][0][email][$eqi]=${email}&filters[$or][1][telegramId][$eqi]=${telegramId.replace("@", "")}&fields[0]=fullName&fields[1]=email&fields[2]=telegramId`;
        apiInfo.url += filter;
        const resp = await mainCall<ICMSListApiResponse<MemberDto>>(apiInfo);
        if (resp?.data?.data?.length) {
            return resp.data.data[0];
        }
        return {} as MemberDto;
    }
);
