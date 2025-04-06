"use server";
import { CommentDto } from "@/types/dto";
import { formatEventDate } from "@/helpers";
import { GetLocaleFromCookie } from "@/services/common";

interface CommentProps {
    data: CommentDto;
    index: number;
}

const Comment = ({ data, index }: CommentProps) => {
    const locale = GetLocaleFromCookie();
    return (
        <div className={"w-full bg-primary p-3"}>
            <div
                className={"relative rounded-lg border border-white px-3 py-10"}
            >
                <label
                    className={"absolute -top-3 start-3 bg-primary px-2 py-1"}
                >
                    <strong className={"mx-4"}>{data.author.fullName}</strong>
                    <strong>{formatEventDate(data.updatedAt, locale)}</strong>
                </label>
                <p className={"text-label text-white"}>{data.comment}</p>
            </div>
        </div>
    );
};

export default Comment;
