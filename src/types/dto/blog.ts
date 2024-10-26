import { BaseDto, MediaDto } from "@/types/dto/common";

export interface BlogDto extends BaseDto {
    title: string;
    subTitle: string;
    shortDesc: string;
    readTime: number;
    cardImage: MediaDto;
    firstSection?: any;
    secondSection?: any;
    author: string;
    keywords: string;
}
