import { IAPIInfo } from "@/types/base";
import { TopEntityQuery } from "@/constants/base";

const EventsPopulateQuery =
    "populate[cardImage][fields][0]=url&populate[bannerMedia][fields][0]=url&populate[category][fields][0]=title";
const EventsFieldsQuery =
    "fields[0]=title&fields[1]=dateAndTime&fields[2]=shortDesc&fields[3]=detailLink&fields[4]=videoUrl";
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
        url: `api/events?${EventsFieldsQuery}&${EventsPopulateQuery}&${TopEntityQuery}`,
        options: {
            cache: "no-cache",
        },
    },
    getEventList: {
        method: "GET",
        url: `api/events?${EventsFieldsQuery}&${EventsPopulateQuery}`,
        options: {
            cache: "no-cache",
        },
    },
    getEventDetail: {
        method: "GET",
        url: `api/events/{uuid}?${EventsPopulateQuery}`,
        params: {
            uuid: "",
        },
    },
} satisfies { [key: string]: IAPIInfo };
