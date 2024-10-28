import { BaseDto, MediaDto } from "@/types/dto/common";

export interface ServiceDto extends BaseDto {
    title: string;
    shortDesc: string;
    icon: MediaDto;
    bannerMedia: MediaDto;
}
