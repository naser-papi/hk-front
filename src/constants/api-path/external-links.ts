import { IAPIInfo } from "@/types/base";
import { TopEntityQuery } from "@/constants/base";

export const LinksAPIPath = {
    getLinksList: {
        method: "GET",
        url: "api/links?populate[0]=icon&populate[1]=bannerMedia&populate[2]=category",
    },
    getTopLinks: {
        method: "GET",
        url: `api/links?populate=icon&${TopEntityQuery}`,
    },
} satisfies { [key: string]: IAPIInfo };
