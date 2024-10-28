import { cache } from "react";
import { BannersAPIPath } from "@/constants/api-path";
import mainCall from "@/services/rest-api/main-call";
import { ICMSListApiResponse } from "@/types/base";
import { BannerDto } from "@/types/dto";

export const GetHeroBanners = cache(async () => {
    const apiInfo = BannersAPIPath.getHeroBanners;
    const resp = await mainCall<ICMSListApiResponse<BannerDto>>(apiInfo);
    if (resp && resp.data) {
        return resp.data.data;
    } else {
        return [] as BannerDto[];
    }
});
