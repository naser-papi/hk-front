import { IAPIInfo } from "@/types/base";
import { addQueryParamsToUrl, replaceParams } from "@/helpers";

const coreCall = async (info: IAPIInfo, token = "") => {
    const url = info.url;
    const normalizeUrl = info.params
        ? replaceParams(url, info.params)
        : info.query
          ? addQueryParamsToUrl(url, info.query)
          : url;
    const server = info.isCms
        ? (process.env.CMS_SERVER ?? process.env.NEXT_PUBLIC_CMS_SERVER)
        : (process.env.API_SERVER ?? process.env.NEXT_PUBLIC_API_SERVER);
    const fullURL = `${server}/${normalizeUrl}`;
    if (info.body instanceof FormData) {
        /*When using the fetch method with FormData, you don't need to manually set the Content-Type header to multipart/form-data. The browser automatically sets the appropriate Content-Type boundary for FormData objects. Setting it manually would override this boundary, leading to issues with the request.*/
        return await fetch(fullURL, {
            method: info.method,
            body: info.body,
            headers: {
                Accept: "application/json",
                Authorization:
                    info.tokenLess || !token ? "" : `Bearer ${token}`,
            },
        });
    }
    return await fetch(fullURL, {
        method: info.method,
        body: info.method !== "GET" ? JSON.stringify(info.body) : null,
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: info.tokenLess || !token ? "" : `Bearer ${token}`,
        },
        ...info.options,
    });
};

export default coreCall;
