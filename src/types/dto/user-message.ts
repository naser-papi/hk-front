import { BaseDto } from "@/types/dto/common";

export interface UserMessageDto extends Partial<BaseDto> {
    fullName: string;
    email: string;
    phoneNo: string;
    message: string;
}
