import { cache } from "react";
import { LinksAPIPath } from "@/constants/api-path";
import mainCall from "@/services/rest-api/main-call";
import { ICMSListApiResponse } from "@/types/base";
import { LinkDto } from "@/types/dto";

export const GetTopLinks = cache(async () => {
    const apiInfo = LinksAPIPath.getTopLinks;
    const resp = await mainCall<ICMSListApiResponse<LinkDto>>(apiInfo);
    if (resp && resp.data) {
        return resp.data.data;
    } else {
        return [] as LinkDto[];
    }
});
