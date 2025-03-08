"use server";
import { LinksAPIPath } from "@/constants/api-path";
import mainCall from "@/services/rest-api/main-call";
import { ICMSListApiResponse } from "@/types/base";
import { LinkDto } from "@/types/dto";
import { headers } from "next/headers";
import { GetUrlParams } from "@/services/common";
import { getStrapiPaginationQuery } from "@/helpers";

export const GetLinksList = async () => {
    const url = headers().get("x-url")!;
    const { page, cat, filter } = GetUrlParams(url);
    const apiInfo = { ...LinksAPIPath.getLinksList };
    if (cat && cat !== "0") {
        apiInfo.url += `&filters[category][id][$eq]=${cat}`;
    }
    if (filter) {
        apiInfo.url += `&filters[$or][0][title][$containsi]=${filter}&filters[$or][1][shortDesc][$containsi]=${filter}`;
    }
    apiInfo.url += getStrapiPaginationQuery(1, 10);
    const resp = await mainCall<ICMSListApiResponse<LinkDto>>(apiInfo);
    if (resp && resp.data) {
        return resp.data.data;
    } else {
        return [] as LinkDto[];
    }
};

export const GetTopLinks = async () => {
    const apiInfo = LinksAPIPath.getTopLinks;
    const resp = await mainCall<ICMSListApiResponse<LinkDto>>(apiInfo);
    if (resp && resp.data) {
        return resp.data.data;
    } else {
        return [] as LinkDto[];
    }
};
