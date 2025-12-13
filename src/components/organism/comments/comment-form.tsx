"use client";
import { useSnapshot } from "valtio/react";
import BaseState from "@/stores/base";
import { FormEvent, useEffect, useReducer } from "react";
import { useParams } from "next/navigation";
import useTranslation from "@/helpers/i18n/use-translation";
import { FormItem } from "@/components/molecule";
import { Button, TextBox } from "@/components/atom";
import { useClientApi, useRemoveComment } from "@/hooks";
import { CommentAPIPath } from "@/constants/api-path";
import { CommentDto } from "@/types/dto";
import AksToComment from "@/components/organism/comments/aks-to-comment";
import CommentSavedActions from "@/components/organism/comments/comment-saved-actions";
import CommentsState from "@/stores/comments";
import { IAPIInfo } from "@/types/base";

// Define initial state
type CommentMode = "new" | "update" | "readonly";
type ActionType =
    | "SET_MESSAGE"
    | "SET_LOADING"
    | "RESET"
    | "MESSAGE_SAVED"
    | "COMMENT_REMOVED"
    | "UPDATE_COMMENT";
const initialState = {
    mode: "new" as CommentMode,
    message: "",
    comment: null as CommentDto | null,
    isLoading: false,
};
// Define reducer function
const commentReducer = (
    state: typeof initialState,
    action: { type: ActionType; payload: any }
) => {
    switch (action.type) {
        case "SET_MESSAGE":
            return { ...state, message: action.payload };
        case "SET_LOADING":
            return { ...state, isLoading: action.payload };
        case "RESET":
            return initialState;
        case "MESSAGE_SAVED":
            return {
                ...state,
                isLoading: false,
                mode: "readonly",
                comment: action.payload,
            };
        case "COMMENT_REMOVED":
            return {
                ...state,
                isLoading: false,
                mode: "new",
                comment: null,
                message: "",
            };
        case "UPDATE_COMMENT":
            return { ...state, isLoading: false, mode: "update" };
        default:
            return state;
    }
};

const CommentForm = () => {
    const { userInfo } = useSnapshot(BaseState);
    const { userCommentForDelete } = useSnapshot(CommentsState);
    const { removeComment } = useRemoveComment();
    const { uuid } = useParams();
    const { callRestAPI } = useClientApi();
    const { t } = useTranslation();

    const [state, dispatch] = useReducer(commentReducer, initialState as never);

    const { message, isLoading, mode, comment } = state as typeof initialState;

    useEffect(() => {
        if (userCommentForDelete && userCommentForDelete.id === 0) {
        }
    }, [userCommentForDelete]);
    const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (!message) {
            BaseState.setAlert({
                type: "error",
                message: "please enter your comment",
            });
            return;
        }
        dispatch({ type: "SET_LOADING", payload: true });

        const apiInfo: IAPIInfo =
            mode === "new"
                ? CommentAPIPath.addComment
                : CommentAPIPath.updateComment;
        if (mode === "update") {
            apiInfo.params = {
                id: comment?.documentId || "",
            };
            apiInfo.body = {
                data: {
                    comment: message,
                },
            };
        } else {
            apiInfo.body = {
                data: {
                    comment: message,
                    blogDocumentId: uuid as string,
                },
            };
        }

        const resp = await callRestAPI<CommentDto>(apiInfo);
        if (resp) {
            dispatch({
                type: "MESSAGE_SAVED",
                payload: resp,
            });
        } else {
            dispatch({ type: "SET_LOADING", payload: false });
        }
    };
    const doRemoveComment = async () => {
        if (!comment) return;
        dispatch({ type: "SET_LOADING", payload: true });
        const resp = await removeComment(comment);
        if (resp) {
            dispatch({ type: "COMMENT_REMOVED", payload: null });
        }
    };
    if (!userInfo) return null;

    return (
        <form
            className={"comment-form flex w-full flex-col gap-2"}
            onSubmit={onSubmit}
        >
            {mode === "new" ? (
                <AksToComment fullName={userInfo.fullName} />
            ) : (
                <CommentSavedActions
                    onUpdate={() =>
                        dispatch({ type: "UPDATE_COMMENT", payload: null })
                    }
                    disabled={isLoading || mode !== "readonly"}
                    onRemove={doRemoveComment}
                />
            )}

            <FormItem label={t("common.yourComment")}>
                <TextBox
                    type={"textarea"}
                    name={"message"}
                    value={message}
                    readOnly={mode === "readonly"}
                    rows={5}
                    updateDto={(_, value) =>
                        dispatch({ type: "SET_MESSAGE", payload: value })
                    }
                />
            </FormItem>
            <Button
                label={t("common.confirm")}
                type={"submit"}
                variant={"secondary"}
                disabled={isLoading || mode === "readonly"}
            />
        </form>
    );
};

export default CommentForm;
