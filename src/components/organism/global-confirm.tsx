"use client";
import { useSnapshot } from "valtio/react";
import BaseState from "@/stores/base";
import { Modal } from "@/components/molecule";
import useTranslation from "@/helpers/i18n/use-translation";

const GlobalConfirm = () => {
    const { t } = useTranslation();
    const { globalConfirm } = useSnapshot(BaseState);
    if (!globalConfirm) return null;
    return (
        <Modal
            title={globalConfirm.title}
            isOpen={true}
            onClose={globalConfirm.onCancel}
            onConfirm={globalConfirm.onConfirm}
            size={"small"}
            closeButtonText={t("common.no")}
            confirmButtonText={t("common.yes")}
        >
            {globalConfirm.content}
        </Modal>
    );
};

export default GlobalConfirm;
