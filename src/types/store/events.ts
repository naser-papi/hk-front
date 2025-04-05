import { ViewTypes } from "@/types/base";
import { EventDto } from "@/types/dto";

export interface IEventsState {
    selectedView: ViewTypes;
    selectedLocationKey?: string;
    list?: EventDto[];
}
