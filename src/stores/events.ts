import { proxy } from "valtio/vanilla";
import { IEventsState } from "@/types/store/events";

const EventsState = proxy<IEventsState>({
    selectedView: "CardList",
    showDetailsModal: null,
});

export default EventsState;
