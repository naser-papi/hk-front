import { CommentDto } from "@/types/dto";

export interface ICommentsState {
    uuid: string;
    list: CommentDto[];
    loading: boolean;
    userCurrentComment?: CommentDto;
    userCommentForDelete: CommentDto | null;
}
