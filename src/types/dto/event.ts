import {
    BaseDto,
    CategoryDto,
    LocationDto,
    MediaDto,
} from "@/types/dto/common";

export interface EventDto extends BaseDto {
    title: string;
    shortDesc: string;
    detailLink: string;
    dateAndTime: string;
    cardImage: MediaDto;
    bannerMedia: MediaDto[];
    firstSection?: any;
    secondSection?: any;
    eventType: "Online" | "InPlace";
    eventSubject: "Learning" | "Hobby" | "Entertainment";
    durationPerDay: number;
    eventTimeInDay: number;
    videoUrl?: string;
    category?: CategoryDto;
    location?: LocationDto;
    address?: string;
    subTitle?: string;
}
