"use client";
import { useEffect } from "react";
import {
    clearTokensFormAppLocalStorage,
    getAppLocalStorageToken,
} from "@/helpers";
import mainCall from "@/services/rest-api/main-call";
import { MembersAPIPath } from "@/constants/api-path/members";
import BaseState from "@/stores/base";
import { IAPIResponse, IUserInfo } from "@/types/base";

const ClientInitializer = () => {
    useEffect(() => {
        (async () => {
            //check if there is a valid token available
            const token = getAppLocalStorageToken();
            if (token?.access) {
                const apiInfo = MembersAPIPath.getUserInfo;
                apiInfo.body = {
                    token: token.access,
                };
                const resp = await mainCall<IAPIResponse<IUserInfo>>(apiInfo);
                if (!resp || [401, 403, 404].includes(resp.status)) {
                    //invalid token
                    BaseState.userInfo = undefined;
                    BaseState.token = undefined;
                    clearTokensFormAppLocalStorage();
                } else {
                    const userInfo = resp.data?.data;
                    BaseState.userInfo = userInfo;
                    BaseState.token = token;
                }
            }
        })();
    }, []);
    return <></>;
};

export default ClientInitializer;
