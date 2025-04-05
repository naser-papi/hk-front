import {
    EventListCurrentView,
    EventListViewsToggle,
    EventsFilterList,
} from "@/components/organism";
import EventMapviewContainer from "@/components/organism/event-mapview-container";
import EventCalendarViewContainer from "@/components/organism/event-calendar-view-container";

const EventsList = () => {
    return (
        <section id={"events-list"} className={"template"}>
            <EventListViewsToggle />
            <EventListCurrentView>
                <EventsFilterList />
                <EventMapviewContainer />
                <EventCalendarViewContainer />
            </EventListCurrentView>
        </section>
    );
};

export default EventsList;
