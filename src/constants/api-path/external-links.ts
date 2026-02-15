import { IAPIInfo } from "@/types/base";
import { TopEntityQuery } from "@/constants/base";

const LinksFieldsQuery =
    "fields[0]=title&fields[1]=shortDesc&fields[2]=detailLink";
const LinksPopulateQuery =
    "populate[icon][fields][0]=url&populate[bannerMedia][fields][0]=url&populate[category][fields][0]=title";
export const LinksAPIPath = {
    getLinksList: {
        method: "GET",
        url: `api/links?${LinksFieldsQuery}&${LinksPopulateQuery}`,
        options: {
            cache: "no-cache",
        },
    },
    getLinksUnionCategories: {
        method: "GET",
        url: "api/links/union-categories",
    },
    getTopLinks: {
        method: "GET",
        url: `api/links?${LinksPopulateQuery}&${TopEntityQuery}`,
        options: {
            cache: "no-cache",
        },
    },
} satisfies { [key: string]: IAPIInfo };
