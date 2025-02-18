"use client";
import type { IAPIInfo } from "@/types/base";
import mainCall from "@/services/rest-api/main-call";
import BaseState from "@/stores/base";
import { useRouter } from "next/navigation";
import { useSnapshot } from "valtio";
import { getAppLocalStorageToken } from "@/helpers/utils";

const useClientApi = () => {
    const { token } = useSnapshot(BaseState);
    const router = useRouter();
    const callRestAPI = async <T>(info: IAPIInfo) => {
        let { access } = token ?? {};
        if (!access) {
            const lsTokens = getAppLocalStorageToken();
            if (lsTokens) {
                access = lsTokens.access;
                BaseState.token = {
                    access: lsTokens.access,
                    refresh: lsTokens.refresh,
                };
            }
        }
        const resp = await mainCall<T>(info, access);
        if (resp.status === 403 || resp.status === 401) {
            BaseState.globalAlert = null;
            router.push("/auth");
        }
        if (
            resp.status != 200 &&
            resp.status != 201 &&
            resp.status !== 204 &&
            resp.status !== 303
        ) {
            BaseState.setAlert({
                type: "error",
                message: resp.error!,
            });
        } else {
            BaseState.globalAlert = null;
        }
        return resp.data;
    };

    return { callRestAPI };
};

export default useClientApi;
