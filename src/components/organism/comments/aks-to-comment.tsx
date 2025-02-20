"use client";
import { formatLocaleString } from "@/helpers";
import useTranslation from "@/helpers/i18n/use-translation";

interface CommentFormAksToCommentProps {
    fullName: string;
}

const AksToComment = ({ fullName }: CommentFormAksToCommentProps) => {
    const { t } = useTranslation();
    return <p>{formatLocaleString(t("common.writerYourComment"), fullName)}</p>;
};

export default AksToComment;
