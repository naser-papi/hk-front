import { CommentDto } from "@/types/dto";
import { useClientApi } from "@/hooks";
import { CommentAPIPath } from "@/constants/api-path";
import BaseState from "@/stores/base";
import useTranslation from "@/helpers/i18n/use-translation";

const useRemoveComment = () => {
    const { callRestAPI } = useClientApi();
    const { t } = useTranslation();
    const startRemove = async (comment: CommentDto) => {
        const apiInfo = CommentAPIPath.removeComment;
        apiInfo.params = {
            id: comment.documentId,
        };
        return await callRestAPI(apiInfo);
    };
    const removeComment = (comment: CommentDto) => {
        return new Promise((resolve) => {
            if (!comment) return;
            BaseState.globalConfirm = {
                title: t("common.removeComment"),
                content: (
                    <p className={"py-10"}>
                        {t("common.confirmRemoveComment")}
                    </p>
                ),
                onCancel: () => {
                    BaseState.globalConfirm = null;
                    resolve(undefined);
                },
                onConfirm: async () => {
                    const resp = await startRemove(comment);
                    BaseState.globalConfirm = null;
                    resolve(resp);
                },
            };
        });
    };

    return { removeComment };
};

export default useRemoveComment;
