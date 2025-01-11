import { IAPIInfo } from "@/types/base";
import { TopEntityQuery } from "@/constants/base";

export const EventsAPIPath = {
    getTopEvents: {
        method: "GET",
        url: `api/events?populate[0]=cardImage&populate[1]=bannerMedia&${TopEntityQuery}`,
        options: {
            next: { revalidate: 3600 },
        },
    },
    getEventList: {
        method: "GET",
        url: "api/events?populate[0]=cardImage&populate[1]=bannerMedia",
        options: {
            next: { revalidate: 3600 },
        },
    },
    getEventDetail: {
        method: "GET",
        url: "api/events/{uuid}?populate[0]=cardImage&populate[1]=bannerMedia&populate[2]=category",
        params: {
            uuid: "",
        },
    },
} satisfies { [key: string]: IAPIInfo };
