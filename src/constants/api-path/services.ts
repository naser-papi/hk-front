import { IAPIInfo } from "@/types/base";
import { TopEntityQuery } from "@/constants/base";

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
        url: `api/services?populate=icon&${TopEntityQuery}`,
    },
    getServiceList: {
        method: "GET",
        url: "api/services?populate[0]=icon&populate[1]=bannerMedia&populate[2]=category",
    },
    getServiceDetail: {
        method: "GET",
        url: "api/services/{uuid}?populate[0]=icon&populate[1]=bannerMedia&populate[2]=category",
        params: {
            uuid: "",
        },
    },
} satisfies { [key: string]: IAPIInfo };
