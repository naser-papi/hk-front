import { BaseDto } from "@/types/dto/common";

export interface MemberDto extends BaseDto {
    fullName: string;
    email: string;
    telegramId: string;
    otpCode: string;
    userId?: number;
}
