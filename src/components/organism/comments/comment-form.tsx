"use client";
import { useSnapshot } from "valtio/react";
import BaseState from "@/stores/base";
import { FormEvent, useState } from "react";
import { useParams } from "next/navigation";
import useTranslation from "@/helpers/i18n/use-translation";
import { formatLocaleString } from "@/helpers";
import { FormItem } from "@/components/molecule";
import { Button, TextBox } from "@/components/atom";
import { useClientApi } from "@/hooks";
import { BlogsAPIPath } from "@/constants/api-path";

const CommentForm = () => {
    const { userInfo } = useSnapshot(BaseState);
    const { uuid } = useParams();
    const { callRestAPI } = useClientApi();
    const { t } = useTranslation();
    const [message, setMessage] = useState("");
    const onSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (!message) {
            BaseState.setAlert({
                type: "error",
                message: "please enter your comment",
            });
            return;
        }
        const apiInfo = BlogsAPIPath.addComment;
        apiInfo.params = {
            uuid: uuid as string,
        };
        apiInfo.body = {
            author: {
                id: userInfo?.telegramId || userInfo?.email || "1",
                name: userInfo!.fullName,
                email: userInfo!.email || "",
                avatar: userInfo!.avatar || "",
            },
            content: message,
            threadOf: undefined,
        };

        const resp = callRestAPI(apiInfo);
        console.log(resp);
    };
    if (!userInfo) return null;
    return (
        <form
            className={"comment-form flex w-full flex-col gap-2"}
            onSubmit={onSubmit}
        >
            <p>
                {formatLocaleString(
                    t("common.writerYourComment"),
                    userInfo.fullName
                )}
            </p>
            <FormItem label={t("common.yourComment")}>
                <TextBox
                    type={"textarea"}
                    name={"message"}
                    value={message}
                    rows={5}
                    updateDto={(_, value) => setMessage(value)}
                />
            </FormItem>
            <Button
                label={t("common.confirm")}
                type={"submit"}
                intend={"secondary"}
            />
        </form>
    );
};

export default CommentForm;
