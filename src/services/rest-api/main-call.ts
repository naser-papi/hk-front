import { IAPIInfo, IAPIResponse } from "@/types/base";
import coreCall from "./core-call";

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
            return {
                status: resp.status,
                error:
                    (res.detail as string) ||
                    (res.message as string) ||
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
