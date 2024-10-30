import trans from "@/helpers/i18n/server";
import EventCardsContainer from "@/components/organism/event-cards-container";
import { ShowMoreLink } from "@/components";
import face1 from "assets/show-more/face-1.svg";
import "../template.css";

const Events = () => {
    return (
        <section id={"events"} className={"template events"}>
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

export default Events;
