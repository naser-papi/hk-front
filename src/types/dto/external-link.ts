import { BaseDto, MediaDto } from "@/types/dto/common";

export interface LinkDto extends BaseDto {
    title: string;
    shortDesc: string;
    detailLink: string;
    icon: MediaDto;
    bannerMedia: MediaDto;
}
