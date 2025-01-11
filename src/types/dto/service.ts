import { BaseDto, CategoryDto, MediaDto } from "@/types/dto/common";

export interface ServiceDto extends BaseDto {
    title: string;
    shortDesc: string;
    icon: MediaDto;
    bannerMedia: MediaDto;
    firstSection?: any;
    secondSection?: any;
    videoUrl?: string;
    voiceUrl?: string;
    category?: CategoryDto;
}
