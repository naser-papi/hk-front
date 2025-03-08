import { EventCard, NoData } from "@/components/molecule";
import { EventDto } from "@/types/dto";
import { GetEventList } from "@/services/events";

const EventCardsContainer = async () => {
    const list = await GetEventList();
    if (!list || !list.length) return <NoData />;
    const cards = list.map((item: EventDto) => (
        <EventCard
            key={item.id}
            ikUrl={item.cardImage.url}
            desc={item.shortDesc}
            date={item.dateAndTime}
            commentsCount={0}
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
