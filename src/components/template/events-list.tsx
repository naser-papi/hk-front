import { EventListCurrentView, EventListViewsToggle, EventsFilterList, } from "@/components/organism";
import EventMapviewContainer from "@/components/organism/event-mapview-container";
import EventCalendarViewContainer from "@/components/organism/event-calendar-view-container";
import EventDetailModal from "@/components/organism/event-detail-modal";

const EventsList = () => {
    return (
        <section id={"events-list"} className={"template bg-white"}>
            <EventListViewsToggle />
            <EventListCurrentView>
                <EventsFilterList />
                <EventMapviewContainer />
                <EventCalendarViewContainer />
            </EventListCurrentView>
            <EventDetailModal />
        </section>
    );
};

export default EventsList;
