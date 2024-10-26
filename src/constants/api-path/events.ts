import { IAPIInfo } from "@/types/base";
import { TopEntityQuery } from "@/constants/base";

export const EventsAPIPath = {
    getTopEvents: {
        isCms: true,
        method: "GET",
        url: `api/events?populate=cardImage&${TopEntityQuery}`,
        options: {
            next: { revalidate: 3600 },
        },
    },
} satisfies { [key: string]: IAPIInfo };
