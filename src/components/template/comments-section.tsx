import { CommentForm, SignToComment } from "@/components/organism/comments";

const CommentsSection = () => {
    return (
        <div
            className={
                "template [&_.hk-text-box]:text-label [&_.hk-text-box]:border-white [&_.hk-text-box]:text-white"
            }
        >
            <SignToComment />
            <CommentForm />
        </div>
    );
};

export default CommentsSection;
