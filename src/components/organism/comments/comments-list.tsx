import { GetBlogsComments } from "@/services/blogs";
import trans from "@/helpers/i18n/server";
import { Comment } from "@/components/molecule";

const CommentsList = async () => {
    const comments = await GetBlogsComments();
    return (
        <article className={"comments-list flex w-full flex-col gap-3"}>
            <h2 className={"text-title mb-3"}>
                {trans("common.confirmedComments")}:
            </h2>
            {comments?.map((comment, index) => (
                <Comment key={comment.id} data={comment} index={index} />
            ))}
        </article>
    );
};

export default CommentsList;
