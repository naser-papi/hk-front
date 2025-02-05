import { MediaDto } from "@/types/dto/common";

export interface CompanyInfoDto {
    title: string;
    about: string;
    phoneNo1: string;
    phoneNo2?: any;
    supportEmail?: any;
    instaLink: string;
    telegramLink: string;
    youtubeLink: string;
    whatsappLink: string;
    address: string;
    logo: MediaDto;
    copyright: string;
    servicesIntroUrl?: string;
    backgrounds?: MediaDto[];
}
