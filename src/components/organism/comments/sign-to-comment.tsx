"use client";
import { useSnapshot } from "valtio/react";
import BaseState from "@/stores/base";
import useTranslation from "@/helpers/i18n/use-translation";
import { LinkButton } from "@/components/atom";

const SignToComment = () => {
    const { t } = useTranslation();
    const { userInfo } = useSnapshot(BaseState);
    if (userInfo) return null;

    return (
        <div className={"flex w-full flex-col items-center gap-3"}>
            <p className={"text-label text-white"}>
                {t("common.loginToComment")}
            </p>
            <LinkButton
                label={t("auth.loginToApp")}
                href={"/auth"}
                variant={"secondary"}
            />
        </div>
    );
};

export default SignToComment;
