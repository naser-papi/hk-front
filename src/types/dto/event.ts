import { BaseDto, MediaDto } from "@/types/dto/common";

export interface EventDto extends BaseDto {
    title: string;
    shortDesc: string;
    detailLink: string;
    dateAndTime: string;
    cardImage: MediaDto;
    bannerMedia: MediaDto;
}
