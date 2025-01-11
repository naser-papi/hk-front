"use server";
import { cache } from "react";
import { EventsAPIPath } from "@/constants/api-path";
import mainCall from "@/services/rest-api/main-call";
import { IAPIResponse, ICMSListApiResponse } from "@/types/base";
import { EventDto } from "@/types/dto";
import { headers } from "next/headers";
import { GetUrlParams } from "@/services/common";
import { getStrapiPaginationQuery } from "@/helpers";

export const GetTopEvents = cache(async () => {
    const apiInfo = EventsAPIPath.getTopEvents;
    const resp = await mainCall<ICMSListApiResponse<EventDto>>(apiInfo);
    if (resp && resp.data) {
        return resp.data.data;
    } else {
        return [] as EventDto[];
    }
});

export const GetEventList = cache(async () => {
    const url = headers().get("x-url")!;
    const { page, cat, filter } = GetUrlParams(url);
    const apiInfo = { ...EventsAPIPath.getEventList };
    if (cat && cat !== "0") {
        apiInfo.url += `&filters[category][id][$eq]=${cat}`;
    }
    if (filter) {
        apiInfo.url += `&filters[$or][0][title][$containsi]=${filter}&filters[$or][1][shortDesc][$containsi]=${filter}`;
    }
    apiInfo.url += getStrapiPaginationQuery(1, 10);
    const resp = await mainCall<ICMSListApiResponse<EventDto>>(apiInfo);
    if (resp && resp.data) {
        return resp.data.data;
    } else {
        return [] as EventDto[];
    }
});

export const GetEventDetail = cache(async (): Promise<EventDto | undefined> => {
    const url = headers().get("x-url");
    const uuid = url?.split("/").pop();
    if (uuid) {
        const apiInfo = { ...EventsAPIPath.getEventDetail };
        apiInfo.params.uuid = uuid;
        const resp = await mainCall<IAPIResponse<EventDto>>(apiInfo);
        if (resp && resp.data) {
            return resp.data.data;
        }
    }
    return undefined;
});
