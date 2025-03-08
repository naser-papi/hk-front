import { IAPIInfo } from "@/types/base";
import { Top10EntityQuery } from "@/constants/base";

export const BannersAPIPath = {
    getHeroBanners: {
        method: "GET",
        url:
            "api/" +
            "banners?populate[blogs][populate][bannerMedia][fields][0]=url" +
            "&populate[blogs][fields][0]=title" +
            "&populate[blogs][fields][1]=subTitle" +
            "&populate[blogs][fields][2]=shortDesc" +
            "&populate[event][populate][bannerMedia][fields][0]=url" +
            "&populate[event][fields][0]=title" +
            "&populate[event][fields][1]=shortDesc" +
            "&populate[event][fields][2]=detailLink" +
            "&populate[link][populate][bannerMedia][fields][0]=url" +
            "&populate[link][fields][0]=title" +
            "&populate[link][fields][1]=shortDesc" +
            "&populate[link][fields][2]=detailLink" +
            "&populate[service][populate][bannerMedia][fields][0]=url" +
            "&populate[service][fields][0]=title" +
            "&populate[service][fields][1]=shortDesc&" +
            Top10EntityQuery,
        options: {
            cache: "no-cache",
        },
    },
} satisfies { [key: string]: IAPIInfo };
