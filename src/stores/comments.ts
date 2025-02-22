import { proxy } from "valtio/vanilla";
import { ICommentsState } from "@/types/store/comments";

const CommentsState = proxy<ICommentsState>({
    list: [],
    loading: false,
    uuid: "",
    userCommentForDelete: null,
});

export default CommentsState;
