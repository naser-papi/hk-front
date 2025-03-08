import { cookies, headers } from "next/headers";
import { cache } from "react";
import { i18nCookieName } from "@/constants/locale";
import {
    BlogsAPIPath,
    EventsAPIPath,
    ServicesAPIPath,
} from "@/constants/api-path";
import mainCall from "@/services/rest-api/main-call";
import { IAPIResponse } from "@/types/base";
import { RelatedContentDto } from "@/types/dto/common";

export const GetLocaleFromCookie = () => {
    const cookieStore = cookies();
    const locale = cookieStore.get(i18nCookieName);
    return locale?.value ?? "fa";
};

export const GetUrlParams = cache((url: string) => {
    const urlInfo = new URL(url);
    return Object.fromEntries(urlInfo.searchParams);
});

export const GetRelatedContents = async () => {
    //sample url: /blogs/{uuid}
    const url = headers().get("x-url");
    const splitUrl = url?.split("/");
    const uuid = splitUrl?.pop();
    const type = splitUrl?.pop();
    if (uuid && type) {
        const apiInfo =
            type === "blogs"
                ? { ...BlogsAPIPath.getRelatedContents }
                : type === "events"
                  ? { ...EventsAPIPath.getRelatedContents }
                  : { ...ServicesAPIPath.getRelatedContents };
        apiInfo.params.uuid = uuid;
        const resp = await mainCall<IAPIResponse<RelatedContentDto[]>>(apiInfo);
        if (resp && resp.data) {
            return (
                resp.data.data
                    ?.filter((row) => row.documentId !== uuid)
                    .slice(0, 3) || ([] as RelatedContentDto[])
            );
        }
    }
    return [] as RelatedContentDto[];
};
