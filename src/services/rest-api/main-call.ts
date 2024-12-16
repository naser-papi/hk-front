import { IAPIInfo, IAPIResponse } from "@/types/base";
import coreCall from "./core-call";
import BaseState from "@/stores/base";

const mainCall = async <T>(
    info: IAPIInfo,
    token = ""
): Promise<IAPIResponse<T>> => {
    try {
        const resp = await coreCall(info, token);
        if (resp.status === 200 || resp.status === 201 || resp.status === 303) {
            const res = await resp.json();
            return { data: res as T, status: resp.status };
        }
        if (resp.status === 204) {
            return { status: resp.status, data: {} as T };
        } else {
            const res = await resp.json();
            if (res.error?.status === 500) {
                BaseState.globalAlert = {
                    message: "Server Side Error!",
                    type: "error",
                };
            }
            return {
                status: res.error.status,
                error:
                    (res.error.detail as string) ||
                    (res.error.message as string) ||
                    "Something went wrong",
            };
        }
    } catch (error) {
        console.log("error!", error);
        return {
            status: 500,
            error: `SOMETHING WENT WRONG! ${error}`,
        };
    }
};

export default mainCall;
