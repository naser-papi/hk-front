import trans from "@/helpers/i18n/server";
import EventCardsContainer from "@/components/organism/event-cards-container";
import { ShowMoreLink } from "@/components/atom";
import face1 from "assets/show-more/face-1.svg";

const LandingEvents = () => {
    return (
        <section id={"events"} className={"template bg-white"}>
            <h2>{trans("common.whatHappening")}</h2>
            <EventCardsContainer />
            <ShowMoreLink
                label={trans("common.allEvents")}
                image={face1}
                href={"/events"}
            />
        </section>
    );
};

export default LandingEvents;
