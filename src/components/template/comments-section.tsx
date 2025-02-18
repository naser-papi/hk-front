import { CommentForm, SignToComment } from "@/components/organism/comments";

const CommentsSection = () => {
    return (
        <div className={"template"}>
            <SignToComment />
            <CommentForm />
        </div>
    );
};

export default CommentsSection;
