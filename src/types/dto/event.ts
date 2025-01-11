import { BaseDto, CategoryDto, MediaDto } from "@/types/dto/common";

export interface EventDto extends BaseDto {
    title: string;
    shortDesc: string;
    detailLink: string;
    dateAndTime: string;
    cardImage: MediaDto;
    bannerMedia: MediaDto[];
    firstSection?: any;
    secondSection?: any;
    videoUrl?: string;
    category?: CategoryDto;
}
