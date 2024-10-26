import { cache } from "react";
import { EventsAPIPath } from "@/constants/api-path";
import mainCall from "@/services/rest-api/main-call";
import { ICMSListApiResponse } from "@/types/base";
import { EventDto } from "@/types/dto";

export const GetTopEvents = cache(async () => {
    const apiInfo = EventsAPIPath.getTopEvents;
    const resp = await mainCall<ICMSListApiResponse<EventDto>>(apiInfo);
    if (resp && resp.data) {
        return resp.data.data;
    } else {
        return [] as EventDto[];
    }
});
