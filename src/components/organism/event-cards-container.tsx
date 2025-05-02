import { EventCard, NoData } from "@/components/molecule";
import { EventDto } from "@/types/dto";
import { GetTopEvents } from "@/services/events";

const EventCardsContainer = async () => {
    const list = await GetTopEvents();
    if (!list || !list.length) return <NoData />;
    const cards = list.map((item: EventDto) => (
        <EventCard
            key={item.id}
            ikUrl={item.cardImage?.url}
            desc={item.shortDesc}
            date={item.dateAndTime}
            commentsCount={0}
            eventType={item.eventType}
            eventSubject={item.eventSubject}
            eventTimeInDay={item.eventTimeInDay}
            repeatType={item.repeatType}
            href={`/events/${item.documentId}`}
        />
    ));
    return (
        <article
            className={
                "event-cards-container grid w-full place-items-center gap-y-8 @container"
            }
        >
            {cards}
        </article>
    );
};

export default EventCardsContainer;
