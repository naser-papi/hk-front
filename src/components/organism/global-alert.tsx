"use client";
import { useSnapshot } from "valtio/react";
import BaseState from "@/stores/base";
import { Alert } from "@/components/atom";

const GlobalAlert = () => {
    const { globalAlert } = useSnapshot(BaseState);
    if (!globalAlert) return null;
    return (
        <div className={"fixed top-2 z-50 flex w-full justify-center"}>
            <Alert
                message={globalAlert.message}
                variant={globalAlert.type}
                closable={globalAlert.closable}
            />
        </div>
    );
};

export default GlobalAlert;
