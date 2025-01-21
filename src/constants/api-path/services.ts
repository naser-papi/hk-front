import { IAPIInfo } from "@/types/base";
import { TopEntityQuery } from "@/constants/base";

export const ServicesAPIPath = {
    getTopServices: {
        method: "GET",
        url: `api/services?populate=icon&${TopEntityQuery}`,
        options: {
            next: { revalidate: 3600 },
        },
    },
    getServiceList: {
        method: "GET",
        url: "api/services?populate[0]=icon&populate[1]=bannerMedia&populate[2]=category",
        options: {
            next: { revalidate: 3600 },
        },
    },
    getServiceDetail: {
        method: "GET",
        url: "api/services/{uuid}?populate[0]=icon&populate[1]=bannerMedia&populate[2]=category",
        params: {
            uuid: "",
        },
    },
} satisfies { [key: string]: IAPIInfo };
