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
} satisfies { [key: string]: IAPIInfo };
