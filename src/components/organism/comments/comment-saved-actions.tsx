"use client";
import useTranslation from "@/helpers/i18n/use-translation";
import { Button } from "@/components/atom";

interface CommentSavedActionsProps {
    onUpdate: () => void;
    onRemove: () => void;
    disabled: boolean;
}

const CommentSavedActions = ({
    onUpdate,
    onRemove,
    disabled,
}: CommentSavedActionsProps) => {
    const { t } = useTranslation();
    return (
        <div className={"flex flex-col gap-3"}>
            <p className={"text-label text-white"}>
                {t("common.commentAdded")}
            </p>
            <div className={"flex gap-2"}>
                <Button
                    label={t("common.update")}
                    onClick={onUpdate}
                    intend={"secondary"}
                    disabled={disabled}
                />
                <Button
                    label={t("common.remove")}
                    onClick={onRemove}
                    intend={"secondary"}
                    disabled={disabled}
                />
            </div>
        </div>
    );
};

export default CommentSavedActions;
