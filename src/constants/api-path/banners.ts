import { IAPIInfo } from "@/types/base";

export const BannersAPIPath = {
    getHeroBanners: {
        method: "GET",
        url: `api/banners?populate[blogs][populate][0]=bannerMedia&populate[event][populate][0]=bannerMedia&populate[link][populate][0]=bannerMedia&populate[service][populate][0]=bannerMedia&pagination[page]=1&pagination[pageSize]=10&sort[0]=id:desc`,
        options: {
            next: { revalidate: 360 },
        },
    },
} satisfies { [key: string]: IAPIInfo };
