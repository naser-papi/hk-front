import trans from "@/helpers/i18n/server";
import EventCardsContainer from "@/components/organism/event-cards-container";
import { SectionHeader } from "@/components/molecule";

const LandingEvents = () => {
    return (
        <section id={"events"} className={"template"}>
            <SectionHeader
                title={trans("common.upcomingEvents")}
                description={trans("common.upcomingEventsDesc")}
                buttonLabel={trans("common.allEvents")}
                buttonLink="/events"
            />
            <EventCardsContainer />
        </section>
    );
};

export default LandingEvents;
