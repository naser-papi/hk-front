import { IAPIInfo } from "@/types/base";
import { TopEntityQuery } from "@/constants/base";

export const EventsAPIPath = {
    getRelatedContents: {
        method: "GET",
        url: "api/events/related-contents/{uuid}",
        params: {
            uuid: "",
        },
    },
    getTopEvents: {
        method: "GET",
        url: `api/events?populate[0]=cardImage&populate[1]=bannerMedia&${TopEntityQuery}`,
    },
    getEventList: {
        method: "GET",
        url: "api/events?populate[0]=cardImage&populate[1]=bannerMedia&populate[2]=category",
    },
    getEventDetail: {
        method: "GET",
        url: "api/events/{uuid}?populate[0]=cardImage&populate[1]=bannerMedia&populate[2]=category",
        params: {
            uuid: "",
        },
    },
} satisfies { [key: string]: IAPIInfo };
