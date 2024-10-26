import { IAPIInfo } from "@/types/base";
import { UserMessageDto } from "@/types/dto";

export const UserMessagesAPIPath = {
    sendNewMessage: {
        isCms: true,
        method: "POST",
        url: `api/user-messages`,
        body: { data: {} as UserMessageDto },
    },
} satisfies { [key: string]: IAPIInfo };
