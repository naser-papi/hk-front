import { BaseDto } from "@/types/dto/common";
import { BlogDto } from "@/types/dto/blog";
import { EventDto } from "@/types/dto/event";
import { LinkDto } from "@/types/dto/external-link";
import { ServiceDto } from "@/types/dto/service";

export interface BannerDto extends BaseDto {
    blogs: BlogDto;
    event: EventDto;
    link: LinkDto;
    service: ServiceDto;
}
