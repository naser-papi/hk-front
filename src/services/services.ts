import { cache } from "react";
import { ServicesAPIPath } from "@/constants/api-path";
import mainCall from "@/services/rest-api/main-call";
import { ICMSListApiResponse } from "@/types/base";
import { ServiceDto } from "@/types/dto";

export const GetTopServices = cache(async () => {
    const apiInfo = ServicesAPIPath.getTopServices;
    const resp = await mainCall<ICMSListApiResponse<ServiceDto>>(apiInfo);
    if (resp && resp.data) {
        return resp.data.data;
    } else {
        return [] as ServiceDto[];
    }
});
