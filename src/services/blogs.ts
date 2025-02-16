"use server";
import { cache } from "react";
import { BlogsAPIPath } from "@/constants/api-path";
import mainCall from "@/services/rest-api/main-call";
import { IAPIResponse, ICMSListApiResponse } from "@/types/base";
import { BlogDto } from "@/types/dto";
import { headers } from "next/headers";
import { GetUrlParams } from "@/services/common";
import { getStrapiPaginationQuery } from "@/helpers";

export const GetTopBlogs = cache(async () => {
    const apiInfo = BlogsAPIPath.getTopBlogs;
    const resp = await mainCall<ICMSListApiResponse<BlogDto>>(apiInfo);
    if (resp && resp.data) {
        return resp.data.data;
    } else {
        return [] as BlogDto[];
    }
});

export const GetRelatedBlogs = cache(async () => {
    const url = headers().get("x-url");
    const uuid = url?.split("/").pop();
    if (uuid) {
        const apiInfo = { ...BlogsAPIPath.getRelatedContents };
        apiInfo.params.uuid = uuid;
        const resp = await mainCall<IAPIResponse<BlogDto[]>>(apiInfo);
        console.log("====>", resp);
        if (resp && resp.data) {
            return resp.data.data?.slice(0, 3) || ([] as BlogDto[]);
        }
        return [] as BlogDto[];
    }
});
export const GetBlogList = cache(async () => {
    const url = headers().get("x-url")!;
    const { page, cat, filter } = GetUrlParams(url);
    const apiInfo = { ...BlogsAPIPath.getBlogList };
    if (cat && cat !== "0") {
        apiInfo.url += `&filters[category][id][$eq]=${cat}`;
    }
    if (filter) {
        apiInfo.url += `&filters[$or][0][title][$containsi]=${filter}&filters[$or][1][subTitle][$containsi]=${filter}&filters[$or][2][shortDesc][$containsi]=${filter}`;
    }
    apiInfo.url += getStrapiPaginationQuery(1, 10);
    const resp = await mainCall<ICMSListApiResponse<BlogDto>>(apiInfo);
    if (resp && resp.data) {
        return resp.data.data;
    } else {
        return [] as BlogDto[];
    }
});

export const GetBlogDetail = cache(async (): Promise<BlogDto | undefined> => {
    const url = headers().get("x-url");
    const uuid = url?.split("/").pop();
    if (uuid) {
        const apiInfo = { ...BlogsAPIPath.getBlogDetail };
        apiInfo.params.uuid = uuid;
        const resp = await mainCall<IAPIResponse<BlogDto>>(apiInfo);
        if (resp && resp.data) {
            return resp.data.data;
        }
    }
    return undefined;
});
