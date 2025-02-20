"use client";
import { useSnapshot } from "valtio/react";
import BaseState from "@/stores/base";
import { FormEvent, useReducer } from "react";
import { useParams } from "next/navigation";
import useTranslation from "@/helpers/i18n/use-translation";
import { FormItem } from "@/components/molecule";
import { Button, TextBox } from "@/components/atom";
import { useClientApi } from "@/hooks";
import { BlogsAPIPath } from "@/constants/api-path";
import { CommentDto } from "@/types/dto";
import { IAPIInfo } from "@/types/base";
import AksToComment from "@/components/organism/comments/aks-to-comment";
import CommentSavedActions from "@/components/organism/comments/comment-saved-actions";
import CommentsState from "@/stores/comments";

// Define initial state
type CommentMode = "new" | "update" | "readonly";
type ActionType =
    | "SET_MESSAGE"
    | "SET_LOADING"
    | "RESET"
    | "MESSAGE_SAVED"
    | "UPDATE_COMMENT";
const initialState = {
    mode: "new" as CommentMode,
    message: "",
    commentId: 0,
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
                commentId: action.payload.commentId,
            };
        case "UPDATE_COMMENT":
            return { ...state, isLoading: false, mode: "update" };
        default:
            return state;
    }
};

const CommentForm = () => {
    const { userInfo } = useSnapshot(BaseState);
    const { uuid } = useParams();
    const { callRestAPI } = useClientApi();
    const { t } = useTranslation();

    const [state, dispatch] = useReducer(commentReducer, initialState as never);

    const { message, isLoading, mode, commentId } = state;

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
                ? BlogsAPIPath.addComment
                : BlogsAPIPath.updateComment;
        apiInfo.params = {
            uuid: uuid as string,
        };
        if (mode === "update") {
            apiInfo.params.id = commentId;
        }
        apiInfo.body = {
            content: message,
            threadOf: undefined,
        };

        const resp = await callRestAPI<CommentDto>(apiInfo);
        if (resp) {
            dispatch({
                type: "MESSAGE_SAVED",
                payload: { commentId: resp.id },
            });
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
                    onRemove={() => {
                        CommentsState.userCommentIdForDelete = commentId;
                    }}
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
                intend={"secondary"}
                disabled={isLoading || mode === "readonly"}
            />
        </form>
    );
};

export default CommentForm;
