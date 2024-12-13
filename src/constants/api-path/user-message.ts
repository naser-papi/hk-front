import { IAPIInfo } from "@/types/base";
import { UserMessageDto } from "@/types/dto";

export const UserMessagesAPIPath = {
    sendNewMessage: {
        method: "POST",
        url: `api/user-messages`,
        body: { data: {} as UserMessageDto },
    },
} satisfies { [key: string]: IAPIInfo };
