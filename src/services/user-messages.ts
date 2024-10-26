import { UserMessagesAPIPath } from "@/constants/api-path";
import mainCall from "@/services/rest-api/main-call";
import { ICMSApiResponse } from "@/types/base";
import { UserMessageDto } from "@/types/dto";

export const SendNewMessage = async (dto: UserMessageDto) => {
    const apiInfo = UserMessagesAPIPath.sendNewMessage;
    apiInfo.body = { data: dto };
    const resp = await mainCall<ICMSApiResponse<UserMessageDto>>(apiInfo);
    if (resp && resp.data) {
        return resp.data.data;
    } else {
        return {} as UserMessageDto;
    }
};
