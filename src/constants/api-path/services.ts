import { IAPIInfo } from "@/types/base";
import { TopEntityQuery } from "@/constants/base";

export const ServicesAPIPath = {
    getTopServices: {
        isCms: true,
        method: "GET",
        url: `api/services?populate=icon&${TopEntityQuery}`,
        options: {
            next: { revalidate: 3600 },
        },
    },
    getServiceList: {
        isCms: true,
        method: "GET",
        url: "api/services?populate[0]=icon&populate[1]=bannerMedia",
        options: {
            next: { revalidate: 3600 },
        },
    },
} satisfies { [key: string]: IAPIInfo };
