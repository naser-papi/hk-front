import { IAPIInfo } from "@/types/base";
import { TopEntityQuery } from "@/constants/base";

const EventsPopulateQuery =
    "populate[cardImage][fields][0]=url&populate[bannerMedia][fields][0]=url&populate[category][fields][0]=title";
const EventsFieldsQuery =
    "fields[0]=title&fields[1]=dateAndTime&fields[2]=shortDesc&fields[3]=detailLink" +
    "&fields[4]=videoUrl&fields[5]=eventType&fields[6]=eventSubject&fields[7]=finishDateAndTime" +
    "&fields[8]=eventTimeInDay&fields[9]=eventTimeInDay&fields[10]=location&fields[11]=repeatType";
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
    getEventsUnionCategories: {
        method: "GET",
        url: "api/events/union-categories",
    },
    getEventDetail: {
        method: "GET",
        url: `api/events/{uuid}?${EventsPopulateQuery}`,
        params: {
            uuid: "",
        },
    },
} satisfies { [key: string]: IAPIInfo };
