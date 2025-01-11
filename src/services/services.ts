"use server";
import { cache } from "react";
import { ServicesAPIPath } from "@/constants/api-path";
import mainCall from "@/services/rest-api/main-call";
import { IAPIResponse, ICMSListApiResponse } from "@/types/base";
import { ServiceDto } from "@/types/dto";
import { headers } from "next/headers";
import { GetUrlParams } from "@/services/common";

export const GetTopServices = cache(async () => {
    const apiInfo = ServicesAPIPath.getTopServices;
    const resp = await mainCall<ICMSListApiResponse<ServiceDto>>(apiInfo);
    if (resp && resp.data) {
        return resp.data.data;
    } else {
        return [] as ServiceDto[];
    }
});

export const GetServiceList = cache(async () => {
    const url = headers().get("x-url")!;
    const { page, cat, filter } = GetUrlParams(url);
    const apiInfo = { ...ServicesAPIPath.getServiceList };
    const resp = await mainCall<ICMSListApiResponse<ServiceDto>>(apiInfo);
    if (resp && resp.data) {
        return resp.data.data;
    } else {
        return [] as ServiceDto[];
    }
});

export const GetServiceDetail = cache(
    async (): Promise<ServiceDto | undefined> => {
        const url = headers().get("x-url");
        const uuid = url?.split("/").pop();
        if (uuid) {
            const apiInfo = { ...ServicesAPIPath.getServiceDetail };
            apiInfo.params.uuid = uuid;
            const resp = await mainCall<IAPIResponse<ServiceDto>>(apiInfo);
            if (resp && resp.data) {
                return resp.data.data;
            }
        }
        return undefined;
    }
);
