import {
    CommentForm,
    CommentsList,
    SignToComment,
} from "@/components/organism/comments";

const CommentsSection = () => {
    return (
        <div
            className={
                "template [&_.hk-text-box]:text-label my-6 rounded-2xl [&_.comments-list]:mt-4 [&_.hk-text-box]:border-white [&_.hk-text-box]:text-white"
            }
        >
            <SignToComment />
            <CommentForm />
            <CommentsList />
        </div>
    );
};

export default CommentsSection;
