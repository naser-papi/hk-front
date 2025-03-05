import { IAPIInfo } from "@/types/base";
import { addQueryParamsToUrl, replaceParams } from "@/helpers";

const coreCall = async (info: IAPIInfo, token = "", retries = 3) => {
    const url = info.url;

    let normalizeUrl = info.params ? replaceParams(url, info.params) : url;
    normalizeUrl = info.query
        ? addQueryParamsToUrl(normalizeUrl, info.query)
        : normalizeUrl;

    const server = process.env.CMS_SERVER ?? process.env.NEXT_PUBLIC_CMS_SERVER;
    if (!server) {
        throw new Error(
            "CMS_SERVER or NEXT_PUBLIC_CMS_SERVER is not defined in environment variables."
        );
    }
    const fullURL = new URL(normalizeUrl, server).toString();
    console.log(">>>", fullURL);
    if (info.body instanceof FormData) {
        /*When using the fetch method with FormData, you don't need to manually set the Content-Type header to multipart/form-data. The browser automatically sets the appropriate Content-Type boundary for FormData objects. Setting it manually would override this boundary, leading to issues with the request.*/
        return fetch(fullURL, {
            method: info.method,
            body: info.body,
            headers: {
                Accept: "application/json",
                Authorization:
                    info.tokenLess || !token ? "" : `Bearer ${token}`,
            },
        });
    }
    return fetch(fullURL, {
        method: info.method,
        body: info.method !== "GET" ? JSON.stringify(info.body) : null,
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: info.tokenLess || !token ? "" : `Bearer ${token}`,
        },
        ...info.options,
        cache: "force-cache",
    });
};

export default coreCall;
