import { BaseDto } from "@/types/dto/common";
import { MemberDto } from "@/types/dto/members";
import { BlogDto } from "@/types/dto/blog";

export interface CommentDto extends BaseDto {
    comment: string;
    state: "PENDING" | "APPROVED" | "REJECTED" | "DELETED";
    relatedBlog: BlogDto;
    author: MemberDto;
}
