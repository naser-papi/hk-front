"use client";
import { useSnapshot } from "valtio/react";
import BaseState from "@/stores/base";
import { Alert } from "@/components/atom";

const GlobalAlert = () => {
    const { globalAlert } = useSnapshot(BaseState);
    if (!globalAlert) return null;
    return (
        <div className={"fixed w-full text-end"}>
            <Alert message={globalAlert.message} />
        </div>
    );
};

export default GlobalAlert;
