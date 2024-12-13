import { IAPIInfo } from "@/types/base";
import { MemberDto } from "@/types/dto/members";

export const MembersAPIPath = {
    getUserToken: {
        method: "POST",
        url: "api/members/user-token",
        body: {
            data: {} as MemberDto,
        },
    },
    sendOTP: {
        method: "POST",
        url: "api/members/sendOTP",
        body: {
            data: {} as MemberDto,
        },
    },
    findMember: {
        method: "GET",
        url: "api/members",
    },
} satisfies { [key: string]: IAPIInfo };
