import { IAPIInfo } from "@/types/base";
import { TopEntityQuery } from "@/constants/base";

const ServicesPopulateQuery =
    "populate[cardImage][fields][0]=url&populate[bannerMedia][fields][0]=url&populate[icon][fields][0]=url&populate[voiceUrl][fields][0]=url&populate[category][fields][0]=title";
const ServicesFieldsQuery =
    "fields[0]=title&fields[1]=shortDesc&fields[2]=videoUrl";

export const ServicesAPIPath = {
    getRelatedContents: {
        method: "GET",
        url: "api/services/related-contents/{uuid}",
        params: {
            uuid: "",
        },
    },
    getTopServices: {
        method: "GET",
        url: `api/services?${ServicesFieldsQuery}&${ServicesPopulateQuery}&${TopEntityQuery}`,
        options: {
            cache: "force-cache",
        },
    },
    getServiceList: {
        method: "GET",
        url: `api/services?${ServicesFieldsQuery}&${ServicesPopulateQuery}`,
    },
    getServicesUnionCategories: {
        method: "GET",
        url: "api/services/union-categories",
    },
    getServiceDetail: {
        method: "GET",
        url: `api/services/{uuid}?${ServicesPopulateQuery}`,
        params: {
            uuid: "",
        },
    },
} satisfies { [key: string]: IAPIInfo };
