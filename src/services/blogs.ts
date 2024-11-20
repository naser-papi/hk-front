"use server";
import { cache } from "react";
import { BlogsAPIPath } from "@/constants/api-path";
import mainCall from "@/services/rest-api/main-call";
import { ICMSListApiResponse } from "@/types/base";
import { BlogDto } from "@/types/dto";
import { headers } from "next/headers";
import { GetUrlParams } from "@/services/common";

export const GetTopBlogs = cache(async () => {
    const apiInfo = BlogsAPIPath.getTopBlogs;
    const resp = await mainCall<ICMSListApiResponse<BlogDto>>(apiInfo);
    if (resp && resp.data) {
        return resp.data.data;
    } else {
        return [] as BlogDto[];
    }
});

export const GetBlogList = cache(async () => {
    const url = headers().get("x-url")!;
    const { page, catgoty, filter } = GetUrlParams(url);
    const apiInfo = BlogsAPIPath.getBlogList;
    const resp = await mainCall<ICMSListApiResponse<BlogDto>>(apiInfo);
    if (resp && resp.data) {
        return resp.data.data;
    } else {
        return [] as BlogDto[];
    }
});
